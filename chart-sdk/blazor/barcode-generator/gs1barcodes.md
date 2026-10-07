---
layout: post
title: GS1 Barcodes in Blazor Barcode Component | Syncfusion®
description: Checkout and learn about GS1 Barcode types, features, customization options, and implementation examples in the Blazor Barcode component.
platform: chart-sdk
control: Barcode
documentation: ug
---

# GS1 Barcodes

GS1 standards define a series of barcodes used for supply chain management, retail, and logistics operations. These barcodes encode product identification and tracking data using standardized GS1 Application Identifiers (AIs). The Blazor Barcode component supports multiple GS1 barcode types to meet various industry requirements.

## GS1-Code128 Barcode

GS1-Code128 is a linear barcode based on Code 128 that uses GS1 Application Identifiers (AIs) to encode structured business data. It is commonly used in retail, logistics, healthcare, and supply-chain applications to store information such as product identifiers, batch numbers, expiration dates, and serial numbers.

**Allowed Input Characters:** GS1-128 supports numeric values (0-9), uppercase and lowercase alphabetic characters (A-Z, a-z), and supported ASCII special characters. Data should be encoded using valid GS1 Application Identifiers (AIs) to represent structured business information.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.GS1Code128" Value="(01)09506000134352(17)261231(10)ABC123">
    <BarcodeGeneratorDisplayText Text="Product Serialization" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Barcode Generator](images/Gs1-BarcodeGenerator.png)" %}

GS1-128 accepts GS1 Application Identifier (AI) data. The AI is enclosed in parentheses, followed by the data. Multiple AIs can be concatenated together.

**Common GS1 Application Identifiers**

| AI | Description |
|---|---|
| 00 | Serial Shipping Container Code (SSCC) |
| 01 | Global Trade Item Number (GTIN) |
| 10 | Batch or Lot Number |
| 11 | Production Date |
| 15 | Best Before Date |
| 17 | Expiration Date |
| 21 | Serial Number |
| 240 | Additional Product Identification |
| 400 | Customer Purchase Order Number |

## ITF-14 Barcode

ITF-14 (Interleaved 2 of 5) is the GS1 standard for encoding 14-digit Global Trade Item Numbers (GTINs) on outer cases and shipping cartons. The barcode automatically calculates and adds the GS1 mod-10 check digit. It is commonly used in logistics and warehouse management for tracking product cases.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.ITF14" Value="12345678901231">
    <BarcodeGeneratorDisplayText Text="Carton Tracking" />
</SfBarcodeGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 ITF 14 Barcode Generator](images/Gs1-ITF14.png)" %}

**Allowed Input Characters:** ITF-14 supports numeric values (0-9) only and is used to encode a 14-digit GTIN (Global Trade Item Number). The final digit is automatically calculated as a check digit.

## GS1 DataBar Barcodes

GS1 DataBar is a family of linear barcode symbols designed for encoding GTIN data in retail and healthcare applications. These symbols provide a compact alternative to traditional linear barcodes while supporting reliable scanning and product identification.

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

>**Note**: GS1 DataBar Limited has restrictions on valid GTIN values. The check digit must be in the range of 0-4 for restricted items.

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

## GS1 DataBar Validation

The GS1 barcode components include built-in validation to ensure data integrity. Invalid input will trigger the [OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_OnValidationFailed) event:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="150px" Type="@BarcodeType.GS1Code128" Value="(01)12345678901234" OnValidationFailed="@OnValidationFailed"></SfBarcodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
        // Handle validation errors
        Console.WriteLine($"Barcode validation error: {args.Message}");
    }
}
```

### Dynamic Property Updates

The GS1 Barcode components support real-time property binding. When you change any property value, the barcode automatically updates to reflect the changes. This is useful for creating interactive applications where users can customize the barcode appearance dynamically.

#### Update GS1 Databar Properties Dynamically

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