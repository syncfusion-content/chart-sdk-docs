---
layout: post
title: WebMCP Tools for TypeScript Chart | Syncfusion®
description: Learn about WebMCP and how to expose all or selected Syncfusion TypeScript Chart operations to AI agents.
platform: chart-sdk
control: Charts-WebMCP
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# WebMCP Tools for TypeScript Chart
<br>
**WebMCP** (Model Context Protocol) brings AI automation directly into the Syncfusion TypeScript Chart. Instead of inspecting the DOM or simulating interactions, an AI agent invokes structured Chart tools with schema-defined inputs.
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
- **Controlled execution** - The host can review or control calls through `beforeWebMcp`.
- **Multi-instance support** - A unique `webMcpSettings.name` avoids tool-name conflicts.
- **Native integration** - Tools operate through Chart APIs.
- **Structured responses** - Agents can continue multi-step workflows reliably.
<br>
## How WebMCP works in Chart
<br>
1. The application injects the WebMCP and Chart feature modules.
2. `enableWebMcp` activates tool registration.
3. `webMcpSettings.name` defines an instance-specific prefix.
4. The Chart registers tools with `document.modelContext`.
5. The agent discovers a tool and invokes it with structured arguments.
6. `beforeWebMcp` runs before the operation and can control confirmation behavior.
7. The Chart executes the operation and returns a structured result.
<br>
## Prerequisites
<br>
- Syncfusion® TypeScript Chart control.
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
The WebMCP extension is now configured and ready to interact with the WebMCP-enabled Syncfusion® TypeScript Chart component.
<br>
## Integrating WebMCP tools
<br>
Follow these steps to integrate WebMCP support into the Syncfusion® TypeScript Chart control. The following example uses a revenue Chart and progressively introduces the WebMCP module, tool registration, tool configuration, and execution monitoring.
<br>
### Step 1: Create the Chart application
<br>
Create a basic revenue Chart. This step contains only the Chart modules and configuration required to render the component.
<br>
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Chart, Category, Legend, SplineSeries, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(Category, SplineSeries, Tooltip, Legend);

const data = [
    { month: 'Jan', revenue: 42000, target: 40000 },
    { month: 'Feb', revenue: 47000, target: 43000 },
    { month: 'Mar', revenue: 53000, target: 47000 },
    { month: 'Apr', revenue: 58000, target: 52000 }
];

const chart = new Chart({
    title: 'Revenue Performance',
    dataSource: data,

    primaryXAxis: { valueType: 'Category' },
    tooltip: { enable: true, shared: true },
    series: [{ type: 'Spline', name: 'Revenue', xName: 'month', yName: 'revenue' }]
});
chart.appendTo('#container');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Chart WebMCP</title></head>
<body><div id="container"></div><script type="module" src="./index.ts"></script></body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 2: Inject the WebMCP module
<br>
Register the Chart WebMCP module or service. WebMCP remains disabled until `enableWebMcp` is set to `true`.
<br>
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Chart, Category, Legend, SplineSeries, Tooltip, WebMcpChart } from '@syncfusion/ej2-charts';
Chart.Inject(Category, SplineSeries, Tooltip, Legend, WebMcpChart);

const data = [
    { month: 'Jan', revenue: 42000, target: 40000 },
    { month: 'Feb', revenue: 47000, target: 43000 },
    { month: 'Mar', revenue: 53000, target: 47000 },
    { month: 'Apr', revenue: 58000, target: 52000 }
];

const chart = new Chart({
    title: 'Revenue Performance',
    dataSource: data,

    primaryXAxis: { valueType: 'Category' },
    tooltip: { enable: true, shared: true },
    series: [{ type: 'Spline', name: 'Revenue', xName: 'month', yName: 'revenue' }]
});
chart.appendTo('#container');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Chart WebMCP</title></head>
<body><div id="container"></div><script type="module" src="./index.ts"></script></body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 3: Enable WebMCP
<br>
Set `enableWebMcp` to `true` so the Chart registers its built-in tools with `document.modelContext`.
<br>
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Chart, Category, Legend, SplineSeries, Tooltip, WebMcpChart } from '@syncfusion/ej2-charts';
Chart.Inject(Category, SplineSeries, Tooltip, Legend, WebMcpChart);

const data = [
    { month: 'Jan', revenue: 42000, target: 40000 },
    { month: 'Feb', revenue: 47000, target: 43000 },
    { month: 'Mar', revenue: 53000, target: 47000 },
    { month: 'Apr', revenue: 58000, target: 52000 }
];

const chart = new Chart({
    title: 'Revenue Performance',
    dataSource: data,
    enableWebMcp: true,
    primaryXAxis: { valueType: 'Category' },
    tooltip: { enable: true, shared: true },
    series: [{ type: 'Spline', name: 'Revenue', xName: 'month', yName: 'revenue' }]
});
chart.appendTo('#container');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Chart WebMCP</title></head>
<body><div id="container"></div><script type="module" src="./index.ts"></script></body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 4: Configure tool registration
<br>
Add `webMcpSettings` to assign a unique name and expose only the required Chart tools. Because this example exposes `exportChart`, it also registers the Chart export module or service.
<br>
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Chart, Category, Legend, SplineSeries, Tooltip, WebMcpChart, Export } from '@syncfusion/ej2-charts';
Chart.Inject(Category, SplineSeries, Tooltip, Legend, WebMcpChart, Export);

const data = [
    { month: 'Jan', revenue: 42000, target: 40000 },
    { month: 'Feb', revenue: 47000, target: 43000 },
    { month: 'Mar', revenue: 53000, target: 47000 },
    { month: 'Apr', revenue: 58000, target: 52000 }
];

const chart = new Chart({
    title: 'Revenue Performance',
    dataSource: data,
    enableWebMcp: true,
    webMcpSettings: { name: 'revenueChart', tools: ['inspectChart', 'getSeriesData', 'getChartAxes', 'updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'] },
    primaryXAxis: { valueType: 'Category' },
    tooltip: { enable: true, shared: true },
    series: [{ type: 'Spline', name: 'Revenue', xName: 'month', yName: 'revenue' }]
});
chart.appendTo('#container');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Chart WebMCP</title></head>
<body><div id="container"></div><script type="module" src="./index.ts"></script></body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}
<br>
### Step 5: Monitor tool execution
<br>
Use `beforeWebMcp` to request confirmation only for operations that modify the Chart or export a file. Read-only tools continue without confirmation.
<br>
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% raw %}
import { Chart, Category, Legend, SplineSeries, Tooltip, WebMcpChart, Export } from '@syncfusion/ej2-charts';
Chart.Inject(Category, SplineSeries, Tooltip, Legend, WebMcpChart, Export);

const data = [
    { month: 'Jan', revenue: 42000, target: 40000 },
    { month: 'Feb', revenue: 47000, target: 43000 },
    { month: 'Mar', revenue: 53000, target: 47000 },
    { month: 'Apr', revenue: 58000, target: 52000 }
];

const chart = new Chart({
    title: 'Revenue Performance',
    dataSource: data,
    enableWebMcp: true,
    webMcpSettings: { name: 'revenueChart', tools: ['inspectChart', 'getSeriesData', 'getChartAxes', 'updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'] },
    beforeWebMcp: (args) => {
        const toolsRequiringConfirmation = ['updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'];
        args.showConfirmationDialog = toolsRequiringConfirmation.indexOf(args.toolName) !== -1;
    },
    primaryXAxis: { valueType: 'Category' },
    tooltip: { enable: true, shared: true },
    series: [{ type: 'Spline', name: 'Revenue', xName: 'month', yName: 'revenue' }]
});
chart.appendTo('#container');
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Chart WebMCP</title></head>
<body><div id="container"></div><script type="module" src="./index.ts"></script></body>
</html>
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

**Example:** "Set the primary Y-axis range from 0 to 150000 with an interval of 25000."

### Interactive data exploration

**Example:** "Select the highest Revenue point and display its tooltip."

### Annotation and reporting workflows

**Example:** "Add a Peak Revenue annotation to December and export the Chart as PNG."

## Supported features
<br>
The Chart exposes WebMCP tools for inspection, data management, configuration, interaction, and output. A tool can use a Chart feature only when the corresponding module or service is injected. For example, `exportChart` requires `ExportService` in Angular and `Export` in JavaScript, TypeScript, React, and Vue.

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
- Assign a unique `webMcpSettings.name` when multiple Chart instances are present.
- Require confirmation for mutating and output operations such as `updateChartTitle`, `toggleChartSeriesVisibility`, and `exportChart`.
- Allow read-only operations such as `inspectChart`, `getSeriesData`, and `getChartAxes` to run without unnecessary confirmation.
- Keep application authentication, authorization, validation, and auditing in place.
<br>
<br>
## Explore the demo
<br>
Explore the Syncfusion® TypeScript Chart component with WebMCP integration through this [demo](https://demos.syncfusion.com/chart-sdk/webmcp/index.html).
