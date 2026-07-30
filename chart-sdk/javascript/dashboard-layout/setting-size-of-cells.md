---
layout: post
title: Cell sizing in JavaScript Dashboard Layout | Syncfusion
description: Learn here all about Setting size of cells in Syncfusion JavaScript Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Setting size of cells
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Setting size of cells in JavaScript Dashboard Layout control

The layout's dimensions are determined by the parent element's width and height. Hence, a responsive or static layout can be created by assigning a percentage or static dimension values to the parent element. The layout adapts to mobile resolutions by transforming the entire layout into a stacked orientation so that the panels will be displayed in a vertical column.

The **Dashboard Layout** is a grid-structured control divided into equal subsections known as cells. The total number of cells per row is defined by the [`columns`](../api/dashboard-layout#columns) property of the control. The width of each cell will be auto-calculated based on the total number of cells placed in a row, and the height of a cell will be the same as that of its width. The cell height can be be configured to any desired size using the [`cellAspectRatio`](../api/dashboard-layout#cellaspectratio) property (cell width/cell height ratio), which defines the cell width-to-height ratio.

The number of rows within the layout has no limits and can have any number of rows based on the panels' count and position. Panels, which act as data containers, will be placed or positioned over these cells.

## Modifying cell size

In a dashboard, the data to be held by the panel in a cell may be of different sizes; hence, different cell dimensions may be required in different scenarios. In this case, the size of these grid cells can be modified to the required size using the [`columns`](../api/dashboard-layout#columns) and [`cellAspectRatio`](../api/dashboard-layout#cellaspectratio) properties.

The following sample demonstrates how to modify cell size using the [`columns`](../api/dashboard-layout#columns) and [`cellAspectRatio`](../api/dashboard-layout#cellaspectratio) properties. In the sample below, the width of the parent element is divided into 5 equal cells based on the columns property value, resulting in the width of each cell as 100px. The height of these cells will be 50px based on the cellAspectRatio value 100/50 (i.e., for every 100px of width, 50px will be the height of the cell).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-edited-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-edited-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-edited-cs1" %}

## Setting cell spacing
The spacing between panels is defined by the [`cellSpacing`](../api/dashboard-layout#cellspacing) property. Adding spacing between the panels improves readability and visual separation between panels.

The following sample demonstrates the usage of the [`cellSpacing`](../api/dashboard-layout#cellspacing) property, for clearer data presentation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/cell-spacing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/cell-spacing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/cell-spacing-cs1" %}

## Graphical representation of layout

Cells together form the grid that underlies the layout; the grid is hidden by default. This grid-structured layout can be made visible by enabling the [`showGridLines`](../api/dashboard-layout#showgridlines) property, which clearly pictures the cells' split-up within the layout. Visible gridlines assist in panel sizing and placement during dashboard design.

In the following sample, the grid lines indicate the cells' split-up of the layout, and the data containers placed over these cells are known as panels.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/sizing-of-cells-cs2" %}

## Rendering control in right-to-left direction

It is possible to render the Dashboard Layout in a right-to-left direction by setting the [`enableRtl`](../api/dashboard-layout#enablertl) API to **true**.

The following sample demonstrates the Dashboard Layout rendered in right-to-left direction.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/rtl-cs1" %}

> Refer to the [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/dashboard-layout/default.html) to knows how to present and manipulate data.
