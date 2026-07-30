---
layout: post
title: Drilldown in Angular Maps component | Syncfusion
description: Learn here all about Drilldown in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Drilldown 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Drilldown in Angular Maps component

By clicking a continent, all the countries available in that continent can be viewed using the drill-down feature. For example, the countries in the `Africa` continent have been showcased here. To showcase all the countries in `Africa` continent by clicking the [`shapeSelected`](https://ej2.syncfusion.com/angular/documentation/api/maps/#shapeselected) event as mentioned in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/maps/default-map/datetime-cs42/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/maps/default-map/datetime-cs42/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/maps/default-map/datetime-cs42" %}