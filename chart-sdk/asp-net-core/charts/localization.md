---
layout: post
title: Localization in ASP.NET Core Chart Component
description: Learn here all about Localization in Syncfusion ASP.NET Core Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Localization
publishingplatform: chart-sdk
documentation: ug
---


# Localization

Localization library allows to localize the default text content of Chart. In Chart component, it has the static text on some features (like zooming toolbars) and this can be changed to any other culture (Arabic, Deutsch, French, etc) by defining the locale value and translation object.

<!-- markdownlint-disable MD033 -->

<table>
<tr>
<td><b>Locale key words</b></td>
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

To load translation object in an application, use load function of L10n class.

For more information about localization, refer this [`localization`](https://ej2.syncfusion.com/aspnetcore/documentation/common/localization/).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/localization/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Localization.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/getting-started/localization/localization.cs %}
{% endhighlight %}
{% endtabs %}

