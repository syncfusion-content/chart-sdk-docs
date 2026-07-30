---
layout: post
title: Data labels in JavaScript Chart control | Syncfusion
description: Learn here all about Data labels in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data labels 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data labels in JavaScript Chart control

Data labels display the values of data points directly on the chart, reducing the need to reference axes for exact values. Enable data labels by setting the [`visible`](../api/chart/dataLabelSettingsModel#visible-boolean) option to `true` in the `dataLabel` configuration. Labels automatically adjust to avoid overlapping and maintain readability.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs1" %}

> Note: To use the data label feature, inject `DataLabel` using `Chart.Inject(DataLabel)` method.

## Position

Use the [`position`](../api/chart/dataLabelSettingsModel#position-string) property to place data labels at `Top`, `Middle`, `Bottom`, or `Outer` (applicable to column and bar series). Appropriate label positioning enhances clarity and preserves chart readability.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs2" %}

> Note: The `Outer` position applies only to column and bar series types.

## Data Label Template

Customize label content using templates. Use placeholders such as `${point.x}` and `${point.y}` to display data point values. The [`template`](../api/chart/dataLabelSettingsModel#template-string) property enables fully customizable and visually rich labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs3" %}

## Text Mapping

Display custom text using the `name` property, which maps label text from a specific field in the data source. This feature is useful for descriptive or category‑based labels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs4" %}

## Format

Apply number or date formatting using the [`format`](../api/chart/dataLabelSettings#format) property. Global formatting symbols include:

- `n` – number format  
- `p` – percentage format  
- `c` – currency format 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs5" %}

<table>
  <tr>
    <th>Value</th>
    <th>Format</th>
    <th>Resultant Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>n1</td>
    <td>1000.0</td>
    <td>Rounded to 1 decimal place.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>n2</td>
    <td>1000.00</td>
    <td>Rounded to 2 decimal places.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>n3</td>
    <td>1000.000</td>
    <td>Rounded to 3 decimal places.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p1</td>
    <td>1.0%</td>
    <td>Converted to percentage with 1 decimal place.</td>
  </tr>
  <tr>
    <td>0.01</td>
    <td>p2</td>
    <td>1.00%</td>
    <td>Converted to percentage with 2 decimal places.</td>
  </tr>
   <tr>
    <td>0.01</td>
    <td>p3</td>
    <td>1.000%</td>
    <td>Converted to percentage with 3 decimal places.</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>c1</td>
    <td>$1000.0</td>
    <td>Currency with 1 decimal place.</td>
  </tr>
   <tr>
    <td>1000</td>
    <td>c2</td>
    <td>$1000.00</td>
    <td>Currency with 2 decimal places.</td>
  </tr>
</table>

## Margin

Adjust spacing around labels using the `margin` property, which includes `left`, `right`, `bottom`, and `top` values. Margins help prevent labels from overlapping chart elements.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs6" %}

## Customization

Enhance label appearance using properties such as `fill` (background), `border`, and corner radius (`rx`, `ry`). Refine text appearance using the `font` settings, which support `color`, `fontFamily`, `fontWeight`, and `size`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs7" %}

> Note: The `rx` and `ry` properties require non‑null `border` values.

## Customizing Specific Point

Customize individual markers or labels using the [`pointRender`](../api/chart#pointrender-emittypeipointrendereventargs) and [`textRender`](../api/chart#textrender-emittypeitextrendereventargs) events.  
- `pointRender` modifies shape, color, or border of a point.  
- `textRender` customizes the label text for specific points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/data-markers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/data-markers-cs8" %}

## Show percentage based on each series points

Calculate and display percentage values based on each series’ total using the `seriesRender` and `textRender` events.  
- In `seriesRender`, compute the total of `y` values.  
- In `textRender`, calculate the percentage for each point and update the label text.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/legend-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/legend-cs1" %}

## Last value label

The `lastValueLabel` feature highlights the final data point in a series, making the latest trend or value easy to identify.

### Enable last value label

Enable the label by setting the `enable` property inside the `lastValueLabel` configuration. 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/last-value-label/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/last-value-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/last-value-label" %}

> Note: To use the last value label feature, inject the `LastValueLabel` module using `Chart.Inject(LastValueLabel)` method.

### Customization

Customize the appearance using properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/last-value-label-customization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/last-value-label-customization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/last-value-label-customization" %}

## See Also

* [Show total stacking values in data label](../chart/how-to/stacking-total)
* [Prevent the data label when the data value is 0](../chart/how-to/prevent-data-label#prevent-the-data-label-when-the-data-value-is-0)
