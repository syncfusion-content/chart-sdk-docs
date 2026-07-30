---
layout: post
title: Selection in JavaScript Chart control | Syncfusion
description: Learn here all about Selection in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Selection in JavaScript Chart control

The chart provides selection support for both series and individual data points when users interact with the chart using mouse clicks.

> When a data point is clicked, the corresponding series legend item is also selected.

Multiple selection modes are available to help select and analyze chart data effectively. The supported selection modes are:

* None
* Point
* Series
* Cluster
* DragXY
* DragX
* DragY

## Point

A single data point can be selected by setting the `selectionMode` property to `Point`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs10" %}

## Series

An entire series can be selected by setting the `selectionMode` property to `Series`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs11" %}

## Cluster

Cluster selection allows selection of data points that share the same index across all series. This can be enabled by setting the `selectionMode` property to `Cluster`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs12" %}

## Rectangular selection

**DragXY, DragX and DragY**

Rectangular selection enables users to select a group of data points within a defined region by setting the `selectionMode` property accordingly.

* **DragXY** – Selects data points along both the horizontal and vertical axes.
* **DragX** – Selects data points along the horizontal axis.
* **DragY** – Selects data points along the vertical axis.

The selected data points are returned as an array collection through the [`dragComplete`](../api/chart#dragcomplete-emittypeidragcompleteeventargs) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs13" %}

## Selection type

Multiple data points or series can be selected simultaneously by enabling the [`isMultiSelect`](../api/chart#ismultiselect-boolean) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs14" %}

## Selection on load

Data points or series can be selected programmatically when the chart is loaded by using the [`selectedDataIndexes`](../api/chart#selecteddataindexes-indexesmodel) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs15" %}

## Selection through on legend

Points or series can also be selected through the legend by enabling the [`toggleVisibility`](../api/chart/legendSettingsModel#toggleVisibility) property.  
To visually emphasize the selected series, use the [`enableHighlight`](../api/chart/legendSettings#enableHighlight) property.

> When [`highlightMode`](https://ej2.syncfusion.com/documentation/api/chart/highlightmode) is set to `Series`, `Cluster`, or `Point`, legend highlighting occurs even if [`enableHighlight`](https://ej2.syncfusion.com/documentation/api/chart/legendsettings#enablehighlight) is set to **false**. In this case, `highlightMode` takes precedence, and hovering over legend items highlights the corresponding series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs16" %}

## Customization for selection

Custom styles can be applied to selected points or series by using the [`selectionStyle`](../api/chart/series#selectionstyle-string) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/user-interaction-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/user-interaction-cs17" %}

## See Also

* [Display selected data for range selection](./how-to#display-selected-data-for-range-selection)
