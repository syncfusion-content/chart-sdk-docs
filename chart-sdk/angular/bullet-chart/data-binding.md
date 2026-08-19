---
layout: post
title: Data binding in Angular Bullet chart component | Syncfusion
description: Learn here all about Data binding in Syncfusion Angular Bullet chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data binding 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Data binding in Angular Bullet chart component

Bullet Chart can visualise data bound from local or remote data.

## Local Data

The [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#datasource) property accepts a collection of values as input that helps to display measures, and compares them to a target bar. To display the actual and target bar, specify the property from the datasource into the [`valueField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#valuefield) and [`targetField`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#targetfield) respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/bullet-chart/getting-started/range-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/bullet-chart/getting-started/range-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/bullet-chart/getting-started/range-cs20" %}