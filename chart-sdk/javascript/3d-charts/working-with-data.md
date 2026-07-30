---
layout: post
title: Working with data source in JavaScript 3D Chart control | Syncfusion
description: Learn here all about working with data source in Syncfusion JavaScript 3D Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: 3D Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Working with data in JavaScript 3D Chart control

## Local data

A simple JSON data can be bound to the 3D chart using [`dataSource`](../api/chart3d/series3DModel/#datasource) property in series. Now map the fields in JSON to [`xName`](../api/chart3d/series3DModel/#xname) and [`yName`](../api/chart3d/series3DModel/#yname) properties.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs1" %}

## Remote data

The remote data can be bound to the 3D chart using the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/). The `DataManager` requires minimal information like web service URL, adaptor and cross domain to interact with service endpoint properly. Assign the instance of the `DataManager` to the [`dataSource`](../api/chart3d/series3DModel/#datasource) property in series and map the fields of data to [`xName`](../api/chart3d/series3DModel/#xname) and [`yName`](../api/chart3d/series3DModel/#yname) properties. You can also use the [`query`](../api/chart3d/series3DModel/#query) property of the series to filter the data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs2" %}

## Binding data using ODataAdaptor

`OData` is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the `DataManager`. Refer to the following code example for remote data binding using OData service.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs3" %}

## Empty points

The data points that uses the `null` or `undefined` as value are considered as empty points. The empty data points are ignored and is not plotted in the chart. When the data is provided by using the points property, by using [`emptyPointSettings`](../api/chart3d/threeDimensionalEmptyPointSettingsModel/) property in series, the empty can be customized. The default [`mode`](../api/chart3d/threeDimensionalEmptyPointSettingsModel/#mode) of the empty point is **Gap**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs5" %}

**Customizing empty point**

The specific color for empty point can be set by the [`fill`](../api/chart3d/threeDimensionalEmptyPointSettingsModel/#fill) property in [`emptyPointSettings`](../api/chart3d/threeDimensionalEmptyPointSettingsModel/).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/3d-charts/working-with-data-cs6" %}