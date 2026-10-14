---
layout: post
title: How to show a table in a tooltip in TypeScript Charts | Syncfusion
description: Learn here all about Tooltip table in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show a table in a tooltip in TypeScript Charts

Use the Chart tooltip `template` property to display point information in an HTML table. Define the template in the HTML document, enable the tooltip, and assign the template element selector to `tooltip.template`.

## Define the tooltip table template

Create a script template with a unique ID. Use `${x}` and `${y}` to display the current point's X and Y values.

Initialize the tooltip template div as shown in the following html page,

```
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
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/table-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/table-cs4" %}

## Template behavior and security

- `${x}` and `${y}` represent the current point's mapped X and Y values.
- The `template` value must be a selector that matches an existing template element.
- A template can include additional static labels, styles, and supported point values.
- Keep template IDs unique when a page contains multiple Charts.
- Do not insert unsanitized user-controlled HTML into the tooltip template.
- When the data requires custom conversion or conditional text, combine the template with preformatted data fields or use `tooltipRender` where appropriate.

## Troubleshooting

- If the tooltip does not appear, verify that `tooltip.enable` is `true`.
- If the default tooltip appears, verify that `tooltip.template` exactly matches the template element ID.
- If `${x}` or `${y}` appears as literal text, verify that the template is assigned through the Chart tooltip configuration and is not rendered directly as normal page content.
- If the tooltip is unstyled, verify that the template CSS is loaded and that its selectors match the template classes.
- If values are undefined, verify that `xName` and `yName` match fields in the series data source.

## See also

- [Tooltip](../tool-tip)
- [Tooltip settings API](https://ej2.syncfusion.com/documentation/api/chart/tooltipsettings)
- [Getting started](../getting-started)