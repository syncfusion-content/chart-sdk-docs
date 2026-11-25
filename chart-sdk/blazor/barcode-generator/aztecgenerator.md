---
layout: post
title: Aztec Barcode Generator in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about Aztec Barcode generator in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# Aztec Barcode Generator in Blazor Barcode Component

## Aztec Barcode

The Syncfusion [Blazor Aztec Barcode](https://www.syncfusion.com/blazor-components/blazor-barcode) Generator creates compact, high-capacity 2D barcodes for boarding passes, transportation tickets, health care labels, and identity documents. Aztec barcodes provide efficient data encoding and built-in error correction for reliable scanning and decoding.

Unlike many other 2D barcodes, Aztec codes do not require a wide surrounding quiet zone (margin). This makes them exceptionally space-efficient and suitable for compact displays, constrained print areas, small labels, and mobile screens.

Common use cases for Aztec Barcode include:

* **Boarding passes**: Used extensively in commercial aviation (IATA standards) for mobile and printed electronic boarding passes.
* **Transportation tickets**: Widely adopted across rail, metro, bus, and transit systems for electronic and paper ticketing.
* **Health care labels**: Utilized for specimen labeling, patient wristbands, and small medical item tracking where print surface is minimal.
* **Identity documents**: Applied to national ID cards, driver's licenses, and registration documents for secure data representation.
* **Mobile ticketing**: Ideal for digital concert tickets, event passes, and coupons scanned directly from smart phone screens.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px"
                  Height="200px"
                  Value="AZTEC-TICKET-2026-000123">
</SfAztecGenerator>
```

## Aztec Barcode Customizations

The Aztec Barcode component provides comprehensive customization options to modify the appearance and behavior of generated barcodes. This section covers all available properties that can be used to customize Aztec Code symbols.

### Dimensions

The dimensions of the Aztec barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_Width) properties. Both properties accept string values with units (`px`, `%`, `em`, etc.). By default, both are set to **100%**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="250px" Height="250px" Value="AZTEC-TICKET-2026"></SfAztecGenerator>
```

### Color Customization

The Aztec barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_ForeColor) property specifies the color of the dark modules and display text in the Aztec barcode. By default, it is set to **black**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" ForeColor="darkblue" Value="BP-2026-000123"></SfAztecGenerator>
```

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_BackgroundColor) property specifies the background color of the Aztec barcode (light modules). By default, it is set to **white**. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" BackgroundColor="lightyellow" ForeColor="darkblue" Value="PATIENT-45821"></SfAztecGenerator>
```

>**Note:** Maintain sufficient contrast between the foreground color and the background color to ensure reliable and fast scanning across different scanning devices and lighting conditions.

## Symbol Form Configuration

Use the [SymbolForm](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_SymbolForm) property to control whether the barcode is generated as a Compact symbol, a Full-range symbol, or selected automatically based on the data being encoded.

The supported symbol forms are:

* `AztecSymbolForm.Auto`: Automatically selects the smallest symbol form (Compact or Full-range) that is capable of encoding the provided data and requested error correction level.
* `AztecSymbolForm.Compact`: Constrains the barcode to Compact Aztec format with a 2-ring central bulls-eye finder pattern and 1 to 4 concentric layers.
* `AztecSymbolForm.FullRange`: Constrains the barcode to Full-range Aztec format with a 3-ring central bulls-eye finder pattern and 1 to 32 concentric layers.

### Symbol Form Behavior

| Symbol Form | Description |
| --- | --- |
| `Auto` | Automatically selects the smallest Compact or Full-range symbol capable of holding the data |
| `Compact` | Uses Compact Aztec symbols with 1–4 layers |
| `FullRange` | Uses Full-range Aztec symbols with 1–32 layers |

### Automatic Symbol Form (Default)

In `Auto` mode, the generator determines whether the data can fit into a Compact symbol; if the data exceeds Compact capacity, it transitions to a Full-range symbol automatically.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" 
                  Height="200px" 
                  Value="EVENT-TICKET-7890" 
                  SymbolForm="AztecSymbolForm.Auto">
</SfAztecGenerator>
```

### Compact Symbol Form

Use `AztecSymbolForm.Compact` when space is strictly constrained and you want to enforce a compact symbol format with a smaller central finder pattern.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" 
                  Height="200px" 
                  Value="COMPACT-DATA-001" 
                  SymbolForm="AztecSymbolForm.Compact">
</SfAztecGenerator>
```

### Full-Range Symbol Form

Use `AztecSymbolForm.FullRange` when encoding large amounts of information or when higher layer capacity is required.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="250px" 
                  Height="250px" 
                  Value="FULLRANGE-LARGE-PAYLOAD-DATA-STRING-2026" 
                  SymbolForm="AztecSymbolForm.FullRange">
</SfAztecGenerator>
```

## Layer Configuration

The [Layers](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_Layers) property defines the number of concentric data layers placed around the central bulls-eye finder pattern.

* **Layer 0 (Automatic)**: Setting `Layers="0"` configures the generator to automatically determine the minimum number of layers needed to encode the input data and error correction codewords.
* **Compact Symbols**: Support 1 to 4 layers, accommodating smaller payloads with minimal symbol footprint.
* **Full-Range Symbols**: Support 1 to 32 layers, allowing significantly more data capacity than Compact symbols.
* Increasing the layer count increases both the physical symbol size and the data/error correction capacity.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Automatic layer selection -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-DATA" Layers="0"></SfAztecGenerator>

<!-- Compact Aztec with 2 layers -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-DATA" SymbolForm="AztecSymbolForm.Compact" Layers="2"></SfAztecGenerator>

<!-- Full-range Aztec with 8 layers -->
<SfAztecGenerator Width="250px" Height="250px" Value="AZTEC-FULLRANGE-DATA" SymbolForm="AztecSymbolForm.FullRange" Layers="8"></SfAztecGenerator>
```

>**Note:** If an explicit layer count is specified that cannot accommodate the data and required error correction percentage, or if an out-of-range layer value is assigned (e.g., specifying more than 4 layers for `Compact` form or more than 32 layers for `Full-range` form), the `OnValidationFailed` event will be triggered.

## Error Correction Percentage

The [ErrorCorrectionPercentage](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_ErrorCorrectionPercentage) property controls the percentage of symbol capacity dedicated to Reed-Solomon error correction codewords.

* **Allowed range**: **5% to 95%** (Default is typically **23%**).
* **Higher error correction values**: Increase the symbol's ability to be scanned successfully even when dirty, scratched, partially obscured, or poorly printed.
* **Trade-off**: Higher error correction values increase the total symbol size or reduce the remaining data capacity available for user data.

### Error Correction Behavior

| Error Correction Percentage | Data Capacity | Damage Resistance | Recommended Use Case |
| --- | --- | --- | --- |
| 5% – 15% | Maximum | Minimum | Clean, controlled electronic displays or pristine labels |
| 23% (Default) | High | Balanced | Standard industrial, transit, and ticketing applications |
| 25% – 50% | Moderate | High | Printed boarding passes, wristbands, and exposed labels |
| 51% – 95% | Minimum | Maximum | Harsh industrial environments with high risk of surface damage |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Default error correction (23%) -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-TICKET-2026"></SfAztecGenerator>

<!-- Low error correction for maximum data capacity -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-HIGH-CAPACITY-DATA" ErrorCorrectionPercentage="10"></SfAztecGenerator>

<!-- High error correction for damage resistance -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-TICKET-2026" ErrorCorrectionPercentage="50"></SfAztecGenerator>
```

## XDimension

The [XDimension](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_XDimension) property specifies the size of each barcode module. When set to 0, the barcode automatically scales to fit within the available Width and Height. When a value greater than 0 is specified, the component renders the barcode using the specified module size. If the resulting barcode cannot fit within the configured dimensions, the barcode is not rendered, and the OnValidationFailed event is triggered.

* **Default (0)**: When set to `0`, the component automatically sizes and fits the Aztec barcode modules to optimally utilize the available component region defined by `Width` and `Height`.
* **Explicit Value (> 0)**: When set to a value greater than `0`, it sets the specific pixel dimension of each individual square module. Larger values increase the individual module size and expand the overall barcode footprint.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Automatic fitting to available barcode region -->
<SfAztecGenerator Width="200px" Height="200px" Value="AZTEC-TICKET-2026" XDimension="0"></SfAztecGenerator>

<!-- Custom module size -->
<SfAztecGenerator Width="250px" Height="250px" Value="AZTEC-TICKET-2026" XDimension="4"></SfAztecGenerator>
```

## Margin Customization

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_Margin) property specifies the padding around the barcode within the component area.

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 10 |
| `Right` | Space from the right side | 10 |
| `Top` | Space from the top side | 10 |
| `Bottom` | Space from the bottom side | 10 |

All properties accept double values representing pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="250px" Height="250px" Value="EVENT-TICKET-7890">
    <AztecMargin Left="20" Top="20" Right="20" Bottom="20"></AztecMargin>
</SfAztecGenerator>
```

## Display Text Customization

The barcode display text can be fully customized using the [DisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_DisplayText) property. The `AztecGeneratorDisplayText` component provides comprehensive text customization options.

### Text

The [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_Text) property specifies the textual description to display with the Aztec barcode. By default, it is an empty string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" Value="SYNCFUSION123">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### FontFamily

The [FontFamily](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_FontFamily) property specifies the font style of the display text. By default, it is set to **monospace**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" Value="support@syncfusion.com">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123" FontFamily="Arial"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### FontSize

The [FontSize](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_FontSize) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" Value="1234567890">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123" FontSize="16"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_Position) property specifies the vertical position of the text relative to the Aztec barcode. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" Value="SYNCFUSION123456789">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123" Position="TextPosition.Top"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="250px" Height="200px" Value="ORDER-12345">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123" Alignment="Alignment.Left"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" Height="200px" Value="support@syncfusion.com">
    <AztecGeneratorDisplayText Visibility="false"></AztecGeneratorDisplayText>
</SfAztecGenerator>
```

### Text Margin

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.AztecGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_AztecGeneratorDisplayText_Margin) property specifies the space between the text and the Aztec barcode. It accepts an `AztecTextMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 0 |
| `Right` | Space from the right side | 0 |
| `Top` | Space from the top side | 0 |
| `Bottom` | Space from the bottom side | 0 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="250px" Height="250px" Value="BP-2026-000123">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123">
        <AztecTextMargin Left="5" Top="10" Right="5" Bottom="10"></AztecTextMargin>
    </AztecGeneratorDisplayText>
</SfAztecGenerator>
```

## Dynamic Property Updates

The Aztec Barcode component supports real-time property binding. When any property value changes, the Aztec barcode automatically updates to reflect the changes.

### Update Aztec Barcode Properties Dynamically

Here is an example showing how to dynamically update Aztec barcode properties using Blazor data binding:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.DropDowns

<div style="margin: 20px;">
    <div style="margin-bottom: 10px;">
        <label>Aztec Value: </label>
        <SfTextBox @bind-Value="@AztecValue" Placeholder="Enter data or ticket value"></SfTextBox>
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
        <label>Barcode Size: </label>
        <SfSlider @bind-Value="@BarcodeSize" Min="150" Max="400" Step="10"></SfSlider>
        <span>@BarcodeSize px</span>
    </div>

    <div style="margin-bottom: 10px;">
        <label>Symbol Form: </label>
        <SfDropDownList TValue="AztecSymbolForm" TItem="AztecSymbolForm" DataSource="@SymbolForms" @bind-Value="@SelectedSymbolForm">
            <DropDownListFieldSettings Text="ToString" Value="ToString"></DropDownListFieldSettings>
        </SfDropDownList>
    </div>

    <div style="margin-bottom: 10px;">
        <label>Layers (0 = Auto): </label>
        <SfNumericTextBox @bind-Value="@Layers" Min="0" Max="32" Step="1"></SfNumericTextBox>
    </div>

    <div style="margin-bottom: 10px;">
        <label>Error Correction Percentage (5-95%): </label>
        <SfNumericTextBox @bind-Value="@ErrorCorrectionPercentage" Min="5" Max="95" Step="5"></SfNumericTextBox>
    </div>

    <div style="margin-bottom: 10px;">
        <label>XDimension: </label>
        <SfNumericTextBox @bind-Value="@XDimension" Min="0" Max="10" Step="1"></SfNumericTextBox>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Display Text: </label>
        <SfTextBox @bind-Value="@DisplayTextValue" Placeholder="Enter display text"></SfTextBox>
    </div>
</div>

<!-- Aztec Barcode that updates in real-time as properties change -->
<div style="margin-top: 30px; padding: 20px; border: 1px solid #ccc; text-align: center;">
    <SfAztecGenerator Width="@($"{BarcodeSize}px")" 
                      Height="@($"{BarcodeSize}px")" 
                      Value="@AztecValue"
                      ForeColor="@ForeColor"
                      BackgroundColor="@BackgroundColor"
                      SymbolForm="@SelectedSymbolForm"
                      Layers="@Layers"
                      ErrorCorrectionPercentage="@ErrorCorrectionPercentage"
                      XDimension="@XDimension">
        <AztecGeneratorDisplayText Text="@DisplayTextValue" Visibility="@(!string.IsNullOrEmpty(DisplayTextValue))"></AztecGeneratorDisplayText>
    </SfAztecGenerator>
</div>

@code
{
    private string AztecValue = "AZTEC-TICKET-2026-000123";
    private string ForeColor = "black";
    private string BackgroundColor = "white";
    private int BarcodeSize = 250;
    private AztecSymbolForm SelectedSymbolForm = AztecSymbolForm.Auto;
    private List<AztecSymbolForm> SymbolForms = new() { AztecSymbolForm.Auto, AztecSymbolForm.Compact, AztecSymbolForm.FullRange };
    private int Layers = 0;
    private int ErrorCorrectionPercentage = 23;
    private double XDimension = 0;
    private string DisplayTextValue = "Boarding Pass Ticket";
}
```

## Validation Event

The [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_OnValidationFailed) event in the [SfAztecGenerator](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html) is triggered when invalid data or configuration settings are provided.

### Trigger Scenarios

The `OnValidationFailed` event is raised in the following circumstances:

* **Capacity overflow**: The input data exceeds the maximum data storage capacity of the selected symbol form or layer setting.
* **Invalid layer ranges**: The configured layer count is outside the valid range for the selected symbol form (e.g., specifying more than 4 layers for `AztecSymbolForm.Compact` or more than 32 layers for `AztecSymbolForm.FullRange`).
* **Unsupported configuration combinations**: Conflicting settings where the combination of input data length, error correction percentage, and symbol form or layer constraints cannot produce a valid Aztec code.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfAztecGenerator Width="200px" 
                  Height="200px" 
                  Value="AZTEC-DATA" 
                  OnValidationFailed="@OnValidationFailed">
</SfAztecGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        Console.WriteLine($"Aztec validation failed: {args.Message}");
    }
}
```

## Export

The Aztec Barcode component provides support to export its content as an image in the specified image format and download it in the browser using the [Export](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfAztecGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfAztecGenerator_Export_System_String_Syncfusion_Blazor_BarcodeGenerator_BarcodeExportType_) method.

The following example demonstrates how to export the Aztec Barcode as a JPG image:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<input type="button" value="Export JPG" @onclick="@OnExport" />

<SfAztecGenerator Width="200px" Height="200px" Value="SYNCFUSION123" @ref="@AztecBarcode">
    <AztecGeneratorDisplayText Text="Ticket ID: 000123"></AztecGeneratorDisplayText>
</SfAztecGenerator>

@code
{
    private SfAztecGenerator AztecBarcode;

    private void OnExport()
    {
        AztecBarcode.Export("AztecCode", BarcodeExportType.JPG);
    }
}
```

>**Note:** The supported export file formats are:
>* **JPG**
>* **PNG**
