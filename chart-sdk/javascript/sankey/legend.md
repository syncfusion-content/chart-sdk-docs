---
layout: post
title: Legend in JavaScript Sankey Chart component | Syncfusion
description: Learn here all about Legend in Syncfusion JavaScript Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Legend
platform: chart-sdk
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Legend in JavaScript Sankey Chart component

A legend provides a visual key that helps users understand the categories and meanings represented by nodes in the Sankey Chart. The Sankey Chart provides comprehensive legend configuration options including positioning, styling, customization, and interactive behaviors. You can enable and customize legend using the `legend` property and by injecting the `SankeyLegend` module.

This guide covers legend configuration, positioning strategies, customization options, and dynamic legend rendering events.

## Legend Settings Properties

The `legendSettings` property provides comprehensive options to configure legend appearance, behavior, and positioning. The following properties are commonly used:

### Legend Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| visible | boolean | true | Shows or hides the legend. |
| position | string | 'Auto' | Position of the legend (Auto, Top, Bottom, Left, Right, Custom). |
| width | string | null | Width of the legend container. |
| height | string | null | Height of the legend container. |
| shapeWidth | number | 10 | Width of the legend shape (icon). |
| shapeHeight | number | 10 | Height of the legend shape (icon). |
| padding | number | 8 | Padding around the legend container. |
| itemPadding | number | null | Padding between legend items. |
| shapePadding | number | 8 | Padding between the legend shape and its text. |
| background | string | 'transparent' | Background color of the legend. |
| opacity | number | 1 | Opacity of the legend container (0 to 1). |
| title | string | null | Title text for the legend. |
| enableHighlight | boolean | true | Enables highlighting of related nodes/links when legend item is clicked. |
| isInversed | boolean | false | Inverts the legend layout. |
Enable the legend and configure its basic properties such as visibility, position, and sizing. By default, the legend is automatically positioned based on available space.

## Basic Legend Configuration

Here is an example of enabling and customizing the legend:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/configuration-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/configuration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/legend/configuration-cs1" %}

## Legend Position

Control the legend position using the `position` property with the following options:

- **'Top'**: Legend appears above the Sankey Chart
- **'Bottom'**: Legend appears below the Sankey Chart
- **'Left'**: Legend appears to the left of the chart
- **'Right'**: Legend appears to the right of the chart (default for most cases)
- **'Auto'**: Automatically positions the legend based on available space
- **'Custom'**: Allows you to specify custom coordinates using the `location` property

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/legend/position-cs1" %}

## Customized Legend

Here is an example with comprehensive legend customization:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/customization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/legend/customization-cs1" %}

## Custom Legend Position

Position the legend at a specific location using the `Custom` position setting. When using `Custom` position, specify the exact X and Y coordinates where the legend should appear. This provides precise control over legend placement:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/custom-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/custom-position-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/legend/custom-position-cs1" %}

## Advanced Legend Configuration

### Dynamic Legend Customization

Use the `legendItemRendering` event to customize individual legend items before they are rendered. This event is triggered for each legend item and allows you to apply conditional styling, modify colors, or change text based on data values:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/rendering-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sankey-diagram/legend/rendering-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sankey-diagram/legend/rendering-event-cs1" %}