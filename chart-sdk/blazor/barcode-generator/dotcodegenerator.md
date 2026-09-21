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

### How DotCode Works

DotCode encodes data using a grid-based matrix system where each cell contains either a dot (dark) or no dot (light). The encoding process involves:

1. **Input Data**: Text or GS1 element string
2. **Encoding Mode Selection**: Determines optimal data compression
3. **Structured Append**: For large data sets, splits across multiple symbols
4. **Dot Placement**: Arranges dots in rows and columns
5. **Error Correction**: Adds Reed-Solomon error correction data
6. **Output**: Final DotCode matrix with border patterns

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
<SfDotCodeGenerator Width="200" Height="150" Value="SYNCFUSION"></SfDotCodeGenerator>
```

**Allowed Input Characters:** DotCode supports numeric values (0-9), uppercase and lowercase alphabetic characters (A-Z, a-z), and supported special characters. It is designed for compact, high-density data encoding in space-constrained applications.

## GS1 DotCode

DotCode supports GS1 encoding mode, which allows you to encode structured data using GS1 Application Identifiers (AIs). This is particularly useful in pharmaceutical and healthcare applications where compliance with GS1 standards is required.

To enable GS1 encoding, use the [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_EnableGS1) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="200" Height="150" Value="(01)12345678901234" EnableGS1="true"></SfDotCodeGenerator>
```

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

## Data Encoding Capabilities

DotCode supports various character sets and encoding modes for efficient data representation:

### Numeric Data

For numeric-only data, DotCode uses a specialized encoding that achieves high density:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="200" Height="150" Value="1234567890"></SfDotCodeGenerator>
```

### Alphanumeric Data

DotCode can encode uppercase letters, numbers, and common special characters:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="DOTCODE-2024-ABC"></SfDotCodeGenerator>
```

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

### GS1 DotCode AI Data

| Use Case | Value | Description |
|---|---|---|
| **GTIN Tracking** | `(01)12345678901234` | Global Trade Item Number |
| **Batch Number** | `(10)BATCH2024` | Production batch identification |
| **Expiration** | `(17)251231` | Expiration date (YYMMDD) |
| **Serial Number** | `(21)SN123456789` | Unique product serial number |
| **Manufacturer** | `(400)123456` | Customer PO number |
| **Pharma Use** | `(01)12345678901234(10)LOT001(17)251231` | Multi-AI pharmaceutical data |

### Character Set Support

| Mode | Supported Characters |
|---|---|
| **Numeric** | 0 1 2 3 4 5 6 7 8 9 |
| **Alphanumeric** | 0-9, A-Z, Space, - (hyphen), . (period), , (comma), + (plus), / (slash) |
| **Byte** | All 8-bit characters (ASCII 0-255) |
| **GS1** | As defined per Application Identifier |

## Validation and Error Handling

The DotCode generator includes built-in validation to ensure data integrity. If invalid data is provided, the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_OnValidationFailed) event will be triggered:

### Common Validation Errors

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

Use these shared settings across the DotCode barcode component.

- **Content:** Update the [Value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Value) property to change the encoded data.
- **Size:** Use the [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Width) and [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Height) properties to control barcode dimensions.
- **Colors:** Configure [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_ForeColor) and [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_BackgroundColor).
- **Text Display:** Use the [DotCodeDisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html) component to show human-readable text and control its [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Visibility).
- **Spacing:** Configure the [DotCodeMargin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeMargin.html) component to manage barcode padding.
- **GS1 Mode:** Enable GS1 encoding with the [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_EnableGS1) property.
- **Validation:** Handle invalid data through the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_OnValidationFailed) event.
- **Export:** Use the [Download](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Download) method to export the barcode as an image.

The following example demonstrates the DotCode barcode customizations:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION" ForeColor="darkblue" BackgroundColor="white" EnableGS1="true"
                    OnValidationFailed="@OnValidationFailed">
    <DotCodeDisplayText Text="Product Code" Visibility="true" Alignment="Alignment.Center"></DotCodeDisplayText>
    <DotCodeMargin Left="10" Right="10" Top="10" Bottom="10"></DotCodeMargin>
</SfDotCodeGenerator>

@code {
    private SfDotCodeGenerator DotCode;

    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Handle validation errors such as invalid characters or unsupported GS1 AIs.
        Console.WriteLine($"DotCode validation error: {args.Message}");
    }

    private async Task ExportBarcode()
    {
        // Export the generated barcode as an image using the Download method.
        await DotCode.Download(DownloadType.PNG);
    }
}
```