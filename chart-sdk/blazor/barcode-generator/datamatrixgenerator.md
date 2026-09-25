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

**Data Matrix Symbol Sizes**

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

**Data Matrix Rectangular Sizes**

| Size | Dimensions | Max Capacity |
|---|---|---|
| 8×18 | 8×18 modules | 10 bytes |
| 8×32 | 8×32 modules | 20 bytes |
| 12×26 | 12×26 modules | 30 bytes |
| 12×64 | 12×64 modules | 80 bytes |
| 16×48 | 16×48 modules | 62 bytes |

## Data Matrix Encoding Modes

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

### Encoding Mode Selection

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

**Encoding Mode Guide**

| Encoding | Best For | Example |
|---|---|---|
| **Auto** | General purpose | "PRODUCT-2024" |
| **ASCII** | Text and mixed data | "Order #12345" |
| **ASCIINumeric** | Numbers only (compact) | "1234567890" |
| **Base256** | Binary or special bytes | Image data, binary files |

## GS1 Data Matrix

GS1 Data Matrix combines the high-density encoding capabilities of Data Matrix symbols with GS1 Application Identifiers (AIs) for supply chain and traceability applications. This enables efficient encoding of product information, batch numbers, expiration dates, and serial numbers in a single, compact barcode.

The [EnableGS1](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_EnableGS1) property enables GS1 compliance for Data Matrix codes. 

**Allowed Input Characters:** GS1 Data Matrix supports numeric, alphanumeric, and supported special characters. Data is encoded using GS1 Application Identifiers (AIs), enabling structured business information such as product identifiers, batch numbers, expiration dates, and serial numbers to be stored within a compact barcode.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="300px" Height="250px" Value="(01)09506000134369(17)280131(10)LOT001" EnableGS1="true" >
    <DataMatrixGeneratorDisplayText Text="Healthcare Traceability" />
</SfDataMatrixGenerator>
```

{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[GS1 Data Matrix Generator](images/Gs1-DataMatrix.png)" %}

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

<SfDataMatrixGenerator Width="200px" Height="150px" Value="SYNCFUSION" EnableGS1="true" OnValidationFailed="@OnValidationFailed"></SfDataMatrixGenerator>

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

The Data Matrix component provides comprehensive customization options to modify the appearance and behavior of generated barcodes. This section covers all available properties that can be used to customize Data Matrix codes.

### Data Matrix Color Customization

The barcode appearance can be customized by changing the colors. The component provides two main color properties:

#### Foreground Color

The [ForeColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_ForeColor) property specifies the line and text color of the Data Matrix barcode. By default, it is set to black.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" ForeColor="red" Value="SYNCFUSION"></SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LXrnjxCCTVsAdGMu?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Color in Data Matrix Generator](images/blazor-barcode-datamatrix-color-customization.webp)" %}

#### Background Color

The [BackgroundColor](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_BackgroundColor) property specifies the background color of the Data Matrix barcode. By default, it is set to white. This is useful when you need to match the barcode with the surrounding environment or create custom designs.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" BackgroundColor="lightyellow" ForeColor="darkblue" Value="SYNCFUSION"></SfDataMatrixGenerator>

```

### Data Matrix Dimension Customization

The dimensions of the barcode can be adjusted using the [Height](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Height) and [Width](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Width) properties. Both properties accept string values with units (px, %, em, etc.). By default, both are set to 100%.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="300px" Height="250px" Value="SYNCFUSION"></SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/LjBnjniWpLMlSGri?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" %}

### Encoding Mode Configuration

The [Encoding](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Encoding) property specifies the encoding type for the Data Matrix barcode. You can choose from several encoding modes to optimize for your data type:

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

### Data Matrix Size Configuration

The [Size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Size) property specifies the amount of data to be encoded in the Data Matrix symbol. This allows you to control the symbol dimensions (10×10 up to 120×120 modules) and data capacity.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<!-- Default auto-sizing based on data -->
<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION"></SfDataMatrixGenerator>

<!-- Explicit sizing for specific symbol size -->
<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION" Size="DataMatrixSize.Size32x32"></SfDataMatrixGenerator>

```

### Margin Customization

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_Margin) property specifies the space to be left around the Data Matrix barcode. It accepts a `DataMatrixMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 10 |
| `Right` | Space from the right side | 10 |
| `Top` | Space from the top side | 10 |
| `Bottom` | Space from the bottom side | 10 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DataMatrixMargin Left="20" Top="20" Right="20" Bottom="20"></DataMatrixMargin>
</SfDataMatrixGenerator>

```

### Display Text Customization

The barcode display text can be fully customized using the [DisplayText](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.SfDataMatrixGenerator.html#Syncfusion_Blazor_BarcodeGenerator_SfDataMatrixGenerator_DisplayText) property. The `DataMatrixGeneratorDisplayText` component provides comprehensive text customization options.

#### Text Content

The [Text](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Text) property specifies the textual description to display with the Data Matrix code. By default, it is an empty string.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Text"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```
{% previewsample "https://blazorplayground.syncfusion.com/embed/hjLxZnsWJrhASleB?appbar=false&editor=false&result=true&errorlist=false&theme=fluent2" backgroundimage "[Customizing Blazor Barcode Text in Data Matrix Generator](images/blazor-barcode-text-in-datamatrix.webp)" %}

#### Font Configuration

The [Font](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Font) property specifies the font style of the display text. By default, it is set to `monospace`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Product Code" Font="Arial"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

#### Text Size

The [Size](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Size) property specifies the size of the display text. By default, it is set to `20` pixels.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Product Code" Size="25"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

#### Text Alignment

The [Alignment](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Alignment) property specifies the horizontal alignment of the text. It accepts the following values: `Left`, `Center`, or `Right`. By default, it is set to `Center`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Product Code" Alignment="Alignment.Left"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

#### Text Position

The [Position](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Position) property specifies the vertical position of the text relative to the Data Matrix code. It accepts `Top` or `Bottom`. By default, it is set to `Bottom`.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Product Code" Position="TextPosition.Top"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

#### Text Visibility

The [Visibility](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Visibility) property controls the visibility of the display text. By default, it is set to `true`. Set it to `false` to hide the text.

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="200" Height="150" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Visibility="false"></DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

#### Text Margin

The [Margin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BarcodeGenerator.DataMatrixGeneratorDisplayText.html#Syncfusion_Blazor_BarcodeGenerator_DataMatrixGeneratorDisplayText_Margin) property specifies the space between the text and the Data Matrix barcode. It accepts a `DataMatrixTextMargin` object with the following properties:

| Property | Description | Default Value |
|----------|-------------|---|
| `Left` | Space from the left side | 0 |
| `Right` | Space from the right side | 0 |
| `Top` | Space from the top side | 0 |
| `Bottom` | Space from the bottom side | 0 |

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator

<SfDataMatrixGenerator Width="250" Height="200" Value="SYNCFUSION">
    <DataMatrixGeneratorDisplayText Text="Product Code">
        <DataMatrixTextMargin Left="0" Top="10" Right="0" Bottom="10"></DataMatrixTextMargin>
    </DataMatrixGeneratorDisplayText>
</SfDataMatrixGenerator>

```

### Dynamic Property Updates

The Data Matrix component supports real-time property binding. When you change any property value, the Data Matrix barcode automatically updates to reflect the changes. This is useful for creating interactive applications where users can customize the barcode appearance dynamically.

#### Real-time Property Binding Example

Here is an example showing how to dynamically update Data Matrix properties using Blazor data binding:

```cshtml
@using Syncfusion.Blazor.BarcodeGenerator
@using Syncfusion.Blazor.Inputs
@using Syncfusion.Blazor.DropDowns

<div style="margin: 20px;">
    <div style="margin-bottom: 10px;">
        <label>Data Matrix Value: </label>
        <SfTextBox @bind-Value="@DataMatrixValue" Placeholder="Enter data"></SfTextBox>
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
        <label>Encoding Mode: </label>
        <SfDropDownList TValue="DataMatrixEncoding" TItem="DataMatrixEncoding" DataSource="@EncodingModes" @bind-Value="@EncodingMode">
            <DropDownListFieldSettings Text="ToString" Value="ToString"></DropDownListFieldSettings>
        </SfDropDownList>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Size (px): </label>
        <SfSlider @bind-Value="@DataMatrixSize" Min="100" Max="300" Step="10"></SfSlider>
        <span>@DataMatrixSize px</span>
    </div>
    
    <div style="margin-bottom: 10px;">
        <label>Display Text: </label>
        <SfTextBox @bind-Value="@DisplayTextValue" Placeholder="Enter display text"></SfTextBox>
    </div>
</div>

<!-- Data Matrix that updates in real-time as properties change -->
<div style="margin-top: 30px; padding: 20px; border: 1px solid #ccc;">
    <SfDataMatrixGenerator Width="@($"{DataMatrixSize}px")" 
                           Height="@($"{DataMatrixSize}px")" 
                           Value="@DataMatrixValue"
                           ForeColor="@ForeColor"
                           BackgroundColor="@BackgroundColor"
                           Encoding="@EncodingMode">
        <DataMatrixGeneratorDisplayText Text="@DisplayTextValue" Visibility="@(!string.IsNullOrEmpty(DisplayTextValue))"></DataMatrixGeneratorDisplayText>
    </SfDataMatrixGenerator>
</div>

@code
{
    private string DataMatrixValue = "31117013206375";
    private string ForeColor = "black";
    private string BackgroundColor = "white";
    private int DataMatrixSize = 200;
    private string DisplayTextValue = "Inventory Code";
    private DataMatrixEncoding EncodingMode = DataMatrixEncoding.Auto;
    private List<DataMatrixEncoding> EncodingModes = new() { DataMatrixEncoding.Auto, DataMatrixEncoding.ASCII, DataMatrixEncoding.ASCIINumeric, DataMatrixEncoding.Base256 };
}
```

**Key Points:**
- The Data Matrix automatically re-renders with the new property values
- This works for all customizable properties: Value, ForeColor, BackgroundColor, Width, Height, Encoding, Size, DisplayText, Margins, etc.