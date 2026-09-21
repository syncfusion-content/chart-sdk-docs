---
layout: post
title: QR Code generator in Blazor Barcode Component | Syncfusion®
description: Checkout and learn here all features about QR Code generator in Blazor Barcode component and much more.
platform: chart-sdk
control: Barcode
documentation: ug
---

# QR Code Generator in Blazor Barcode Component

## QR Code

The [Blazor QR Code](https://www.syncfusion.com/blazor-components/blazor-barcode) is a two-dimensional barcode composed of a grid of dark and light dots or blocks that form a square. The data encoded in the barcode can be numeric, alphanumeric, or Shift Japanese Industrial Standards (JIS8) characters. The QR Code uses version from 1 to 40. Version 1 measures 21 modules x 21 modules, Version 2 measures 25 modules x 25 modules, and so on. The number of modules increases in steps of 4 modules per side up to Version 40, which measures 177 modules x 177 modules. Each version has its own capacity. By default, the barcode control automatically sets the version according to the length of the input text. The QR Barcodes are designed for industrial uses and are also commonly used in consumer advertising.

### How QR Code Works

QR Code uses a matrix (two-dimensional) barcode system that encodes data in a square grid pattern. The encoding process involves:

1. **Data Input**: Text, URL, or GS1 data
2. **Data Analysis**: Determine required version and character set
3. **Encoding**: Convert data to binary using specified mode
4. **Error Correction**: Add Reed-Solomon error correction codewords
5. **Module Placement**: Arrange modules in the grid
6. **Masking**: Apply masking pattern to optimize scannability
7. **Output**: Final QR code image with position markers, timing patterns, and data modules

### QR Code Structure

| Component | Description |
|---|---|
| **Position Markers** | Three 7×7 squares in corners for orientation |
| **Timing Patterns** | Alternating black/white lines for alignment |
| **Format Information** | Error correction level and mask pattern |
| **Data & EC** | Encoded data and error correction codewords |
| **Quiet Zone** | 4-module border around QR code |
| **Modules** | Individual black (1) or white (0) squares |

### QR Code Versions

| Version | Size | Capacity (Numeric) | Capacity (Alphanumeric) | Capacity (Byte) |
|---|---|---|---|---|
| 1 | 21×21 | 41 | 25 | 17 |
| 5 | 37×37 | 154 | 93 | 65 |
| 10 | 57×57 | 346 | 209 | 154 |
| 20 | 97×97 | 1,108 | 671 | 512 |
| 40 | 177×177 | 7,089 | 4,296 | 2,953 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px" Value="Syncfusion"></SfQRCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BXLdtnWszsIxjDVB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[QR Code in Blazor Barcode Component](images/blazor-barcode-with-qrcode.webp)" %}

## Customizing the Barcode color

A page or printed media containing a barcode often appears colorful in the background and surrounding region with other contents. In such cases, the barcode can also be customized to meet the needs. Achieve this using [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_ForeColor) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px" ForeColor="red" Value="Syncfusion"></SfQRCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BtrdNRCCJWxjtKTQ?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing QR Code Color in Blazor Barcode](images/blazor-barcode-qrcode-color-customization.webp)" %}

## Customizing the Barcode dimension

The dimensions of the barcode can be changed by using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Width) properties of the barcode generator.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px"  Value="Syncfusion"></SfQRCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/BNLHtRsCzsdglVtt?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## Customizing the text

In barcode generators, customize the barcode text by using the display [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_QRCodeGeneratorDisplayText_Text) property.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px" Value="Syncfusion">
    <QRCodeGeneratorDisplayText Text="Text"></QRCodeGeneratorDisplayText>
</SfQRCodeGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VNhdjnCCzWnQnUJx?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing the Text for QR Code in Blazor Barcode](images/blazor-barcode-qrcode-text-customization.webp)" %}

## GS1 QR Code

GS1 QR Code is a special variant of the standard QR Code that encodes data using GS1 Application Identifiers (AIs). This enables supply chain data to be encoded in a standardized, machine-readable format. GS1 QR Codes include a GS1 prefix indicator and support multiple AIs within a single QR code, making them ideal for product identification, tracking, and information exchange in supply chain and retail environments.

**Allowed Input Characters:** GS1 QR Code supports numeric, alphabetic, and supported special characters. Data is encoded using GS1 Application Identifiers (AIs), allowing structured information such as product identifiers, batch numbers, expiration dates, serial numbers, and other business data to be stored within a single QR Code.

Use the [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_EnableGS1) property on the [SfQRCodeGenerator](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html) to switch the control into GS1 mode.

### How GS1 QR Code Works

GS1 QR Code enhances the standard QR Code with GS1 compliance:

1. **GS1 Header**: Includes FNC1 as first character to indicate GS1 mode
2. **AI Parsing**: Recognizes and validates GS1 Application Identifiers
3. **Data Encoding**: Encodes AI elements as `(AI)data` pairs
4. **Validation**: Performs AI-specific validation on data fields
5. **Encoding**: Uses standard QR Code encoding after AI validation

### GS1 QR Code Format

- **Prefix**: FNC1 character (indicates GS1 mode)
- **AI Format**: `(AI)data` with parentheses
- **Multiple AIs**: Concatenated directly: `(01)data1(10)data2`
- **Max Capacity**: Depends on QR version and error correction level
- **AI Support**: All standard GS1 AIs (01-422, 310n-365n)

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- GS1 QR Code with GTIN, batch, and expiration date -->
<SfQRCodeGenerator Width="250px" Height="250px" 
                   Value="(01)12345678901234(10)BATCH001(17)251231" 
                   EnableGS1="true"></SfQRCodeGenerator>
```

### GS1 QR Code Validation Rules

- **Syntax**: Must use format `(AI)data(AI)data...`
- **AI Format**: 2-4 numeric digits enclosed in parentheses
- **Data Length**: Must match AI specification (fixed or variable)
- **Character Set**: Each AI defines allowed characters
- **Duplicates**: Each AI appears only once per code
- **AI Support**: Supports all standard GS1 Application Identifiers

### GS1 QR Code Customization

Customize the GS1 QR Code with the following options:

- **Content:** Modify the [Value](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Value) property to update the encoded GS1 data.
- **Size:** Adjust [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Width) and [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Height) to control the QR Code dimensions.
- **Colors:** Customize the QR Code appearance using the [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_BackgroundColor) and [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_ForeColor) properties.
- **Text Display:** Use the [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_QRCodeGeneratorDisplayText_Visibility) property to show or hide the human-readable QR Code text.
- **Spacing:** Configure [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Margin) properties (left, right, top, and bottom) around the QR Code.
- **Version:** Set the [Version](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Version) property to control QR Code size and data capacity.
- **Error Correction:** Configure the [ErrorCorrectionLevel](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_ErrorCorrectionLevel) property to specify the level of error recovery for damaged or partially obscured QR Codes.
- **Export:** Use the [Download](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_Download) button to export the generated QR Code as an image.

### GS1 QR Code with Error Correction

Combining GS1 encoding with error correction levels:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- GS1 QR Code with high error correction -->
<SfQRCodeGenerator Width="250px" Height="250px" 
                   Value="(01)12345678901234(10)ABC123" 
                   EnableGS1="true"
                   ErrorCorrectionLevel="ErrorCorrectionLevel.High"></SfQRCodeGenerator>
```

This configuration provides robust scanning even with partial damage to the QR code.

## Error Correction Level

The QR Barcode employs error correction to generate a series of error correction codewords which are added to the data code word sequence in order to enable the symbol to withstand damage without data loss. There are four user–selectable levels of error correction, as shown in the table, that offer the capability of recovery from the following amounts of damage. By default, the [Error correction level](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.ErrorCorrectionLevel.html) is Low.

### Error Correction Levels

|Error Correction Level|	Recovery Capacity % (approx.)|
|----------|--------------|
|L (Low)|	7%|
|M (Medium)|	15%|
|Q (Quartile)|	25%|
|H (High)|	30%|

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Low error correction (default) - compact but less robust -->
<SfQRCodeGenerator Width="150px" Height="150px" ErrorCorrectionLevel="ErrorCorrectionLevel.Low" Value="https://www.syncfusion.com"></SfQRCodeGenerator>

<!-- High error correction - larger but very robust -->
<SfQRCodeGenerator Width="200px" Height="200px" ErrorCorrectionLevel="ErrorCorrectionLevel.High" Value="https://www.syncfusion.com"></SfQRCodeGenerator>
```

Choose higher error correction levels for environments where the QR code may be damaged, printed on uneven surfaces, or scanned from difficult angles.

```cshtml
<SfQRCodeGenerator Width="200px" Height="200px" ErrorCorrectionLevel="ErrorCorrectionLevel.Low" Value=https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.ErrorCorrectionLevel.html>
    <QRCodeGeneratorDisplayText Visibility="false"></QRCodeGeneratorDisplayText>
</SfQRCodeGenerator>
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hjrxjdWCpMwrqncK?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

## QR code with logo

The QR Code component supports embedding a logo image using the [ImageSource](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeLogo.html#Syncfusion_Blazor_BarcodeGenerator_QRCodeLogo_ImageSource) property within the [QRCodeLogo](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeLogo.html) element. This property sets the logo image in the center of the QR code. By default, the logo image is positioned at one-third of the QR code's size. Therefore, adjusting the size of the QR code will proportionally scale the logo image.

Advantages of Image QR Codes

* Enhanced Brand Identity: A QR code with an image allows businesses to integrate their logos or brand elements directly into the QR code. This enhances brand consistency and recognition, making it more memorable for users when they interact with the QR code.

* Increased User Interaction: An image QR code can convey messages, showcase products, or provide information more effectively than plain text or URLs. This visual approach can significantly boost user engagement and make the content more compelling and memorable.

* Comprehensive Visual Content: An image QR code generator enables the sharing of high-resolution images, infographics, diagrams, or product photos. This is particularly beneficial in art-related contexts where visual content is crucial for effective communication.

These benefits illustrate how an image QR code converter can enhance the effectiveness and impact of QR codes in various domains, from marketing to education and beyond.

The following code example demonstrates how to generate a QR barcode with a logo positioned at the center of it.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px" Value="https://www.syncfusion.com/blazor-components/blazor-barcode">
    <QRCodeGeneratorDisplayText Visibility="false"></QRCodeGeneratorDisplayText>
    <QRCodeLogo ImageSource="images/barcode/syncfusion.png"></QRCodeLogo>
</SfQRCodeGenerator>
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/rZVnNRWifsPXvMjh?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

![QR barcode with logo in Blazor Barcode](images/blazor-barcode-qrcode-with-logo.png)

>**Note:** The [Error correction level](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.ErrorCorrectionLevel.html) is not taken into account when rendering the logo image inside the QR code.

### Customizing the logo size

The size of the logo can be changed using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeLogo.html#Syncfusion_Blazor_BarcodeGenerator_QRCodeLogo_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.QRCodeLogo.html#Syncfusion_Blazor_BarcodeGenerator_QRCodeLogo_Width) properties of the QR code generator. The image size should be equal to or less than 30% of the QR code's size. If the specified size exceeds 30% of the QR code's size, the QR code may not be scanned properly. Therefore, the lesser value between 30% of the QR code's size and the specified size will be used for rendering.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="200px" Value="https://www.syncfusion.com/blazor-components/blazor-barcode">
    <QRCodeLogo Width="30" Height="30" ImageSource="images/barcode/syncfusion.png"></QRCodeLogo>
</SfQRCodeGenerator>
```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VNrdZRWCJiuTkJsk?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

>**Note:** The default value is one-third of the QR code size.

## Event

[OnValidationFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfQRCodeGenerator_OnValidationFailed) event in the [SfQRCodeGenerator](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfQRCodeGenerator.html) is triggered when the input is an invalid string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfQRCodeGenerator Width="200px" Height="150px" Value="Syncfusion" OnValidationFailed="@OnValidationFailed"></SfQRCodeGenerator>

@code
{
    public void OnValidationFailed(ValidationFailedEventArgs args)
    {
    }
}

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/VDrxNniipBXXcIYn?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

* [How can I adjust the margin of the QR code and handle text positioning when using the QRCodeGenerator in Syncfusion?](https://support.syncfusion.com/kb/article/18734/how-can-i-adjust-the-margin-of-the-qr-code-and-handle-text-positioning-when-using-the-qrcodegenerator-in-syncfusion)

* [How to export the QR code in a Blazor Server project to a desired location using a memory stream?](https://support.syncfusion.com/kb/article/17216/how-to-export-the-qr-code-in-a-blazor-server-project-to-a-desired-location-using-a-memory-stream)