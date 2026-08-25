---
layout: post
title: How to customize legend in React Charts | Syncfusion
description: Learn how to customize legend per series in Syncfusion React Charts for a more meaningful legend display.
control: Legend customization 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to customize legend in React Charts

By using the [`legendRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#legendrender), you can customize the legend shape.

To Customize the legend shape, follow the given steps:

**Step 1**:

Set the shape value for each legend using `args.shape` in
[`legendRender`](https://ej2.syncfusion.com/react/documentation/api/chart/chartModel#legendrender) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/how-to-cs4" %}
