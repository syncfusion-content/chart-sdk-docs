---
layout: post
title: Save restore in JavaScript Dashboard Layout control | Syncfusion
description: Learn here all about Save restore in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Save restore
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Save and restore in JavaScript Dashboard Layout control

The current layout structure of the Dashboard Layout control can be obtained and saved to recreate a dashboard with the same panel arrangement using the [`serialize`](../api/dashboard-layout#serialize) public method. This method returns the control's current panel settings, which can be used to reconstruct a dashboard with the same layout configuration.

The following sample demonstrates how to save and restore the state of the panels using the [`serialize`](../api/dashboard-layout#serialize) method. The panel's settings are stored when the save button is clicked and restored from the previously saved settings when the restore button is clicked.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/restore-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/restore-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/restore-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.


## State Persistence in JavaScript Dashboard Layout Control

State persistence enables the Dashboard Layout Control to retain the panel positions ([`row`](../api/dashboard-layout/panelModel#row), [`col`](../api/dashboard-layout/panelModel#col)), width ([`sizeX`](../api/dashboard-layout/panelModel#sizex)), and height ([`sizeY`](../api/dashboard-layout/panelModel#sizey)) values in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp) for state maintenance, even if the browser is refreshed or if you navigate to another page within the browser. This behavior is controlled through the [`enablePersistence`](../api/dashboard-layout#enablepersistence) property, which defaults to `false`. When set to `true`, the panel positions and sizes are preserved after refreshing the page.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/persistence-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/persistence-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/persistence-cs1" %}
