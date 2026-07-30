---
layout: post
title: Set header panels in JavaScript Dashboard Layout | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Setting header of panels
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Setting header of panels in JavaScript Dashboard Layout control

The Dashboard Layout control is primarily used to represent data for monitoring or managing processes. Data or any HTML template can be placed as the panel content of a panel using the [`content`](../../api/dashboard-layout/panelModel#content)  property. A word or phrase summarizing the panel's content can be added as the header on the top of each panel using the [`header`](../../api/dashboard-layout/panelModel#header)  property of the panel.

The following sample shown how to add content for each panel using the header and content properties of the panels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/header-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/header-cs1" %}

## Placing controls as content of panels

Controls such as charts, grids, maps, and gauges can present complex data in a dashboard. These controls can be used as panel content by assigning the corresponding control element to the [`content`](../../api/dashboard-layout/panelModel#content)property of the panel.

The following sample demonstrates how to add EJ2 Chart controls as the [`content`](../../api/dashboard-layout/panelModel#content) for panels in the Dashboard Layout control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/content-1-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/content-1-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/content-1-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
