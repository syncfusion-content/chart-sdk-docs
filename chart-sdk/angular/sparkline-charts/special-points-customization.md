---
layout: post
title: Special points customization in Angular Sparkline component | Syncfusion
description: Learn here all about Special points customization in Syncfusion Angular Sparkline component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Special points customization 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Special points customization in Angular Sparkline component

You can customize the points by initializing the point colors. The customization options allows to differentiate the [`start`], [`end`], [`positive`], [`negative`], and [`low`] points. This customization is only applicable for line, column, and area type sparkline.

<!-- markdownlint-disable MD036 -->

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs33/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs33/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs33" %}

**Tie point color**

Tie point color is used to configure the win-loss series type sparkline's y-value point color. The following code sample shows the tie point color of sparkline series.

[`app.component.ts`]

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs34/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs34/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/sparkline-charts/getting-started/sparkline-cs34" %}