---
layout: post
title: Initial scrollbar in React Chart component | Syncfusion
description: Learn here all about Initial scrollbar in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Initial scrollbar 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Initial scrollbar in React Chart component

By setting `zoomFactor` in primaryXAxis and `isZoomed` value as `true` in [`load`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#load) event and `enableScrollbar` value as `true` in`zoomSettings`, you can make the scrollbar visible in initial rendering of chart.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/how-to-cs3" %}