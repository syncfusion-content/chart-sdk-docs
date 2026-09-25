---
layout: post
title: GS1 Barcodes in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about GS1 Barcodes in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# GS1 Barcodes in Blazor Barcode Component

GS1 standards define a series of barcodes used for supply chain management, retail, and logistics operations. These barcodes encode product identification and tracking data using standardized GS1 Application Identifiers (AIs). The Blazor Barcode component supports multiple GS1 barcode types to meet various industry requirements.

## GS1-128 Barcode

GS1-128 is a linear barcode based on Code 128 that uses GS1 Application Identifiers (AIs) and FNC1 characters to encode structured supply-chain data. It works by encoding structured data using Application Identifiers (AIs) and Function Code 1 (FNC1) separators, where each data element is tagged with a two to four-digit Application Identifier enclosed in parentheses. The FNC1 character separates variable-length fields, allowing flexible data encoding while maintaining strict compliance with GS1 standards. It is widely used in retail and logistics for encoding product information, batch numbers, expiration dates, and other supply-chain data.

**Allowed Input Characters:** GS1-128 supports numeric values (0-9), uppercase and lowercase alphabetic characters (A-Z, a-z), and supported ASCII special characters. Data should be encoded using valid GS1 Application Identifiers (AIs) to represent structured business information.

**GS1-128 Value Format**

- **Syntax**: `(AI1)data1(AI2)data2...`
- **Example**: `(01)12345678901234(10)ABC123(17)251231`
- **AI Format**: Two to four numeric digits
- **Data Format**: Variable length (depends on AI definition)

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.GS1Code128" Value="(01)09506000134352(17)261231(10)ABC123">
    <BarcodeGeneratorDisplayText Text="Product Serialization" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Barcode Generator](images/Gs1-BarcodeGenerator.png)" %}

GS1-128 accepts GS1 Application Identifier (AI) data. The AI is enclosed in parentheses, followed by the data. Multiple AIs can be concatenated together.

**Common GS1 Application Identifiers**

| AI | Description | Data Format | Min Length | Max Length |
|---|---|---|---|---|
| 00 | SSCC (Serial Shipping Container Code) | Numeric | 18 | 18 |
| 01 | GTIN (Global Trade Item Number) | Numeric | 14 | 14 |
| 02 | GTIN of contained trade items | Numeric | 14 | 14 |
| 10 | Batch or Lot Number | Alphanumeric | 1 | 20 |
| 11 | Production Date | YYMMDD | 6 | 6 |
| 12 | Due Date | YYMMDD | 6 | 6 |
| 13 | Packaging Date | YYMMDD | 6 | 6 |
| 15 | Best Before Date | YYMMDD | 6 | 6 |
| 16 | Sell By Date | YYMMDD | 6 | 6 |
| 17 | Expiration Date | YYMMDD | 6 | 6 |
| 20 | Variant Number | Numeric | 2 | 2 |
| 21 | Serial Number | Alphanumeric | 1 | 20 |
| 22 | Consumer Product Variant | Alphanumeric | 1 | 20 |
| 30 | Variable Count | Numeric | 1 | 8 |
| 37 | Count of Trade Items | Numeric | 1 | 8 |
| 240 | Additional Product Identification | Alphanumeric | 1 | 30 |
| 241 | Customer Part Number | Alphanumeric | 1 | 30 |
| 251 | Reference to Source Entity | Alphanumeric | 1 | 30 |
| 400 | Customer Purchase Order Number | Alphanumeric | 1 | 30 |
| 410 | Ship To GLN | Numeric | 13 | 13 |
| 414 | GLN of Physical Location | Numeric | 13 | 13 |
| 422 | Country of Origin | Numeric | 3 | 3 |
| 310n-316n | Net Weight (Kg) | Numeric | 6 | 6 |
| 320n-336n | Net Weight (Lbs) | Numeric | 6 | 6 |
| 340n-357n | Dimensions | Numeric | 6 | 6 |
| 360n-365n | Volume | Numeric | 6 | 6 |

**GS1-128 Validation Rules**

- **Format**: All data must follow the format `(AI)data` with parentheses
- **AI Format**: Two to four numeric digits only
- **Data Validation**: Each AI has specific length and character requirements
- **No Duplicates**: An AI cannot appear more than once in the same barcode
- **Character Set**: Supports all printable ASCII characters and extended ASCII

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.GS1Code128" Value="(01)12345678901234(10)ABC123" OnValidationFailed="@OnValidationFailed"></SfBarcodeGenerator>

@code
{
    private void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Validation errors include:
        // - Invalid GS1 syntax (missing parentheses)
        // - Unsupported Application Identifier
        // - Invalid data length for specific AI
        // - Duplicate Application Identifiers
        Console.WriteLine($"Validation error: {args.Message}");
    }
}
```

## ITF-14 Barcode

ITF-14 (Interleaved 2 of 5) is the GS1 standard for encoding 14-digit Global Trade Item Numbers (GTINs) on outer cases and shipping cartons. The barcode automatically calculates and adds the GS1 mod-10 check digit. It is commonly used in logistics and warehouse management for tracking product cases.

The barcode represents digit pairs using interleaved bar and space patterns. Each digit pair consists of five bars (narrow or wide) interleaved with five spaces (narrow or wide). The symbology includes:
- **Start Pattern**: NNNN (four narrow elements)
- **Stop Pattern**: WNN (wide bar followed by two narrow bars)
- **Data**: Seven digit pairs (14 digits total)
- **Bearer Bars**: Top, bottom, left, and right horizontal and vertical bars per GS1 specifications

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.ITF14" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Carton Tracking" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 ITF 14 Barcode Generator](images/Gs1-ITF14.png)" %}

**ITF-14 Code Format**

| Component | Description | Details |
|---|---|---|
| **Code Structure** | Digit Pairs | 7 pairs from 14-digit GTIN |
| **Check Digit** | GS1 Mod-10 | Last digit of GTIN, auto-calculated if needed |
| **Digit Pattern** | NNWNW Format | Each digit encoded as Narrow/Wide combination |
| **Bearer Bars** | Frame Bars | Top/Bottom: 2 X-wide; Left/Right: 1 X-wide |
| **Quiet Zone** | Left/Right Margin | Typically 10 X-dimensions on each side |

**ITF-14 Digit Encoding Patterns**

Each digit (0-9) is encoded as a 5-element pattern of Narrow (N=1 module) and Wide (W=3 modules):

| Digit | Pattern | Digit | Pattern |
|---|---|---|---|
| 0 | NNWWN | 5 | WNWNN |
| 1 | WNNNW | 6 | NWWNN |
| 2 | NWNNW | 7 | NNNWW |
| 3 | WWNNN | 8 | WNNWN |
| 4 | NNWNW | 9 | NWNWN |

**Allowed Input Characters:** ITF-14 supports numeric values (0-9) only and is used to encode a 14-digit GTIN (Global Trade Item Number). The final digit is automatically calculated as a check digit.

**ITF-14 with 13 Digits**

With 13 digits, the check digit is automatically calculated:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- 13-digit GTIN, check digit auto-calculated -->
<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.ITF14" Value="1234567890123">
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 ITF 14 Barcode Generator](images/Gs1-ITF14-13digits.png)" %}

**ITF-14 Validation Rules**

- **Length**: Accepts 13 or 14 numeric digits only
- **Format**: Digits only, no special characters or letters
- **Check Digit**: 
  - If 13 digits provided: 14th digit auto-calculated using GS1 Mod-10
- **GTIN Support**: Supports GTIN-8, GTIN-12, GTIN-13, or GTIN-14 (padded to 14 digits)
- **Validation**: All digits must be numeric (0-9)

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.ITF14" Value="590123412345" OnValidationFailed="@OnValidationFailed"></SfBarcodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Validation errors include:
        // - Invalid length (not 13 or 14 digits)
        // - Non-numeric characters
        // - Invalid check digit (for 14-digit input)
        Console.WriteLine($"ITF-14 validation error: {args.Message}");
    }
}
```

## GS1 DataBar Barcodes

GS1 DataBar is a family of linear barcode symbols designed for encoding GTINs in retail and healthcare environments. These barcodes offer a more compact alternative to traditional linear barcodes while maintaining omnidirectional scanning capability.

GS1 DataBar symbols encode a 14-digit GTIN using a modular-based encoding system. The barcode consists of repeating module patterns that represent digit pairs, separated by guard patterns. The encoding process:

1. **Input**: 13-digit or 14-digit GTIN
2. **Encoding**: Convert GTIN to binary representation using Fibonacci-weighted encoding
3. **Checksum**: Calculate weighted checksum for error detection
4. **Output**: Bar/space pattern representing the encoded data

### GS1 DataBar Stacked

The GS1 DataBar Stacked is a compact linear barcode that encodes a 14-digit Global Trade Item Number (GTIN) in a two-row stacked format. It is designed for retail and consumer products where label space is limited, providing efficient product identification while maintaining compatibility with point-of-sale systems. The stacked layout reduces the barcode width, making it suitable for small packages and labels.

**Allowed Input Characters:** GS1 DataBar Stacked supports numeric values (0-9) only and is used to encode a 14-digit GTIN (Global Trade Item Number). Its stacked format is designed for applications where horizontal space is limited while maintaining reliable scanning performance.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Two-row stacked DataBar for unidirectional scanning -->
<SfBarcodeGenerator Width="350px" Height="200px" Type="@BarcodeType.GS1DataBarStacked" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Compact Product Labeling"/>
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar OmniDirectional Stacked Barcode Generator](images/Gs1-DatabarStacked.png)" %}

### GS1 DataBar Omnidirectional

The GS1 DataBar Omnidirectional is a single-row barcode used to encode a 14-digit GTIN for retail product identification. It supports omnidirectional scanning, allowing the barcode to be read from any direction at the point of sale, making it suitable for consumer products and retail environments.

**Allowed Input Characters:** The GS1 DataBar Omnidirectional barcode encodes a 14-digit GS1 identification number designed for omnidirectional scanning. Accepted input includes numeric values (0-9) only, suitable for retail point-of-sale systems requiring multi-angle scanning capability.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Single-row omnidirectional DataBar for 14-digit GTIN -->
<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.GS1DataBarOmnidirectional" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Retail Product"/>
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar OmniDirectional Barcode Generator](images/Gs1-DatabarOmniDirectional.png)" %}

### GS1 DataBar Stacked Omnidirectional

The GS1 DataBar Stacked Omnidirectional is a two-row variant of the DataBar Omnidirectional. It provides omnidirectional scanning capability in a more compact vertical footprint, useful for items where horizontal space is limited.

**Allowed Input Characters:** GS1 DataBar Stacked Omnidirectional supports numeric values (0-9) only and is used to encode a 14-digit GTIN (Global Trade Item Number). It combines a compact stacked layout with omnidirectional scanning capabilities for retail environments where space is limited.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Two-row omnidirectional DataBar with stacked segments -->
<SfBarcodeGenerator Width="350px" Height="200px" Type="@BarcodeType.GS1DataBarStackedOmnidirectional" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Compact Retail Item"/>
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar Stacked OmniDirectional Barcode Generator](images/Gs1-StackedOmniDirectional.png)" %}

### GS1 DataBar Limited

The GS1 DataBar Limited barcode is a reduced-width symbol designed for small trade items where full-size EAN/UPC symbols cannot fit. It has the narrowest width among DataBar symbols, making it ideal for compact labeling applications.

**Allowed Input Characters:** GS1 DataBar Limited supports numeric values (0-9) only and is used to encode a 14-digit GTIN (Global Trade Item Number). It is designed for applications where space is limited while maintaining accurate product identification.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Narrow-profile DataBar for small items -->
<SfBarcodeGenerator Width="200px" Height="100px" Type="@BarcodeType.GS1DataBarLimited" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Small Retail Item" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar Limited Barcode Generator](images/Gs1-DatabarLimited.png)" %}

**Note**: GS1 DataBar Limited has restrictions on valid GTIN values. The check digit must be in the range of 0-4 for restricted items.

### GS1 DataBar Expanded

The GS1 DataBar Expanded barcode supports multiple GS1 Application Identifiers (AIs), making it suitable for variable-measure products, coupons, and other applications that require additional data beyond a GTIN. It can encode up to 74 numeric or 41 alphanumeric characters.

**Allowed Input Characters:** GS1 DataBar Expanded supports GS1 Application Identifiers (AIs) and can encode numeric, alphanumeric, and supported special characters. It can store up to 74 numeric digits or 41 alphanumeric characters, enabling the encoding of detailed GS1-compliant data.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Single-row Expanded DataBar with multiple AIs -->
<SfBarcodeGenerator Width="400px" Height="100px" Type="@BarcodeType.GS1DataBarExpanded" Value="(01)09506000134352(17)271231(10)LOT12345(21)SN987654321">
    <BarcodeGeneratorDisplayText Text="Product Traceability" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar Expanded Barcode Generator](images/Gs1-DatabarExpanded.png)" %}

### GS1 DataBar Expanded Stacked

The GS1 DataBar Expanded Stacked is a multi-row variant of the GS1 DataBar Expanded. It provides the same multi-AI encoding capability while reducing horizontal space requirements by stacking multiple rows.

**Allowed Input Characters:** The GS1 DataBar Expanded Stacked barcode supports GS1 application identifiers (AIs) with alphanumeric data. It can encode up to 74 digits of numeric data or 41 characters of alphanumeric data with special characters for data separation using GS1 compliance standards.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Multi-row Expanded DataBar with AI data stacked -->
<SfBarcodeGenerator Width="400px" Height="300px" Type="@BarcodeType.GS1DataBarExpandedStacked" Value="(01)09506000134352(17)271231(10)LOT12345">
    <BarcodeGeneratorDisplayText Text="Supply Chain Tracking" />
</SfBarcodeGenerator>
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Databar Expanded Stacked Barcode Generator](images/Gs1-ExpandedStacked.png)" %}

## GS1 DataBar Validation Rules

### GTIN-Only DataBar Barcodes (Omnidirectional, Stacked, Limited)

These barcodes accept only GTIN data:
- **Supported GTIN Lengths**: GTIN-8, GTIN-12, GTIN-13, GTIN-14
- **Input Formats**: 
  - Bare GTIN: `3456789012345`
  - Bracketed format: `(01)3456789012345`
- **Check Digit**: 
  - If input is 13 digits: 14th digit auto-calculated
  - If input is 14 digits: Check digit verified and auto-corrected
  - If input is 8 or 12 digits: Padded to 14 digits with leading zeros
- **Validation**: 
  - Must contain digits only
  - Check digit must be valid per GS1 Mod-10 algorithm
  - No multiple AIs allowed

### Expanded DataBar Barcodes (Expanded, Expanded Stacked)

These barcodes support multiple Application Identifiers:
- **AI Format**: `(AI)data` with parentheses
- **AI Length**: 2-4 numeric digits only
- **AI Duplication**: Not allowed (each AI appears once)
- **Data Validation**: Each AI has specific length and character rules
- **Max Capacity**: 74 numeric or 41 alphanumeric characters total
- **FNC1 Separator**: Automatically added between variable-length AIs

## GS1 Application Identifier Format

GS1 barcodes use Application Identifiers (AIs) to tag data with specific meanings. AIs are encoded in parentheses when using certain barcode types like GS1-128 and GS1 DataBar Expanded.

### AI Syntax Rules

| Rule | Description | Example |
|---|---|---|
| **Brackets** | AIs must be enclosed in parentheses | `(01)` not `01` |
| **Position** | AI must come before its data | `(01)12345678901234` |
| **Format** | 2-4 numeric digits only | `(01)`, `(100)`, `(3103)` |
| **Sequence** | AIs concatenated without separator | `(01)data1(10)data2` |
| **Uniqueness** | Each AI appears only once per barcode | No `(01)data1(01)data2` |
| **Lengths** | Fixed-length AIs end data implicitly | `(01)` always 14 digits |

### AI Data

- `(01)12345678901234` - GTIN (14 digits, required)
- `(10)ABC123` - Batch Number (1-20 chars, variable)
- `(11)201231` - Production Date (6 digits: YYMMDD)
- `(15)251231` - Best Before Date (6 digits: YYMMDD)
- `(17)251231` - Expiration Date (6 digits: YYMMDD)
- `(21)SN123456` - Serial Number (1-20 chars, variable)
- `(3103)001234` - Net Weight in Kg (6 digits with implied decimal)

### Date Format for AI

Dates in GS1 use the format **YYMMDD**:
- **YY**: Last two digits of year (00-99)
- **MM**: Month (01-12)
- **DD**: Day (01-31)

**Examples:**
- `251225` = December 25, 2025
- `200115` = January 15, 2020
- `201231` = December 31, 2020

## Validation and Error Handling

The GS1 barcode components include built-in validation to ensure data integrity. Invalid input will trigger the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_OnValidationFailed) event:

### Common Validation Errors

| Error | Cause | Solution |
|---|---|---|
| Invalid GS1 syntax | Missing parentheses | Use format: `(01)12345678901234` |
| Unsupported Application Identifier | AI not defined in GS1 specs | Check AI number (01-422, 310n-365n) |
| Invalid data length for AI | Data doesn't match AI requirements | Verify data length per AI specification |
| Duplicate Application Identifier | Same AI appears twice | Remove duplicate AI |
| Invalid check digit | GTIN check digit incorrect | Verify GTIN or let system auto-calculate |
| Non-numeric GTIN | GTIN contains non-digits | DataBar (GTIN-only) accepts digits only |
| Invalid character | AI data contains invalid character | Use allowed character set for AI |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.GS1Code128" Value="(01)12345678901234" OnValidationFailed="@OnValidationFailed"></SfBarcodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Handle validation errors
        Console.WriteLine($"Barcode validation error: {args.Message}");
        
        // Common scenarios:
        // - "(01)123" - Error: Invalid GTIN length
        // - "(99)data" - Error: Unsupported Application Identifier
        // - "01data" - Error: Invalid GS1 syntax (no parentheses)
        // - "(01)data(01)other" - Error: Duplicate AI (01)
    }
}
```

## GS1 Barcode Customizations

The GS1 barcode components provide comprehensive customization options to modify the appearance and behavior of generated barcodes. This section covers all available properties that can be used to customize GS1 barcodes.

### GS1 Barcode Type Selection

The [Type](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Type) property specifies which GS1 barcode variant to render. Each type is optimized for different applications:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- GS1-128 for flexible multi-AI encoding -->
<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)12345678901234(10)ABC123"></SfBarcodeGenerator>

<!-- ITF-14 for product cases -->
<SfBarcodeGenerator Type="@BarcodeType.ITF14" Width="300px" Height="150px" Value="12345678901231"></SfBarcodeGenerator>

<!-- GS1 DataBar variants for retail -->
<SfBarcodeGenerator Type="@BarcodeType.GS1DataBarStacked" Width="300px" Height="150px" Value="12345678901231"></SfBarcodeGenerator>

```

### GS1 Barcode Color Customization

The barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_ForeColor) property specifies the line and text color of the GS1 barcode. By default, it is set to black.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" ForeColor="red" Value="(01)09506000134352"></SfBarcodeGenerator>

```

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_BackgroundColor) property specifies the background color of the GS1 barcode. By default, it is set to white. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" BackgroundColor="lightyellow" ForeColor="darkblue" Value="(01)09506000134352"></SfBarcodeGenerator>

```

### GS1 Barcode Dimension Customization

The dimensions of the barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Width) properties. Both properties accept string values with units (px, %, em, etc.). By default, both are set to 100%.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="400px" Height="200px" Value="(01)09506000134352(17)261231(10)ABC123"></SfBarcodeGenerator>

```

### Margin Customization

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Margin) property specifies the space to be left around the GS1 barcode. It accepts a `BarcodeMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 10 |
| `Right` | Space from the right side | 10 |
| `Top` | Space from the top side | 10 |
| `Bottom` | Space from the bottom side | 10 |

All properties accept double values representing pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeMargin Left="20" Top="20" Right="20" Bottom="20"></BarcodeMargin>
</SfBarcodeGenerator>

```

### Display Text Customization

The barcode display text can be fully customized using the [DisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_DisplayText) property. The `BarcodeGeneratorDisplayText` component provides comprehensive text customization options.

#### Text Content

The [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Text) property specifies the textual description to display with the GS1 barcode. By default, it is an empty string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Font Configuration

The [Font](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Font) property specifies the font style of the display text. By default, it is set to `monospace`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization" Font="Arial"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Size

The [Size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Size) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization" Size="18"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts the following values: `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization" Alignment="Alignment.Center"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Position) property specifies the vertical position of the text relative to the GS1 barcode. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization" Position="TextPosition.Top"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Visibility="false"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Margin

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Margin) property specifies the space between the text and the GS1 barcode. It accepts a `BarcodeTextMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 0 |
| `Right` | Space from the right side | 0 |
| `Top` | Space from the top side | 0 |
| `Bottom` | Space from the bottom side | 0 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Type="@BarcodeType.GS1Code128" Width="300px" Height="150px" Value="(01)09506000134352">
    <BarcodeGeneratorDisplayText Text="Product Serialization">
        <BarcodeTextMargin Left="5" Top="10" Right="5" Bottom="10"></BarcodeTextMargin>
    </BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

### Dynamic Property Updates

The GS1 Barcode components support real-time property binding. When you change any property value, the barcode automatically updates to reflect the changes. This is useful for creating interactive applications where users can customize the barcode appearance dynamically.

#### Real-time Property Binding Example

Here is an example showing how to dynamically update GS1 Barcode properties using Blazor data binding:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.DropDowns

<div style="margin: 20px;">
    <div style="margin-bottom: 10px;">
        <label>Barcode Type: </label>
        <SfDropDownList TValue="BarcodeType" TItem="BarcodeType" DataSource="@GS1BarcodeTypes" @bind-Value="@SelectedBarcodeType">
            <DropDownListFieldSettings Text="ToString" Value="ToString"></DropDownListFieldSettings>
        </SfDropDownList>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>GS1 Value: </label>
        <SfTextBox @bind-Value="@GS1Value" Placeholder="Enter GS1 data"></SfTextBox>
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
        <SfSlider @bind-Value="@BarcodeWidth" Min="150" Max="400" Step="10"></SfSlider>
        <span>@BarcodeWidth px</span>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Height (px): </label>
        <SfSlider @bind-Value="@BarcodeHeight" Min="100" Max="250" Step="10"></SfSlider>
        <span>@BarcodeHeight px</span>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Display Text: </label>
        <SfTextBox @bind-Value="@DisplayTextValue" Placeholder="Enter display text"></SfTextBox>
    </div>
</div>

<!-- GS1 Barcode that updates in real-time as properties change -->
<div style="margin-top: 30px; padding: 20px; border: 1px solid #ccc;">
    <SfBarcodeGenerator Type="@SelectedBarcodeType" 
                        Width="@($"{BarcodeWidth}px")" 
                        Height="@($"{BarcodeHeight}px")" 
                        Value="@GS1Value"
                        ForeColor="@ForeColor"
                        BackgroundColor="@BackgroundColor">
        <BarcodeGeneratorDisplayText Text="@DisplayTextValue" Visibility="@(!string.IsNullOrEmpty(DisplayTextValue))"></BarcodeGeneratorDisplayText>
    </SfBarcodeGenerator>
</div>

@code
{
    private string GS1Value = "(01)09506000134352";
    private string ForeColor = "black";
    private string BackgroundColor = "white";
    private int BarcodeWidth = 300;
    private int BarcodeHeight = 150;
    private string DisplayTextValue = "GS1 Barcode";
    private BarcodeType SelectedBarcodeType = BarcodeType.GS1Code128;
    private List<BarcodeType> GS1BarcodeTypes = new() { BarcodeType.GS1Code128, BarcodeType.ITF14, BarcodeType.GS1DataBarOmniDirectional, BarcodeType.GS1DataBarStacked };
}
```

**Key Points:**
- The barcode automatically re-renders with the new property values
- The barcode type can be changed dynamically to switch between different GS1 symbologies
- This works for all customizable properties: Value, ForeColor, BackgroundColor, Width, Height, Type, DisplayText, Margins, etc.