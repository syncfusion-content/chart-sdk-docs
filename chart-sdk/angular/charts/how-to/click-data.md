---
layout: post
title: Click data in Angular Chart component | Syncfusion
description: Learn here all about Click data in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Click data 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Click data in Angular Chart component

By using the [`pointClick`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointclick) event, you can get the chart data of the clicked area.

To display the clicked data point information from a chart series:

By using the [`pointClick`](https://ej2.syncfusion.com/angular/documentation/api/chart#pointclick) event, you can access the clicked point's data through the [`IPointEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/chart/iPointEventArgs) parameter. You can retrieve the [`args.point.x`](https://ej2.syncfusion.com/angular/documentation/api/chart/pointModel#x) and [`args.point.y`](https://ej2.syncfusion.com/angular/documentation/api/chart/pointModel#y) values, along with other properties like `args.point.index`, `args.point.series`, and `args.point.color`.

The following example demonstrates how to capture and display the clicked point information when a user clicks on any data point in the chart:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/how-to-cs1" %}