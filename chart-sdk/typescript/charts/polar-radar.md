---
layout: post
title: Polar and radar charts in TypeScript Charts | Syncfusion
description: Learn here all about Polar radar in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---
<!-- markdownlint-disable MD036 -->

# Polar and radar charts in TypeScript Charts

Polar and radar charts display values using angular and radial axes. Polar charts plot points on a circular coordinate system, while radar charts connect values across categories to support comparative analysis.

## Polar chart

To render a polar series, use series [`type`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#type-string) as `Polar` and inject `PolarSeries` module using `Chart.Inject(PolarSeries)` method.

### Draw types

Use the series `drawType` property to render a polar series as `Line`, `Column`, `Area`, `RangeColumn`, `Spline`, `Scatter`, `StackingArea`, or `StackingColumn`. The default value is `Line`.

#### Line

To render the line draw type, set the series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesmodel#drawtype) to `Line` and inject `LineSeries` module using `Chart.Inject(LineSeries)` method.

The [`isClosed`](https://ej2.syncfusion.com/documentation/api/chart/seriesmodel#isclosed) property specifies whether the first and last points of a polar line series are connected to form a closed path. The default value is `true`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs162/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs162/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs162" %}

#### Spline

To render a spline draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `Spline` and inject `SplineSeries` module using `Chart.Inject(SplineSeries)` method.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs163/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs163/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs163" %}

#### Area

To render a area draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `Area` and inject `AreaSeries` module using `Chart.Inject(AreaSeries)` method.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs164/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs164/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs164" %}

#### Stacked area

To render a stacked area draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `StackingArea` and inject `StackingAreaSeries` module using `Chart.Inject(StackingAreaSeries)` method.
 
 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs165/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs165/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs165" %}

#### Column

To render a column draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `Column`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs166/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs166/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs166" %}

#### Stacked column

To render a stacked column draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `StackingColumn`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs167/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs167/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs167" %}

#### Range column

To render a range column draw type, use series [`drawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `RangeColumn`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs168/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs168/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs168" %}

#### Scatter

To render a scatter draw type, use series [`DrawType`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#drawtype-string) as `Scatter` and inject `ScatterSeries` module using `Chart.Inject(ScatterSeries)` method.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs169/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs169/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs169" %}

## Radar chart

To render a radar series, use series [`type`](https://ej2.syncfusion.com/documentation/api/chart/seriesModel#type-string) as `Radar` and inject `PolarSeries` module using `Chart.Inject(RadarSeries)` method.

### Draw type

Similar to a polar series, use the `drawType` property to render a radar series as `Line`, `Column`, `Area`, `RangeColumn`, `Spline`, `Scatter`, `StackingArea`, or `StackingColumn`. The default value is `Line`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs170/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs170/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs170" %}

## Axis customization

### Start angle

Use the [`startAngle`](https://ej2.syncfusion.com/documentation/api/chart/axis#startangle) property of the primary X-axis to rotate the polar or radar chart. The default value is `0` degrees.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs171/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs171/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs171" %}

### Axis coefficient

Use the [`coefficient`](https://ej2.syncfusion.com/documentation/api/chart/axis#coefficient) property of the primary X-axis to control the radius of the polar or radar chart. The default value is `100`.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs172/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-types-cs172/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-types-cs172" %}

## See also

- [Data labels](./data-labels)
- [Tooltip](./tool-tip)
- [Polar chart](./chart-types/polar)
- [Radar chart](./chart-types/radar)
