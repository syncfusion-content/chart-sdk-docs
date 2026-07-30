---
layout: post
title: Moving panels in JavaScript Dashboard Layout control | Syncfusion
description: Learn here all about Moving panels in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Moving panels
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Moving panels in JavaScript Dashboard Layout control

Panels can be moved programmatically in the Dashboard Layout in addition to drag-and-drop. Use the DashboardLayout instance method [`movePanel`](../../api/dashboard-layout#movepanel) as shown below:

  ```js
   movePanel(id, row, col)
  ```

Where,
* [`id`](../../api/dashboard-layout/panelModel#id) - ID of the panel which needs to be moved.
* [`row`](../../api/dashboard-layout/panelModel#row) - New row position for moving the panel.
* [`col`](../../api/dashboard-layout/panelModel#col) - New column position for moving the panel.

Each time a panel's position is changed(programmatically or through UI interaction), the Dashboard Layout's [`change`](../../api/dashboard-layout#change) event is triggered.

The following sample demonstrates moving a panel programmatically to a new position in the Dashboard Layout's [`created`](../../api/dashboard-layout#created) event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/moving-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/moving-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/moving-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.

