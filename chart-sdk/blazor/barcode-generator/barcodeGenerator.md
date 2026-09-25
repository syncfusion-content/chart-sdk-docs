---
layout: post
title: Barcode Generator in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about Barcode Generator in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# Barcode Generator in Blazor Barcode Component

## Code39

The Code 39 character set includes digits 0-9, uppercase letters A–Z, and the symbols space, minus (-), plus (+), period (.), dollar ($), slash (/), and percent (%). A special start/stop character is placed at the beginning and end of each barcode. The barcode can be of any length; even more than 25 characters begin to push the bounds. Code 39 is the only type of barcode that does not require a checksum for common use.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code39" Value="SYNCFUSION"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LNhHNdWipDssBiZh?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code39 in Blazor Barcode](images/blazor-code39-barcode.webp)" %}

## Code39 Extended

Code 39 Extended is an enhanced version of Code 39 that supports ASCII character set. In Code 39 Extended, it can encode lowercase letters (a–z) and special keyboard characters by using combinations of standard Code 39 symbols.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code39Extension" Value="SYNCFUSION"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BjLdtnWspXWJDpdW?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code39 Extended in Blazor Barcode](images/blazor-code39-extended-barcode.webp)" %}

## Code 11

Code 11 is used primarily for labeling telecommunications equipment. The character set includes digits 0 to 9, a dash (-), and start/stop codes.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code11" Value="112"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/rjBdXxsWfDAGVdTj?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code11 in Blazor Barcode](images/blazor-code11-barcode.webp)" %}

## Codabar

Codabar is a variable-length symbol that encodes the following 20 characters:

0123456789-$:/.+ABCD

The characters A, B, C, and D serve as start and stop characters. Codabar is used in libraries, blood banks, the package delivery industry and a variety of other information processing applications.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Codabar" Value="123456789"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hthxtHWWTjTAClSC?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Codabar in Blazor Barcode](images/blazor-codebar-barcode.webp)" %}

## Code 32

Code 32 is used mainly for coding pharmaceuticals, cosmetics, and dietetics. It is often to encode the Italian Pharmacode that has the following structure:

* ‘A’ character (ASCII 65), that is not really encoded.
* 8 digits for the Pharmacode (It generally begins with / and prefixed with 0).
* 1 digit for checksum module 10, that is automatically calculated by the barcode.

The value to be encoded must be 8 digits Pharmacode (prefix it with ‘0’ if necessary), and the 9th digit (the checksum) is automatically calculated by barcode.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code32" Value="01234567"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BjLnDHiMfZIWwdlF?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code32 in Blazor Barcode](images/blazor-code32-barcode.webp)" %}

## Code 93

Code 93 is designed to complement and improve Code 39. It represents the entire ASCII character set through combinations of two characters. Code 93 is a continuous, variable-length symbology and produces denser code. The Standard Mode (default implementation) can encode uppercase letters (A-Z), digits (0-9), and special characters like *, -, $, %, (Space), ., /, and +.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code93" Value="01234567"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VjVRjnCipDSRBRSl?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code 93 in Blazor Barcode](images/blazor-code93-barcode.webp)" %}

## Code 93 Extended

Code 93 Extended Barcode symbology is a continuous, variable length, self-checking. It is based on Code 93 Barcode. The Extended Version can encode all 128 ASCII characters.

## Code 128

Code 128 is a variable-length, high-density, alphanumeric, linear bar code symbology capable of encoding full 128-character ASCII character set and extended character sets. This symbology includes a checksum digit for verification and the barcode can be verified character-by-character by verifying the parity of each data byte.

### Code 128 Code Sets

* Code Set A (or Chars Set A) includes all of the standard upper case U.S. alphanumeric keyboard characters and punctuation characters along with the control characters, (namely, characters with ASCII values from 0 to 95 inclusive), and seven special characters.
* Code Set B (or Chars Set B) includes all of the standard upper case alphanumeric keyboard characters and punctuation characters along with the lower case alphabetic characters (namely, characters with ASCII values from 32 to 127 inclusive), and seven special characters.
* Code Set C (or Chars Set C) includes the set of 100 digit pairs from 00 to 99 inclusive along with three special characters. This allows numeric data to be   encoded as two data digits per symbol character, at effectively twice the density of standard data.

### Code 128 Special characters

The last seven characters of Code Sets A and B (character values 96-102) and the last three characters of Code Set C (character values 100-102) are special non-data characters with no ASCII character equivalents that have a particular significance to the Barcode reading device.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code128" Value="SYNCFUSION"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LjhxDxCiftSEKWfu?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Code 128 Special Characters in Blazor Barcode](images/blazor-code128-barcode.webp)" %}

## Barcode Customizations

The Barcode Generator component provides various customization options to modify the appearance and behavior of barcodes. This section covers all the available properties that can be used to customize barcodes.

### Barcode Color Customization

The barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_ForeColor) property specifies the line and text color of the barcode. By default, it is set to black.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code128" ForeColor="red" Value="SYNCFUSION"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BDVHZxsWfNdKfmdh?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Color](images/blazor-barcode-color-customization.webp)" %}

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_BackgroundColor) property specifies the background color of the barcode. By default, it is set to white. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code128" BackgroundColor="lightyellow" ForeColor="darkblue" Value="SYNCFUSION"></SfBarcodeGenerator>

```

### Barcode Dimension Customization

The dimensions of the barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Width) properties. Both properties accept string values with units (px, %, em, etc.). By default, both are set to 100%.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="300px" Type="@BarcodeType.Code128" Value="SYNCFUSION"></SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/htBHDRsCpZxREHGZ?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Dimension](images/blazor-barcode-dimension-customization.webp)" %}

### Margin Customization

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_Margin) property specifies the space to be left around the barcode. It accepts a `BarcodeMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 10 |
| `Right` | Space from the right side | 10 |
| `Top` | Space from the top side | 10 |
| `Bottom` | Space from the bottom side | 10 |

All properties accept double values representing pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeMargin Left="20" Top="20" Right="20" Bottom="20"></BarcodeMargin>
</SfBarcodeGenerator>

```

### Display Text Customization

The barcode display text can be fully customized using the [DisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_DisplayText) property. The `BarcodeGeneratorDisplayText` component provides the following properties:

#### Text Content

The [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Text) property specifies the textual description to display with the barcode. By default, it is an empty string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="300px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Text"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LtBdNnMCfsVnhoWO?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing the Text in Blazor Barcode](images/blazor-barcode-text-customization.webp)" %}

#### Font Configuration

The [Font](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Font) property specifies the font style of the display text. By default, it is set to `monospace`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Product Code" Font="Arial"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Size

The [Size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Size) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Product Code" Size="25"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts the following values: `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Product Code" Alignment="Alignment.Left"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Position) property specifies the vertical position of the text relative to the barcode. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Product Code" Position="TextPosition.Top"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Visibility="false"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

#### Text Margin

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.BarcodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_BarcodeGeneratorDisplayText_Margin) property specifies the space between the text and the barcode. It accepts a `BarcodeTextMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 0 |
| `Right` | Space from the right side | 0 |
| `Top` | Space from the top side | 0 |
| `Bottom` | Space from the bottom side | 0 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfBarcodeGenerator Width="300px" Height="200px" Type="@BarcodeType.Code128" Value="SYNCFUSION">
     <BarcodeGeneratorDisplayText Text="Product Code">
          <BarcodeTextMargin Left="0" Top="10" Right="0" Bottom="10"></BarcodeTextMargin>
     </BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

```

### Dynamic Property Updates

The Barcode Generator supports real-time property binding. When you change any property value, the barcode automatically updates to reflect the changes. This is useful for creating interactive applications where users can customize the barcode appearance dynamically.

#### Real-time Property Binding

Here is an example showing how to dynamically update barcode properties using Blazor data binding:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.Inputs

<div style="margin: 20px;">
    <div style="margin-bottom: 10px;">
        <label>Barcode Value: </label>
        <SfTextBox @bind-Value="@BarcodeValue" Placeholder="Enter barcode value"></SfTextBox>
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
        <SfNumericTextBox @bind-Value="@BarWidth" Min="100" Max="500" Step="10"></SfNumericTextBox>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Height (px): </label>
        <SfNumericTextBox @bind-Value="@BarHeight" Min="100" Max="300" Step="10"></SfNumericTextBox>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Display Text: </label>
        <SfTextBox @bind-Value="@DisplayTextValue" Placeholder="Enter display text"></SfTextBox>
    </div>
</div>

<!-- Barcode that updates in real-time as properties change -->
<div style="margin-top: 30px; padding: 20px; border: 1px solid #ccc;">
    <SfBarcodeGenerator Width="@($"{BarWidth}px")" 
                        Height="@($"{BarHeight}px")" 
                        Type="@BarcodeType.Code128" 
                        Value="@BarcodeValue"
                        ForeColor="@ForeColor"
                        BackgroundColor="@BackgroundColor">
        <BarcodeGeneratorDisplayText Text="@DisplayTextValue" Visibility="@(!string.IsNullOrEmpty(DisplayTextValue))"></BarcodeGeneratorDisplayText>
    </SfBarcodeGenerator>
</div>

@code
{
    private string BarcodeValue = "SYNCFUSION";
    private string ForeColor = "black";
    private string BackgroundColor = "white";
    private double BarWidth = 300;
    private double BarHeight = 150;
    private string DisplayTextValue = "Product Code";
}
```

**Key Points:**
- The barcode automatically re-renders with the new property values
- This works for all customizable properties: Value, ForeColor, BackgroundColor, Width, Height, DisplayText, Margins, etc.

#### Real-time Barcode Type Change

You can also change the barcode type dynamically:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.DropDowns

<div style="margin: 20px;">
    <label>Select Barcode Type: </label>
    <SfDropDownList TValue="BarcodeType" TItem="BarcodeType" DataSource="@BarcodeTypes" @bind-Value="@SelectedBarcodeType">
        <DropDownListFieldSettings Text="ToString" Value="ToString"></DropDownListFieldSettings>
    </SfDropDownList>
</div>

<SfBarcodeGenerator Width="300px" 
                    Height="150px" 
                    Type="@SelectedBarcodeType" 
                    Value="@BarcodeValue">
    <BarcodeGeneratorDisplayText Text="Dynamic Type Change"></BarcodeGeneratorDisplayText>
</SfBarcodeGenerator>

@code
{
    private BarcodeType SelectedBarcodeType = BarcodeType.Code128;
    private string BarcodeValue = "31117013206375";
    
    private void OnBarcodeTypeChanged(ChangeEventArgs args)
    {
        if (Enum.TryParse<BarcodeType>(args.Value?.ToString(), out var barcodeType))
        {
            SelectedBarcodeType = barcodeType;
        }
    }
}
```

### Data Validation and Error Detection

#### Enable Check Sum

The [EnableCheckSum](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_EnableCheckSum) property specifies an error detection mechanism in which additional characters are added to a barcode to protect the integrity of barcode data. The default value is `true` for barcode types that support it, such as `BarcodeType.Code39`.

When enabled, the barcode will include a check digit that helps verify the barcode data during scanning. Set this property to `false` if you want to hide the extra characters displayed at the end of the barcode.

```cshtml
<SfBarcodeGenerator EnableCheckSum="false"
                    Width="200px"
                    Height="150px"
                    Type="@BarcodeType.Code39"
                    Value="SYNCFUSION">
</SfBarcodeGenerator>
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VtrHXxMspWUHuUcT?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Event

[OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfBarcodeGenerator_OnValidationFailed) event in the [SfBarcodeGenerator](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfBarcodeGenerator.html) is used to trigger when the input is invalid string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
<SfBarcodeGenerator Width="200px" Height="150px" Type="@BarcodeType.Code128" Value="SYNCFUSION" OnValidationFailed="@OnValidationFailed"></SfBarcodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
    }
}
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BXLHZniCTMfPFDvD?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## See also

* [How to generate a QR Code in (2FA) Application in Blazor Diagram?](https://support.syncfusion.com/kb/article/16295/how-to-generate-a-qr-code-in-2fa-application-in-blazor-diagram)

* [How to create a simple BarcodeGenerator and QRCodeGenerator sample in a .NET 8 Blazor Web App using interactive render mode as a server?](https://support.syncfusion.com/kb/article/17284/how-to-create-a-simple-barcodegenerator-and-qrcodegenerator-sample-in-a-net-8-blazor-web-app-using-interactive-render-mode-as-a-server)