---
layout: post
title: PDF417Generator in JavaScript Barcode control | Syncfusion®
description: Learn here all about PDF417Generator in Syncfusion® JavaScript Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: Pdf417generator
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# PDF417Generator in JavaScript Barcode control

## PDF417 Overview

PDF417 is a two-dimensional barcode that can store large amounts of text, numeric, and binary data. It is commonly used in applications such as shipping labels, identity cards, boarding passes, inventory tracking, and document management systems.

Unlike traditional one-dimensional barcodes, PDF417 can hold significantly more information and includes built-in error correction, allowing scanners to read the barcode even when it is partially damaged or obscured.

The Syncfusion PDF417 Generator automatically:

* Encodes the provided data into a PDF417 barcode.
* Selects an efficient data compaction mode.
* Applies appropriate error correction.
* Calculates an optimal barcode layout based on the available size.

For most scenarios, only the `value` property is required to generate a barcode.

## Getting Started

### Dependencies

To use the PDF417 Generator in JavaScript, ensure the required Syncfusion Essential JS 2 packages are installed:

```javascript
|-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
```

### Package Import

Import the PDF417 module:

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';
```

### Basic PDF417 Generation

The following example creates a PDF417 barcode that encodes the specified value.

```html
<script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js"></script>
```

```html
<div id="barcode"></div>
```

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '120px',
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');
```

For most applications:
* `value` specifies the data to encode.
* `width` controls the barcode width.
* `height` controls the barcode height.

The control automatically determines the barcode structure and error correction settings.

## Rendering Modes

The PDF417 Generator supports the following rendering modes through the `mode` property:

| Mode | Description |
|---|---|
| `SVG` | Renders the barcode as vector graphics. |
| `Canvas` | Renders the barcode to an HTML5 canvas. Useful for bitmap-based workflows and custom canvas processing. |

### SVG Mode (Default)

SVG mode provides crisp rendering regardless of zoom level or display resolution.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '120px',
    mode: 'SVG',
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');
```

### Canvas Mode

Canvas mode renders the barcode directly onto an HTML5 canvas.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '120px',
    mode: 'Canvas',
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');
```

## Customizing PDF417 Dimensions

The size of the PDF417 barcode is controlled by the `width` and `height` properties, as shown in the **Custom size** example above.

### xDimension

The `xDimension` property specifies the width, in pixels, of the smallest bar in the PDF417 barcode. It must be a finite number greater than `0`.

The following properties control the PDF417 dimensions:

- `xDimension`: Specifies the width of the smallest bar.
- `rowHeightRatio`: Specifies the row height relative to `xDimension`. The row height is calculated as `xDimension * rowHeightRatio`.
- `sizeMode`: Determines how `xDimension` is applied.

The `sizeMode` property supports:

- `Fit`: Uses the configured `xDimension` when the barcode fits within the available area. Otherwise, the value is reduced to fit.
- `XDimension`: Preserves the configured `xDimension`. The barcode may exceed the configured `width` and `height`.

XDimension-based sizing is applied only when both `xDimension` and `sizeMode` are configured. Otherwise, the barcode is rendered based on its `width` and `height`.

#### Fit the PDF417 barcode using xDimension

The following example sets `sizeMode` to `Fit`. The configured `xDimension` is kept when the symbol fits in the component; otherwise it is reduced to the largest whole-pixel size that fits.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-fit-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-fit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-fit-cs1" %}

#### Preserve the PDF417 module width using xDimension

The following example sets `sizeMode` to `XDimension`. The configured `xDimension` is always used, and the rendered area grows if the symbol is larger than the configured `width` and `height`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-xdimension-cs1" %}

## PDF417-specific samples
## PDF417 Configuration

### Compaction Modes

PDF417 supports multiple compaction modes that optimize how data is stored within the barcode.

For most scenarios, use the default `Auto` mode. It automatically selects the most efficient encoding method for the supplied data.

| Compaction Mode | Description | Typical Usage |
|---|---|---|
| `Auto` | Automatically selects the optimal encoding mode. | Recommended for most applications. |
| `Text` | Optimized for textual data. | Names, addresses, URLs, and documents. |
| `Numeric` | Optimized for numeric values. | Tracking numbers and identifiers. |
| `Byte` | Encodes binary and non-ASCII data. | International text and binary content. |

If the selected compaction mode contains unsupported characters, the barcode is not generated and the `invalid` event is triggered.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs1" %}

### Error Correction Levels

Error correction helps scanners successfully read a barcode even if it becomes partially damaged, dirty, or obscured.

Higher error correction levels improve reliability but increase barcode size.

PDF417 uses Reed-Solomon error correction. Higher levels add more error-correction codewords, which improves resilience but increases symbol size.

- `Level0` adds 2 codewords
- `Level1` adds 4 codewords
- `Level2` adds 8 codewords
- `Level3` adds 16 codewords
- `Level4` adds 32 codewords
- `Level5` adds 64 codewords
- `Level6` adds 128 codewords
- `Level7` adds 256 codewords
- `Level8` adds 512 codewords

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs2" %}

### Row Height Ratio

The `rowHeightRatio` property controls the height of individual PDF417 rows.

* Smaller values create shorter barcodes.
* Larger values create taller barcodes.
* Taller barcodes may improve scanning performance in some environments.

The minimum supported value is `3`, which follows the PDF417 specification.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs3/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs3" %}

### Compact PDF417

Compact PDF417 (also known as Truncated PDF417) reduces the overall barcode width.

Enable compact mode through the `isCompact` property:

| Standard PDF417 | Compact PDF417 |
|---|---|
| Better scanner compatibility | Saves horizontal space |
| Recommended for most applications | Useful when label width is limited |

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs4/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs4" %}

### Rows and Columns

By default, the control automatically determines the number of rows and columns required for the encoded data.

You can specify fixed values when a particular barcode layout is required.

| Property | Supported Range |
|---|---|
| `rows` | 3 to 90 |
| `columns` | 1 to 30 |

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/Pdf417-cs5/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs5" %}

## Barcode Customization

### Dimensions

Use the `width` and `height` properties to control barcode size.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '500px',
    height: '200px',
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');
```

### Display Text

Use the `displayText` property to show a user-friendly label along with the barcode.

Supported options:

| Property | Description |
|---|---|
| `text` | Text displayed with the barcode. |
| `position` | Displays text above or below the barcode (`'Top'` or `'Bottom'`). |
| `alignment` | Text alignment (`'Left'`, `'Center'`, or `'Right'`). |
| `visibility` | Shows or hides the display text. |

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '150px',
    value: '1234567890',
    displayText: {
        text: 'PDF417 Document ID',
        position: 'Top',
        alignment: 'Center'
    }
});
barcode.appendTo('#barcode');
```

### Colors

Customize barcode colors using:
* `foreColor`: Barcode bar color.
* `backgroundColor`: Barcode background surface color.

**Best Practice:** Use high-contrast color combinations such as dark bars on a light background to ensure reliable scanning.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '120px',
    value: 'Syncfusion',
    backgroundColor: '#f7f7f7',
    foreColor: '#b91c1c'
});
barcode.appendTo('#barcode');
```

### Margins

Use the `margin` property to add spacing around the barcode. Margins help preserve the quiet zone required for successful barcode scanning.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '320px',
    height: '140px',
    value: 'Syncfusion',
    margin: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
    }
});
barcode.appendTo('#barcode');
```

## International Character Support

The PDF417 Generator supports Unicode and international characters. When the input contains non-ASCII characters, the barcode is encoded using an appropriate Unicode-compatible encoding, enabling supported scanners to correctly decode the data.

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '350px',
    height: '150px',
    value: 'こんにちは Syncfusion'
});
barcode.appendTo('#barcode');
```

No additional configuration is required.

## Exporting

### Export as Image

Download the barcode as a PNG or JPG image using the `exportImage` method:

| Supported Format | Description |
|---|---|
| `'PNG'` | Lossless image format. |
| `'JPG'` | Compressed image format with smaller file size. |

```html
<button id="export">Download Barcode</button>
```

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');

document.getElementById('export').addEventListener('click', function () {
    barcode.exportImage('pdf417', 'PNG');
});
```

### Export as Base64

Generate a Base64 image string for use in image elements, email templates, reports, or remote APIs:

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    value: 'Syncfusion'
});
barcode.appendTo('#barcode');

barcode.exportAsBase64Image('PNG').then(function (imageData) {
    console.log(imageData);
});
```

## Validation and Events

### invalid Event

The `invalid` event occurs when barcode generation fails because of invalid input or unsupported settings.

Common causes include:
* Empty value.
* Unsupported characters for the selected compaction mode.
* Invalid row or column configuration.
* Insufficient barcode dimensions.
* Data exceeding PDF417 capacity limits.

```html
<div id="barcode"></div>
<p id="error" role="alert"></p>
```

```javascript
var barcode = new ej.barcodegenerator.PDF417Generator({
    value: 'SYNCFUSION',
    width: '300px',
    height: '120px',
    invalid: function (args) {
        document.getElementById('error').textContent = args.message;
    }
});
barcode.appendTo('#barcode');
```

## Accessibility

The PDF417 Generator includes built-in accessibility support:
* Applies `role="img"` automatically.
* Generates accessible labels for screen readers.
* Supports localization of accessibility text and validation messages.

## Localization

Use the Syncfusion `L10n` framework to localize the screen reader label and validation messages. Set the control locale to the matching culture:

```javascript
ej.base.L10n.load({
    'de': {
        'PDF417Generator': {
            ariaLabel: 'PDF417-Strichcode',
            EmptyValue: 'Der Wert ist leer.'
        }
    }
});

var barcode = new ej.barcodegenerator.PDF417Generator({
    width: '300px',
    height: '120px',
    value: 'Syncfusion',
    locale: 'de'
});
barcode.appendTo('#barcode');
```

## Best Practices

* Use `Auto` compaction mode unless a specific encoding mode is required.
* Use `Auto` error correction for most applications.
* Ensure sufficient barcode width and height for the amount of encoded data.
* Use high-contrast foreground and background colors.
* Preserve adequate quiet zones around the barcode.
* Test generated barcodes with the target scanner devices before production deployment.
* Use standard PDF417 unless compact mode is required to save space.

## Limitations and Constraints

* A PDF417 symbol has a maximum storage capacity defined by the PDF417 specification (up to 928 codewords).
* Fixed `rows` values must be between `3` and `90`.
* Fixed `columns` values must be between `1` and `30`.
* `rowHeightRatio` must be greater than or equal to `3`.
* Larger amounts of data require larger barcode dimensions.
* International text may require additional storage space compared to ASCII-only content.
