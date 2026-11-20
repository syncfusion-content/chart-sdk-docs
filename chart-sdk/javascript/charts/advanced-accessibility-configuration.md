---
layout: post
title: Advanced accessibility in JavaScript Charts | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Advanced accessibility in JavaScript Charts

The JavaScript Chart control visualizes data graphically and provides accessibility customization options to improve usability for people with disabilities. The primary accessibility attributes are described in this section. Use the properties described on this page to configure the chart-level accessibility behavior. For an overview of supported standards, roles, and keyboard interaction, see [Accessibility in ##Platform_Name## Chart](accessibility).

## Chart

The chart exposes a top-level [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart#accessibility) object and additional focus and tab-order properties that are used to enhance support for screen readers. The following properties can be customized:

* [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart#accessibility) - Groups the chart-level accessibility options described below.
* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the chart, improving support for screen readers. Defaults to `null`.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the chart, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the chart can receive focus for keyboard navigation. Defaults to `false`.
* [`focusBorderColor`](https://ej2.syncfusion.com/javascript/documentation/api/chart#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the chart is focused. Defaults to `null`. Applies only when the chart is focusable.
* [`focusBorderMargin`](https://ej2.syncfusion.com/javascript/documentation/api/chart#focusbordermargin) - Defines the margin around the focus border. Defaults to `0`. Applies only when the chart is focusable.
* [`focusBorderWidth`](https://ej2.syncfusion.com/javascript/documentation/api/chart#focusborderwidth) - Specifies the width of the focus border. Defaults to `1.5`. Applies only when the chart is focusable.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart#tabindex) - Specifies the tab order of the chart element, enabling efficient keyboard navigation. Defaults to `1`.

> The focus border properties (`focusBorderColor`, `focusBorderMargin`, and `focusBorderWidth`) apply only when the chart is focusable.

The following example sets a chart-level `accessibilityDescription`, enables `focusable`, customizes the focus border, and assigns a tab order:

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

The [`series`](https://ej2.syncfusion.com/javascript/documentation/api/chart#series) property supports the customization of accessibility for data points. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesModel#accessibility) properties in each series can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesAccessibilityModel#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityDescriptionFormat`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesAccessibilityModel#accessibilitydescriptionformat) - Specifies a format for the accessibility description of each point in the series, allowing dynamic content. The format string can include placeholders such as `${series.name}`, `${point.x}`, `${point.y}`, `${point.high}`, `${point.low}`, `${point.open}`, and `${point.close}`. For example, the format `` `${series.name} : ${point.x}` `` displays the series name and x-value of the point in the accessibility description. Values such as high, low, open, and close apply only to the corresponding series types.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesAccessibilityModel#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesAccessibilityModel#focusable) - Specifies whether the series can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/seriesAccessibilityModel#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

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

The [`titleStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart#titlestyle) and [`subTitleStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart#subtitlestyle) properties allow you to customize the accessibility of the chart's title and subtitle. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/titleSettingsModel#accessibility) properties in [`titleStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart#titlestyle) and [`subTitleStyle`](https://ej2.syncfusion.com/javascript/documentation/api/chart#subtitlestyle) can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the chart title and subtitle, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the chart title and subtitle, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the title and subtitle can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the title and subtitle element, enabling efficient keyboard navigation.

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

The [`annotations`](https://ej2.syncfusion.com/javascript/documentation/api/chart#annotations) property adds text or content to specific regions of the chart. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/chartAnnotationSettingsModel#accessibility) properties in each annotation can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the annotation, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the annotation, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the annotation can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the annotation element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs483/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs483/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs483" %}

## Trendlines

The [`trendlines`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendline) collection displays trends in the data. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/trendlineModel#accessibility) properties in each trendline can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the trendline, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the trendline, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the trendline can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the trendline element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs484/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs484/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs484" %}

## Zooming toolkit

The [`zoomSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart#zoomsettings) property configures the chart's zooming behavior. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/zoomSettingsModel#accessibility) properties in [`zoomSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart#zoomsettings) customize the zoom toolkit:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the zoom toolkit items, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the zoom toolkit items, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the zoom toolkit items can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the zoom toolkit element, enabling efficient keyboard navigation.

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

The [`indicators`](https://ej2.syncfusion.com/javascript/documentation/api/chart#indicators) property analyzes trends and patterns in the data. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/technicalIndicatorModel#accessibility) properties in each indicator can be customized:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the indicators, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the indicators, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the indicators can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the indicators element, enabling efficient keyboard navigation.

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

The [`legendSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart#legendsettings) property provides information about the series shown in the chart. The following [`accessibility`](https://ej2.syncfusion.com/javascript/documentation/api/chart/legendSettingsModel#accessibility) properties in [`legendSettings`](https://ej2.syncfusion.com/javascript/documentation/api/chart#legendsettings) customize the legend's accessibility:

* [`accessibilityDescription`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers.
* [`accessibilityRole`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#accessibilityrole) - Specifies the role of the legend items, helping screen readers to identify the element appropriately.
* [`focusable`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#focusable) - Specifies whether the legend items can receive focus for keyboard navigation.
* [`tabIndex`](https://ej2.syncfusion.com/javascript/documentation/api/chart/accessibilityModel#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs487/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/chart-types-cs487/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/chart-types-cs487" %}

The following example sets a description, role, and tab order for the legend:

## Right-to-left support

The accessibility properties are independent of the chart's right-to-left (RTL) rendering. To enable RTL, set [`enableRtl`](https://ej2.syncfusion.com/javascript/documentation/api/chart#enablertl) on the chart. See [Internationalization in ##Platform_Name## Chart](internationalization) for details on RTL and locale support.

## Version compatibility

The accessibility configuration options documented on this page are available from Essential JS 2 Chart version 20.x and later. Earlier releases expose only a subset of the properties (for example, `accessibilityDescription` and `tabIndex` on the chart root).

## Troubleshooting

- **Screen reader does not announce the chart:** Ensure that `focusable` is set to `true` and that a meaningful `accessibilityDescription` is configured.
- **Focus border is not visible:** Confirm that `focusable` is set to `true` and that `focusBorderColor`, `focusBorderMargin`, and `focusBorderWidth` are configured.
- **Tab key does not move focus to the chart:** Verify that `tabIndex` is set to a non-negative value and that the chart is rendered in a visible container.
- **Series description is empty:** When using `accessibilityDescriptionFormat`, confirm that the format string uses supported placeholders (for example, `${series.name}` and `${point.x}`).
- **Legend items are skipped during keyboard navigation:** Set `focusable` to `true` in the `legendSettings.accessibility` object.

## See also

* [Accessibility in ##Platform_Name## Chart](accessibility) - WAI-ARIA roles, supported standards, and keyboard interaction.
* [WAI-ARIA specification](https://www.w3.org/TR/wai-aria-1.2) - Reference for valid roles, states, and properties.
