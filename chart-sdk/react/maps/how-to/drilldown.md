---
layout: post
title: How to drilldown in React Maps | Syncfusion
description: Learn how to enable drilldown in React Maps by clicking a continent shape to reveal all countries within it via the shapeSelected event.
control: Drilldown
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to drilldown in React Maps

By clicking a continent, all the countries available in that continent can be viewed using the drill-down feature. For example, the countries in the `Africa` continent have been showcased here. To showcase all the countries in `Africa` continent by clicking the [`shapeSelected`](https://ej2.syncfusion.com/react/documentation/api/maps#shapeselected) event as mentioned in the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/maps/code-path/default-map-cs41/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/maps/code-path/default-map-cs41/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/maps/default-map-cs41" %}