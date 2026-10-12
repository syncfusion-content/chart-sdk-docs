---
layout: post
title: Strip Lines in ASP.NET Core Charts | Syncfusion
description: Learn here all about Strip Lines in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Strip Line
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# Strip Lines in ASP.NET Core Charts

<!-- markdownlint-disable MD036 -->

The EJ2 chart supports horizontal and vertical strip lines, as well as customization of the strip line in both orientations.

## Horizontal Strip lines

You can create a horizontal strip line by adding a `stripline` to the vertical axis and setting the `visible` option to `true`. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/horizontal/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Horizontal.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/horizontal/horizontal.cs %}
{% endhighlight %}
{% endtabs %}

## Vertical strip lines

You can create a vertical strip line by adding a `stripline` to the horizontal axis and setting the `visible` option to `true`. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/vertical/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Vertical.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/vertical/vertical.cs %}
{% endhighlight %}
{% endtabs %}

## Customize the strip line

The starting value of a specific strip line can be customized by the `start` property. The ending value is customized by `end`. Whether the strip line starts from the origin of the axis is controlled by `startFromOrigin`. The size of the strip line is customized by `size`. The border of the strip line is customized by `border`. The order of the strip line (rendered behind or over the series elements) is customized by `zIndex`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/custom-stripline/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-stripline.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/custom-stripline/custom-stripline.cs %}
{% endhighlight %}
{% endtabs %}

## Customize the stripline text

You can customize the text rendered in a strip line by the `textStyle` property. The rotation of the strip line text is changed by the `rotation` property. The horizontal and vertical alignment of the strip line text is changed by `horizontalAlignment` and `verticalAlignment` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/custom-striptext/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-striptext.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/custom-striptext/custom-striptext.cs %}
{% endhighlight %}
{% endtabs %}

## Dash Array

You can create a dash array strip line by using the `dashArray` property. The strip lines are rendered with the specified dash array values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/dasarray/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Dash.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/dasarray/dash.cs %}
{% endhighlight %}
{% endtabs %}

## Recurrence Stripline

Strip lines can be drawn repeatedly at regular intervals, which is useful for marking an event that recurs along the timeline of the chart. The following properties are used to configure this feature.

* `isRepeat`       - It is used to enable or disable the recurrence strip line.
* `repeatEvery`    - It is used to mention the stripline interval.
* `repeatUntil`    - It specifies the end value at which point strip line has to stop repeating.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/recurrence/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Recurrence.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/recurrence/recurrence.cs %}
{% endhighlight %}
{% endtabs %}

## Size Type

The `sizeType` property refers to the size of the strip line. They are,

* `Auto`
* `Pixel`
* `Years`
* `Months`
* `Days`
* `Hours`
* `Minutes`
* `Seconds`

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/size-type/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Size-type.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/size-type/size-type.cs %}
{% endhighlight %}
{% endtabs %}

## Segment Stripline

You can create a strip line in a particular region with respect to a segment. You can enable the segment stripline using `isSegmented` property. The start and end value of this type of stripline can be defined using `segmentStart` and `segmentEnd` properties.

* `isSegmented`     - Used to enable the segment stripline.
* `segmentStart`    - Used to change the segment start value. Value correspond to associated axis.
* `segmentEnd`      - Used to change the segment end value. Value correspond to associated axis.
* `segmentAxisName` - Used to specify the name of the associated axis.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/segment/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Segment.cs" %}
{% include code-snippet/chart-sdk/asp-net-core/charts/axis/strip-line/segment/segment.cs %}
{% endhighlight %}
{% endtabs %}

