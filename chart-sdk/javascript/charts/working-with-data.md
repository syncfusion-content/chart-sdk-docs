---
layout: post
title: Working with data in JavaScript Charts | Syncfusion
description: Learn here all about Working with data in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Working with data in JavaScript Charts

The JavaScript Chart control supports multiple data binding approaches to suit different application scenarios. Data can be bound from local JSON arrays, dynamically loaded on demand with lazy loading, or fetched from remote services using various adaptor patterns. This guide covers all available data binding methods, helping you choose the right approach for your use case based on data size, performance requirements, and back end architecture.

## Choosing a data binding approach

| Method | Best for | Advantages | Considerations |
|--------|----------|------------|-----------------|
| **Local data** | Small to medium datasets | Simple setup, no network latency, instant rendering | All data must be in memory |
| **Common data source** | Multiple series sharing data | Reduces redundancy, single update point | Limited to data common across series |
| **Lazy loading** | Large datasets with scrolling | Loads only visible data, better performance | Requires server-side pagination |
| **Remote data (OData / Web API)** | Backend-driven data | Scalable, centralized data management, server-managed retrieval | Network latency, requires service setup |
| **Custom adaptor** | Non-standard backend responses | Full request and response control | More code to maintain |
| **Offline mode** | Data caching with client-side actions | Avoids repeated requests after the initial load | Initial load time and memory constraints |
| **Empty points** | Missing values within a dataset | Configurable handling of gaps and substituted values | Behavior varies by series type |
| **No-data template** | Empty or loading states | Displays explanatory content when no records are available | Requires an explicit data update and Chart refresh |

## Local data

Bind an array of data objects to a series using the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#datasource) property in the series configuration. Map the JSON fields to the [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#yname) properties to specify which fields represent the X-axis and Y-axis values.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs1" %}

Local `dataSource` values can be arrays of objects or other local structures supported by the series. Financial series require `open`, `high`, `low`, and `close` mappings, while Bubble series also require a `size` mapping.

## Remote data

Bind remote data from a web service by using the `DataManager` class. The `ej.data.DataManager` class retrieves data from REST and OData endpoints. Configure the service URL and an adaptor that matches the endpoint protocol and response format. Assign the `DataManager` instance to the [`dataSource`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#datasource) property in the series, and map the response fields to [`xName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#xname) and [`yName`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#yname). Use the optional [`query`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#query) property with an `ej.data.Query` instance to request filtering, sorting, or paging supported by the server.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs2" %}

The endpoint must allow requests from the application origin. A basic endpoint can return an array; adaptor-based endpoints can require a result-and-count wrapper. Handle rejected requests and invalid responses before updating the Chart.

```javascript
var manager = new ej.data.DataManager({
    url: 'https://example.com/api/sales',
    adaptor: new ej.data.WebApiAdaptor()
});

manager.executeQuery(new ej.data.Query()).then(function (result) {
    chart.series[0].dataSource = result.result || [];
    chart.refresh();
}).catch(function (error) {
    console.error('Unable to load chart data.', error);
});
```

## Remote-data adaptors

### ODataAdaptor

[OData](https://www.odata.org/documentation/odata-version-3-0) is a standardized protocol for creating and consuming data via REST APIs. Use the ODataAdaptor with DataManager to retrieve data from OData services. The adaptor automatically constructs the correct query syntax and handles standard OData conventions.

**Example use case:** Querying a product sales service that implements OData v3.0 filtering, sorting, and pagination.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs3" %}

### ODataV4Adaptor

OData v4 is a later protocol version with conventions and capabilities that differ from OData v3. Use the ODataV4Adaptor to consume ODataV4 services. For more information on ODataV4 specifications, refer to the [OData v4 documentation](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197).

**When to use ODataV4Adaptor:** If your backend service implements OData v4.0, use this adaptor so requests and responses follow the service protocol.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs7" %}

### Web API adaptor

Use the WebApiAdaptor to consume custom REST APIs that follow a standard response format. This adaptor is ideal for back ends that do not implement OData but provide REST endpoints returning JSON data.

#### Expected response format

The response shape must match the selected adaptor and server implementation. If the service returns an `Items` and `Count` wrapper, transform it in a custom adaptor when the built-in adaptor expects a different result-and-count structure.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs8" %}

#### Example response

```json
{
  "Items": [
    { "month": "Jan", "sales": 35 },
    { "month": "Feb", "sales": 28 }
  ],
  "Count": 2
}
```

In this example, `Items` contains the records and `Count` contains the total record count. Map or transform these keys as required by the configured adaptor.

### Custom adaptor

Create a custom adaptor by extending the built-in adaptor that matches the endpoint protocol and response format to add custom logic for request/response handling. Override the `processResponse` method to transform or enrich the response data. The signature is `processResponse(data, ds, query, xhr, request, changes)`. Common use cases include adding serial numbers, reformatting dates, or adding computed fields before the chart renders the data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs10" %}

## Lazy loading

Configure a scrollbar or zoomed axis range before relying on `scrollEnd`. Use the event range values to request server-side pages, cancel obsolete requests when possible, and ignore out-of-order responses.

Lazy loading enables on-demand data retrieval, requesting data for the visible range instead of loading the complete dataset at initialization. The Chart raises the `scrollEnd` event when the user scrolls near the edge of the visible data range. In this event handler, retrieve the minimum and maximum values from the scrolled axis, request the corresponding data from your server, and either replace or merge the series data according to the application caching strategy. This approach is ideal for large datasets that would be expensive to load entirely into memory.

**How lazy loading works:**
1. The user scrolls the Chart to a different data range.
2. The `scrollEnd` event provides the current axis range.
3. Request the corresponding range from the server and show a loading state.
4. Merge or replace the series data while preventing duplicate and stale responses.
5. Assign the updated data source and call `chart.refresh()`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs4" %}

## Offline mode

When using remote data binding, filtering, sorting, and pagination can be performed on the server depending on the adaptor and query. To improve responsiveness and reduce server load, enable offline mode so `DataManager` fetches and caches the complete dataset before the Chart consumes it. Subsequent DataManager operations can run against the local cache. Set the `offline` property of DataManager to `true` to activate this behavior.

**Use offline mode when:**
- The dataset can be held within the application's browser-memory limits.
- Filtering and sorting should run without additional server requests.
- Network latency affects repeated requests.
- The application can tolerate the larger initial download.

> **Caution:** Offline mode fetches the complete dataset initially. Provide an explicit refresh path when the server data changes, and avoid this mode for datasets that exceed browser-memory limits.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs9" %}

## Empty points

A point whose mapped Y value is `null` or `undefined` is treated as an empty point. Configure `emptyPointSettings` in the series regardless of whether the data comes from `dataSource` or individual points. The visual result depends on the series type and selected mode.

### Empty-point modes

- `Gap`: Leaves a break in line-like series and omits the empty category value in discrete series.
- `Zero`: Replaces the missing Y value with zero.
- `Average`: Replaces the missing Y value with an average calculated from neighboring values.

Verify any additional modes against the installed Chart version.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs5" %}

### Customize empty points

Set a renderable empty-point `mode`, and then use `emptyPointSettings.fill` to apply a color to the substituted point. A `Gap` does not render a point that can receive a fill.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs6" %}

## Handling no data

Use the Chart `noDataTemplate` property to display explanatory content when no renderable records are available. The template can be a supported string, selector, or function according to the installed Chart version. Encode or sanitize untrusted values before rendering HTML. Empty points represent missing values inside a dataset; a no-data template represents an empty dataset or loading state. After data arrives, assign the data to the series and call `chart.refresh()` to replace the template with the visualization.

```javascript
chart.series[0].dataSource = loadedData;
chart.refresh();
```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/working-with-data-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/working-with-data-cs11" %}

## Troubleshooting

- If no points are rendered, verify that `xName`, `yName`, and any financial or Bubble mappings exactly match the response fields.
- If a remote request fails, check the endpoint URL, HTTPS usage, CORS policy, authentication, and browser network response.
- If an adaptor returns no data, confirm that the response shape matches the selected adaptor and that the expected result and count fields are present.
- If lazy-loaded data appears out of order or duplicated, cancel obsolete requests and merge records using a stable key.
- If an empty point is invisible after setting `fill`, select a renderable mode such as `Zero` or `Average`.
- If the no-data template remains visible, assign a non-empty data source and call `chart.refresh()`.

## See also

- [Series dataSource API](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesmodel#datasource)
- [DataManager overview](https://ej2.syncfusion.com/javascript/documentation/data/getting-started)
- [Data adaptors](https://ej2.syncfusion.com/javascript/documentation/data/adaptors)
- [Query API](https://ej2.syncfusion.com/javascript/documentation/api/data/query)
- [Empty-point settings API](https://ej2.syncfusion.com/javascript/documentation/api/chart/emptypointsettingsmodel)
- [Getting started](./es5-getting-started)
