---
layout: post
title: WebMCP Tools for Blazor Chart | Syncfusion®
description: Learn about WebMCP (Model Context Protocol) and how to use it with the Syncfusion Blazor Chart component to expose chart operations to AI agents.
platform: chart-sdk
control: Charts
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# WebMCP Tools for Blazor Chart

**WebMCP** (Model Context Protocol) brings AI automation capabilities directly into the Syncfusion® Blazor Chart component. Instead of AI agents attempting to inspect the DOM or simulate user interactions, the chart explicitly exposes its capabilities through structured tool definitions, giving agents reliable and deterministic ways to inspect, modify, and interact with charts.

## What is WebMCP?

WebMCP is a proposed web standard that enables web applications to expose functionality as structured tools that AI agents can invoke directly. Each tool includes:

* **Natural Language Description** - Explains what the tool does in human-readable terms
* **Input Schema** - JSON Schema definitions describing the parameters the tool accepts
* **Execution Context** - Direct invocation through the chart APIs without DOM manipulation or UI simulation

### Key concepts

* **Tool**: A chart operation with schema definitions that agents can invoke
* **ModelContext**: The browser API (`document.modelContext`) that manages tool registration and invocation
* **Schema**: JSON Schema definitions describing tool inputs and constraints
* **Agent**: An autonomous LLM-powered assistant that can understand goals and invoke registered tools to accomplish tasks

### Browser support

WebMCP support depends on the browser exposing the `document.modelContext` API. When the API is unavailable, the chart skips tool registration and continues to render and behave normally.

N> **Note:** WebMCP is an experimental browser standard. The API and browser behavior may change as the standard evolves.

## Why use WebMCP for Chart?

The Syncfusion Blazor Chart integration with WebMCP provides significant benefits for building AI-powered data visualization applications.

### Key benefits

* **Universal Tool Access** - AI agents and compatible clients can discover and invoke chart operations
* **Zero Custom Integration** - Set `EnableWebMcp` to `true`, and the component manages tool registration and schema binding
* **Schema-Validated I/O** - Tool inputs use JSON Schema, helping clients validate requests before they are sent
* **Controlled Execution** - Applications can monitor, validate, restrict, or cancel tool operations before execution
* **Multi-Instance Friendly** - Unique tool prefixes prevent naming conflicts when multiple chart instances are present
* **Native Chart Integration** - Tools operate through the chart APIs instead of DOM inspection
* **Real-Time Feedback** - Structured responses allow agents to confirm results and continue multi-step workflows

## How WebMCP works in Chart

Understanding how WebMCP processes a request helps you write clearer prompts and obtain more reliable results.

### The execution pipeline

When an AI agent invokes a Chart WebMCP tool, the following process occurs:

* **Tool Discovery** - The agent retrieves the available chart tool schemas
* **Tool Registration** - The chart registers its tools on `document.modelContext` with an instance-specific prefix
* **Tool Invocation** - The agent invokes a registered tool with structured input
* **Adapter Routing** - The WebMCP adapter resolves the tool and validates the request
* **Host Review** - The `OnWebMcpExecute` event lets the host audit, restrict, or cancel the call before it runs
* **Confirmation** - Tools that require confirmation prompt the user, and the user's decision is honored
* **Execution** - The requested chart operation is performed
* **Response Formatting** - A structured success or error response is returned to the agent

## Integration

WebMCP integrates into Syncfusion Blazor Chart applications once the chart is configured and the Blazor service is registered. The steps below enable WebMCP support, register the chart tools, customize tool exposure, and monitor tool execution.

### Step 1: Enable WebMCP support

Set `EnableWebMcp` to `true` on the `SfChart` component to opt in. The chart creates its WebMCP adapter and registers the catalog with the browser on first render. WebMCP is disabled by default and must be opted into explicitly.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart ID="sales" Title="Monthly Sales" EnableWebMcp="true">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>
    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Month" YName="SalesValue" Type="ChartSeriesType.Column" Name="Sales">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    public class SalesInfo
    {
        public string Month { get; set; }
        public double SalesValue { get; set; }
    }

    public List<SalesInfo> Sales = new List<SalesInfo>
    {
        new SalesInfo { Month = "Jan", SalesValue = 35 },
        new SalesInfo { Month = "Feb", SalesValue = 28 },
        new SalesInfo { Month = "Mar", SalesValue = 34 }
    };
}

```

N> When WebMCP is enabled, read-only catalog tools (such as `inspectChart`, `getSeriesData`, and `getChartAxes`) return chart data to the calling agent. Enable WebMCP only when that data exposure is acceptable for your application.

### Step 2: Register chart tools

With `EnableWebMcp` set to `true`, the supported chart tools are registered with the WebMCP runtime and become discoverable by authorized clients. No additional component or module injection is required in Blazor.

The tools are registered under an instance-specific prefix so that multiple charts on the same page do not conflict. The prefix is derived from the `ChartWebMcpSettings.Name` value when it is set, then the chart `ID`, and finally `SfChart-{DataId}`.

### Step 3: Customize tool registration

Use the `ChartWebMcpSettings` child component to give the chart a logical tool-group name. The `Name` becomes the browser registration prefix (`{Name}_{toolName}`). When `Name` is empty, the parent chart's `ID` is used, then `SfChart-{DataId}`. Give each chart a unique `ID` or `Name` when more than one chart has WebMCP enabled.

```cshtml

<SfChart ID="sales" Title="Monthly Sales" EnableWebMcp="true">
    <ChartWebMcpSettings Name="SalesChart">
    </ChartWebMcpSettings>
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>
    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Month" YName="SalesValue" Type="ChartSeriesType.Column" Name="Sales">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

```

To select which tools the agent sees, nest one or more `ChartWebMcpTool` entries inside `ChartWebMcpSettings`. The `ChartWebMcpTools` component groups the tool entries, and each entry maps to a built-in operation through the `Command` parameter, which accepts a value from the `ChartWebMcpToolCommand` enumeration.

Each entry supports the following customizations:

* Set `Enabled` to `false` to remove a built-in tool from the registered set.
* Override `Name` and `Description` to give a built-in tool a different agent-facing identity.
* Set `Command` to `Custom` and supply `Name`, `Description`, and `InputSchema` to register a fully custom tool. `InputSchema` is a JSON-encoded string (for example `{"type":"object","properties":{}}`).

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart ID="sales" Title="Monthly Sales" EnableWebMcp="true">
    <ChartWebMcpSettings Name="SalesChart">
        <ChartWebMcpTools>
            <ChartWebMcpTool Command="@ChartWebMcpToolCommand.PrintChart" Enabled="false" />
            <ChartWebMcpTool Command="@ChartWebMcpToolCommand.InspectChart" Name="inspectSalesChart" Description="Return the current chart configuration." />
            <ChartWebMcpTool Command="@ChartWebMcpToolCommand.Custom" Name="getPeakMonth" Description="Returns the month with the highest sales value." InputSchema="@PeakMonthSchema" />
        </ChartWebMcpTools>
    </ChartWebMcpSettings>
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>
    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Month" YName="SalesValue" Type="ChartSeriesType.Column" Name="Sales">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private readonly string PeakMonthSchema = "{\"type\":\"object\",\"properties\":{\"seriesName\":{\"type\":\"string\"}}}";

    public class SalesInfo
    {
        public string Month { get; set; }
        public double SalesValue { get; set; }
    }

    public List<SalesInfo> Sales = new List<SalesInfo>
    {
        new SalesInfo { Month = "Jan", SalesValue = 35 },
        new SalesInfo { Month = "Feb", SalesValue = 28 },
        new SalesInfo { Month = "Mar", SalesValue = 34 }
    };
}

```

N> An invalid tool entry is skipped and logged instead of throwing, so a partially configured `ChartWebMcpTool` does not break the page. A custom tool requires `Name`, `Description`, and `InputSchema`, and `InputSchema` is ignored for built-in commands.

### Step 4: Monitor and control tool execution

Bind `ChartEvents.OnWebMcpExecute` to a host handler to audit, cancel, or reshape any WebMCP tool call before it runs. The dispatcher raises this event before the confirmation dialog, so the host can audit, veto, or customize the response before the user is prompted. The event fires for every write tool that reaches the dispatcher, including built-in tools that are not registered through `ChartWebMcpTool`, so a single binding defends against any built-in tool.

The event argument `ChartWebMcpExecuteEventArgs` exposes the following members:

* `Command` - The built-in operation this invocation maps to (or `Custom` for host-registered tools).
* `Name` - The bare catalog name the dispatcher is about to execute.
* `Arguments` - The agent's arguments as a read-only dictionary of CLR objects.
* `Cancel` - Set to `true` to veto the operation without showing the dialog.
* `ShowConfirmationDialog` - Override the catalog-driven dialog flag to force or suppress the prompt.
* `CancellationResponse` - Customize the message returned to the agent when the host vetoes the call or the user denies the dialog.
* `Result` - Supply a JSON string to short-circuit a custom tool with a host-produced result.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart ID="sales" Title="Monthly Sales" EnableWebMcp="true">
    <ChartEvents OnWebMcpExecute="OnWebMcpExecute" />
    <ChartWebMcpSettings Name="SalesChart">
    </ChartWebMcpSettings>
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>
    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Month" YName="SalesValue" Type="ChartSeriesType.Column" Name="Sales">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    public class SalesInfo
    {
        public string Month { get; set; }
        public double SalesValue { get; set; }
    }

    public List<SalesInfo> Sales = new List<SalesInfo>
    {
        new SalesInfo { Month = "Jan", SalesValue = 35 },
        new SalesInfo { Month = "Feb", SalesValue = 28 },
        new SalesInfo { Month = "Mar", SalesValue = 34 }
    };

    private void OnWebMcpExecute(ChartWebMcpExecuteEventArgs args)
    {
        // Veto a write tool by name without showing the user a prompt.
        if (args.Name == "updateChartTitle")
        {
            args.Cancel = true;
            args.CancellationResponse = "[USER_CANCELLED] title changes are disabled for this chart.";
            return;
        }

        // Force a confirmation dialog for any tool that reaches the event.
        args.ShowConfirmationDialog = true;
    }
}

```

### Step 5: Discover tools at runtime

Call `GetWebMcpToolsAsync` on the chart instance to read the current effective tool list, including any per-instance overrides applied through `ChartWebMcpSettings`. Pass an optional list of tool names to filter the result. Each entry exposes the `Name`, `Description`, and `InputSchema` of the tool.

```cshtml

@using Syncfusion.Blazor.Charts

<SfChart @ref="ChartRef" ID="sales" Title="Monthly Sales" EnableWebMcp="true">
    <ChartPrimaryXAxis ValueType="Syncfusion.Blazor.Charts.ValueType.Category"></ChartPrimaryXAxis>
    <ChartSeriesCollection>
        <ChartSeries DataSource="@Sales" XName="Month" YName="SalesValue" Type="ChartSeriesType.Column" Name="Sales">
        </ChartSeries>
    </ChartSeriesCollection>
</SfChart>

@code {
    private SfChart ChartRef;

    private async Task ListChartTools()
    {
        IReadOnlyList<IChartWebMcpTool> tools = await ChartRef.GetWebMcpToolsAsync();
        foreach (var tool in tools)
        {
            // Inspect tool.Name, tool.Description, and tool.InputSchema here.
        }
    }
}

```

## Common use cases

### AI-assisted chart inspection

Agents can inspect the current chart configuration, series, axes, annotations, legend, indicators, and selected data.

**Example:** "Show the current chart configuration, including the series names, series types, axis settings, and zoom state."

### Series and data management

Agents can add, update, remove, or hide series and can append, query, update, or remove data points.

**Example:** "Add a line series named 'Revenue' with the provided data, and update the chart title to 'Sales Trends 2024'."

### Axis and zoom configuration

Agents can add or update axes, set ranges and intervals, configure zoom behavior, and reset the zoom state.

**Example:** "Update the primary Y-axis range from 0 to 1000 with an interval of 100."

### Interactive data exploration

Agents can select data points, query selected data, display tooltips or crosshairs, and toggle series visibility.

**Example:** "Select the highest value in the Revenue series and show its tooltip."

### Annotation and reporting workflows

Agents can add or update annotations, export charts, and print visualizations.

**Example:** "Add an annotation labeled 'Peak Sales' to the highest point in the Revenue series and export the chart as a PNG."

## Supported features

The Syncfusion Blazor Chart component exposes 37 WebMCP tools for inspecting chart state, managing data and configuration, controlling interactions, and exporting visualizations.

| Category | Tools | Purpose |
| --- | --- | --- |
| **Chart Inspection** | `inspectChart`, `getChartAxes`, `getChartLegend`, `getChartIndicators`, `getChartStriplines`, `getChartAnnotations` | Inspect chart configuration and visual metadata |
| **Series and Data** | `addChartSeries`, `updateChartSeries`, `removeChartSeries`, `clearChartSeries`, `toggleChartSeriesVisibility`, `getSeriesData`, `appendChartData`, `updateChartDataSource`, `getChartPoint`, `updateChartPoint`, `removeChartPoints` | Manage series configuration and data points |
| **Axes and Zoom** | `addChartAxis`, `updateChartAxis`, `removeChartAxis`, `configureChartZoom`, `resetChartZoom` | Manage axes and zoom behavior |
| **Annotations** | `addChartAnnotation`, `updateChartAnnotation`, `removeChartAnnotation` | Create and maintain chart annotations |
| **Selection and Interaction** | `selectChartPoints`, `clearChartSelection`, `getSelectedChartData`, `showChartTooltip`, `hideChartTooltip`, `showChartCrosshair`, `hideChartCrosshair` | Control point selection and interactive elements |
| **Chart Configuration** | `updateChartProperties`, `updateChartTitle`, `animateChart` | Update chart-level properties and animation |
| **Export and Output** | `exportChart`, `printChart` | Export or print the chart |

### Complete tool reference

| Tool | Description |
| --- | --- |
| `addChartAnnotation` | Adds one or more annotations to the chart. |
| `addChartAxis` | Adds secondary axes to the chart. |
| `addChartSeries` | Adds one or more series to the chart. |
| `animateChart` | Starts chart animation with an optional duration in milliseconds. |
| `appendChartData` | Adds data records to a chart series and optionally limits retained records. |
| `clearChartSelection` | Clears all chart selections. |
| `clearChartSeries` | Removes all series from the chart. |
| `configureChartZoom` | Updates chart zoom settings. |
| `exportChart` | Exports the chart in PNG, JPEG, SVG, PDF, XLSX, or CSV format. |
| `getChartAnnotations` | Returns all chart annotations. |
| `getChartAxes` | Returns chart axis information. |
| `getChartIndicators` | Returns configured chart indicators. |
| `getChartLegend` | Returns chart legend information. |
| `getChartPoint` | Returns information about a specific chart point. |
| `getChartStriplines` | Returns chart stripline information. |
| `getSelectedChartData` | Returns the currently selected chart data points. |
| `getSeriesData` | Returns data points from a chart series. |
| `hideChartCrosshair` | Hides the chart crosshair. |
| `hideChartTooltip` | Hides the chart tooltip. |
| `inspectChart` | Returns the current chart configuration and series information. |
| `printChart` | Prints the chart. |
| `removeChartAnnotation` | Removes a chart annotation. |
| `removeChartAxis` | Removes a secondary chart axis. |
| `removeChartPoints` | Removes data points from a chart series. |
| `removeChartSeries` | Removes a series from the chart. |
| `resetChartZoom` | Resets chart zoom settings. |
| `selectChartPoints` | Selects chart data points. |
| `showChartCrosshair` | Displays the chart crosshair. |
| `showChartTooltip` | Displays the chart tooltip. |
| `toggleChartSeriesVisibility` | Shows or hides a chart series. |
| `updateChartAnnotation` | Updates an existing chart annotation. |
| `updateChartAxis` | Updates chart axis properties. |
| `updateChartDataSource` | Updates the chart data source or a series data source. |
| `updateChartPoint` | Updates a data point in a chart series. |
| `updateChartProperties` | Updates supported chart properties. |
| `updateChartSeries` | Updates properties of an existing chart series. |
| `updateChartTitle` | Updates the chart title and subtitle. |

## Writing effective prompts

AI responses are only as reliable as the prompt provided. Specific prompts help the agent choose the appropriate chart tools and supply valid parameters.

**Good prompt example:** "Update the primary Y-axis minimum to 0, maximum to 1000, and interval to 100, then export the chart as a PNG named sales-report-2024."

**Vague prompt example:** "Make the chart better."

### Tips for effective prompts

* **Identify the chart element** - Specify a series name or index, axis name, annotation ID, or point index
* **Provide exact values** - Include data, ranges, intervals, colors, dimensions, and export formats
* **State the intended action** - Clearly distinguish between adding, updating, removing, selecting, showing, or hiding
* **Use precise point references** - Provide an X value or point index when targeting a data point
* **Limit large results** - Specify a result count when requesting data from large series
* **Describe multi-step order** - State the required sequence when combining inspection, modification, and export operations

## Limitations

* **Experimental status** - WebMCP is a preview standard, so APIs and browser support may change
* **Browser dependency** - The browser must expose the `document.modelContext` API for the tools to be registered
* **Chart instance scope** - A tool operates on the chart instance with which it is registered
* **Data exposure through read tools** - Read-only tools return chart series, axis, and configuration data to the agent, so enable WebMCP only when that exposure is acceptable
* **Write tools require host review** - Write tools can be vetoed or gated by the `OnWebMcpExecute` handler, and tools flagged for confirmation prompt the user
* **Invalid tool entries are skipped** - A `ChartWebMcpTool` with an invalid configuration is logged and omitted from the registered set instead of throwing
* **Prompt clarity affects results** - Ambiguous series, axis, annotation, or point references can produce unintended results
* **Application authorization remains required** - Applications should validate AI-generated requests before allowing configuration changes, data mutations, exports, or printing

## See also

* [Getting Started with Blazor Charts](./getting-started-with-web-app)
* [Blazor Charts Overview](./overview)
* [Chart Events](./events)