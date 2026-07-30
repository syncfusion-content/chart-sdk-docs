---
layout: post
title: Localization in Vue Sparkline component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Sparkline component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Localization in Vue Sparkline component

The sparkline control supports localization. The default culture for localization is `en-US`. You can change the culture using the `setCulture` method.

## Tooltip format

Sparkline tooltip supports localization. The following code sample shows tooltip text with currency format based on culture.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart-sdk/vue/sparkline-charts/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/sparkline-charts/getting-started-cs17" %}

## Rtl

If you set the `enableRtl` property to true, then the sparkline will be rendered from rigt-to-left direction.

The following example shows the sparkline is render from "Right-to-left".

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart-sdk/vue/sparkline-charts/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/sparkline-charts/getting-started-cs18" %}