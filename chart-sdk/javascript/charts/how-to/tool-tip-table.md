---
layout: post
title: How to show a table in a tooltip in JavaScript Charts | Syncfusion
description: Learn how to display Chart point values in an HTML table by using a tooltip template in Syncfusion JavaScript Charts.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show a table in a tooltip in JavaScript Charts

Use the Chart tooltip `template` property to display point information in an HTML table. Define the template in the HTML document, enable the tooltip, and assign the template element selector to `tooltip.template`.

## Define the tooltip table template

Create a script template with a unique ID. Use `${x}` and `${y}` to display the current point's X and Y values.

```html
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>
```

The template must exist in the document before the Chart is initialized.

## Enable and assign the template

Set `tooltip.enable` to `true` and assign the template selector to `tooltip.template`.

```javascript
tooltip: {
    enable: true,
    template:'#Female-Material'
}
```

Use tooltip inline `format` when plain text with supported placeholders is sufficient. Use `template` when the tooltip requires a table, custom HTML, or richer styling.

## Complete example

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/table-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/table-cs4" %}

## Template behavior and security

- `${x}` and `${y}` represent the current point's mapped X and Y values.
- The `template` value must be a selector that matches an existing template element.
- A template can include additional static labels, styles, and supported point values.
- Keep template IDs unique when a page contains multiple Charts.
- When the data requires custom conversion or conditional text, combine the template with preformatted data fields or use `tooltipRender` where appropriate.

## Troubleshooting

- If the tooltip does not appear, verify that `tooltip.enable` is `true` and Tooltip support is available in the EJ2 ES5 bundle.
- If the default tooltip appears, verify that `tooltip.template` exactly matches the template element ID.
- If `${x}` or `${y}` appears as literal text, verify that the template is assigned through the Chart tooltip configuration and is not rendered directly as normal page content.
- If the tooltip is incorrectly styled, verify that the template CSS is loaded and that its selectors match the template classes.
- If values are undefined, verify that `xName` and `yName` match fields in the series data source.

## See also

- [Tooltip](../tool-tip)
- [Tooltip templates](https://ej2.syncfusion.com/javascript/demos/chart/tooltip-template/)
- [Tooltip settings API](https://ej2.syncfusion.com/javascript/documentation/api/chart/tooltipsettings)
- [Getting started](../es5-getting-started)