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

DotCode is a two-dimensional (2D) barcode designed for high-density data encoding in industrial and health care applications. It supports compact data representation and reliable scanning, making it suitable for product identification, serialization, and traceability scenarios.

**Key Features**

- High-density data encoding.
- Support for numeric and alphanumeric data.
- GS1-compliant encoding.
- Reliable scanning in industrial environments.
- Error detection and correction capabilities.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Simple alphanumeric DotCode -->
<SfDotCodeGenerator Width="300" Height="250" Value="Product Serialization"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/rDVRCjtcLwKCujkf?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/DotCodeBarcode.png)" %}

>**Note:** DotCode supports encoding numeric, alphanumeric, and supported special characters. The component automatically determines the appropriate encoding based on the provided input.

## GS1 DotCode

DotCode supports GS1 encoding mode, which allows you to encode structured data using GS1 Application Identifiers (AIs). This is particularly useful in pharmaceutical and health care applications where compliance with GS1 standards is required.

To enable GS1 encoding, use the [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_EnableGS1) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="350" Height="250" Value="(01)12345678901231" EnableGS1="true"></SfDotCodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLnCNXQBGqHrNxT?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Dot Code Generator in Blazor Barcode](images/GS1-DotCode.png)" %}

**Common GS1 Application Identifiers:**

| AI | Description | Example |
|---|---|---|
| 01 | Global Trade Item Number (GTIN) | (01)12345678901234 |
| 10 | Batch or Lot Number | (10)ABC123 |
| 11 | Production Date | (11)200115 |
| 15 | Best Before Date | (15)251231 |
| 17 | Expiration Date | (17)251231 |
| 21 | Serial Number | (21)SN123456 |

## Validation and Error Handling

The DotCode Generator validates input data before generating the barcode. If the provided value does not meet the required format or exceeds the supported capacity, the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_OnValidationFailed) event is triggered.

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
{% previewsample "https://blazorplayground.syncfusion.com/embed/BDBHstNwVGUuwuYM?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## DotCode Customizations

The DotCode barcode appearance can be customized using properties such as colors, dimensions, margins, and display text settings.

### DotCode Color Customization

The barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_ForeColor) property specifies the line and text color of the DotCode barcode. By default, it is set to **black**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" ForeColor="red" Value="SYNCFUSION"></SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VZVnMNjcVmfvAAwH?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_BackgroundColor) property specifies the background color of the DotCode barcode. By default, it is set to **white**. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" BackgroundColor="lightyellow" ForeColor="darkblue" Value="SYNCFUSION"></SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/rjrdCtNQhQSDrqHL?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

### DotCode Dimension Customization

The dimensions of the barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDotCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDotCodeGenerator_Width) properties. Both properties accept string values with px and % units. By default, both are set to **100%**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="300px" Height="250px" Value="SYNCFUSION"></SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BtVRMXjQVwehASji?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

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
{% previewsample "https://blazorplayground.syncfusion.com/embed/hZVxMjjchmeJttVd?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

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
{% previewsample "https://blazorplayground.syncfusion.com/embed/LjhRWXDmLmoSRvYv?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

#### Font Configuration

The [FontFamily](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_FontFamily) property specifies the font style of the display text. By default, it is set to **monospace**.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" FontFamily="Arial"></DotCodeDisplayText>
</SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LZhxstNGLwIPJsQC?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

The [FontSize](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_FontSize) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" FontSize="18"></DotCodeDisplayText>
</SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/htBRsZNwLQxNCDra?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

#### Text Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts the following values: `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" Alignment="Alignment.Left"></DotCodeDisplayText>
</SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LNBniXDQBwRMdsdA?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

#### Text Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Position) property specifies the vertical position of the text relative to the DotCode barcode. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Text="Product Code" Position="TextPosition.Top"></DotCodeDisplayText>
</SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VtVdMZjmrQxqKyIU?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

#### Text Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DotCodeDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DotCodeDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDotCodeGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DotCodeDisplayText Visibility="false"></DotCodeDisplayText>
</SfDotCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LtBxCtZmLQnIiUrJ?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

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
{% previewsample "https://blazorplayground.syncfusion.com/embed/LXLdMDjwVwndQpFO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

### Dynamic Property Updates

The DotCode Generator supports dynamic updates to barcode properties at runtime. When a property value is modified, the barcode is automatically refreshed to display the latest changes. This enables interactive customization of the barcode appearance and content.

#### Update DotCode Properties Dynamically

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
{% previewsample "https://blazorplayground.syncfusion.com/embed/LNrHCDjwBcxvyBPc?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}