---
layout: post
title: Smith chart marker in JavaScript Smithchart control | Syncfusion
description: Learn here all about Smith chart marker in Syncfusion JavaScript Smithchart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Smith chart marker 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

<!-- markdownlint-disable MD036 -->

# Smith chart marker in JavaScript Smithchart control

Markers and Datalabels are used to provide information about the data points in the series. You can add a shape to adorn each data point. By default marker and datalabel both are disabled in smithchart. You can enable both of them by setting visible property as true in marker and datalabel settings

## Marker

Default visibility of marker is false. You can enable the marker by setting property visible as true in marker settings. This will add marker for each point in the series. Using marker setting, you can customize marker differently for each series in smithchart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs1" %}

**Marker Customization**

Using marker settings in series, you can customize the marker for each series differently. Using marker settings, you can customize following properties differently for each series in the smithchart.

* [`width`] - To control the width of the marker.
* [`height`] - To control the height of the marker.
* [`fill`] - Used to customize the fill color of the marker.
* [`opacity`] - Used to customize the opacity of the marker.
* [`border`] - Used to control the width and color of the marker's border.
* [`shape`] - Used to change the shape of the marker.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs2" %}

## Datalabels

By default, datalabel is disabled. You can enable the datalabel by setting property visible as true in datalabel settings. For each point in series, data label is created. Datalabel for each series can be customized differently using datalabel settings.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs3" %}

**Datalabel customization**

Using datalabel settings in marker, you can customize the datalabel for each series differently. In datalabel, you can customize the following properties differently for each series.

* [`fill`] - Used to changes the fill color of the data label's shape.
* [`opacity`] - Used to control the opacity of the data label's shape.
* [`border`] - Used to customize the width and color of the border.
* [`textStyle`] - Used to customize the font color, width and size.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-marker-cs4" %}