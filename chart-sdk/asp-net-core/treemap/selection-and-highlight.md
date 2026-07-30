---
layout: post
title: Selection And Highlight in ASP.NET Core Treemap Component
description: Learn here all about Selection And Highlight in Syncfusion ASP.NET Core Treemap component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Selection And Highlight
publishingplatform: chart-sdk
documentation: ug
---

# Selection and Highlight

## Selection

Selection is used to select a particular group or item to differentiate from other items. Each item or each group can be selected and deselected while interacting with the items. The corresponding Treemap items are also selected while tapping a specific legend item, and vice versa. 

The `fill` property is used to change the selected item color. The `color` and the `width` properties are used to customize the selected item border, and the selection is enabled by using the `enable` property  to **true** in the `selectionSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/selection-highlight/selection/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Selection.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/selection-highlight/selection/selection.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap item with selection](images/HighlightandSelection/Selection.png)

## Highlight

Highlight is used to highlight an item or group from other items or groups. Each item or each group can be highlighted by hovering the mouse over the items. The corresponding Treemap items are also be highlighted while hovering over a specific legend item, and vice versa. 

The `fill` property is used to change the highlighted item color. The `color` and the `width` properties are used to customize the highlighted item border, and the highlight is enabled by setting the `enable` property to **true** in the `highlightSettings`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/selection-highlight/highlight/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/treemap/selection-highlight/highlight/highlight.cs %}
{% endhighlight %}
{% endtabs %}



![TreeMap item with highlight ](images/HighlightandSelection/Highlight.png)