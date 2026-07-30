---
layout: post
title: Data label in JavaScript Maps component | Syncfusion
description: Learn here all about Data label in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Data label 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Data label in JavaScript Maps component

Data labels display information about map shapes. Enable data labels by setting the [visible](../api/maps/dataLabelSettingsModel#visible) property of [dataLabelSettings](../api/maps/dataLabelSettingsModel#) to **true**.

## Adding data labels

To display data labels, specify the field name containing the label text in the [labelPath](../api/maps/dataLabelSettingsModel#labelpath) property of `dataLabelSettings`. The field can come from either the shape data or the layer data source.

The following example sets `labelPath` from a field in the shape data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs48/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs48/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs48" %}

The following example sets `labelPath` from a field in the layer data source.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs49/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs49/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs49" %}

## Customization

Customize data label appearance using the following properties in `dataLabelSettings`:

* [border](../api/maps/dataLabelSettingsModel#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](../api/maps/dataLabelSettingsModel#fill) - To apply the color of the data labels in Maps.
* [opacity](../api/maps/dataLabelSettingsModel#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](../api/maps/dataLabelSettingsModel#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs50/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs50/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs50" %}

## Label animation

Animate data labels during initial rendering by setting the [animationDuration](../api/maps/dataLabelSettingsModel#animationduration) property in `dataLabelSettings`. Specify the duration in milliseconds.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/label-animation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/label-animation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/label-animation-cs1" %}

## Smart labels

Control label behavior when labels exceed shape boundaries using the [smartLabelMode](../api/maps/dataLabelSettingsModel#smartlabelmode) property. The following modes are available:

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs51/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs51/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs51" %}

## Intersect action

Control label behavior when labels overlap with other labels using the [intersectionAction](../api/maps/dataLabelSettingsModel#intersectionaction) property. The following options are available:

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs52/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs52/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs52" %}

## Adding data label as a template

Add custom HTML elements as data label templates using the [template](../api/maps/dataLabelSettingsModel#template) property of `dataLabelSettings`.

>The `smartLabelMode`, `intersectionAction`, `animationDuration`, `border`, `fill`, `opacity`, and `textStyle` properties do not apply to templates. Apply styles to label templates using standard CSS for HTML elements.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs53/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/default-map-cs53/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/default-map-cs53" %}
