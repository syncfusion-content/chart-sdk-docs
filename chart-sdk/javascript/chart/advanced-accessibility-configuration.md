---
layout: post
title: Accessibility customization in JavaScript Chart control | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accessibility customization
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Accessibility customization in JavaScript Chart control

The JavaScript Chart control visualizes data graphically and provides accessibility customization options to improve usability for people with disabilities. The primary accessibility attributes are described in this section.

The chart control exposes attributes that enable accessibility customization, including:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the chart, improving support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Allows the chart to receive focus, making it accessible via keyboard navigation.
* [`focusBorderColor`](../api/chart#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the chart is focused.
* [`focusBorderMargin`](../api/chart#focusbordermargin) - Defines the margin around the focus border.
* [`focusBorderWidth`](../api/chart#focusborderwidth) - Specifies the width of the focus border.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the chart element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs480/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs480/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs480" %}

## Series

The [`series`](../api/chart#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* [`accessibilityDescription`](../api/chart/seriesAccessibilityModel/#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityDescriptionFormat`](../api/chart/seriesAccessibilityModel/#accessibilitydescriptionformat) - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include the placeholders such as ${series.name}, ${point.x}, ${point.y}, ${point.high}, etc. For example, the format "${series.name} : ${point.x}" displays the series name and x-value of the point in the accessibility description. Data point's values like high, low, open, and close are applicable based on the series types.
* [`accessibilityRole`](../api/chart/seriesAccessibilityModel/#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/seriesAccessibilityModel/#focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](../api/chart/seriesAccessibilityModel/#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs481/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs481/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs481" %}

## Title and subtitle

In the JavaScript chart control, the [`titleStyle`](../api/chart/#titlestyle) and [`subTitleStyle`](../api/chart/#subtitlestyle) attributes allow you to customize the accessibility of the chart's title and subtitle. The following [`accessibility`](../api/chart/titleSettingsModel/#accessibility) properties in [`titleStyle`](../api/chart/#titlestyle) and [`subTitleStyle`](../api/chart/#subtitlestyle) can be customized for accessibility:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Enables or disables the keyboard navigation focus for the title and subtitle.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs482/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs482/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs482" %}

## Annotations

The [`annotations`](../api/chart/#annotations) property allows you to add annotations to the chart in specific regions. The following [`accessibility`](../api/chart/chartAnnotationSettingsModel/#accessibility) properties in [`annotations`](../api/chart/#annotations) can be customized for accessibility:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the annotation, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Specifies whether annotations are focusable via keyboard navigation.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs483/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs483/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs483" %}

## Trendline

The [`trendlines`](../api/chart#trendlinemodule) property allows you to display trends in the data. The following [`accessibility`](../api/chart/trendlineModel/#accessibility) properties in [`trendlines`](../api/chart#trendlinemodule) can be customized for accessibility:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the trendline, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Specifies whether trendlines are focusable via keyboard navigation.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs484/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs484/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs484" %}

## Zooming

The [`zoomSettings`](../api/chart#zoomsettings) attributes allow you to adjust the chart's zooming capability. The following [`accessibility`](../api/chart/zoomSettingsModel/#accessibility) properties in [`zoomSettings`](../api/chart#zoomsettings) offer the parameters for accessibility customization:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Specifies whether zoom toolkit items are focusable via keyboard navigation.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the zooming element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs485/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs485/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs485" %}

## Technical indicators

The [`indicators`](../api/chart#indicators) property allows you to analyze the trends and patterns in the data. The following [`accessibility`](../api/chart/technicalIndicatorModel/#accessibility) properties in [`indicators`](../api/chart#indicators) can be customized for accessibility:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the indicators, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Specifies whether indicators are focusable via keyboard navigation.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs486/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs486/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs486" %}

## Legend

The [`legendSettings`](../api/chart#legendsettings) provide information about the series shown in the chart. The following [`accessibility`](../api/chart/legendSettingsModel/#accessibility) properties in [`legendSettings`](../api/chart#legendsettings) can be used to alter the accessibility of the chart's legend:

* [`accessibilityDescription`](../api/chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers.
* [`accessibilityRole`](../api/chart/accessibilityModel/#accessibilityrole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`focusable`](../api/chart/accessibilityModel/#focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`tabIndex`](../api/chart/accessibilityModel/#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs487/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs487/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs487" %}
