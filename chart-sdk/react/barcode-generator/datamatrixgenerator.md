---
layout: post
title: Datamatrixgenerator in React Barcode component | Syncfusion®
description: Learn here all about Datamatrixgenerator in Syncfusion® React Barcode component of Syncfusion Essential® JS 2 and more.
control: Datamatrixgenerator 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Datamatrixgenerator in React Barcode component

## Data Matrix

DataMatrix Barcode is a two dimensional barcode that consists of a grid of dark and light dots or blocks forming square or rectangular symbol. The data encoded in the barcode can either be numbers or alphanumeric. They are widely used in printed media such as labels and letters. You can read it easily with the help of a barcode reader and mobile phones.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dataMatrix-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dataMatrix-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dataMatrix-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/dataMatrix-cs1" %}

## Customizing the Barcode color

A page or printed media with barcode often appears colorful in the background and surrounding region with other contents. In such cases the barcode can also be customized to suit the needs. You can achieve this by using the foreColor property .

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/customize-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/customize-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/customize-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/customize-cs1" %}

## Customizing Data Matrix Dimensions

The dimension of the barcode can be changed using the height and width property of the barcode generator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dimension-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dimension-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/dimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/dimension-cs1" %}

### xDimension

The `xDimension` property controls the width and height of each square module in the Data Matrix barcode. The value must be a finite number greater than `0`.

Use the `sizeMode` property to specify how the Data Matrix Generator applies the configured `xDimension`. The supported modes are:

- `Fit`: Preserves the configured `xDimension` when the Data Matrix barcode fits within the available drawing area. If it does not fit, the component reduces the value to the largest whole-pixel size that fits. It does not increase the value to fill unused space.
- `XDimension`: Always preserves the configured `xDimension`. The barcode size is calculated based on its encoded module count and may exceed the configured component dimensions.

If `sizeMode` is not specified, the Data Matrix barcode continues to render based on the configured `width` and `height`.

#### Fit the Data Matrix using xDimension

The following example sets `sizeMode` to `Fit`. The configured `xDimension` is kept when the Data Matrix barcode fits in the component; otherwise it is reduced to the largest whole-pixel size that fits.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-fit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-fit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-fit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-fit-cs1" %}

#### Preserve the Data Matrix module size using xDimension

The following example sets `sizeMode` to `XDimension`. The configured `xDimension` is always kept, so the Data Matrix barcode may extend beyond the configured `width` and `height`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/xdimension-cs1" %}

## GS1 Data Matrix

GS1 Data Matrix is a standardized Data Matrix barcode format that uses GS1 Application Identifiers (AIs) to encode structured business information such as product identifiers, batch numbers, expiration dates, and serial numbers.

The [`enableGS1`](https://ej2.syncfusion.com/react/documentation/api/barcode/barcodeGenerator#enablegs1) property enables GS1-compliant Data Matrix barcode generation.

**Allowed Input Characters:** GS1 Data Matrix supports numeric, alphanumeric, and supported special characters. Data is encoded using GS1 Application Identifiers (AIs), enabling structured business information such as product identifiers, batch numbers, expiration dates, and serial numbers to be stored within a compact barcode.

The following example demonstrates how to generate a GS1 Data Matrix barcode:

{% tabs %}
{% highlight jsx tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrix-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrix-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrix-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrix-cs1" %}

![GS1 Data Matrix Generator](images/Gs1-DataMatrix.png)

>**Note**: The Barcode Generator validates the input data before generating the barcode. If the input data is invalid or cannot be encoded using the selected settings, the `invalid` event is triggered.

**Common Validation Errors**

| Error | Cause | Solution |
|---|---|---|
| Data too long | Exceeds symbol capacity | Reduce data or change encoding |
| Empty value | No data provided | Supply at least one character |
| Invalid encoding | Unsupported encoding mode | Use Auto, ASCII, ASCIINumeric, or Base256 |
| Invalid character for mode | Character not allowed in selected mode | Change encoding or data |

The following example demonstrates how to handle validation errors:

{% tabs %}
{% highlight jsx tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrixvalidation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrixvalidation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrixvalidation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/gs1datamatrixvalidation-cs1" %}

## Customizing the text

In barcode generators you can customize the barcode text by using the display text property .

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/text-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/text-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/datamatrix/text-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/datamatrix/text-cs1" %}