---
layout: post
title: Resizing panels in JavaScript Dashboard Layout | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Resizing of panels
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Resizing of panels in JavaScript Dashboard Layout control

The Dashboard Layout control includes panel resizing functionality, which can be enabled or disabled using the [`allowResizing`](../../api/dashboard-layout#allowresizing) property. This functionality allows panels to be resized through UI interactions using resize handles that control panel resizing in specific directions.

By default, panels can be resized only in the south-east direction. However, panels can also be resized in the east, west, north, south, and south-west directions by defining the required directions with the [`resizableHandles`](../../api/dashboard-layout#resizablehandles) property.

On resizing a panel in Dashboard Layout the following events will be triggered,
  * [`resizeStart`](../../api/dashboard-layout#resizestart) - Triggers when panel resize starts
  * [`resize`](../../api/dashboard-layout#resize) - Triggers while a panel is being resized.
  * [`resizeStop`](../../api/dashboard-layout#resizestop) - Triggers when a panel resize completes.

The following sample demonstrates how to enable and disable the resizing of panels in the Dashboard Layout control in different directions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/resizing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/resizing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/resizing-cs1" %}

## Resizing panels programatically

The Dashboard Layout panels can also be resized programmatically by using the [`resizePanel`](../../api/dashboard-layout#resizepanel) method. The method is invoked as follows:

  ```js
   resizePanel(id, sizeX, sizeY)
  ```

Where,
  * [`id`](../../api/dashboard-layout/panelModel#id) - ID of the panel which needs to be resized.
  * [`sizeX`](../../api/dashboard-layout/panelModel#sizex) - New panel width in cells count for resizing the panel.
  * [`sizeY`](../../api/dashboard-layout/panelModel#sizey) - New panel height in cells count for resizing the panel.

The following sample demonstrates resizing panels programmatically in the Dashboard Layout's [`created`](../../api/dashboard-layout#created) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/resize-panel-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/resize-panel-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/resize-panel-cs1" %}


> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
