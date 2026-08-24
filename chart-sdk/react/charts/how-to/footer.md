---
layout: post
title: How to add a footer in React Charts | Syncfusion
description: Learn how to add a footer to Syncfusion React Charts using custom HTML annotations on the chart area.
control: Footer 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to add a footer in React Charts

By using `annotation`, you can place any html elements to chart in a desired view.

To create footer and watermark for chart, follow the given steps:

**Step 1**:

Initialize the custom elements by using the `annotation` property.

By using the `content` option of the annotation object, you can specify the id of the element that needs to be displayed in the chart area as follow,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart-sdk/react/charts/code-path/how-to-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/charts/preview-sample/how-to-cs2" %}