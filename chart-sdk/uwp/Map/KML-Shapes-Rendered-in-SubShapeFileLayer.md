---
layout: post
title: How to render KML in sub shape file layer for UWP Maps | Syncfusion®
description: Learn how to render KML shapes in a SubShapeFileLayer and configure KML files as embedded resources in UWP Maps.
platform: chart-sdk
control: SfMaps
documentation: ug
---

# How to render KML shapes in sub shape file layer for UWP Maps

A `KML` file can be rendered with the help of SubShapeFileLayer also in SfMap. The KML file should be added as an `Embedded Resource` to the application project. For more information on the Uri for KML refer [KML rendering in ShapeFileLayer](/wpf/SfMap/KML-Shapes-Rendered-in-ShapeFileLayer)

{% highlight xml %}

        <syncfusion:SfMap>
            <syncfusion:SfMap.Layers>
                <syncfusion:ShapeFileLayer Uri="KmlImportDemo.Assets.ShapeFiles.world1.shp">
                    <syncfusion:ShapeFileLayer.SubShapeFileLayers>
                        <syncfusion:SubShapeFileLayer Uri="KmlImportDemo.Assets.KmlFiles.Eu.kml"/>
                    </syncfusion:ShapeFileLayer.SubShapeFileLayers>
                </syncfusion:ShapeFileLayer>
            </syncfusion:SfMap.Layers>
        </syncfusion:SfMap>

{% endhighlight %}

![](KML-Shapes-Rendered-in-SubShapeFileLayer_images/KML-Shapes-Rendered-in-SubShapeFileLayer_img1.png)
