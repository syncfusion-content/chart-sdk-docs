---
layout: post
title: Annotations in JavaScript Maps component | Syncfusion
description: Learn here all about Annotations in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Annotations 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Annotations in JavaScript Maps component

<!-- markdownlint-disable MD013 -->

Annotations allow marking specific areas of interest on a map by adding custom content such as text, shapes, images, or HTML elements. Unlike markers and data labels, annotations provide flexibility to overlay any custom HTML content at precise locations. Multiple annotations can be added to the Maps component.

## Annotation

The [`content`](../api/maps/annotationModel#content) property of the [`annotations`](../api/maps/annotationModel) accepts text content, the ID of an HTML element, or an HTML string to render custom content on the map.

<!-- markdownlint-disable MD036 -->

 ```
<script id='annotation' type="text/x-template">
    <div id='template'>
        <img src='src/maps/images/flight.png'>
    </div>
</script>

```

```ts

var maps = new ej.maps.Maps({
    annotations: [
        {
            content: '#annotation',
            x: '0%', y: '50%'
        }
    ],
    layers: [
        {
            shapeData: world_map,
        }
    ]
});
maps.appendTo('#element');

```

## Annotation customization

### Changing the z-index

The [`zIndex`](../api/maps/annotationModel#zindex) property in the [`annotations`](../api/maps/annotationModel) controls the stack order of annotation elements. A higher z-index value places the annotation above other Maps elements.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs31/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs31/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs31" %}

<!-- markdownlint-disable MD036 -->

### Positioning an Annotation

Annotations can be placed anywhere in the Maps by specifying pixel or percentage values to the [`x`](../api/maps/annotationModel#x) and [`y`](../api/maps/annotationModel#y) properties in the [`annotation`](../api/maps/annotationModel).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs32/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs32/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs32" %}

<!-- markdownlint-disable MD036 -->

### Alignment of an annotation

Annotations can be aligned using the [`horizontalAlignment`](../api/maps/annotationModel#horizontalalignment) and [`verticalAlignment`](../api/maps/annotationModel#verticalalignment) properties in the [`annotations`](../api/maps/annotationModel). The supported values are **Center**, **Far**, **Near**, and **None**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs33/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs33/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs33" %}

## Multiple annotations

Multiple annotations can be added to the Maps component by defining an array of annotation objects in the [`annotations`](../api/maps/annotationModel) property. Each annotation can be customized individually using the [`annotation`](../api/maps/annotationModel) settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs34/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs34/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs34" %}

## Creating custom annotation templates

Initialize the Maps component with annotation option, text content or ID of an HTML element or an HTML string can be specified to render a new element that needs to be displayed in the Maps by using the [`content`](../../api/maps/annotationModel#content) property. To specify the content position with [`x`](../../api/maps/annotationModel#x) and [`y`](../../api/maps/annotationModel#y) properties as mentioned in the following example.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs25/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs25" %}


```
    <svg height="150" width="400">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#C5494B;stop-opacity:1"></stop>
                <stop offset="100%" style="stop-color:#4C134F;stop-opacity:1"></stop>
            </linearGradient>
        </defs>
    </svg>
    <div id="maps-annotation" style="display: none;">
        <div id="annotation">
            <div>
                <p style="margin-left:10px;font-size:13px;font-weight:500">Facts about Africa</p>
            </div>
            <hr style="margin-top:-3px;margin-bottom:10px;border:0.5px solid #DDDDDD">
            <div>
                <ul style="list-style-type:disc; margin-left:-20px;margin-bottom:2px; font-weight:400">
                    <li>Africa is the second largest and second most populated continent in the world.</li>
                    <li style="padding-top:5px;">Africa has 54 sovereign states and 10 non-sovereign territories.
                    </li>
                    <li style="padding-top:5px;">Algeria is the largest country in Africa, where as Mayotte is the smallest.</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="compass-maps" style="display: none;">
        <img src="templates/maps/how-to/annotation/compass.png" height="75px" width="75px">
    </div>
    <style>
        #annotation {
            color: #DDDDDD;
            font-size: 12px;
            font-family: Roboto;
            background: #3E464C;
            margin: 20px;
            padding: 10px;
            border-radius: 2px;
            width: 300px;
            box-shadow: 0px 2px 5px #666;
        }
    </style>
```