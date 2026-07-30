---
layout: post
title: Accessibility customization in Syncfusion Accumulation chart Component
description: Learn here all about Accessibility customization in Syncfusion ASP MVC Accumulation Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accessibility customization
publishingplatform: chart-sdk
documentation: ug
---


# Accessibility customization in ASP.NET Core Chart component

The ASP.NET Core Chart component is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the ASP.NET Core Chart component's accessibility customization are briefly explained in this section.

The chart component has a number of characteristics that enable accessibility features to be customized, including:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the chart, improving support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Allows the chart to receive focus, making it accessible via keyboard navigation.
* [`FocusBorderColor`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_FocusBorderColor) - Sets the color of the focus border, enhancing visibility when the chart is focused.
* [`FocusBorderMargin`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_FocusBorderMargin) - Defines the margin around the focus border.
* [`FocusBorderWidth`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_FocusBorderWidth) - Specifies the width of the focus border.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the chart element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Line.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/line/line.cs %}
{% endhighlight %}
{% endtabs %}

## Series

The [`Series`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeriesAccessibility.html#Syncfusion_EJ2_Charts_ChartSeriesAccessibility_AccessibilityDescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`AccessibilityDescriptionFormat`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeriesAccessibility.html#Syncfusion_EJ2_Charts_ChartSeriesAccessibility_AccessibilityDescriptionFormat) - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include the placeholders such as ${series.name}, ${point.x}, ${point.y}, ${point.high}, etc. For example, the format "${series.name} : ${point.x}" displays the series name and x-value of the point in the accessibility description. Data point's values like high, low, open, and close are applicable based on the series types.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeriesAccessibility.html#Syncfusion_EJ2_Charts_ChartSeriesAccessibility_AccessibilityRole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeriesAccessibility.html#Syncfusion_EJ2_Charts_ChartSeriesAccessibility_Focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartSeriesAccessibility.html#Syncfusion_EJ2_Charts_ChartSeriesAccessibility_TabIndex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/series/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Series.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/series/series.cs %}
{% endhighlight %}
{% endtabs %}

## Title and subtitle

In the ASP.NET Core chart component, the [`TitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TitleStyle) and [`SubTitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SubTitleStyle) attributes allow you to customize the accessibility of the chart's title and subtitle. The following [`Accessibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartTitleSettings.html#Syncfusion_EJ2_Charts_ChartTitleSettings_Accessibility) properties in [`TitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_TitleStyle) and [`SubTitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_SubTitleStyle) can be customized for accessibility:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Enables or disables the keyboard navigation focus for the title and subtitle.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/title/title.cs %}
{% endhighlight %}
{% endtabs %}

## Annotations

The [`Annotations`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Annotations) property allows you to add annotations to the chart in specific regions. The following `Accessibility` properties in [`Annotations`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Annotations) can be customized for accessibility:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the annotation, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Specifies whether annotations are focusable via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/annotation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Annotation.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/annotation/annotation.cs %}
{% endhighlight %}
{% endtabs %}

## Trendline

The `Trendlines` property allows you to display trends in the data. The following `Accessibility` properties in `Trendlines` can be customized for accessibility:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the trendline, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Specifies whether trendlines are focusable via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/trendline/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Trendline.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/trendline/trendline.cs %}
{% endhighlight %}
{% endtabs %}

## Zooming

The [`ZoomSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ZoomSettings) attributes allow you to adjust the chart's zooming capability. The following [`Accessibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartZoomSettings.html#Syncfusion_EJ2_Charts_ChartZoomSettings_Accessibility) properties in [`ZoomSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_ZoomSettings) offer the parameters for accessibility customization:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Specifies whether zoom toolkit items are focusable via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the zooming element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/zoom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Zoom.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/zoom/zoom.cs %}
{% endhighlight %}
{% endtabs %}

## Technical indicators

The [`Indicators`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Indicators) property allows you to analyze the trends and patterns in the data. The following `Accessibility` properties in [`Indicators`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_Indicators) can be customized for accessibility:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the indicators, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Specifies whether indicators are focusable via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/indicator/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Indicator.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/indicator/indicator.cs %}
{% endhighlight %}
{% endtabs %}

## Legend

The [`LegendSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) provide information about the series shown in the chart. The following [`Accessibility`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartLegendSettings.html#Syncfusion_EJ2_Charts_ChartLegendSettings_Accessibility) properties in [`LegendSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.Chart.html#Syncfusion_EJ2_Charts_Chart_LegendSettings) can be used to alter the accessibility of the chart's legend:

* [`AccessibilityDescription`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityDescription) - Provides a text description for the legend root element, enhancing support for screen readers.
* [`AccessibilityRole`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_AccessibilityRole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`Focusable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_Focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`TabIndex`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.ChartAccessibility.html#Syncfusion_EJ2_Charts_ChartAccessibility_TabIndex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/legend/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Legend.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/accessibility/legend/legend.cs %}
{% endhighlight %}
{% endtabs %}