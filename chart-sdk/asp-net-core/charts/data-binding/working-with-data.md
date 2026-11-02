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

The chart can visualize data bound from local or remote sources.

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

You can also bind remote data to the chart using `DataManager`. The `DataManager` requires minimal information such as the web service URL, adaptor, and `crossDomain` to interact with the service endpoint properly. Assign the instance of `DataManager` to the [`dataSource`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_DataSource) property in series and map the fields of data to [`xName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_XName) and [`yName`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_YName) properties. You can also use the [`query`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeries.html#Syncfusion_EJ2_Charts_ChartSeries_Query) property of the series to filter the data.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/remote-data/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Remote-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/remote-data/remote-data.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data using ODataAdaptor

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from an OData service using the DataManager. Refer to the following code example for remote data binding using an OData service.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odata-adaptor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Odata-adaptor.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/odata-adaptor/odata-adaptor.cs %}
{% endhighlight %}
{% endtabs %}

## Binding data using ODataV4Adaptor

ODataV4 is an improved version of the OData protocols, and the `DataManager` can also retrieve and consume ODataV4 services. For more details on ODataV4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind an ODataV4 service, use the **ODataV4Adaptor**.

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

```json
{
    "Items": [{}, {}, {}, ...],
    "Count": 830
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

When using remote data binding, all chart actions are processed on the server-side. To avoid postback for every action, configure the chart to load all data upon initialization and handle actions on the client-side. To enable this behavior, utilize the **offline** property of the `DataManager`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/offline-mode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Offline-mode.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/offline-mode/offline-mode.cs %}
{% endhighlight %}
{% endtabs %}

## Empty points

Data points that use `null` or `undefined` as their value are considered empty points. Empty data points are ignored and not plotted in the chart. When the data is provided using the `points` property, you can customize the empty point using the `emptyPointSettings` property in the series. The default `mode` of the empty point is `Gap`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-points/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Empty-points.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/empty-points/empty-points.cs %}
{% endhighlight %}
{% endtabs %}

## Lazy loading

Lazy loading allows to load data for chart on demand. The chart fires the scrollEnd event when the minimum or maximum range of the axis is reached. Based on this, the data can be uploaded to chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/lazy-loading/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Local-data.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/working-data/lazy-loading/local-data.cs %}
{% endhighlight %}
{% endtabs %}

**Customizing empty point**

A specific color for an empty point can be set by the `fill` property in `emptyPointSettings`. The border for an empty point can be set by the `border` property.

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

![ASP.NET Core Chart Control](images/nodatatemplate-chart.png)

