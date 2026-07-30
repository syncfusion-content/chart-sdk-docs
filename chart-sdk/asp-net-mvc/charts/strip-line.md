---
layout: post
title: Strip Line in ASP.NET MVC Chart Component
description: Learn here all about Strip Line in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Strip Line
publishingplatform: chart-sdk
documentation: ug
---


<!-- markdownlint-disable MD036 -->

# Strip lines

<!-- markdownlint-disable MD036 -->

EJ2 chart supports horizontal and vertical strip lines and customization of stripline in both orientation.

## Horizontal Strip lines

You can create Horizontal stripline by adding the `Stripline` in the vertical axis and set `Visible` option to true. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/horizontal/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Horizontal.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/horizontal/horizontal.cs %}
{% endhighlight %}
{% endtabs %}



## Vertical Striplines

You can create vertical stripline by adding the `Stripline` in the horizontal axis and set `Visible` option to true. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/vertical/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Vertical.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/vertical/vertical.cs %}
{% endhighlight %}
{% endtabs %}



## Customize the strip line

Starting value in specific strip line can be customized by `Start` property in strip line. Similarly, ending value is customized by `End`. It can be also set for starting from the corresponding origin of the axis by `StartFromOrigin`. Size of the strip line is customized by `Size`. Border for the stripline is customized by `Border`. Order of the strip line such that whether it should be rendered in behind or over the series elements is customized by `ZIndex`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/custom-stripline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-stripline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/custom-stripline/custom-stripline.cs %}
{% endhighlight %}
{% endtabs %}



## Customize the stripline text

You can customize the text rendered in stripline by `TextStyle` property. Rotation of the strip line text can be changed by `Rotation` property. Horizontal and Vertical alignment of stripline text can be changed by `HorizontalAlignment` and `VerticalAlignment` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/custom-striptext/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-striptext.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/custom-striptext/custom-striptext.cs %}
{% endhighlight %}
{% endtabs %}



## Dash Array

You can create dash array stripline by using `DashArray` property. The Striplines are rendered with specified dash array values.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/dasarray/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dash.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/dasarray/dash.cs %}
{% endhighlight %}
{% endtabs %}



## Recurrence Stripline

 The strip lines to be drawn repeatedly at the regular intervals – this will be useful when you want to mark an event that occurs recursively along the timeline of the chart. Following properties are used to configure this feature.

* `IsRepeat`       - It is used for enable / disable the recurrence strip line.
* `RepeatEvery`    - It is used for mention the stripline interval.
* `RepeatUntil`    - It specifies the end value at which point strip line has to stop repeating.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/recurrence/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Recurrence.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/recurrence/recurrence.cs %}
{% endhighlight %}
{% endtabs %}



## Size Type

The `SizeType` property refers the size of the stripline. They are,

* `Auto`
* `Pixel`
* `Years`
* `Months`
* `Days`
* `Hours`
* `Minutes`
* `Seconds`

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/size-type/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size-type.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/size-type/size-type.cs %}
{% endhighlight %}
{% endtabs %}



## Segment Stripline

You can create stripline in a particular region with respect to segment. You can enable the segment stripline using `IsSegmented` property. The start and end value of this type of stripline can be defined using `SegmentStart` and `SegmentEnd` properties.

* `IsSegmented`     - It is used for enable the segment stripline.
* `SegmentStart`    - Used to change the segment start value. Value correspond to associated axis.
* `SegmentEnd`      - Used to change the segment end value. Value correspond to associated axis.
* `SegmentAxisName` - Used to specify the name of the associated axis.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/segment/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Segment.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/charts/axis/strip-line/segment/segment.cs %}
{% endhighlight %}
{% endtabs %}

