---
layout: post
title: Column width in Angular Chart component | Syncfusion
description: Learn here all about Column width in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Column width 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Column width in Angular Chart component

By using the [`columnWidth`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnwidth) and [`columnSpacing`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnspacing) properties in the series of the chart, you can customize the column width and column spacing values for all points of the column series.

You can customize the column width by setting the [`columnWidth`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnwidth) value from 0 to 1 for every point in the column series. Similarly, you can use the [`columnSpacing`](https://ej2.syncfusion.com/documentation/api/chart/series/#columnspacing) property to adjust the spacing between columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/how-to-cs2" %}
