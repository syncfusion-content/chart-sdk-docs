---
layout: post
title: WebMCP Tools for Angular Charts | Syncfusion®
description: Learn about WebMCP and how to expose all or selected Syncfusion Angular Charts operations to AI agents.
platform: chart-sdk
control: Charts-WebMCP
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# WebMCP Tools for Angular Charts
<br>
**WebMCP** (Model Context Protocol) brings AI automation directly into the Syncfusion Angular Charts. Instead of inspecting the DOM or simulating interactions, an AI agent invokes structured Chart tools with schema-defined inputs.
<br>
## What is WebMCP?
<br>
WebMCP is a proposed web standard that enables applications to expose functionality as structured tools. Each tool includes:
<br>
- **Natural language description** - Explains the operation to an AI agent.
- **Input schema** - Defines accepted parameters through JSON Schema.
- **Execution context** - Invokes Chart APIs without DOM manipulation.
<br>
### Key concepts
<br>
- **Tool**: A Chart operation an agent can invoke.
- **ModelContext**: The `document.modelContext` browser API used for registration and invocation.
- **Schema**: The JSON Schema definition for tool arguments.
- **Agent**: An LLM-powered assistant that discovers and invokes registered tools.
<br>
### Browser support
<br>
When `document.modelContext` is unavailable, the Chart skips tool registration and continues to render normally.
<br>
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
<br>
## Why use WebMCP for Chart?
<br>
- **Universal tool access** - Compatible agents can discover Chart operations.
- **Schema-validated input** - Clients can validate requests before invocation.
- **Controlled execution** - The host can review or control calls through [`beforeWebMcpToolExecute`](https://ej2.syncfusion.com/angular/documentation/api/chart#beforewebmcptoolexecute).
- **Multi-instance support** - A unique [`webMcpSettings.name`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartwebmcpsettings#name) avoids tool-name conflicts.
- **Native integration** - Tools operate through Chart APIs.
- **Structured responses** - Agents can continue multi-step workflows reliably.
<br>
## How WebMCP works in Chart
<br>
1. The application injects the WebMCP and Chart feature modules. For more details, refer to the [Chart Feature Modules](./feature-modules) page and the [Angular Charts API](https://ej2.syncfusion.com/angular/documentation/api/chart).
2. [`enableWebMcp`](https://ej2.syncfusion.com/angular/documentation/api/chart#enablewebmcp) activates tool registration.
3. [`webMcpSettings.name`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartwebmcpsettings#name) defines an instance-specific prefix.
4. The Chart registers tools with `document.modelContext`.
5. The agent discovers a tool and invokes it with structured arguments.
6. [`beforeWebMcpToolExecute`](https://ej2.syncfusion.com/angular/documentation/api/chart#beforewebmcptoolexecute) runs before the operation and can control confirmation behavior.
7. The Chart executes the operation and returns a structured result.
<br>
## Prerequisites
<br>
- Syncfusion® Angular Charts component and Angular CLI.
- A Chromium-based browser, such as Google Chrome, Microsoft Edge, or Brave.
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- The WebMCP browser extension.
- An AI API key configured in the extension.
<br>
## WebMCP setup
<br>
Before using WebMCP locally, enable the browser feature and configure the WebMCP extension:
<br>
1. Open `chrome://flags/`, enable the **WebMCP for testing** flag, and select **Relaunch** to restart Google Chrome.
2. Install [WebMCP - Model Context Tool Inspector](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd) from the Chrome Web Store.
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension and paste the API key.
<br>
The WebMCP extension is now configured and ready to interact with the WebMCP-enabled Syncfusion® Angular Charts component.
<br>
## Integrating WebMCP tools
<br>
Follow these steps to integrate WebMCP support into the Syncfusion® Angular Charts component and Angular CLI. The following example uses a revenue Chart and progressively introduces the WebMCP module, tool registration, tool configuration, and execution monitoring.
<br>
### Step 1: Create the Chart application
<br>
Create a basic revenue Chart. This step contains only the Chart modules and configuration required to render the component.
<br>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { ChartModule, CategoryService, LegendService, SplineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    providers: [CategoryService, SplineSeriesService, TooltipService, LegendService],
    template: `<ejs-chart title="Revenue Performance" [dataSource]="data" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip">
        <e-series-collection>
            <e-series type="Spline" name="Revenue" xName="month" yName="revenue"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: object[] = [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 47000 },
        { month: 'Mar', revenue: 53000 },
        { month: 'Apr', revenue: 58000 }
    ];
    public primaryXAxis: object = { valueType: 'Category' };
    public tooltip: object = { enable: true, shared: true };
}
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 2: Inject the WebMCP module
<br>
Register the Chart WebMCP module or service (`WebMcpChartService`). WebMCP remains disabled until [`enableWebMcp`](https://ej2.syncfusion.com/angular/documentation/api/chart#enablewebmcp) is set to `true`.
<br>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { ChartModule, CategoryService, LegendService, SplineSeriesService, TooltipService, WebMcpChartService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    providers: [CategoryService, SplineSeriesService, TooltipService, LegendService, WebMcpChartService],
    template: `<ejs-chart title="Revenue Performance" [dataSource]="data" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip">
        <e-series-collection>
            <e-series type="Spline" name="Revenue" xName="month" yName="revenue"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: object[] = [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 47000 },
        { month: 'Mar', revenue: 53000 },
        { month: 'Apr', revenue: 58000 }
    ];
    public primaryXAxis: object = { valueType: 'Category' };
    public tooltip: object = { enable: true, shared: true };
}
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 3: Enable WebMCP
<br>
Set [`enableWebMcp`](https://ej2.syncfusion.com/angular/documentation/api/chart#enablewebmcp) to `true` so the Chart registers its built-in tools with `document.modelContext`.
<br>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { ChartModule, CategoryService, LegendService, SplineSeriesService, TooltipService, WebMcpChartService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    providers: [CategoryService, SplineSeriesService, TooltipService, LegendService, WebMcpChartService],
    template: `<ejs-chart title="Revenue Performance" [dataSource]="data" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [enableWebMcp]="true">
        <e-series-collection>
            <e-series type="Spline" name="Revenue" xName="month" yName="revenue"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: object[] = [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 47000 },
        { month: 'Mar', revenue: 53000 },
        { month: 'Apr', revenue: 58000 }
    ];
    public primaryXAxis: object = { valueType: 'Category' };
    public tooltip: object = { enable: true, shared: true };
}
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 4: Configure tool registration
<br>
Add [`webMcpSettings`](https://ej2.syncfusion.com/angular/documentation/api/chart/index-default#webmcpsettings) to assign a unique [`name`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartwebmcpsettings#name) and expose only the required Chart [`tools`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartwebmcpsettings#tools).

In Angular Charts, features such as exporting, zooming, tooltips, legends, indicators, and annotations are provided by modular services (`ExportService`, `ZoomService`, `TooltipService`, `LegendService`, etc.). When a WebMCP tool executes an operation corresponding to a feature, the required service must be registered in the component's `providers` array. For example, exposing the `exportChart` tool requires `ExportService` to be injected; if the service is missing, the tool cannot perform the export operation.

The table below lists the available Chart tools and the corresponding feature modules or services required for each category:

<table>
<tr><th>Category</th><th>Available Chart Tools</th><th>Purpose</th><th>Required Feature Module / Service</th></tr>
<tr><td><strong>Chart inspection</strong></td><td><code>inspectChart</code>, <code>getChartAxes</code>, <code>getChartLegend</code>, <code>getChartIndicators</code>, <code>getChartStriplines</code>, <code>getChartAnnotations</code></td><td>Inspect chart configuration, axis ranges, indicator settings, and visual metadata</td><td>Core chart services, <code>LegendService</code> (for legend details)</td></tr>
<tr><td><strong>Series and data</strong></td><td><code>addChartSeries</code>, <code>updateChartSeries</code>, <code>removeChartSeries</code>, <code>clearChartSeries</code>, <code>toggleChartSeriesVisibility</code>, <code>getSeriesData</code>, <code>appendChartData</code>, <code>updateChartDataSource</code>, <code>getChartPoint</code>, <code>updateChartPoint</code>, <code>removeChartPoints</code></td><td>Manage series definitions, update data sources, and manipulate individual data points</td><td>Relevant series services (e.g. <code>LineSeriesService</code>, <code>SplineSeriesService</code>, <code>ColumnSeriesService</code>)</td></tr>
<tr><td><strong>Axes and zoom</strong></td><td><code>addChartAxis</code>, <code>updateChartAxis</code>, <code>removeChartAxis</code>, <code>configureChartZoom</code>, <code>resetChartZoom</code></td><td>Configure axis ranges, intervals, titles, and manage zooming and panning states</td><td><code>ZoomService</code> (for zoom operations), relevant axis services (e.g. <code>CategoryService</code>, <code>DateTimeService</code>)</td></tr>
<tr><td><strong>Annotations</strong></td><td><code>addChartAnnotation</code>, <code>updateChartAnnotation</code>, <code>removeChartAnnotation</code></td><td>Add, modify, or remove custom text and shape annotations</td><td><code>ChartAnnotationService</code></td></tr>
<tr><td><strong>Selection and interaction</strong></td><td><code>selectChartPoints</code>, <code>clearChartSelection</code>, <code>getSelectedChartData</code>, <code>showChartTooltip</code>, <code>hideChartTooltip</code>, <code>showChartCrosshair</code>, <code>hideChartCrosshair</code></td><td>Control point selection, trigger or dismiss tooltips, and display crosshair lines</td><td><code>SelectionService</code>, <code>TooltipService</code>, <code>CrosshairService</code></td></tr>
<tr><td><strong>Chart configuration</strong></td><td><code>updateChartProperties</code>, <code>updateChartTitle</code>, <code>animateChart</code></td><td>Update chart-level properties such as title, subtitle, themes, and re-trigger animation</td><td>Core chart services</td></tr>
<tr><td><strong>Export and output</strong></td><td><code>exportChart</code>, <code>printChart</code></td><td>Export the chart to PNG, JPEG, SVG, or PDF formats, or trigger browser printing</td><td><code>ExportService</code></td></tr>
</table>
<br>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { ChartModule, CategoryService, LegendService, SplineSeriesService, TooltipService, WebMcpChartService, ExportService } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    providers: [CategoryService, SplineSeriesService, TooltipService, LegendService, WebMcpChartService, ExportService],
    template: `<ejs-chart title="Revenue Performance" [dataSource]="data" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [enableWebMcp]="true" [webMcpSettings]="webMcpSettings">
        <e-series-collection>
            <e-series type="Spline" name="Revenue" xName="month" yName="revenue"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: object[] = [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 47000 },
        { month: 'Mar', revenue: 53000 },
        { month: 'Apr', revenue: 58000 }
    ];
    public primaryXAxis: object = { valueType: 'Category' };
    public tooltip: object = { enable: true, shared: true };
    public webMcpSettings: object = { name: 'revenueChart', tools: ['inspectChart', 'getSeriesData', 'getChartAxes', 'updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'] };
}
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 5: Monitor tool execution
<br>
Use the [`beforeWebMcpToolExecute`](https://ej2.syncfusion.com/angular/documentation/api/chart#beforewebmcptoolexecute) event to monitor and control tool execution before a WebMCP tool action is performed. This event is triggered whenever a tool request is about to be executed through the Chart component.

The [`beforeWebMcpToolExecute`](https://ej2.syncfusion.com/angular/documentation/api/chart#beforewebmcptoolexecute) event is especially useful when you want to:

* Request user confirmation before executing actions that modify chart data or settings.
* Prevent specific tools from running based on application requirements.
* Validate request parameters before tool execution.
* Log tool activity for auditing and debugging purposes.
* Restrict operations such as exporting, saving, or updating chart content.

Read-only operations can continue without interruption, while actions that modify the chart or generate files can be reviewed and approved before execution.

The event handler receives a [`WebMcpToolExecuteEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/webMcpToolExecuteEventArgs) object that provides information about the tool request. This object contains details such as:

* `toolName` - The name of the WebMCP tool being executed.
* `toolArgs` - The arguments passed to the tool during execution.
* `cancel` - A boolean property that can be set to `true` to prevent the tool from executing.
* `showConfirmationDialog` - A boolean property that requests user confirmation before the tool executes.
* `cancellationResponse` - A custom response returned when execution is cancelled.

The following example requests confirmation before allowing export-related operations:
<br>
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component } from '@angular/core';
import { ChartModule, CategoryService, LegendService, SplineSeriesService, TooltipService, WebMcpChartService, ExportService, WebMcpToolExecuteEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    providers: [CategoryService, SplineSeriesService, TooltipService, LegendService, WebMcpChartService, ExportService],
    template: `<ejs-chart title="Revenue Performance" [dataSource]="data" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [enableWebMcp]="true" [webMcpSettings]="webMcpSettings" (beforeWebMcpToolExecute)="beforeWebMcpToolExecute($event)">
        <e-series-collection>
            <e-series type="Spline" name="Revenue" xName="month" yName="revenue"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: object[] = [
        { month: 'Jan', revenue: 42000 },
        { month: 'Feb', revenue: 47000 },
        { month: 'Mar', revenue: 53000 },
        { month: 'Apr', revenue: 58000 }
    ];
    public primaryXAxis: object = { valueType: 'Category' };
    public tooltip: object = { enable: true, shared: true };
    public webMcpSettings: object = { name: 'revenueChart', tools: ['inspectChart', 'getSeriesData', 'getChartAxes', 'updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'] };

    public beforeWebMcpToolExecute(args: WebMcpToolExecuteEventArgs): void {
        if (args.toolName === 'exportChart') {
            args.cancel = !window.confirm(
                'Do you want to export the chart?'
            );
        }
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
## Common use cases
<br>
### AI-assisted Chart inspection

**Example:** "Show the Chart title, series names, series types, axes, and zoom state."

### Series and data management

**Example:** "Add a Revenue line series and update the Chart title to Sales Trends 2026."

### Axis and zoom configuration

**Example:** "Set the primary Y-axis range from 0 to 150000 with an interval of 25000, enable zooming on the X axis, and zoom into the first quarter."

### Interactive data exploration

**Example:** "Select the highest Revenue point and display its tooltip."

### Annotation and reporting workflows

**Example:** "Add a Peak Revenue annotation to December and export the Chart as PNG."

## Supported features
<br>
The Chart exposes WebMCP tools for inspection, data management, configuration, interaction, and output. A tool can use a Chart feature only when the corresponding module or service is injected. For example, `exportChart` requires `ExportService` in Angular Charts and `Export` in JavaScript, TypeScript, React, and Vue.

## Writing effective prompts
<br>
**Good prompt:** "Set the primary Y-axis minimum to 0, maximum to 160000, and interval to 20000, then export the Chart as annual-revenue.png."

**Vague prompt:** "Make the Chart better."

### Tips for effective prompts

- Identify the series, axis, annotation, or point.
- Provide exact values and output formats.
- Distinguish between add, update, remove, select, show, and hide operations.
- Use an X value or point index to target a point.
- State the required order for multi-step requests.

## Limitations
<br>
- WebMCP is experimental and requires `document.modelContext`.
- A tool operates only on its registered Chart instance.
- Required Chart feature modules or services must be injected.
- Ambiguous prompts can target the wrong Chart element.
- Application authentication, authorization, validation, and auditing remain required.
<br>
## Best practices
<br>
- Expose only the tools required by the application. Register the corresponding Chart feature module or service for tools such as `exportChart`.
- Assign a unique [`webMcpSettings.name`](https://ej2.syncfusion.com/angular/documentation/api/chart/chartwebmcpsettings#name) when multiple Chart instances are present.
- Require confirmation for mutating and output operations such as `updateChartTitle`, `toggleChartSeriesVisibility`, and `exportChart`.
- Allow read-only operations such as `inspectChart`, `getSeriesData`, and `getChartAxes` to run without unnecessary confirmation.
- Keep application authentication, authorization, validation, and auditing in place.
<br>
<br>
## Explore the demo
<br>
Explore the Syncfusion® Angular Charts component with WebMCP integration through this [demo](https://demos.syncfusion.com/chart-sdk/webmcp/index.html).
