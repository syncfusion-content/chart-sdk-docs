---
layout: post
title: Dimensions in React Sparkline Charts | Syncfusion
description: Set the Syncfusion React Sparkline Charts size via container, CSS, or direct width and height properties in pixel or percentage for responsive layouts.
control: Sparkline dimensions  
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dimensions in React Sparkline Charts

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

```
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs1" %}
<!-- markdownlint-disable MD036 -->

## Size for sparkline

<!-- markdownlint-disable MD036 -->

You can also set the size for sparkline directly using the [`width`](../sparkline#width-string) and [`height`](https://ej2.syncfusion.com/react/documentation/api/sparkline#height-string) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs2" %}

**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/sparkline-charts/sparkline-dimensions-cs3" %}
