---
layout: post
title: Title in TypeScript Chart control | Syncfusion
description: Learn here all about Title in Syncfusion TypeScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Title 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Chart title and subtitle in TypeScript Chart component

Chart titles and subtitles help provide context for the visualized data. The title typically indicates the main subject or metric represented in the chart, while the subtitle adds supporting details such as data sources, time ranges, or explanatory notes. Both elements can be customized in terms of position, alignment, and style to align with application design requirements.

## Chart title

Add a chart title using the [`title`](../api/chart#title-string) property. The title appears at the top of the chart by default and is used to describe the purpose or subject of the visualization.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15" %}

### Title position

Use the [`position`](../api/chart/titleSettings#position) property within [`titleStyle`](../api/chart#titlestyle) to place the title at the left, right, top, or bottom of the chart. The default position is at the top.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21" %}

To manually position the title anywhere within the chart, use the [`x`](../api/chart/titleSettings#x) and [`y`](../api/chart/titleSettings#y) properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22" %}

### Title alignment

Align the chart title to the near, center, or far side of the chart using the [`textAlignment`](../api/chart/titleSettings#textalignment) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23" %}

### Title wrap

Customize the title’s appearance using the `textStyle` property. Options include `size`, `color`, `fontFamily`, `fontWeight`, `fontStyle`, `opacity`, `textAlignment`, and `textOverflow` to control how the title is rendered within the chart area.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/getting-started-cs1" %}