---
layout: post
title: WebMCP Tools for Vue Chart | Syncfusion®
description: Learn about WebMCP and how to expose all or selected Syncfusion Vue Chart operations to AI agents.
platform: chart-sdk
control: Charts-WebMCP
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

## WebMCP Tools for Vue Chart

**WebMCP** (Model Context Protocol) brings AI automation directly into the Syncfusion Vue Chart. Instead of inspecting the DOM or simulating interactions, an AI agent invokes structured Chart tools with schema-defined inputs.

### What is WebMCP?

WebMCP is a proposed web standard that enables applications to expose functionality as structured tools. Each tool includes:

- **Natural language description** - Explains the operation to an AI agent.
- **Input schema** - Defines accepted parameters through JSON Schema.
- **Execution context** - Invokes Chart APIs without DOM manipulation.

#### Key concepts

- **Tool**: A Chart operation an agent can invoke.
- **ModelContext**: The `document.modelContext` browser API used for registration and invocation.
- **Schema**: The JSON Schema definition for tool arguments.
- **Agent**: An LLM-powered assistant that discovers and invokes registered tools.

#### Browser support

When `document.modelContext` is unavailable, the Chart skips tool registration and continues to render normally.

N> **Note:** WebMCP is experimental. Browser APIs and behavior may change.

### Why use WebMCP for Chart?

- **Universal tool access** - Compatible agents can discover Chart operations.
- **Schema-validated input** - Clients can validate requests before invocation.
- **Controlled execution** - The host can review or control calls through `beforeWebMcp`.
- **Multi-instance support** - A unique `webMcpSettings.name` avoids tool-name conflicts.
- **Native integration** - Tools operate through Chart APIs.
- **Structured responses** - Agents can continue multi-step workflows reliably.

### How WebMCP works in Chart

1. The application injects the WebMCP and Chart feature modules.
2. `enableWebMcp` activates tool registration.
3. `webMcpSettings.name` defines an instance-specific prefix.
4. The Chart registers tools with `document.modelContext`.
5. The agent discovers a tool and invokes it with structured arguments.
6. `beforeWebMcp` runs before the operation and can control confirmation behavior.
7. The Chart executes the operation and returns a structured result.

### Integration

#### Step 1: Install the Chart package

```bash
npm install @syncfusion/ej2-vue-charts
```

#### Step 2: Inject Chart and WebMCP modules

Import all required modules and add them to the `provide.chart` array.

The samples include WebMCP, axes, series, tooltip, legend, crosshair, selection, zoom, data labels, annotations, export, striplines, trendlines, and all supported technical-indicator modules so AI-generated configurations can use those features.

#### Step 3: Enable WebMCP

Set `enableWebMcp` to `true`. WebMCP remains disabled unless it is explicitly enabled.

#### Step 4: Configure tool registration

Use `webMcpSettings.name` to create a stable prefix. When several Charts exist on one page, assign a unique name to each instance.

To expose the complete built-in catalog, omit `webMcpSettings.tools`. To expose particular operations, provide their exact names in `webMcpSettings.tools`.

#### Step 5: Monitor tool execution

Use `beforeWebMcp` to inspect the request and control confirmation. The samples suppress confirmation only for demonstration. Production applications should preserve confirmation or apply equivalent authorization for mutations, exports, and printing.

### Sample 1: Enable all Chart tools

This sample enables WebMCP, assigns the `allToolsChart` prefix, and omits the `tools` filter. The complete built-in catalog is registered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/chart-webmcp-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/chart-webmcp-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/charts/chart-webmcp-cs1" %}

### Sample 2: Enable particular Chart tools

This sample registers only `inspectChart`, `getSeriesData`, `getChartAxes`, `updateChartTitle`, `toggleChartSeriesVisibility`, and `exportChart`. Operations not listed in `webMcpSettings.tools` are not exposed by this Chart instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/chart-webmcp-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/chart-webmcp-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/charts/chart-webmcp-cs2" %}

### Common use cases

#### AI-assisted Chart inspection

**Example:** "Show the Chart title, series names, series types, axes, and zoom state."

#### Series and data management

**Example:** "Add a Revenue line series and update the Chart title to Sales Trends 2026."

#### Axis and zoom configuration

**Example:** "Set the primary Y-axis range from 0 to 150000 with an interval of 25000."

#### Interactive data exploration

**Example:** "Select the highest Revenue point and display its tooltip."

#### Annotation and reporting workflows

**Example:** "Add a Peak Revenue annotation to December and export the Chart as PNG."

### Supported features

The Chart exposes 37 WebMCP tools for inspection, data management, configuration, interaction, and output.

<table>
<tr><th>Category</th><th>Tools</th><th>Purpose</th></tr>
<tr><td><strong>Chart inspection</strong></td><td>inspectChart, getChartAxes, getChartLegend, getChartIndicators, getChartStriplines, getChartAnnotations</td><td>Inspect configuration and visual metadata</td></tr>
<tr><td><strong>Series and data</strong></td><td>addChartSeries, updateChartSeries, removeChartSeries, clearChartSeries, toggleChartSeriesVisibility, getSeriesData, appendChartData, updateChartDataSource, getChartPoint, updateChartPoint, removeChartPoints</td><td>Manage series and points</td></tr>
<tr><td><strong>Axes and zoom</strong></td><td>addChartAxis, updateChartAxis, removeChartAxis, configureChartZoom, resetChartZoom</td><td>Manage axes and zoom</td></tr>
<tr><td><strong>Annotations</strong></td><td>addChartAnnotation, updateChartAnnotation, removeChartAnnotation</td><td>Manage annotations</td></tr>
<tr><td><strong>Selection and interaction</strong></td><td>selectChartPoints, clearChartSelection, getSelectedChartData, showChartTooltip, hideChartTooltip, showChartCrosshair, hideChartCrosshair</td><td>Control selection and interactive elements</td></tr>
<tr><td><strong>Chart configuration</strong></td><td>updateChartProperties, updateChartTitle, animateChart</td><td>Update chart-level properties</td></tr>
<tr><td><strong>Export and output</strong></td><td>exportChart, printChart</td><td>Export or print the chart</td></tr>
</table>

### Writing effective prompts

**Good prompt:** "Set the primary Y-axis minimum to 0, maximum to 160000, and interval to 20000, then export the Chart as annual-revenue.png."

**Vague prompt:** "Make the Chart better."

#### Tips for effective prompts

- Identify the series, axis, annotation, or point.
- Provide exact values and output formats.
- Distinguish between add, update, remove, select, show, and hide operations.
- Use an X value or point index to target a point.
- State the required order for multi-step requests.

### Limitations

- WebMCP is experimental and requires `document.modelContext`.
- A tool operates only on its registered Chart instance.
- Read tools can return Chart configuration and series data.
- Required feature modules must be injected or provided.
- Ambiguous prompts can target the wrong Chart element.
- Application authentication, authorization, validation, and auditing remain required.
