---
layout: post
title: Sparkline dimensions in TypeScript Sparkline control | Syncfusion
description: Learn here all about Sparkline dimensions in Syncfusion TypeScript Sparkline control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Sparkline dimensions 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Sparkline dimensions in TypeScript Sparkline control

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

```
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs1" %}

## Size for sparkline

You can also set the size for sparkline directly using the [`width`](../../api/sparkline/#width-string) and [`height`](../../api/sparkline/#height-string) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs2" %}

**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/sparkline-charts/sparkline-dimensions-cs3" %}
