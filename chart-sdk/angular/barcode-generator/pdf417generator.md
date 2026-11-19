---
layout: post
title: PDF417Generator in Angular Barcode control | Syncfusion®
description: Learn here all about PDF417Generator in Syncfusion® Angular Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: Pdf417generator
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# PDF417Generator in Angular Barcode control

## PDF417 Overview

PDF417 is a stacked, two-dimensional multi-row barcode symbology defined by ISO/IEC 15438. A single PDF417 symbol is built from 3 to 90 horizontal rows, where each row contains 1 to 30 data columns framed by a start pattern, a left row indicator, a right row indicator, and a stop pattern. Each symbol character within a row—known as a codeword—spans 17 modules and is constructed from four bars and four spaces.

PDF417 provides high data density and is capable of encoding up to roughly 1,850 text characters, 2,710 numeric digits, or 1,108 bytes within a single symbol. Because of its stacked linear layout, it can be read by both traditional moving-beam laser scanners and area image readers. PDF417 is commonly used in:

* **Identification & Driver's Licenses:** Storing identity and biometric records on state and national credentials (AAMVA standards).
* **Transportation & Boarding Passes:** Printing high-density passenger data on commercial airline boarding passes (IATA standards).
* **Logistics & Shipping Labels:** Holding comprehensive manifest and consignment details on package waybills.
* **Government & Compliance Forms:** Archiving tax, customs, and regulatory submission summaries on printed sheets.

By default, the PDF417 generator selects the best compaction mode for each portion of the input, chooses the recommended Reed-Solomon error correction level based on the data length, and calculates the optimal row-and-column layout to fit the available container space.

## Getting Started

### Dependencies

To use the PDF417 Generator in Angular, ensure the required Syncfusion Essential JS 2 packages are installed:

```bash
|-- @syncfusion/ej2-angular-barcode-generator
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

### Package Import

The PDF417 component is packaged within `@syncfusion/ej2-angular-barcode-generator` as an independent Angular component and module, separate from the linear barcode control:

```typescript
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
```

### Module Registration

Add `PDF417GeneratorModule` to the `imports` array of your standalone Angular component (recommended in Angular 17 and later) or to the `imports` array of your `NgModule`:

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-pdf417generator id="barcode" width="250px" height="150px" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent {}
```

### Basic PDF417 Generation

The following example shows how to initialize a basic PDF417 barcode. The control automatically configures compaction, error correction, and symbol dimensions to fit the specified dimensions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/pdf417-cs1" %}

In this sample:
* The `value` property supplies the data string (`SYNCFUSION PDF417`) to be encoded.
* The `width` and `height` properties set the container boundary.
* The `displayText` property displays a customized human-readable label (`PDF417`) instead of the raw encoded string.

## Rendering Modes

The PDF417 generator supports two rendering surfaces via the [`mode`](#mode) property: **SVG** and **Canvas**.

### SVG Mode (Default)

SVG is the default rendering mode. It draws the symbol using vector graphics, ensuring crisp, pixel-perfect scaling at any screen resolution, zoom level, or high-DPI print output.

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="300px" height="120px" mode="SVG" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent {}
```

### Canvas Mode

Setting `mode="Canvas"` renders the barcode directly to an HTML5 canvas raster surface. Canvas rendering is ideal when embedding the barcode into existing bitmap pipelines, such as client-side PDF document generation or high-performance canvas operations.

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="300px" height="120px" mode="Canvas" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent {}
```

## PDF417 Symbology Configuration

### Compaction Modes

PDF417 compresses data into codewords using compaction modes. The [`compactionMode`](#compactionmode) property allows developers to enforce a specific compaction mode across the entire value, or allow `Auto` mode to dynamically partition the input for maximum density.

| CompactionMode | Supported Characters | Codeword Compression Ratio | Typical Use Case |
|---|---|---|---|
| `'Auto'` *(Default)* | All ASCII and UTF-8 characters | Dynamically optimized per segment | Mixed alphanumeric and special character inputs. |
| `'Text'` | Printable ASCII (32–126), Tab, LF, CR | ~2 characters per codeword | Plain text strings, URLs, names, and addresses. |
| `'Numeric'` | Numeric digits only (`0`–`9`) | ~2.9 digits per codeword | Long serial numbers, phone numbers, and identifiers. |
| `'Byte'` | All 256 bytes (binary / non-ASCII / UTF-8) | ~1.2 bytes per codeword | International text, encrypted tokens, and raw binary. |

The following example enforces `Text` compaction on an alphanumeric value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/compactionmode-cs1" %}

> **Note:** If a selected compaction mode encounters an unsupported character (for example, supplying alphabetical characters when `compactionMode="Numeric"` is configured), the symbol will not render and the [`invalid`](#invalid) event will be triggered.

### Error Correction Levels

PDF417 uses Reed-Solomon error correction to reconstruct obscured, scratched, or damaged symbols. The [`errorCorrectionLevel`](#errorcorrectionlevel) property configures the level of error correction codewords added to the barcode.

| Level | Codewords Added | Recommended Usage |
|---|---|---|
| `Auto` (`-1`) | Variable | Automatically chooses the recommended level according to ISO/IEC 15438. |
| `Level0` (`0`) | 2 | Minimal error correction (pure error detection). |
| `Level1` (`1`) | 4 | Clean office environments with laser print quality. |
| `Level2` (`2`) | 8 | Small payloads (up to 40 data codewords). |
| `Level3` (`3`) | 16 | Payloads between 41 and 160 data codewords. |
| `Level4` (`4`) | 32 | Typical shipping labels and identity cards (161 to 320 data codewords). |
| `Level5` (`5`) | 64 | Heavy-duty industrial environments subject to dirt and tears. |
| `Level6` (`6`) | 128 | High-density symbols on rough or outdoor surfaces. |
| `Level7` (`7`) | 256 | Critical documents where physical mutilation is expected. |
| `Level8` (`8`) | 512 | Maximum error correction capability. |

The following example configures the control to use `Level5` error correction:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/errorcorrectionlevel-cs1" %}

> **Auto Behavior:** When set to `Auto`, the component evaluates data length and assigns Level 2, Level 3, Level 4, or Level 5. If the symbol exceeds available capacity under the calculated level, the control automatically steps down to lower levels (never falling below `Level2`). If a fixed level is specified and cannot fit, validation triggers the [`invalid`](#invalid) event.

### Row Height Ratio

The [`rowHeightRatio`](#rowheightratio) property defines the height of each row in relation to the module width (the width of the narrowest bar). In compliance with ISO/IEC 15438, the minimum supported ratio is `3`. Increasing this ratio elongates the rows vertically, which facilitates scanning with low-resolution handheld scanners.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rowheightratio-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rowheightratio-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rowheightratio-cs1" %}

### Compact PDF417 (Truncated)

Standard PDF417 features row indicators and stop patterns on both the left and right margins of the symbol. Compact PDF417 (also called Truncated PDF417) saves horizontal space by omitting the right row indicator and shortening the stop pattern to a single module bar.

Enable this format by setting [`isCompact`](#iscompact) to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/iscompact-cs1" %}

> **Usage Recommendation:** Compact PDF417 should be used in clean, controlled scanning environments (such as cleanroom document handling) where horizontal label width is constrained. Standard PDF417 is recommended for rugged or consumer-facing workflows.

### Fixed Rows and Columns

By default, both [`rows`](#rows) and [`columns`](#columns) default to `0`, prompting the layout engine to calculate dimensions automatically based on aspect ratio and container boundaries. When a specific label template is required, you can pin either or both properties:

* `rows`: Pin the vertical row count between `3` and `90`.
* `columns`: Pin the horizontal data column count between `1` and `30`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rows-columns-cs1" %}

#### Layout Rules and Constraints

* The product of `rows × columns` must not exceed `928` codewords (the ISO/IEC 15438 theoretical symbol limit).
* If fixed rows and columns do not provide enough capacity for the combined data and error correction codewords, the control halts rendering and raises the [`invalid`](#invalid) event.

## Barcode Customization

### Dimensions and Sizing

Control the overall footprint of the barcode with the [`width`](#width) and [`height`](#height) properties. The generator automatically preserves quiet zones (at least two modules on each side), snaps module bars to whole-pixel boundaries where space permits, and centers the symbol vertically and horizontally.

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="500px" height="200px" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent {}
```

### Display Text

The [`displayText`](#displaytext) property configures a human-readable text string alongside the barcode symbol. This allows you to show an abbreviated, formatted, or human-friendly label independent of the raw encoded string.

Supported `DisplayTextModel` configurations include:
* `text`: The string to display.
* `position`: Place the text at `'Top'` or `'Bottom'`.
* `alignment`: Align the text to `'Left'`, `'Center'`, or `'Right'`.
* `visibility`: Set to `false` to suppress display text rendering while maintaining the symbol.

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule, DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="300px" height="150px" value="1234567890" [displayText]="displayText"></ejs-pdf417generator>`
})
export class AppComponent {
  public displayText: DisplayTextModel = {
    text: 'PDF417 Document ID',
    position: 'Top',
    alignment: 'Center'
  };
}
```

> **Ellipsis Truncation:** Display text renders on a single line. If the text string exceeds the total container width, the generator automatically truncates the label and renders an ellipsis (`...`).

### Colors

The foreground bar color and background surface color can be customized using the [`foreColor`](#forecolor) and [`backgroundColor`](#backgroundcolor) properties. 

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="300px" height="120px" value="Syncfusion" backgroundColor="#f7f7f7" foreColor="#b91c1c"></ejs-pdf417generator>`
})
export class AppComponent {}
```

> **Scanning Contrast Warning:** Always maintain strong optical contrast between `foreColor` and `backgroundColor` (for example, dark bars over light backgrounds). Scanners rely on red-light reflectance; using light bars on dark backgrounds or low-contrast color pairs may prevent successful barcode decoding.

### Margins and Quiet Zones

The [`margin`](#margin) property applies outer spacing in pixels around the barcode symbol, ensuring quiet zones remain intact when the control is placed beside other UI elements:

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { MarginModel } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="320px" height="140px" value="Syncfusion" [margin]="margin"></ejs-pdf417generator>`
})
export class AppComponent {
  public margin: MarginModel = { left: 20, right: 20, top: 20, bottom: 20 };
}
```

## UTF-8 and International Text

When the input value contains non-ASCII or multi-byte Unicode characters (such as Asian, Cyrillic, or European accented scripts), the encoder uses UTF-8 byte encoding combined with an **ECI** (Extended Channel Interpretation) designator. This guarantees conforming PDF417 scanners restore the original multi-byte character strings accurately upon decoding.

Because UTF-8 characters require multiple bytes per code point, international text payloads consume more codewords than standard ASCII strings. Plan for slightly larger symbol dimensions or use `Auto` error correction when encoding multi-byte strings.

## Exporting

The PDF417 Generator provides client-side export capabilities through public methods, supporting lossless vector-quality downloads as well as in-memory base64 conversion.

### Exporting to Image File (`exportImage`)

The `exportImage` method generates a direct browser download of the barcode in either `'PNG'` or `'JPG'` format.

```typescript
import { Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-pdf417generator #barcode id="barcode" value="Syncfusion"></ejs-pdf417generator>
    <button (click)="onExport()">Download Barcode</button>
  `
})
export class AppComponent {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public onExport(): void {
    this.barcode?.exportImage('pdf417_symbol', 'PNG' as BarcodeExportType);
  }
}
```

### Exporting to Base64 String (`exportAsBase64Image`)

The `exportAsBase64Image` method returns a `Promise<string>` containing the data URI base64 representation of the barcode. This is ideal for binding directly to `<img>` tags, attaching to emails, or transmitting inside JSON payloads to backend services.

```typescript
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator #barcode id="barcode" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent implements AfterViewInit {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public async ngAfterViewInit(): Promise<void> {
    const base64Data: string | undefined = await this.barcode?.exportAsBase64Image('PNG' as BarcodeExportType);
    console.log('Base64 Barcode Output:', base64Data);
  }
}
```

## Validation and Events

### The `invalid` Event

When input properties or data values fail validation, the PDF417 Generator suppresses barcode rendering and triggers the `invalid` event. The event argument is an instance of `ValidateEvent` containing a `message: string` detailing the failure.

The event triggers under the following conditions:
* The `value` string is empty or undefined.
* Input contains characters unsupported by the specified `compactionMode`.
* Configured `rows` is not `0` or `3`–`90`.
* Configured `columns` is not `0` or `1`–`30`.
* Configured `errorCorrectionLevel` is invalid.
* Total required codewords exceed the `928` codeword ceiling.
* The requested symbol dimensions are smaller than the combined margins, display text, and minimum module requirements.

The following example captures the validation error message and displays it in the UI:

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { ValidateEvent } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-pdf417generator id="barcode" value="SYNCFUSION" width="300px" height="120px"
      (invalid)="onInvalid($event)">
    </ejs-pdf417generator>
    @if (errorMessage) {
      <p class="error-notification" role="alert">{{ errorMessage }}</p>
    }
  `
})
export class AppComponent {
  public errorMessage: string = '';

  public onInvalid(args: ValidateEvent): void {
    this.errorMessage = args.message;
  }
}
```

## Localization and Accessibility

### Accessibility (ARIA)

The PDF417 Generator provides built-in accessibility compliance:
* An accessible `role="img"` attribute is applied to the root element.
* An `aria-label` attribute is generated automatically (for example, `PDF417 barcode: Syncfusion`). The label displays the configured `displayText.text` when present, or defaults to the encoded `value`.
* Long values are truncated inside the accessibility string to maintain readability for screen readers.

### Localization (L10n)

Screen reader labels and validation messages can be localized into different languages through the Syncfusion `L10n` library using the `'PDF417Generator'` locale group:

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'de': {
    'PDF417Generator': {
      ariaLabel: 'PDF417-Strichcode',
      EmptyValue: 'Der Wert ist leer.',
      InvalidTextValue: 'Der Text enthält ungültige Zeichen.',
      InvalidNumericValue: 'Der Wert enthält keine Ziffern.',
      InvalidCompactionMode: 'Der Komprimierungsmodus wird nicht unterstützt.',
      InvalidErrorCorrectionLevel: 'Die Fehlerkorrekturstufe wird nicht unterstützt.',
      InvalidRows: 'Die Zeilenanzahl ist ungültig.',
      InvalidColumns: 'Die Spaltenanzahl ist ungültig.',
      CapacityExceeded: 'Der Wert ist zu lang.',
      InsufficientSize: 'Die Größe reicht nicht aus, um das Symbol zu zeichnen.'
    }
  }
});

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="300px" height="120px" value="Syncfusion" locale="de"></ejs-pdf417generator>`
})
export class AppComponent {}
```

Supported localization keys:
* `ariaLabel`
* `EmptyValue`
* `InvalidTextValue`
* `InvalidNumericValue`
* `InvalidCompactionMode`
* `InvalidErrorCorrectionLevel`
* `InvalidRows`
* `InvalidColumns`
* `CapacityExceeded`
* `InsufficientSize`

## RTL Behavior

When an application runs in right-to-left (RTL) mode, the PDF417 barcode symbol itself is **never mirrored**. In accordance with barcode standards, module sequences, row indicators, and stop patterns must preserve their strict left-to-right scanning structure. However, accompanying display text and label alignments will honor RTL layout flow.

## Responsive Layout and Refreshing

The PDF417 component calculates module widths based on its container size upon rendering. If the containing element or browser window is resized dynamically, update the `width` or `height` properties or call the [`dataBind()`](#databind) method to recalculate and redraw the symbol.

## API Reference

### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `undefined` | The string data to encode in the PDF417 symbol. Empty strings trigger the `invalid` event. |
| `mode` | `RenderingMode` | `'SVG'` | The rendering surface for the barcode. Accepts `'SVG'` or `'Canvas'`. |
| `width` | `string \| number` | `'100%'` | The total width of the barcode control. Accepts CSS length units (e.g., `'300px'`, `'100%'`) or numeric pixel values. |
| `height` | `string \| number` | `'100%'` | The total height of the barcode control. Accepts CSS length units or numeric pixel values. |
| `compactionMode` | `PDF417CompactionMode` | `'Auto'` | The data compaction mode. Accepts `'Auto'`, `'Text'`, `'Numeric'`, or `'Byte'`. |
| `errorCorrectionLevel` | `PDF417ErrorCorrectionLevel` | `Auto` (`-1`) | The Reed-Solomon error correction level. Accepts `Auto` or `Level0` through `Level8`. |
| `rows` | `number` | `0` | Number of rows in the symbol. `0` sets automatic calculation; otherwise accepts integers from `3` to `90`. |
| `columns` | `number` | `0` | Number of data columns in the symbol. `0` sets automatic calculation; otherwise accepts integers from `1` to `30`. |
| `isCompact` | `boolean` | `false` | When set to `true`, generates a Compact PDF417 symbol (omits right row indicator and shortens stop bar). |
| `rowHeightRatio` | `number` | `3` | Height of each row relative to the module width. Minimum allowable value is `3`. |
| `displayText` | `DisplayTextModel` | `{}` | Settings for human-readable display text (`text`, `position`, `alignment`, `visibility`). |
| `margin` | `MarginModel` | `{}` | Outer quiet zone margins (`left`, `right`, `top`, `bottom`) in pixels. |
| `backgroundColor` | `string` | `'white'` | Background color of the barcode control. Accepts any valid CSS color string. |
| `foreColor` | `string` | `'black'` | Foreground bar color of the barcode symbol. Accepts any valid CSS color string. |
| `symbolInfo` | `{ rows: number; columns: number; errorCorrectionLevel: number } \| null` | `null` | *(Read-only)* Details the actual rows, columns, and error correction level selected during the last successful render. |

### Type Aliases and Enums

#### `PDF417CompactionMode`
A TypeScript string-literal union specifying the data compression strategy:
* `'Auto'`: Dynamically selects the most compact compaction mode per data segment.
* `'Text'`: Compresses printable ASCII, carriage returns, line feeds, and tabs (~2 chars/codeword).
* `'Numeric'`: Compresses numeric digits `0`–`9` (~2.9 digits/codeword).
* `'Byte'`: Encodes raw 8-bit bytes (~1.2 bytes/codeword).

#### `PDF417ErrorCorrectionLevel`
A numeric enum mapping error correction levels to Reed-Solomon codewords:
* `Auto` (`-1`): Recommended level based on data length.
* `Level0` (`0`): 2 codewords added.
* `Level1` (`1`): 4 codewords added.
* `Level2` (`2`): 8 codewords added.
* `Level3` (`3`): 16 codewords added.
* `Level4` (`4`): 32 codewords added.
* `Level5` (`5`): 64 codewords added.
* `Level6` (`6`): 128 codewords added.
* `Level7` (`7`): 256 codewords added.
* `Level8` (`8`): 512 codewords added.

#### `BarcodeExportType`
A TypeScript string-literal union specifying target image formats:
* `'PNG'`: Lossless raster format.
* `'JPG'`: Compressed lossy image format.

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `dataBind()` | None | `void` | Forces the barcode component to apply all pending property changes and re-render immediately. |
| `exportImage(fileName, exportType)` | `fileName: string`, `exportType: BarcodeExportType` | `void` | Exports the barcode and initiates a browser file download. |
| `exportAsBase64Image(exportType)` | `exportType: BarcodeExportType` | `Promise<string>` | Generates and returns a base64-encoded image data URL string. |
| `getModuleName()` | None | `string` | Returns the module name of the component (`'PDF417Generator'`). |
| `destroy()` | None | `void` | Releases memory and event listeners and removes the component from the DOM. |

### Events

| Event | Event Argument | Description |
|---|---|---|
| `invalid` | `ValidateEvent` (`{ message: string }`) | Triggered when validation fails or when data cannot fit in the requested symbol layout. |

## Limitations and Constraints

* **Codeword Capacity:** A single PDF417 symbol cannot exceed `928` total codewords (data plus error correction).
* **Row Range:** Fixed `rows` values must fall between `3` and `90` (`0` sets automatic calculation).
* **Column Range:** Fixed `columns` values must fall between `1` and `30` (`0` sets automatic calculation).
* **Row Height Ratio:** The `rowHeightRatio` must be greater than or equal to `3` to comply with ISO/IEC 15438.
* **Quiet Zones:** Scanning requires quiet zone spacing on all four sides. Avoid reducing container margins below two modules.
* **Auto Step-down:** When set to `Auto`, error correction automatically steps down to lower levels if the data does not fit, but will never step down below `Level2`.
* **UTF-8 Expansion:** Multi-byte international text increases byte consumption, resulting in larger symbol layouts than equivalent ASCII character counts.
