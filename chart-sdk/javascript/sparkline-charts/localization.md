---
layout: post
title: Localization in JavaScript Sparkline control | Syncfusion
description: Learn here all about Localization in Syncfusion JavaScript Sparkline control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Localization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Localization in JavaScript Sparkline control

The sparkline control supports localization. The default culture for localization is `en-US`. You can change the culture using the `setCulture` method.

## Tooltip format

Sparkline tooltip supports localization. The following code sample shows tooltip text with currency format based on culture.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs1" %}

## RTL

If you set the `enableRtl` property to true, then the sparkline will be rendered from right-to-left direction.

The following example shows the sparkline is render from "Right-to-left".

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/localization-cs2" %}