---
layout: post
title: Title and Subtitle in React Smith Chart | Syncfusion
description: Add a title and subtitle to the React Smith Chart, trim overflow with maximum width, and customize font, alignment, and visibility.
control: Title subtitle
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Title and Subtitle in React Smith Chart

## Enable title

You can add a title using the [`title`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartmodel#title) property to provide quick information to the user about the data plotted in the Smith Chart.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs3" %}

## Trim title

Both the title and subtitle of the Smith chart can be trimmed if they exceed the certain length. Trimming is enabled using the [`enableTrim`] property for title and subtitle. The length for title and subtitle can be changed using the [`maximumWidth`] property. You can also customize the font, alignment, and visibility of title and subtitle using the [`font`], [`textAlignment`], and [`visibility`] properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs29" %}