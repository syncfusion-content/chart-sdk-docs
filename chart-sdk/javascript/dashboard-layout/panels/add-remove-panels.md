---
layout: post
title: Add remove panels in JavaScript Dashboard Layout | Syncfusion
description: Learn here all about Add remove panels in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Add remove panels
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
# Add remove panels in JavaScript Dashboard Layout control

In real-time cases, the data being presented within the dashboard need to be updated frequently which includes adding or removing the data dynamically within the dashboard. This can be achieved by using the [`addPanel`](../../api/dashboard-layout#addpanel) and [`removePanel`](../../api/dashboard-layout#removepanel) public methods of the control.

## Add or remove panels dynamically

Panels can be added dynamically using the [`addPanel`](../../api/dashboard-layout#addpanel) public method by passing the [`panels`](../../api/dashboard-layout#panels) property as parameter. Panels can be removed dynamically by using the [`removePanel`](../../api/dashboard-layout#removepanel) public method by passing the `panel id` value as the parameter.

It is also possible to remove all the panels in a Dashboard Layout by calling the [`removeAll`](../../api/dashboard-layout#removeall) method.

  ```js
   dashboard.removeAll();
  ```

The following sample demonstrates how to add and remove panels dynamically in the Dashboard Layout control. In the sample, panels can be added in any desired position of required size by selecting them in the numeric boxes and clicking add button and remove them by selecting the id of the panel.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-adding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-adding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-adding-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
