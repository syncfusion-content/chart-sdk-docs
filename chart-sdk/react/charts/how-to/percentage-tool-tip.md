---
layout: post
title: How to show percentage in pie tooltip in React Charts | Syncfusion
description: Learn how to show each point's percentage share in the Syncfusion React Charts pie tooltip for clearer comparison.
control: Percentage tool tip 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to show percentage in pie tooltip in React Charts

By using the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#tooltiprender) event, you can show the percentage value for each point of pie series in tooltip.

To show the percentage value in pie tooltip, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#tooltiprender) event, you can get the `args.point.y` and `args.series.sumOfPoints` values. You can use these values to calculate the percentage value for each point of pie series. To display the percentage value in tooltip, use the `args.content` property.

The output will appear as follows,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/how-to-cs7" %}