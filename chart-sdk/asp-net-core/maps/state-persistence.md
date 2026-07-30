---
layout: post
title: State Persistence in Syncfusion ASP.NET Core Maps Component
description: Learn here all about State Persistence in Syncfusion ASP.NET Core Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: State Persistence
publishingplatform: chart-sdk
documentation: ug
---

# State Persistence

## State persistence

For state maintenance, state persistence allows Maps to save the current model value in browser cookies. This action is handled through the `EnablePersistence` property which is set to **false** by default. When this property is set to true, some of the Maps component model values are preserved even after the page is refreshed.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/markers/persistence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Persistence.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/maps/markers/persistence/persistence.cs %}
{% endhighlight %}
{% endtabs %}

