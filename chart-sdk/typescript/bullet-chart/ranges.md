---
layout: post
title: Ranges in TypeScript Bullet Chart | Syncfusion
description: Learn how to define qualitative ranges in the Syncfusion TypeScript Bullet Chart scale using the ranges property.
platform: TypeScript
control: Bullet Chart 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Ranges in TypeScript Bullet Chart

Ranges represent the quality of a specific range such as **Good**, **Bad** and **Satisfactory** in the Bullet Chart scale. The ending point of a qualitative range is specified in the `end` property in `ranges`. The `minimum` value of a quantitative scale is considered the starting point of the first range or the previous range end point.

 {% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/ranges-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/ranges-cs1" %}

## Color Customization

Enhance the readability of ranges with color and opacity. It can be applied using the `color` and `opacity` properties in `ranges`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/ranges-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/bullet-chart/ranges-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/bullet-chart/ranges-cs2" %}