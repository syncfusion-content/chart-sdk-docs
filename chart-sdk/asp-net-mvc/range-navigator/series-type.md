---
layout: post
title: Syncfusion Series Type in ASP.NET MVC Range Navigator Component
description: Learn here all about Series Type in Syncfusion ASP.NET MVC Range Navigator component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Series Type
publishingplatform: chart-sdk
documentation: ug
---


# Range Navigator Series Types

To render the data, the Range Selector supports six types of series.

<!-- markdownlint-disable MD036 -->

## Line

<!-- markdownlint-disable MD036 -->

To render a line series, use series `type` as **Line**. By default, the line series is rendered in the Range Selector.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/line/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Line.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/line/line.cs %}
{% endhighlight %}
{% endtabs %}



![Line Chart](images/series-type/line.png)

## Area

To render an area series, use series `type` as **Area**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/area/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Area.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/area/area.cs %}
{% endhighlight %}
{% endtabs %}



![Area Chart](images/series-type/area.png)

## StepLine

To render a Step line series, use series `type` as **Step Line**

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/step/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Step.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/step/step.cs %}
{% endhighlight %}
{% endtabs %}



![Step Line Chart](images/series-type/stepline.png)

## Spline

To render a Spline series, use series `type` as **Spline**

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/spline/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Spline.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/spline/spline.cs %}
{% endhighlight %}
{% endtabs %}



![Spline chart](images/series-type/spline.png)

## Spline Area

To render a Spline area series, use series `type` as **SplineArea**

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/splinearea/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SplineArea.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/splinearea/splinearea.cs %}
{% endhighlight %}
{% endtabs %}



![Spline area chart](images/series-type/splinearea.png)

## Column

To render a Column series, use series `type` as **Column**

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/column/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Column.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/range-selector/series-type/column/column.cs %}
{% endhighlight %}
{% endtabs %}



![Column chart](images/series-type/column.png)