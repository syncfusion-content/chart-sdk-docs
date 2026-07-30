---
layout: post
title: Annotations in JavaScript Linear gauge control | Syncfusion
description: Learn here all about Annotations in Syncfusion JavaScript Linear gauge control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Annotations 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Annotations in JavaScript Linear gauge control

Annotations are used to mark the specific area of interest in the Linear Gauge with text, HTML elements, or images. Any number of annotations can be added to the Linear Gauge component.

## Adding annotation

To render the custom HTML elements in the Linear Gauge component, use the [`content`](../api/linear-gauge/annotation/#content) property in the [`annotations`](../api/linear-gauge/annotation). The annotation can be rendered either by specifying the id of the element or specifying the code to create a new element that needs to be displayed in the gauge area.

 ```
<script id='fruits' type="text/x-template">
    <div id='apple'>
        <img src='src/lineargauge/images/apple.png'>
    </div>
</script>

```

```ts

import { LinearGauge, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations);
let gauge: LinearGauge = new LinearGauge({
    annotations: [{
        content: '#fruits',
        x: 100,
        y: 100,
        zIndex: "1"
    }]
}, '#element');

```

## Customization

The following properties are used to customize the annotation.

* [`zIndex`](../api/linear-gauge/annotation/#zindex) - Bring the annotation to the front or back, when annotation overlaps with another element.
* [`axisValue`](../api/linear-gauge/annotation/#axisvalue) - To place the annotation in the specified axis value with respect to the provided axis index.
* [`axisIndex`](api/linear-gauge/annotation/#axisindex) - To place the annotation in the specified axis with respect to the provided axis value.
* [`horizontalAlignment`](../api/linear-gauge/annotation/#horizontalalignment) - To place the annotation horizontally.
* [`verticalAlignment`](../api/linear-gauge/annotation/#verticalalignment) - To place the annotation vertically.
* [`x`](../api/linear-gauge/annotation/#x), [`y`](../api/linear-gauge/annotation/#y) - To place the annotation in the specified location.

### Changing the z-index

To change the stack order of an annotation element, the [`zIndex`](../api/linear-gauge/annotation/#zindex) property of the [`annotations`](../api/linear-gauge/annotation) can be used.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs1" %}

### Positioning an annotation

The annotation can be placed anywhere in the Linear Gauge by setting the pixel value to the [`x`](../api/linear-gauge/annotation/#x) and [`y`](../api/linear-gauge/annotation/#y) properties in the [`annotations`](../api/linear-gauge/annotation).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs2" %}

### Alignment of annotation

The annotation can be aligned horizontally and vertically by using [`horizontalAlignment`](../api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](../api/linear-gauge/annotation/#verticalalignment) properties respectively. The possible values can be **Center**, **Far**, **Near**, and **None**. The [`horizontalAlignment`](../api/linear-gauge/annotation/#horizontalalignment) and [`verticalAlignment`](../api/linear-gauge/annotation/#verticalalignment) properties are not applicable when the [`x`](../api/linear-gauge/annotation/#x) and [`y`](../api/linear-gauge/annotation/#y) properties are set in the [`annotations`](../api/linear-gauge/annotation).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs3" %}

## Multiple annotations

Multiple annotations can be added to the Linear Gauge component by adding the multiple [`annotation`](../api/linear-gauge/annotation) in the [`annotations`](../api/linear-gauge/#annotations) and customization for the annotation can be done with the [`annotation`](../api/linear-gauge/annotation).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/annotations-cs4" %}