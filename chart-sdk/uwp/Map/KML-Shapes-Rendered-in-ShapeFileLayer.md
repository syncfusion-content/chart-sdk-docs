---
layout: post
title: How to render KML in shape file layer for UWP Maps | Syncfusion®
description: Learn how to render KML shapes in a ShapeFileLayer and configure KML files as embedded resources in UWP Maps.
platform: chart-sdk
control: SfMap
documentation: ug
---

# How to render KML shapes in shape file layer for UWP Maps

A `KML` file can be rendered with the help of the ShapeFileLayer in SfMap. The KML file should be added as an Embedded Resource to the application project. The URI of the KML file must be given in the following order:

*  Namespace of project
* Folder names
* KmlFileName.kml



{% highlight xml %}

        <syncfusion:SfMap>
            <syncfusion:SfMap.Layers>
                <syncfusion:ShapeFileLayer Uri="KmlImportDemo.Assets.KMLFiles.Eu.kml">                    
                </syncfusion:ShapeFileLayer>
            </syncfusion:SfMap.Layers>
        </syncfusion:SfMap>

{% endhighlight %}

![](KML-Shapes-Rendered-in-ShapeFileLayer_images/KML-Shapes-Rendered-in-ShapeFileLayer_img1.png)



