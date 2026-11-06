---
layout: post
title: PDF417Generator in ASP.NET Core Barcode Control | Syncfusion
description: Learn here all about PDF417Generator in Syncfusion ASP.NET Core Barcode control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: PDF417Generator
documentation: ug
---

# ASP.NET Core PDF417Generator Control

## Getting Started

This section briefly explains how to include the PDF417 Barcode Generator control in your ASP.NET Core application.

### Prerequisites

- [System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)
- [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/) NuGet package installed

### Dependencies

To use the PDF417 Barcode Generator, ensure the following dependencies are added to your ASP.NET Core project:

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

### Importing

Import the Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper in the `~/Pages/_ViewImports.cshtml` file:

{% tabs %}
{% highlight C# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

### Register Script Manager

Register the script manager `<ejs-script>` at the end of `<body>` in the ASP.NET Core application layout file:

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<body>
    ...
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

### Basic PDF417 Generation

Add the PDF417 Barcode Generator tag helper to your page:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

<ejs-pdf417generator id="pdf417" value="Syncfusion" width="320px" height="140px"></ejs-pdf417generator>

{% endhighlight %}
{% endtabs %}

## PDF417

PDF417 is a stacked two-dimensional barcode defined by ISO/IEC 15438. A symbol contains 3 to 90 rows, and each row has 1 to 30 data columns. It is widely used on identification cards, driver's licenses, boarding passes, shipping labels, and inventory documents because it can store a large amount of data and still be scanned by both linear scanners and imagers.

PDF417 is a good choice when you need higher data capacity than linear barcodes, robust error correction, and a format that is practical for printed documents and transport labels.

## Basic PDF417 generation

The following code example shows how to create a simple PDF417 barcode.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/barcode-generator/pdf417generator/pdf417generator/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Custom size

You can customize the width and height of the PDF417 barcode using the `width` and `height` properties.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/barcode-generator/pdf417generator/size/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Display text customization

You can customize the display text of the PDF417 barcode using the `displayText` property. The display text can be positioned and aligned as required.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/barcode-generator/pdf417generator/text/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Background and foreground color customization

You can customize the background and foreground colors of the PDF417 barcode. Keep a strong contrast between the two colors so that the barcode can be scanned easily.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/barcode-generator/pdf417generator/color/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Margin customization

You can customize the margin around the PDF417 barcode using the `margin` property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/barcode-generator/pdf417generator/margin/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Rendering modes

### SVG Rendering

SVG is the default rendering mode for PDF417. It provides crisp scaling and better quality output.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="300px" height="120px" type="Pdf417" mode="SVG">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Canvas Rendering

You can render the PDF417 barcode in Canvas mode for a raster-based output.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="300px" height="120px" type="Pdf417" mode="Canvas">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Compaction modes

The `compactionMode` property defines how the value is compacted into codewords. Different compaction modes optimize for different data types.

### Auto

`Auto` is the default mode. It automatically selects the best compaction mode (Text, Numeric, or Byte) for each segment of the data to reduce the number of codewords.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="PDF417 1234567890" width="320px" height="140px" type="Pdf417" compactionMode="Auto">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Text

Use `Text` compaction mode for printable ASCII characters, tab, line feed, and carriage return.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="SYNCFUSION REPORT" width="320px" height="140px" type="Pdf417" compactionMode="Text">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Numeric

Use `Numeric` compaction mode for digits only. It is the most compact choice for long numeric values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="0123456789012345678901234567890" width="320px" height="140px" type="Pdf417" compactionMode="Numeric">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Byte

Use `Byte` compaction mode for any character, including non-ASCII content and international text.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion™" width="320px" height="140px" type="Pdf417" compactionMode="Byte">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Error Correction

PDF417 uses Reed-Solomon error correction to ensure data reliability. Higher error correction levels add more error-correction codewords, which improves resilience but increases symbol size.

### Error Correction Levels

- `Auto`: Uses the recommended level based on the data length. If the recommended level does not fit, it steps down until the symbol fits, but never below Level2.
- `Level0`: Adds 2 error correction codewords
- `Level1`: Adds 4 error correction codewords
- `Level2`: Adds 8 error correction codewords
- `Level3`: Adds 16 error correction codewords
- `Level4`: Adds 32 error correction codewords
- `Level5`: Adds 64 error correction codewords
- `Level6`: Adds 128 error correction codewords
- `Level7`: Adds 256 error correction codewords
- `Level8`: Adds 512 error correction codewords

### Auto level

`Auto` uses the recommended level for the data length and automatically adjusts if necessary.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="320px" height="140px" type="Pdf417" errorCorrectionLevel="Auto">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Specific error correction level

You can set a specific error correction level for more control over the barcode resilience.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="320px" height="140px" type="Pdf417" errorCorrectionLevel="Level5">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Layout Customization

### Automatic rows and columns

When both `rows` and `columns` are set to `0`, the component automatically calculates the optimal layout based on the data and available space.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="400px" height="200px" type="Pdf417">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Fixed rows

Set `rows` to a specific value (from `3` to `90`) when the symbol must maintain a fixed height.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="400px" height="200px" type="Pdf417" rows="8">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Fixed columns

Set `columns` to a specific value (from `1` to `30`) when the symbol must maintain a fixed width.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="400px" height="200px" type="Pdf417" columns="6">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

### Fixed rows and columns

You can fix both rows and columns for precise layout control.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="400px" height="200px" type="Pdf417" rows="8" columns="4">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Row height ratio

The `rowHeightRatio` property controls how tall each row is relative to the module width. The minimum supported value is `3`. Increasing this value makes the barcode taller, which can improve scannability.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="320px" height="160px" type="Pdf417" rowHeightRatio="4">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Compact PDF417

Compact PDF417 omits the right row indicator and uses a shortened stop pattern, producing a narrower symbol than standard PDF417. This is useful when horizontal space is limited but the symbol must remain readable and scannable.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="300px" height="140px" type="Pdf417" isCompact="true">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## UTF-8 and International Text

PDF417 supports UTF-8 encoded international text. When the value contains non-ASCII characters, the encoder automatically writes the data as UTF-8 and includes the ECI designator so scanners can decode the symbol correctly.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Привет Syncfusion" width="320px" height="140px" type="Pdf417" compactionMode="Byte">
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Display Text

Display text is rendered as a single line below (or above) the barcode. If the text is wider than the available width, it is truncated with an ellipsis. You can control the text position (`Top` or `Bottom`) and alignment (`Left`, `Center`, or `Right`).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pdf417generator id="pdf417" value="Syncfusion" width="320px" height="160px" type="Pdf417">
    <e-pdf417generator-displaytext text="Shipment 1234567890" position="Top" alignment="Right"></e-pdf417generator-displaytext>
</ejs-pdf417generator>
{% endhighlight %}
{% endtabs %}

## Exporting

### Export as Image

The barcode can be exported as an image and downloaded to the user's device. You can specify the file name and image format (JPG or PNG).

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
barcode.exportImage('pdf417-export', 'JPG');
```

### Export as Base64 String

You can export the barcode as a Base64-encoded image string for use in web applications or API requests.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
await barcode.exportAsBase64Image('PNG');
```

## Events

### invalid

The `invalid` event is triggered when the value or a property is invalid, or when the value does not fit in the symbol with the current configuration. Common validation cases include:

- Empty value
- Invalid text for Text compaction mode
- Invalid numeric value for Numeric compaction mode
- Unsupported compaction mode or error correction level
- Invalid row or column values
- Insufficient width or height for the data
- Data capacity exceeded

You can listen to this event and respond appropriately:

```typescript
function onInvalid(args) {
    console.log("Barcode is invalid: " + args.message);
}

var barcode = document.getElementById("pdf417").ej2_instances[0];
barcode.invalid = onInvalid;
```

## Properties

The following table shows the properties of the PDF417Generator control.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | string | undefined | Defines the value to encode in the PDF417 symbol. |
| `mode` | string | 'SVG' | Defines the rendering mode: 'SVG' or 'Canvas'. |
| `width` | string | '100%' | Defines the width of the control. |
| `height` | string | '100%' | Defines the height of the control. |
| `compactionMode` | string | 'Auto' | Defines how the value is compacted: 'Auto', 'Text', 'Numeric', or 'Byte'. |
| `errorCorrectionLevel` | string | 'Auto' | Defines the error correction level: 'Auto', 'Level0' through 'Level8'. |
| `rows` | number | 0 | Defines the number of rows (0 for automatic, 3-90 for fixed). |
| `columns` | number | 0 | Defines the number of columns (0 for automatic, 1-30 for fixed). |
| `isCompact` | boolean | false | Enables compact PDF417 rendering. |
| `rowHeightRatio` | number | 3 | Defines the height of each row as a multiple of the module width. |
| `displayText` | DisplayTextModel | {} | Defines the display text settings. |
| `margin` | MarginModel | {} | Defines the outer margin around the barcode. |
| `backgroundColor` | string | 'white' | Defines the background color of the barcode. |
| `foreColor` | string | 'black' | Defines the foreground color of the barcode. |

## DisplayText Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | string | '' | Defines the text to display. |
| `position` | string | 'Bottom' | Defines the position of the text: 'Top' or 'Bottom'. |
| `alignment` | string | 'Center' | Defines the alignment of the text: 'Left', 'Center', or 'Right'. |
| `visibility` | boolean | true | Defines whether the text is visible. |

## Margin Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `left` | number | 10 | Defines the left margin. |
| `right` | number | 10 | Defines the right margin. |
| `top` | number | 10 | Defines the top margin. |
| `bottom` | number | 10 | Defines the bottom margin. |

## Methods

### destroy

Destroys the PDF417Generator component and releases all its resources.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
barcode.destroy();
```

### getModuleName

Returns the module name of the component.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
console.log(barcode.getModuleName()); // Returns 'pdf417generator'
```

### exportImage

Exports the barcode as an image and downloads it in the browser.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
barcode.exportImage('pdf417-barcode', 'PNG');
```

### exportAsBase64Image

Returns a promise that resolves to a Base64-encoded image string.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
const imageString = await barcode.exportAsBase64Image('JPG');
```

## Accessibility

The component automatically sets `role="img"` and generates an `aria-label` for accessibility. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## Responsive and Refresh Behavior

The component uses the container size when rendering. If the container is resized after the barcode is rendered, call the `refresh()` method to redraw the barcode with the new dimensions.

```typescript
var barcode = document.getElementById("pdf417").ej2_instances[0];
barcode.refresh();
```

## Framework Integration

The PDF417 Barcode Generator integrates seamlessly into ASP.NET Core applications through Tag Helpers. It supports server-side model binding, tag helper attributes, and event handling for a native ASP.NET Core development experience.

## API Reference

### Tag Helper: `<ejs-pdf417generator>`

| Property | Type | Description |
| --- | --- | --- |
| `value` | string | Value to encode. |
| `width` | string | Width of the control. |
| `height` | string | Height of the control. |
| `mode` | string | Rendering mode: `SVG` or `Canvas`. |
| `compactionMode` | string | Data compaction mode. |
| `errorCorrectionLevel` | string | Error correction level. |
| `rows` | int | Number of rows. |
| `columns` | int | Number of columns. |
| `isCompact` | bool | Enables compact PDF417 rendering. |
| `rowHeightRatio` | int | Height of each row relative to module width. |
| `backgroundColor` | string | Background color. |
| `foreColor` | string | Foreground color. |

### Events

| Event | Description |
| --- | --- |
| `invalid` | Triggered when the value or properties are invalid, or when the symbol does not fit. |

### Methods

| Method | Description |
| --- | --- |
| `destroy()` | Destroys the component. |
| `getModuleName()` | Returns the module name. |
| `exportImage(fileName, exportType)` | Downloads the barcode as an image. |
| `exportAsBase64Image(exportType)` | Returns the barcode as a base64 image string. |

## Limitations and Constraints

- **Rows** must be within `3` to `90` when fixed, or `0` for automatic.
- **Columns** must be within `1` to `30` when fixed, or `0` for automatic.
- The symbol cannot exceed `928` codewords.
- Quiet zone is enforced on every side of the symbol.
- Row height ratio must be `3` or greater.
- Very large values may trigger a capacity exceeded error.
- If automatic error correction cannot fit the data, the implementation steps down to a lower level, but not below `Level2`.
- UTF-8 input uses more bytes than ASCII input, so international text can increase symbol size and may require adjusting layout or error correction settings.

## RTL Behavior

PDF417 is not mirrored in RTL (right-to-left) mode because the symbol structure must remain in its encoded order for proper scanning. Only the surrounding text and alignment behavior follow RTL layout expectations.

