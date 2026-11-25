---
layout: post
title: Aztec Generator in TypeScript Barcode control | Syncfusion®
description: Learn here all about Aztec Generator in Syncfusion® TypeScript Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: Aztecgenerator
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Aztec Generator in TypeScript Barcode control

## Aztec Code

Aztec Code is a two-dimensional matrix barcode symbology organized in square layers around a distinctive square bullseye finder pattern located at the center. Aztec barcodes are widely utilized in airline boarding passes, railway ticketing, transport systems, commercial logistics, health care, and mobile ticketing applications. The data encoded in the barcode can be numeric, alphanumeric, or byte characters. Unlike QR Code and other two-dimensional barcodes, Aztec Code does not require a surrounding quiet zone (blank margin), allowing for higher information density and compact presentation in space-constrained printing environments.

Aztec Code supports two primary symbol formats:
* **Compact**: Features a 2-ring central bullseye pattern and supports 1 to 4 concentric data layers, producing symbols ranging from 15x15 to 27x27 modules.
* **Full-range**: Features a 3-ring central bullseye pattern and supports 1 to 32 concentric data layers, producing symbols ranging from 19x19 to 151x151 modules.

By default, the barcode control automatically chooses the optimal symbol form and layer count based on the input text length and error correction capacity.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs1" %}

## Customizing the Barcode color

A page or printed media with barcode often appears colorful in the background and surrounding region with other contents. In such cases the barcode can also be customized to suit the needs. You can achieve this by using the `foreColor` and `backgroundColor` properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs2" %}

## Customizing the Barcode dimension

The dimension of the barcode can be changed using the `height` and `width` properties of the barcode generator.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs3" %}

## Customizing the text

In barcode generators, use the `displayText` property to customize the barcode text and the `margin` property to set the space around the barcode. The following example displays the barcode text and sets a margin of 10 on each side.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs4" %}

## Symbol Form and Layers

Aztec Code supports specifying the symbol structure and the layer configuration:
* `symbolForm`: Defines the symbol structure. Accepted values are `'Auto'`, `'Compact'`, and `'Full'`. The default value is `'Auto'`, which automatically selects the smallest symbol form capable of holding the data.
* `layers`: Defines the number of concentric data layers around the central finder pattern. Compact symbols support 1 to 4 layers, while Full symbols support 1 to 32 layers. When set to `0` (default), the generator automatically determines the minimum layers required to encode the payload.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs5" %}

## Error Correction

Aztec Code includes built-in Reed-Solomon error correction to recover and decode damaged or partially obscured barcodes. You can configure the level of error recovery using the `errorCorrectionPercentage` property.

The `errorCorrectionPercentage` accepts an integer between 5 and 95 (the default value is 23). Higher percentages allocate more codewords to error correction, providing increased resilience against damage or physical degradation at the cost of larger barcode dimensions.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs6" %}

## Handling invalid events

The Aztec barcode generator triggers the `invalid` event when the input value or any configuration property is invalid, or when the value does not fit within the specified symbol form or rendering area.

The event arguments provide the following details:
* `message`: A localized description of the error.
* `reason`: The specific error reason code indicating the failure cause:
  * `EmptyValue`: The value is empty, undefined, or null.
  * `InvalidValueType`: The value provided is not a string or number.
  * `InvalidSymbolForm`: The specified symbol form is invalid.
  * `InvalidLayers`: The layer count is out of range for the selected symbol form.
  * `InvalidErrorCorrection`: The error correction percentage is outside 5 to 95.
  * `EncodingFailed`: The input contains unsupported characters that cannot be encoded.
  * `CapacityExceeded`: The data payload exceeds the capacity of the symbol.
  * `EncoderError`: An unexpected error occurred during encoding.
  * `InsufficientSize`: The rendering element is too small to draw the symbol clearly.

The following example demonstrates how to handle the `invalid` event in Aztec barcode generator:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/barcode-generator/aztec-cs7" %}
