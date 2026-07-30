---
layout: post
title: Resize panel in JavaScript Dashboard Layout | Syncfusion
description: Learn here all about Resize the panel dynamically in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Resize the panel dynamically
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Resize the panel dynamically in JavaScript Dashboard Layout control

In Dashboard Layout, the height of a panel is based on its width. When resizing the panel, both the height and width should be adjusted.

To resize the height of a panel alone, use the [`resizePanel`](../../api/dashboard-layout#resizepanel) method. In this case, the [`cellAspectRatio`](../../api/dashboard-layout#cellaspectratio) property configures the height of the cells based on the cell width-to-height ratio (cell width/cell height ratio) when the height will not be completely adjusted to the [`sizeY`](../../api/dashboard-layout/panelModel#sizey) value.

Refer to the following code snippet to determine the height of a panel.

  ```ts
  let panelContent: HTMLElement = document.getElementById("panelContent");
  let panelHeight: number = panelContent.offsetHeight;
  ```

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-resize-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-resize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/dynamic-resize-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
