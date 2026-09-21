---
layout: post
title: Data Matrix generator in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about Data Matrix generator in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# Data Matrix Generator in Blazor Barcode Component

## Data Matrix

The [DataMatrix](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html) barcode is a two-dimensional barcode that consists of a grid of dark and light dots or blocks forming square or rectangular symbol. The data encoded in the barcode can either be numbers or alphanumeric. They are widely used in printed media such as labels and letters. You can read it easily with the help of a barcode reader and mobile phones.

### How Data Matrix Works

Data Matrix encodes data using a matrix grid pattern where each cell represents either a module (dark) or an empty space (light). The encoding process involves:

1. **Data Input**: Text, numbers, or bytes
2. **Encoding Mode**: Automatic selection of optimal encoding (ASCII, C40, Base256, etc.)
3. **Data Placement**: Arranges modules in the grid following specific algorithms
4. **Error Correction**: Applies Reed-Solomon error correction
5. **Symbol Generation**: Creates appropriate symbol size based on data capacity
6. **Output**: Final Data Matrix symbol with finder patterns and timing information

| Component | Description |
|---|---|
| **L-Shaped Finder Pattern** | Two perpendicular borders for orientation (left and bottom) |
| **Timing Pattern** | Alternating black/white modules for alignment |
| **Data Region** | Grid containing encoded data and error correction codes |
| **Quiet Zone** | One module border around entire symbol |
| **Module Grid** | Black (1) or white (0) cells in square or rectangular arrangement |

### Data Matrix Symbol Sizes

Data Matrix supports both **square** and **rectangular** symbols:

| Size | Dimensions | Capacity (Numeric) | Capacity (Alphanumeric) | Capacity (Byte) |
|---|---|---|---|---|
| 10×10 | 10×10 modules | 6 | 3 | 1 |
| 12×12 | 12×12 modules | 10 | 6 | 3 |
| 14×14 | 14×14 modules | 16 | 10 | 6 |
| 16×16 | 16×16 modules | 24 | 16 | 10 |
| 32×32 | 32×32 modules | 174 | 106 | 70 |
| 48×48 | 48×48 modules | 392 | 237 | 156 |
| 64×64 | 64×64 modules | 697 | 421 | 278 |
| 120×120 | 120×120 modules | 2,335 | 1,414 | 930 |

### Data Matrix Rectangular Sizes

| Size | Dimensions | Max Capacity |
|---|---|---|
| 8×18 | 8×18 modules | 10 bytes |
| 8×32 | 8×32 modules | 20 bytes |
| 12×26 | 12×26 modules | 30 bytes |
| 12×64 | 12×64 modules | 80 bytes |
| 16×48 | 16×48 modules | 62 bytes |

### Data Matrix Encoding Modes

| Encoding | Data Type | Characters Per Code Unit | Example |
|---|---|---|---|
| **ASCII** | ASCII characters 0-127 | 1 char per code unit | "Hello123" |
| **ASCIINumeric** | Digits 0-9 only | 2 digits per code unit | "1234567890" |
| **Base256** | All byte values (0-255) | 1 byte per code unit | Binary data |
| **Auto** | Auto-detects best encoding | Variable | Input dependent |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION"></SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BtBnDRWCfBWXhspH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Data Matrix Generator in Blazor Barcode](images/blazor-barcode-with-datamatrix.webp)" %}

**Allowed Input Characters:** Data Matrix supports numeric, alphanumeric, and supported special characters depending on the encoding mode selected. The barcode can encode both numeric and alphanumeric characters, making it versatile for various labeling requirements in industrial and commercial applications.

## Encoding Mode Selection

Data Matrix automatically selects the best encoding mode for your data, or you can specify it explicitly:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Automatic encoding selection (recommended) -->
<SfDataMatrixGenerator Width="200" Height="150" Value="Hello123" Encoding="DataMatrixEncoding.Auto"></SfDataMatrixGenerator>

<!-- ASCII text encoding -->
<SfDataMatrixGenerator Width="200" Height="150" Value="PRODUCT" Encoding="DataMatrixEncoding.ASCII"></SfDataMatrixGenerator>

<!-- Numeric-optimized encoding (most compact for numbers) -->
<SfDataMatrixGenerator Width="200" Height="150" Value="1234567890" Encoding="DataMatrixEncoding.ASCIINumeric"></SfDataMatrixGenerator>

<!-- Base256 for binary or special data -->
<SfDataMatrixGenerator Width="200" Height="150" Value="Binary Data" Encoding="DataMatrixEncoding.Base256"></SfDataMatrixGenerator>
```

### Encoding Mode Guide

| Encoding | Best For | Example |
|---|---|---|
| **Auto** | General purpose | "PRODUCT-2024" |
| **ASCII** | Text and mixed data | "Order #12345" |
| **ASCIINumeric** | Numbers only (compact) | "1234567890" |
| **Base256** | Binary or special bytes | Image data, binary files |

## Customizing the text

Customize the barcode text by using the display [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Text) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Text"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Text in Data Matrix Generator](images/blazor-barcode-text-in-datamatrix.webp)" %}

## GS1 Data Matrix

GS1 Data Matrix combines the high-density encoding capabilities of Data Matrix symbols with GS1 Application Identifiers (AIs) for supply chain and traceability applications. This enables efficient encoding of product information, batch numbers, expiration dates, and serial numbers in a single, compact barcode.

**Allowed Input Characters:** GS1 Data Matrix supports numeric, alphanumeric, and supported special characters. Data is encoded using GS1 Application Identifiers (AIs), enabling structured business information such as product identifiers, batch numbers, expiration dates, and serial numbers to be stored within a compact barcode.

## Data Matrix Validation Rules

### Input Validation

- **Length**: Minimum 1 character, maximum 3,116 bytes
- **Character Set**: Depends on encoding mode selected
- **Empty Data**: Not allowed
- **Encoding**: Auto-selected or explicitly specified
- **Symbol Size**: Automatically determined based on data and encoding

### Encoding-Specific Validation

| Encoding | Allowed Characters | Max Data |
|---|---|---|
| **ASCII** | ASCII 0-127 | ~3,116 bytes |
| **ASCIINumeric** | Digits 0-9 | ~2,335 digits |
| **Base256** | All 8-bit values (0-255) | ~3,116 bytes |

### Common Validation Errors

| Error | Cause | Solution |
|---|---|---|
| Data too long | Exceeds symbol capacity | Reduce data or change encoding |
| Empty value | No data provided | Supply at least one character |
| Invalid encoding | Unsupported encoding mode | Use Auto, ASCII, ASCIINumeric, or Base256 |
| Invalid character for mode | Character not allowed in selected mode | Change encoding or data |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200px" Height="150px" Value="SYNCFUSION" OnValidationFailed="@OnValidationFailed"></SfDataMatrixGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        Console.WriteLine($"Data Matrix validation error: {args.Message}");
        // Example errors:
        // - "The data is too long for the specified Data Matrix symbol size."
        // - "Data Matrix accepts valid ASCII characters."
    }
}
```

## Data Matrix Customizations

Use these shared settings across the Data Matrix barcode component.

- **Content:** Modify the [Value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Value) property to update the encoded barcode data.
- **Size:** Adjust [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Width) and [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Height) to control the barcode dimensions.
- **Colors:** Customize the barcode appearance using the [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_BackgroundColor) and [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_ForeColor) properties.
- **Text Display:** Use the [DataMatrixGeneratorDisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html) component for the human-readable text and control its visibility with the [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Visibility) property.
- **Spacing:** Configure the [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Margin) properties (left, right, top, and bottom) around the barcode.
- **Text Alignment:** Set the display text [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Position) (top or bottom) and [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Alignment) (center, left, or right).
- **Encoding Type:** Set the [Encoding](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Encoding) property to specify the Data Matrix encoding mode.
- **Barcode Size:** Define the [Size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Size) property to control the Data Matrix symbol size.
- **Validation:** Handle invalid data through the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_OnValidationFailed) event.
- **Export:** Use the [Download](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Download) method to export the generated barcode as an image.

The following example demonstrates all the Data Matrix barcode customizations covered above in a single configuration:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="250" Height="200" Value="SYNCFUSION" ForeColor="darkblue" BackgroundColor="white"
                        Encoding="DataMatrixEncoding.Auto" OnValidationFailed="@OnValidationFailed">
    <DataMatrixGeneratorDisplayText Text="Product Code" Visibility="true" Position="Bottom" Alignment="Alignment.Center"></DataMatrixGeneratorDisplayText>
    <DataMatrixGeneratorMargin Left="10" Right="10" Top="10" Bottom="10"></DataMatrixGeneratorMargin>
</SfDataMatrixGenerator>

@code {
    private SfDataMatrixGenerator DataMatrix;

    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Handle validation errors such as invalid characters or data exceeding capacity.
        Console.WriteLine($"Data Matrix validation error: {args.Message}");
    }

    private async Task ExportBarcode()
    {
        // Export the generated barcode as an image using the Download method.
        await DataMatrix.Download(DownloadType.PNG);
    }
}
```

### Customizing the Barcode color

A page or printed media with barcode often appears colorful in the backgrounds and surrounding region with other contents. The barcode can be customized to suit the design by using the [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_ForeColor) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" ForeColor="red" Height="150" Value="SYNCFUSION"></SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LXrnjxCCTVsAdGMu?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Color in Data Matrix Generator](images/blazor-barcode-datamatrix-color-customization.webp)" %}

### Customizing the Barcode dimension

The dimensions of the barcode can be adjusted by using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Width) properties of the barcode generator.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION"></SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LjBnjniWpLMlSGri?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}