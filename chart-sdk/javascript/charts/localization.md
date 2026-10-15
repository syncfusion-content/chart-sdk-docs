---
layout: post
title: Localization in JavaScript Charts | Syncfusion
description: Learn here all about Localization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Localization in JavaScript Charts

Localization translates the Chart's default text content (for example, zoom toolbar labels) into a target language. The translation is provided as a key/value object, loaded with `L10n.load()`, and then activated by setting the Chart's `locale` property to the matching culture code.

> This page covers translating static UI strings. For number, date, time, and currency formatting, see [Internationalization in JavaScript charts](./internationalization).

## Locale keys

The Chart uses the following keys when looking up translated strings. Each key is replaced by the value you supply in the translation object.

<table>
<tr>
<td><b>Locale key</b></td>
<td><b>Default text</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>ZoomIn</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>ZoomOut</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
<tr>
<td>ResetZoom</td>
<td>Reset Zoom</td>
</tr>
</table>

## Loading translations

Pass a translation object to `L10n.load()`. The object shape is `{ culture: { component: { key: 'translation' } } }`, where `component` must match the component name (`chart` for the Chart control) and `culture` is the culture code you will assign to the Chart's `locale` property.

The following example translates the zoom toolbar labels into Arabic:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/internationalization-cs2" %}

## Setting the chart locale

After loading translations, set the `locale` property on the Chart to the same culture code used in `L10n.load()`. This binds the translations to the chart instance. For right-to-left languages such as Arabic and Hebrew, also set `enableRtl: true` on the chart and add `dir="rtl"` to the page's `<html>` element.

For a complete list of `L10n` options, see the [`L10n` class API](https://ej2.syncfusion.com/javascript/documentation/api/base/l10n).

## Troubleshooting

- **Translations are not applied:** Confirm that the component key in the translation object matches the component name (`chart` for the Chart control) and that the `locale` property is set to the same culture code.
- **`L10n` is undefined in an ES5 (script-tag) setup:** Make sure the `ej2-base` script is loaded before the chart scripts and the page scripts, and use the `ej.base.L10n` namespace.
- **RTL text does not render right-to-left:** Set `enableRtl: true` on the Chart and add `dir="rtl"` to the page's `<html>` element.

## See also

* [Internationalization in JavaScript charts](./internationalization)
* [Common localization guide](https://ej2.syncfusion.com/javascript/documentation/common/localization)
* [`L10n` class API](https://ej2.syncfusion.com/javascript/documentation/api/base/l10n)
* [Chart `locale` property](./api-chart#locale-string)
* [Chart `enableRtl` property](./api-chart#enablertl-boolean)
