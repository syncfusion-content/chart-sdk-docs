---
layout: post
title: PDF417Generator in ASP.NET MVC Barcode Control | Syncfusion
description: Learn here all about PDF417Generator in Syncfusion ASP.NET MVC Barcode control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: PDF417Generator
documentation: ug
---

# ASP.NET MVC PDF417Generator Control

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

This section briefly explains how to include the PDF417 Barcode Generator control in your ASP.NET MVC application.

### Prerequisites

- [System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)
- [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5/) NuGet package installed

### Dependencies

To use the PDF417 Barcode Generator, ensure the following dependencies are added to your ASP.NET MVC project:

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

### Importing

Add the **Syncfusion.EJ2** namespace reference in `Web.config` under the `Views` folder:

```
<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>
```

### Register Script Manager

Register the script manager `ScriptManager()` at the end of `<body>` in your layout file:

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<body>
    ...
    <!-- Syncfusion ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>

{% endhighlight %}
{% endtabs %}

### Basic PDF417 Generation

The following example creates a PDF417 barcode that encodes the specified value.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/pdf417generator/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Pdf417generator.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/pdf417generator/pdf417generator.cs %}
{% endhighlight %}
{% endtabs %}

For most applications:
* `Value` specifies the data to encode.
* `Width` controls the barcode width.
* `Height` controls the barcode height.

The control automatically determines the barcode structure and error correction settings.

## Rendering Modes

The PDF417 Generator supports the following rendering modes through the `Mode` property:

| Mode | Description |
|---|---|
| `SVG` | Renders the barcode as vector graphics. |
| `Canvas` | Renders the barcode to an HTML5 canvas. Useful for bitmap-based workflows and custom canvas processing. |

### SVG Mode (Default)

SVG mode provides crisp rendering regardless of zoom level or display resolution.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Mode("SVG")
    .Render())
{% endhighlight %}
{% endtabs %}

### Canvas Mode

Canvas mode renders the barcode directly onto an HTML5 canvas.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Mode("Canvas")
    .Render())
{% endhighlight %}
{% endtabs %}

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
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("SYNCFUSION REPORT")
    .Width("320px")
    .Height("140px")
    .CompactionMode("Text")
    .Render())
{% endhighlight %}
{% endtabs %}

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
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("320px")
    .Height("140px")
    .ErrorCorrectionLevel("Level5")
    .Render())
{% endhighlight %}
{% endtabs %}

### Row Height Ratio

The `RowHeightRatio` property controls the height of individual PDF417 rows.

* Smaller values create shorter barcodes.
* Larger values create taller barcodes.
* Taller barcodes may improve scanning performance in some environments.

The minimum supported value is `3`, which follows the PDF417 specification.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("320px")
    .Height("160px")
    .RowHeightRatio(4)
    .Render())
{% endhighlight %}
{% endtabs %}

### Compact PDF417

Compact PDF417 (also known as Truncated PDF417) reduces the overall barcode width.

Enable compact mode through the `IsCompact` property:

| Standard PDF417 | Compact PDF417 |
|---|---|
| Better scanner compatibility | Saves horizontal space |
| Recommended for most applications | Useful when label width is limited |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("250px")
    .Height("100px")
    .IsCompact(true)
    .Render())
{% endhighlight %}
{% endtabs %}

### Rows and Columns

By default, the control automatically determines the number of rows and columns required for the encoded data.

You can specify fixed values when a particular barcode layout is required.

| Property | Supported Range |
|---|---|
| `Rows` | 3 to 90 |
| `Columns` | 1 to 30 |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("400px")
    .Height("200px")
    .Rows(8)
    .Columns(4)
    .Render())
{% endhighlight %}
{% endtabs %}

## Barcode Customization

### Dimensions

Use the `Width` and `Height` properties to control barcode size.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Size.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/size/size.cs %}
{% endhighlight %}
{% endtabs %}

### Display Text

Use the `DisplayText` property to show a user-friendly label along with the barcode.

Supported options:

| Property | Description |
|---|---|
| `Text` | Text displayed with the barcode. |
| `Position` | Displays text above or below the barcode (`"Top"` or `"Bottom"`). |
| `Alignment` | Text alignment (`"Left"`, `"Center"`, or `"Right"`). |
| `Visibility` | Shows or hides the display text. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Text.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/text/text.cs %}
{% endhighlight %}
{% endtabs %}

### Colors

Customize barcode colors using:
* `ForeColor`: Barcode bar color.
* `BackgroundColor`: Barcode background surface color.

**Best Practice:** Use high-contrast color combinations such as dark bars on a light background to ensure reliable scanning.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Color.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/color/color.cs %}
{% endhighlight %}
{% endtabs %}

### Margins

Use the `Margin` property to add spacing around the barcode. Margins help preserve the quiet zone required for successful barcode scanning.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/margin/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Margin.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/barcode-generator/pdf417generator/margin/margin.cs %}
{% endhighlight %}
{% endtabs %}

## International Character Support

The PDF417 Generator supports Unicode and international characters. When the input contains non-ASCII characters, the barcode is encoded using an appropriate Unicode-compatible encoding, enabling supported scanners to correctly decode the data.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("こんにちは Syncfusion")
    .Width("350px")
    .Height("150px")
    .Render())
{% endhighlight %}
{% endtabs %}

No additional configuration is required.

## Exporting

### Export as Image

Download the barcode as a PNG or JPG image using the `exportImage` method:

| Supported Format | Description |
|---|---|
| `'PNG'` | Lossless image format. |
| `'JPG'` | Compressed image format with smaller file size. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Render())

<button onclick="onExport()">Download Barcode</button>

<script type="text/javascript">
    function onExport() {
        var barcode = document.getElementById('barcode').ej2_instances[0];
        barcode.exportImage('pdf417', 'PNG');
    }
</script>
{% endhighlight %}
{% endtabs %}

### Export as Base64

Generate a Base64 image string for use in image elements, email templates, reports, or remote APIs:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Render())

<script type="text/javascript">
    window.addEventListener('load', async function () {
        var barcode = document.getElementById('barcode').ej2_instances[0];
        var imageData = await barcode.exportAsBase64Image('PNG');
        console.log(imageData);
    });
</script>
{% endhighlight %}
{% endtabs %}

## Validation and Events

### invalid Event

The `invalid` event occurs when barcode generation fails because of invalid input or unsupported settings.

Common causes include:
* Empty value.
* Unsupported characters for the selected compaction mode.
* Invalid row or column configuration.
* Insufficient barcode dimensions.
* Data exceeding PDF417 capacity limits.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@(Html.EJS().PDF417Generator("barcode")
    .Value("SYNCFUSION")
    .Width("300px")
    .Height("120px")
    .Invalid("onInvalid")
    .Render())

<p id="errorMessage" role="alert"></p>

<script type="text/javascript">
    function onInvalid(args) {
        document.getElementById('errorMessage').textContent = args.message;
    }
</script>
{% endhighlight %}
{% endtabs %}

## Accessibility

The PDF417 Generator includes built-in accessibility support:
* Applies `role="img"` automatically.
* Generates accessible labels for screen readers.
* Supports localization of accessibility text and validation messages.

## Localization

Use the Syncfusion `L10n` framework to localize the screen reader label and validation messages. Set the control locale to the matching culture:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
<script type="text/javascript">
    ej.base.L10n.load({
        'de': {
            'PDF417Generator': {
                ariaLabel: 'PDF417-Strichcode',
                EmptyValue: 'Der Wert ist leer.'
            }
        }
    });
</script>

@(Html.EJS().PDF417Generator("barcode")
    .Value("Syncfusion")
    .Width("300px")
    .Height("120px")
    .Locale("de")
    .Render())
{% endhighlight %}
{% endtabs %}

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
* Fixed `Rows` values must be between `3` and `90`.
* Fixed `Columns` values must be between `1` and `30`.
* `RowHeightRatio` must be greater than or equal to `3`.
* Larger amounts of data require larger barcode dimensions.
* International text may require additional storage space compared to ASCII-only content.
