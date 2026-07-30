---
layout: post
title: Responsive adaptive in TypeScript Dashboard Layout | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion TypeScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Responsive adaptive
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Responsive adaptive in TypeScript Dashboard Layout control

The Dashboard Layout includes built-in responsive support, allowing panels to adjust to their parent element's dimensions across resolutions and removing the need to implement custom responsive logic.

The Dashboard Layout is designed to automatically adapt to lower resolutions by transforming the entire layout into a stacked configuration so that the panels are displayed in a vertical column. By default, whenever the screen resolution is 600px or lower, this layout transformation occurs. This transformation can be modified for any user-defined resolution by setting the [`mediaQuery`](../api/dashboard-layout#mediaquery) property of the control.

The following sample demonstrates the use of the [`mediaQuery`](../api/dashboard-layout#mediaquery) property to convert the layout into a stacked one at a user-defined resolution. In this example, the layout becomes stacked when the window width is 700px or less.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/dashboard-layout/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/dashboard-layout/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/dashboard-layout/getting-started-cs3" %}

> Refer to the [TypeScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [TypeScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/fluent2/dashboard-layout/default.html) to knows how to present and manipulate data.