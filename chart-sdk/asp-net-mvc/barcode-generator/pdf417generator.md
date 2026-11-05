---
layout: post
title: PDF417Generator in ASP.NET MVC Barcode Control | Syncfusion
description: Learn here all about PDF417Generator in Syncfusion ASP.NET MVC Barcode control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: PDF417Generator
publishingplatform: chart-sdk
documentation: ug
---

# ASP.NET MVC PDF417Generator Control

## PDF417

PDF417 is a stacked two-dimensional barcode defined by ISO/IEC 15438. A symbol contains 3 to 90 rows, and each row has 1 to 30 data columns. It is widely used on identification cards, driver's licenses, boarding passes, shipping labels, and inventory documents because it can store a large amount of data and still be scanned by both linear scanners and imagers.

PDF417 is a good choice when you need higher data capacity than linear barcodes, robust error correction, and a format that is practical for printed documents and transport labels.

## Basic PDF417 generation

The following code example shows how to create a simple PDF417 barcode.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/pdf417generator/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pdf417generator.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/pdf417generator/pdf417generator.cs %}
{% endhighlight %}
{% endtabs %}

## Custom size

You can customize the width and height of the PDF417 barcode using the `Width` and `Height` properties.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/size/size.cs %}
{% endhighlight %}
{% endtabs %}

## Display text customization

You can customize the display text of the PDF417 barcode using the `DisplayText` property. The display text can be positioned and aligned as required.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/text/text.cs %}
{% endhighlight %}
{% endtabs %}

## Background and foreground color customization

You can customize the background and foreground colors of the PDF417 barcode. Keep a strong contrast between the two colors so that the barcode can be scanned easily.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Color.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/color/color.cs %}
{% endhighlight %}
{% endtabs %}

## Margin customization

You can customize the margin around the PDF417 barcode using the `Margin` property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/margin/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}

## Rendering modes

The `Mode` property defines how the barcode is rendered. PDF417 supports two rendering modes: SVG and Canvas.

### SVG Rendering

SVG is the default rendering mode for PDF417. It provides crisp scaling and better quality output.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Mode("SVG")
    .Render())
{% endhighlight %}
{% endtabs %}

### Canvas Rendering

You can render the PDF417 barcode in Canvas mode for a raster-based output.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Mode("Canvas")
    .Render())
{% endhighlight %}
{% endtabs %}

## Data compaction

PDF417 converts the value into codewords using one of three compaction modes. Use the `CompactionMode` property to choose the mode.

| Mode | Characters | Density |
| --- | --- | --- |
| `Auto` (default) | Any | Switches between Text, Numeric and Byte compaction to produce the fewest codewords. |
| `Text` | Printable ASCII (32-126), tab, line feed and carriage return | About 2 characters per codeword. |
| `Numeric` | Digits 0-9 | About 2.9 digits per codeword. Best for long numbers. |
| `Byte` | Any character | 1.2 bytes per codeword. |

In `Auto` mode, runs of 13 or more digits are encoded with Numeric compaction, runs of text with Text compaction, and other characters with Byte compaction. Characters outside the ASCII range are encoded as UTF-8 and the symbol includes an ECI (Extended Channel Interpretation) designator so that scanners decode them correctly. If a fixed mode cannot encode the value (for example, letters with `Numeric`), the `invalid` event is triggered.

### Auto compaction mode

`Auto` is the default mode. It automatically selects the best compaction mode (Text, Numeric, or Byte) for each segment of the data to reduce the number of codewords.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("PDF417 1234567890")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Auto")
    .Render())
{% endhighlight %}
{% endtabs %}

### Text compaction mode

Use `Text` compaction mode for printable ASCII characters, tab, line feed, and carriage return.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("SYNCFUSION REPORT")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Text")
    .Render())
{% endhighlight %}
{% endtabs %}

### Numeric compaction mode

Use `Numeric` compaction mode for digits only. It is the most compact choice for long numeric values.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("0123456789012345678901234567890")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Numeric")
    .Render())
{% endhighlight %}
{% endtabs %}

### Byte compaction mode

Use `Byte` compaction mode for any character, including non-ASCII content and international text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion™")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Byte")
    .Render())
{% endhighlight %}
{% endtabs %}

## Error correction level

PDF417 uses Reed-Solomon error correction. Level n (0-8) adds 2^(n+1) error correction codewords, so higher levels let the barcode be read even when it is damaged, at the cost of a larger symbol. By default (`Auto`), the level recommended by ISO/IEC 15438 for the amount of data is used:

| Data codewords | Recommended level |
| --- | --- |
| 1 - 40 | 2 |
| 41 - 160 | 3 |
| 161 - 320 | 4 |
| 321 - 863 | 5 |

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
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("320px")
    .Height("140px")
    .ErrorCorrectionLevel("Auto")
    .Render())
{% endhighlight %}
{% endtabs %}

### Specific error correction level

You can set a specific error correction level for more control over the barcode resilience.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("320px")
    .Height("140px")
    .ErrorCorrectionLevel("Level5")
    .Render())
{% endhighlight %}
{% endtabs %}

> **Note:** For values close to the maximum capacity, the automatic level is lowered (never below level 2) so that the value fits. An explicit level is never changed; if the value does not fit, the `invalid` event is triggered.

## Rows and columns

Use the `Columns` (1-30) and `Rows` (3-90) properties to control the shape of the symbol. When both are 0 (the default), they are calculated automatically. When only one is set, the other is calculated from the amount of data. A symbol holds at most 928 codewords, so `rows` multiplied by `columns` can be larger than the data but the used codewords never exceed 928.

### Automatic rows and columns

When both `rows` and `columns` are set to `0`, the component automatically calculates the optimal layout based on the data and available space.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("400px")
    .Height("200px")
    .Render())
{% endhighlight %}
{% endtabs %}

### Fixed rows

Set `Rows` to a specific value (from `3` to `90`) when the symbol must maintain a fixed height.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion Essential JS 2")
    .Width("400px")
    .Height("150px")
    .Rows(8)
    .Render())
{% endhighlight %}
{% endtabs %}

### Fixed columns

Set `Columns` to a specific value (from `1` to `30`) when the symbol must maintain a fixed width.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("400px")
    .Height("200px")
    .Columns(6)
    .Render())
{% endhighlight %}
{% endtabs %}

### Fixed rows and columns

You can fix both rows and columns for precise layout control.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("400px")
    .Height("200px")
    .Rows(8)
    .Columns(4)
    .Render())
{% endhighlight %}
{% endtabs %}

## Compact PDF417

Compact PDF417 omits the right row indicator and shortens the stop pattern to a single bar. It is narrower than a standard PDF417 symbol and is useful when horizontal space is limited and the symbol will not be damaged. Set the `IsCompact` property to `true` to render it.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("250px")
    .Height("100px")
    .IsCompact(true)
    .Render())
{% endhighlight %}
{% endtabs %}

## Row height ratio

The `RowHeightRatio` property controls how tall each row is relative to the module width. The minimum supported value is `3`. Increasing this value makes the barcode taller, which can improve scannability.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("320px")
    .Height("160px")
    .RowHeightRatio(4)
    .Render())
{% endhighlight %}
{% endtabs %}

## UTF-8 and International Text

PDF417 supports UTF-8 encoded international text. When the value contains non-ASCII characters, the encoder automatically writes the data as UTF-8 and includes the ECI designator so scanners can decode the symbol correctly.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Привет Syncfusion")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Byte")
    .Render())
{% endhighlight %}
{% endtabs %}

## Validation

The `invalid` event is triggered, and nothing is drawn, when the symbol cannot be created. The event argument's `message` describes the reason:

- The value is empty.
- The value contains characters that the selected compaction mode does not support.
- `rows` is not 0 or 3-90, `columns` is not 0 or 1-30, or they cannot hold the value.
- `errorCorrectionLevel` is not Auto or 0-8.
- The value is too long for the symbol with the current settings.
- The width and height are too small to draw the symbol after the margins and text.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Rows(2)
    .Invalid("onInvalid")
    .Render())
{% endhighlight %}
{% highlight c# tabtitle="Validation.cs" %}
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Syncfusion.EJ2.BarcodeGenerator;

namespace EJ2CoreSampleBrowser.Controllers.Barcode
{
    public partial class BarcodeController : Controller
    {
        public ActionResult Validation()
        {
            return View();
        }
    }
}
{% endhighlight %}
{% highlight html tabtitle="JavaScript" %}
<script type="text/javascript">
function onInvalid(args) {
    console.log(args.message);
}
</script>
{% endhighlight %}
{% endtabs %}

## Localization and accessibility

The control sets `role="img"` and an `aria-label` (for example, "PDF417 barcode: Syncfusion") on its element so that screen readers announce it. The label and the `invalid` messages can be localized through the `PDF417Generator` locale key.

```html
<script type="text/javascript">
// Import L10n from EJ2 base
var L10n = window.L10n;

L10n.load({
    'de': {
        'PDF417Generator': {
            ariaLabel: 'PDF417-Strichcode',
            EmptyValue: 'Der Wert ist leer.',
            CapacityExceeded: 'Der Wert ist zu lang.'
        }
    }
});
</script>

@(Html.EJS().PDF417Generator("container")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Locale("de")
    .Render())
```

The localizable keys are `ariaLabel`, `EmptyValue`, `InvalidTextValue`, `InvalidNumericValue`, `InvalidCompactionMode`, `InvalidErrorCorrectionLevel`, `InvalidRows`, `InvalidColumns`, `CapacityExceeded` and `InsufficientSize`.

## Exporting

### Export as Image

The barcode can be exported as an image and downloaded to the user's device. You can specify the file name and image format (JPG or PNG).

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
barcode.exportImage('pdf417-export', 'JPG');
</script>
```

### Export as Base64 String

You can export the barcode as a Base64-encoded image string for use in web applications or API requests.

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
await barcode.exportAsBase64Image('PNG');
</script>
```

## Properties

The following table shows the properties of the PDF417Generator control.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `Value` | string | undefined | Defines the value to encode in the PDF417 symbol. |
| `Mode` | string | 'SVG' | Defines the rendering mode: 'SVG' or 'Canvas'. |
| `Width` | string | '100%' | Defines the width of the control. |
| `Height` | string | '100%' | Defines the height of the control. |
| `CompactionMode` | string | 'Auto' | Defines how the value is compacted: 'Auto', 'Text', 'Numeric', or 'Byte'. |
| `ErrorCorrectionLevel` | string | 'Auto' | Defines the error correction level: 'Auto', 'Level0' through 'Level8'. |
| `Columns` | number | 0 | Defines the number of columns (0 for automatic, 1-30 for fixed). |
| `Rows` | number | 0 | Defines the number of rows (0 for automatic, 3-90 for fixed). |
| `IsCompact` | boolean | false | Enables compact PDF417 rendering. |
| `RowHeightRatio` | number | 3 | Defines the height of each row as a multiple of the module width. |
| `DisplayText` | DisplayTextModel | {} | Defines the display text settings. |
| `Margin` | MarginModel | {} | Defines the outer margin around the barcode. |
| `ForeColor` | string | 'black' | Bar color. |
| `BackgroundColor` | string | 'white' | Background color. |

## DisplayText Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `Text` | string | '' | Defines the text to display. |
| `Position` | string | 'Bottom' | Defines the position of the text: 'Top' or 'Bottom'. |
| `Alignment` | string | 'Center' | Defines the alignment of the text: 'Left', 'Center', or 'Right'. |
| `Visibility` | boolean | true | Defines whether the text is visible. |

## Margin Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `Left` | number | 10 | Defines the left margin. |
| `Right` | number | 10 | Defines the right margin. |
| `Top` | number | 10 | Defines the top margin. |
| `Bottom` | number | 10 | Defines the bottom margin. |

## Methods

### exportImage

Exports the barcode as an image and downloads it in the browser.

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
barcode.exportImage('pdf417-barcode', 'PNG');
</script>
```

### exportAsBase64Image

Returns a promise that resolves to the image as a base64 string.

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
const imageString = await barcode.exportAsBase64Image('JPG');
</script>
```

### destroy

Removes the barcode and releases its resources.

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
barcode.destroy();
</script>
```

## Events

### invalid

Triggered with a `ValidateEvent` when the symbol cannot be created.

```html
<script type="text/javascript">
function onInvalid(args) {
    console.log("Barcode is invalid: " + args.message);
}

var barcode = document.getElementById("container").ej2_instances[0];
barcode.invalid = onInvalid;
</script>
```

## Accessibility

The component automatically sets `role="img"` and generates an `aria-label` for accessibility. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## Responsive Behavior

The component uses the container size when rendering. If the container is resized after the barcode is rendered, call the `refresh()` method to redraw the barcode with the new dimensions.

```html
<script type="text/javascript">
var barcode = document.getElementById("container").ej2_instances[0];
barcode.refresh();
</script>
```

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

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-UG-Examples/tree/main/Barcode/PDF417).
