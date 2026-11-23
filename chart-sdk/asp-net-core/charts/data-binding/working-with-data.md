---
layout: post
title: Working with Data in ASP.NET Core Charts | Syncfusion
description: Learn here all about Working with data in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Working with data
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


<!-- markdownlint-disable MD036 -->

# Working with Data in ASP.NET Core Charts

Chart can visualize data bound from local or remote data.

## Local data

You can bind a simple JSON data to the chart using [`dataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataSource) property in series. Now, map the fields in JSON to [`xName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_XName) and [`yName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_YName) properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/local-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Local-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/local-data/local-data.cs %}
{% endhighlight %}
{% endtabs %}



### Common datasource

You can also bind a JSON data common to all series using [`dataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataSource) property in chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/common-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Common-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/common-data/common-data.cs %}
{% endhighlight %}
{% endtabs %}



## Remote data

You can also bind remote data to the chart using `DataManager`. The DataManager requires minimal information like web service URL, adaptor and crossDomain to interact with service endpoint properly. Assign the instance of DataManager to the [`dataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataSource) property in series and map the fields of data to [`xName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_XName) and [`yName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_YName) properties. You can also use the [`query`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Query) property of the series to filter the data.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/remote-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Remote-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/remote-data/remote-data.cs %}
{% endhighlight %}
{% endtabs %}



## Binding data using ODataAdaptor

[`OData`](https://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from an OData service using the DataManager. Refer to the following code example for remote data binding using an OData service.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odata-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Odata-adaptor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odata-adaptor/odata-adaptor.cs %}
{% endhighlight %}
{% endtabs %}



## Binding data using ODataV4Adaptor

ODataV4 is an improved version of the OData protocols, and the `DataManager` can also retrieve and consume ODataV4 services. For more details on ODataV4 services, refer to the [`odata documentation`](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind an ODataV4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odatav4-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Odatav4-adaptor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odatav4-adaptor/odatav4-adaptor.cs %}
{% endhighlight %}
{% endtabs %}



## Web API adaptor

You can use the **WebApiAdaptor** to bind the chart with a Web API created using an OData endpoint.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/web-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Web-adaptor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/web-adaptor/web-adaptor.cs %}
{% endhighlight %}
{% endtabs %}

The response object should contain the properties **Items** and **Count**, where **Items** represents a collection of entities, and **Count** represents the total number of entities.

The sample response object should appear as follows:

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```



## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates the custom adaptor approach and how to add a serial number to the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/custom-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-adaptor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/custom-adaptor/custom-adaptor.cs %}
{% endhighlight %}
{% endtabs %}



## Offline mode

When using remote data binding, all chart actions will be processed on the server-side. To avoid postback for every action, configure the chart to load all data upon initialization and handle actions on the client-side. To enable this behavior, utilize the **offline** property of the `DataManager`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/offline-mode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Offline-mode.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/offline-mode/offline-mode.cs %}
{% endhighlight %}
{% endtabs %}



## Empty points

The Data points that uses the `null` or `undefined` as value are considered as empty points. Empty data points are ignored and not plotted in the Chart. When the data is provided by using the points property, by using `emptyPointSettings` property in series, you can customize the empty point. Default `mode` of the empty point is `Gap`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-points/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-points.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-points/empty-points.cs %}
{% endhighlight %}
{% endtabs %}

### Handling null or undefined x-values

Use the [xValueMode](../api/chart/emptypointsettings#xvaluemode) property to control how the chart handles data points whose x-value is `null` or `undefined`.

The `xValueMode` property supports the following values:

- **Drop:** Excludes data points whose x-value is `null` or `undefined`. The remaining valid points are rendered continuously, as though the dropped points do not exist.
- **Gap:** Preserves the position of data points whose x-value is `null` or `undefined` but does not render those points. This leaves a gap between the preceding and following valid points.
- **Show:** Displays data points whose x-value is `null` or `undefined` under a common category on the category axis.

When `xValueMode` is set to `Show`, use the [xValueText](../api/chart/emptypointsettings#xvaluetext) property to define the category text displayed for null or undefined x-values. If multiple data points have null or undefined x-values, the chart places the points under the category specified by `xValueText` while retaining each point for rendering and interaction. The `xValueText` property does not apply when `xValueMode` is set to `Drop` or `Gap`.

> **Note:** The `xValueMode` and `xValueText` properties handle null or undefined x-values. To customize null or undefined y-values, use the [emptyPointSettings](../api/chart/series#emptypointsettings) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-xvalue-points/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-points.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-xvalue-points/empty-points.cs %}
{% endhighlight %}
{% endtabs %}

## Lazy loading

Lazy loading allows to load data for chart on demand. Chart will fire the scrollEnd event, in that the minimum and maximum range of the axis is achieved. Based on this, the data can be uploaded to chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/lazy-loading/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Local-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/lazy-loading/local-data.cs %}
{% endhighlight %}
{% endtabs %}


**Customizing empty point**

Specific color for empty point can be set by `fill` property in `emptyPointSettings`. Border for a empty point can be set by `border` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/custom-emptypoint/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-emptypoint.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/custom-emptypoint/custom-emptypoint.cs %}
{% endhighlight %}
{% endtabs %}

## Handling No Data

When no data is available to render in the chart, the `noDataTemplate` property can be used to display a custom layout within the chart area. This layout may include a message indicating the absence of data, a relevant image, or a button to initiate data loading. Styled text, images, or interactive elements can be incorporated to maintain design consistency and improve user guidance. Once data becomes available, the chart automatically updates to display the appropriate visualization.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/no-data-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="No-data-template.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/no-data-template/no-data-template.cs %}
{% endhighlight %}
{% endtabs %}

![ASP.NET Core Chart Control](../images/nodatatemplate-chart.png)

