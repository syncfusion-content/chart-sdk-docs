---
layout: post
title: Grid data chart in Angular Chart component | Syncfusion
description: Learn here all about Grid data chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Grid data chart 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Grid data chart in Angular Chart component

You can visualize the data that is returned by the grid in the chart.

To visualize the data in the chart, follow the given steps:

**Step 1**:

Initialize the grid with a `dataSource`.

**Step 2**:

By using the grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid#actioncomplete) event and [`getCurrentViewRecords`](https://ej2.syncfusion.com/angular/documentation/api/grid#getcurrentviewrecords) method, you can get the current page records whenever paging, sorting, or filtering occurs.
By using the grid's [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/grid#databound) event, you can update the current page records into the chart's `dataSource` and visualize the grid data in the chart on initial load.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/grid-visual-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/grid-visual-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/grid-visual-cs2" %}