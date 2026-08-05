---
layout: post
title: Period selector in TypeScript Stock chart control | Syncfusion
description: Learn here all about Period selector in Syncfusion TypeScript Stock chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Period selector 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Period selector in TypeScript Stock chart control

The period selector allows to select a range with specified periods. By default the period selector is enabled in stock chart.

## Periods

Periods is an array of objects that allows users to specify the range of [`periods`](../api/stock-chart/stockChartModel/#periods). The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on button. The `intervalType` property allows users to customize the intervals of the buttons. The `intervalType` property supports the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs21" %}

## Visibility of period selector

The [`enablePeriodSelector`](../api/stock-chart/stockChartModel/#enableperiodselector) property allows users to toggle the visibility of period selector.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/stock-chart/getting-started-cs22" %}