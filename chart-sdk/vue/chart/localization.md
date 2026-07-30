---
layout: post
title: Localization in Vue Chart component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Localization in Vue Chart component

The localization library localizes the Chart's default text content. Static text used by chart features (for example, zoom toolbar labels) can be translated by providing a locale value and a translation object.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale keys</b></td>
<td><b>Text to display</b></td>
</tr>
<tr>
<td>Zoom</td>
<td>Zoom</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>ZoomIn</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>ZoomOut</td>
</tr>
<tr>
<td>Reset</td>
<td>Reset</td>
</tr>
<tr>
<td>Pan</td>
<td>Pan</td>
</tr>
<tr>
<td>ResetZoom</td>
<td>Reset Zoom</td>
</tr>
</table>

To load translations in an application, load function of L10n class.

For more information about localization, see the localization guide:
[`localization`](https://ej2.syncfusion.com/vue/documentation/common/localization/)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/user-interaction/zoom-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/charts/user-interaction/zoom-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/charts/user-interaction/zoom-cs1" %}