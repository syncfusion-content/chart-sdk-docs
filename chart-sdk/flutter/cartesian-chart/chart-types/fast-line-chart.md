---
layout: post
title: Fast Line Chart in Flutter Cartesian Chart | Syncfusion®
description: The fast line chart support in Flutter Cartesian Chart offers high-performance rendering for large datasets, enabling smooth and efficient trend visualization.
platform: chart-sdk
control: Chart
documentation: ug
---

# Fast Line Chart in Flutter Cartesian Chart

[`FastLineSeries`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/FastLineSeries-class.html) is a line chart that loads faster than [`LineSeries`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/LineSeries-class.html). You can use this when there are a large number of points to be loaded in a chart. To render a fast line chart, create an instance of [`FastLineSeries`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/FastLineSeries-class.html), and add it to the [`series`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/SfCartesianChart/series.html) collection property of [`SfCartesianChart`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/SfCartesianChart-class.html). The following properties can be used to customize the appearance of fast line segment:

* [`color`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/ChartSeries/color.html) - changes the color of the line.
* [`opacity`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/ChartSeries/opacity.html) - controls the transparency of the chart series.
* [`width`](https://pub.dev/documentation/syncfusion_flutter_charts/latest/charts/ColumnSeries/width.html) - changes the stroke width of the line.

{% tabs %}
{% highlight dart %} 

    @override
    Widget build(BuildContext context) {
        return Scaffold(
            body: Center(
                child: Container(
                    child: SfCartesianChart(
                        primaryXAxis: DateTimeAxis(),
                        series: <CartesianSeries>[
                            // Renders fast line chart
                            FastLineSeries<ChartData, DateTime>(
                                dataSource: chartData,
                                xValueMapper: (ChartData data, _) => data.x,
                                yValueMapper: (ChartData data, _) => data.y
                            )
                        ]
                    )
                )
            )
        );
    }


{% endhighlight %}
{% endtabs %}

![Fast line chart](cartesian-chart-types-images/fastline.jpg)

#### See Also

* [Color palette](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#color-palette) 
* [Color mapping](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#color-mapping-for-data-points)
* [Animation](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#animation)
* [Gradient](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#gradient-fill)
* [Empty points](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#empty-points)
* [Sorting](https://help.syncfusion.com/chart-sdk/flutter/cartesian-chart/series-customization#sorting)