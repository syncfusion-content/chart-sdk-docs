---
layout: post
title: Appearance in Angular Accumulation chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Angular Accumulation chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Appearance 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Appearance in Angular Accumulation chart component

## Custom Color Palette

You can customize the default color of series or points by providing a custom color palette of your choice by using the [`palettes`](https://ej2.syncfusion.com/angular/documentation/api/accumulation-chart/accumulationSeries/#palettes) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/accumulation-chart/series/pie-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/accumulation-chart/series/pie-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/accumulation-chart/series/pie-cs5" %}

## Animation

### Fluid Animation

Fluid animation used to animate series with updated dataSource continues animation rather than animation whole series. You can customize animation for a particular series using [`animate`] method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/accumulation-chart/series/radius-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/accumulation-chart/series/radius-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/accumulation-chart/series/radius-cs1" %}
