---
layout: post
title: DotCode Generator in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about DotCode generator in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# DotCode Generator in Blazor Barcode Component

## DotCode

DotCode is a high-density, two-dimensional matrix barcode symbology designed for industrial printing and encoding applications. It is particularly useful in pharmaceutical packaging, healthcare, and product serialization. DotCode uses a pattern of circular dots arranged in rows and columns, allowing it to encode large amounts of data in a compact space. The barcode can encode both numeric and alphanumeric characters, making it versatile for various labeling requirements.

### DotCode Encoding Modes

| Mode | Data Type | Efficiency |
|---|---|---|
| **Numeric** | Digits 0-9 | 3.33 bits per digit |
| **Alphanumeric** | 0-9, A-Z, space, special chars | 5.5 bits per character |
| **Byte** | Any 8-bit character | 8 bits per character |
| **GS1** | GS1 element strings | Variable (optimized) |

**Key Features of DotCode**

- **High Data Density**: Encodes data efficiently, making it ideal for small label areas.
- **Alphanumeric Support**: Can encode uppercase letters, digits, and special characters.
- **Multiple Data Modes**: Supports various encoding modes for optimal compression.
- **Industrial Grade**: Designed for harsh printing and scanning environments.
- **GS1 Support**: Optional GS1 encoding for supply chain applications.
- **Structured Append**: Can span data across multiple DotCode symbols.
- **Error Correction**: Built-in error detection and correction capability.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Simple alphanumeric DotCode -->
<SfDotCodeGenerator Width="300" Height="250" Value="Product Serialization"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/BtBnDRWCfBWXhspH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/DotCodeBarcode.png)" %}

**Allowed Input Characters:** DotCode supports numeric values (0-9), uppercase and lowercase alphabetic characters (A-Z, a-z), and supported special characters. It is designed for compact, high-density data encoding in space-constrained applications.

### Data Encoding Capabilities

DotCode supports various character sets and encoding modes for efficient data representation:

**Numeric Data**

For numeric-only data, DotCode uses a specialized encoding that achieves high density:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="300" Height="250" Value="1234567890"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/BtBnDRWCfBWXhspH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/DotCodeNumeric.png)" %}

**Alphanumeric Data**

DotCode can encode uppercase letters, numbers, and common special characters:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="350" Height="250" Value="DOTCODE-2024-ABC"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/BtBnDRWCfBWXhspH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/DotCode-AlphaNumeric.png)" %}

## GS1 DotCode

DotCode supports GS1 encoding mode, which allows you to encode structured data using GS1 Application Identifiers (AIs). This is particularly useful in pharmaceutical and healthcare applications where compliance with GS1 standards is required.

To enable GS1 encoding, use the [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_EnableGS1) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="350" Height="250" Value="(01)12345678901231" EnableGS1="true"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/BtBnDRWCfBWXhspH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/GS1-DotCode.png)" %}

**Allowed Input Characters:** GS1 DotCode supports numeric, alphanumeric, and supported special characters. Data is encoded using GS1 Application Identifiers (AIs), enabling structured business information such as product identifiers, batch numbers, expiration dates, and serial numbers to be stored in a compact symbol.

**Common GS1 Application Identifiers:**

| AI | Description | Example |
|---|---|---|
| 01 | Global Trade Item Number (GTIN) | (01)12345678901234 |
| 10 | Batch or Lot Number | (10)ABC123 |
| 11 | Production Date | (11)200115 |
| 15 | Best Before Date | (15)251231 |
| 17 | Expiration Date | (17)251231 |
| 21 | Serial Number | (21)SN123456 |

## DotCode Validation Rules

### DotCode Validation

- **Length**: Minimum 1 character, maximum depends on symbol size (typically up to 208 characters)
- **Character Set**: 
  - Numeric: 0-9
  - Alphanumeric: 0-9, A-Z, space, and special characters
  - Byte: All 8-bit values (0-255)
- **Encoding Mode**: Auto-selected based on input data
- **Symbol Size**: Automatically calculated based on data length
- **Empty Data**: Not allowed (at least 1 character required)

### GS1 DotCode Validation

When `EnableGS1="true"`:

- **Format**: Must use `(AI)data(AI)data...` syntax
- **AI Format**: 2-4 numeric digits in parentheses
- **AI Support**: All standard GS1 AIs (01-422, 310n-365n)
- **Data Validation**: Each AI has specific length and character requirements
- **FNC1 Separator**: Automatically added between variable-length AIs
- **AI Duplication**: Each AI can appear only once

**GS1 DotCode AI Data**

| Use Case | Value | Description |
|---|---|---|
| **GTIN Tracking** | `(01)12345678901234` | Global Trade Item Number |
| **Batch Number** | `(10)BATCH2024` | Production batch identification |
| **Expiration** | `(17)251231` | Expiration date (YYMMDD) |
| **Serial Number** | `(21)SN123456789` | Unique product serial number |
| **Manufacturer** | `(400)123456` | Customer PO number |
| **Pharma Use** | `(01)12345678901234(10)LOT001(17)251231` | Multi-AI pharmaceutical data |

## Validation and Error Handling

The DotCode generator includes built-in validation to ensure data integrity. If invalid data is provided, the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_OnValidationFailed) event will be triggered:

**Validation Errors**

| Error | Cause | Solution |
|---|---|---|
| Empty value | No data provided | Supply at least one character |
| Unsupported AI | Invalid Application Identifier | Check AI format (2-4 digits) |
| Invalid AI data | Data doesn't match AI requirements | Verify data length and character set |
| Duplicate AI | Same AI appears multiple times | Remove duplicate AIs |
| Invalid syntax | Missing parentheses in GS1 mode | Use format: `(AI)data` |
| Data too long | Exceeds maximum capacity | Reduce data or use structured append |
| Invalid character | Character not supported in mode | Use allowed character set |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- GS1-enabled DotCode for pharmaceutical use -->
<SfDotCodeGenerator Width="250" Height="200" 
                    Value="(01)12345678901234(10)BATCH2024(17)251231" 
                    EnableGS1="true"
                    OnValidationFailed="@OnValidationFailed"></SfDotCodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // GS1-specific validation errors:
        // - Unsupported Application Identifier '(99)' - not in GS1 standards
        // - Invalid data length for AI (01) - must be 14 digits
        // - Duplicate AI (10) - each AI can appear only once
        Console.WriteLine($"GS1 DotCode validation error: {args.Message}");
    }
}
```

## Dot Code Customizations

The DotCode component provides comprehensive customization options to modify the appearance and behavior of generated barcodes. This section covers all available properties that can be used to customize DotCode symbols.

### DotCode Color Customization

The barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_ForeColor) property specifies the line and text color of the DotCode barcode. By default, it is set to black.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" ForeColor="red" Value="SYNCFUSION"></SfDotCodeGenerator>

```

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_BackgroundColor) property specifies the background color of the DotCode barcode. By default, it is set to white. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" BackgroundColor="lightyellow" ForeColor="darkblue" Value="SYNCFUSION"></SfDotCodeGenerator>

```

### DotCode Dimension Customization

The dimensions of the barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Width) properties. Both properties accept string values with units (px, %, em, etc.). By default, both are set to 100%.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="300px" Height="250px" Value="SYNCFUSION"></SfDotCodeGenerator>

```

### Margin Customization

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Margin) property specifies the space to be left around the DotCode barcode. It accepts a `DotCodeMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 10 |
| `Right` | Space from the right side | 10 |
| `Top` | Space from the top side | 10 |
| `Bottom` | Space from the bottom side | 10 |

All properties accept double values representing pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeMargin Left="20" Top="20" Right="20" Bottom="20"></DotCodeMargin>
</SfDotCodeGenerator>

```

### Display Text Customization

The barcode display text can be fully customized using the [DisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_DisplayText) property. The `DotCodeDisplayText` component provides comprehensive text customization options.

#### Text Content

The [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Text) property specifies the textual description to display with the DotCode barcode. By default, it is an empty string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

#### Font Configuration

The [FontFamily](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_FontFamily) property specifies the font style of the display text. By default, it is set to `monospace`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" FontFamily="Arial"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

The [FontSize](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_FontSize) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" FontSize="18"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

#### Text Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts the following values: `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" Alignment="Alignment.Left"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

#### Text Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Position) property specifies the vertical position of the text relative to the DotCode barcode. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" Position="TextPosition.Top"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

#### Text Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Visibility="false"></DotCodeDisplayText>
</SfDotCodeGenerator>

```

#### Text Margin

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Margin) property specifies the space between the text and the DotCode barcode. It accepts a `DotCodeTextMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 0 |
| `Right` | Space from the right side | 0 |
| `Top` | Space from the top side | 0 |
| `Bottom` | Space from the bottom side | 0 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code">
        <DotCodeTextMargin Left="0" Top="10" Right="0" Bottom="10"></DotCodeTextMargin>
    </DotCodeDisplayText>
</SfDotCodeGenerator>

```

### Dynamic Property Updates

The DotCode component supports real-time property binding. When you change any property value, the DotCode barcode automatically updates to reflect the changes. This is useful for creating interactive applications where users can customize the barcode appearance dynamically.

#### Real-time Property Binding Example

Here is an example showing how to dynamically update DotCode properties using Blazor data binding:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.Inputs

<div style="margin: 20px;">
    <div style="margin-bottom: 10px;">
        <label>DotCode Value: </label>
        <SfTextBox @bind-Value="@DotCodeValue" Placeholder="Enter data"></SfTextBox>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Foreground Color: </label>
        <input type="color" @bind="@ForeColor" />
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Background Color: </label>
        <input type="color" @bind="@BackgroundColor" />
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Width (px): </label>
        <SfSlider @bind-Value="@DotCodeWidth" Min="100" Max="400" Step="10"></SfSlider>
        <span>@DotCodeWidth px</span>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Height (px): </label>
        <SfSlider @bind-Value="@DotCodeHeight" Min="100" Max="300" Step="10"></SfSlider>
        <span>@DotCodeHeight px</span>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Display Text: </label>
        <SfTextBox @bind-Value="@DisplayTextValue" Placeholder="Enter display text"></SfTextBox>
    </div>
</div>

<!-- DotCode that updates in real-time as properties change -->
<div style="margin-top: 30px; padding: 20px; border: 1px solid #ccc;">
    <SfDotCodeGenerator Width="@($"{DotCodeWidth}px")" 
                        Height="@($"{DotCodeHeight}px")" 
                        Value="@DotCodeValue"
                        ForeColor="@ForeColor"
                        BackgroundColor="@BackgroundColor">
        <DotCodeDisplayText Text="@DisplayTextValue" Visibility="@(!string.IsNullOrEmpty(DisplayTextValue))"></DotCodeDisplayText>
    </SfDotCodeGenerator>
</div>

@code
{
    private string DotCodeValue = "SYNCFUSION";
    private string ForeColor = "black";
    private string BackgroundColor = "white";
    private int DotCodeWidth = 250;
    private int DotCodeHeight = 200;
    private string DisplayTextValue = "High-Density Code";
}
```

**Key Points:**
- The DotCode automatically re-renders with the new property values
- This works for all customizable properties: Value, ForeColor, BackgroundColor, Width, Height, DisplayText, Margins, etc.