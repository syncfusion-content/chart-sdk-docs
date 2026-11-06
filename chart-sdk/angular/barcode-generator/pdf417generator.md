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

## PDF417

PDF417 is a stacked two-dimensional barcode defined by ISO/IEC 15438. A symbol contains 3 to 90 rows, and each row has 1 to 30 data columns. It is widely used on identification cards, driver’s licenses, boarding passes, shipping labels, and inventory documents because it can store a large amount of data and still be scanned by both linear scanners and imagers.

PDF417 is a good choice when you need higher data capacity than linear barcodes, robust error correction, and a format that is practical for printed documents and transport labels.

## Getting Started

### Dependencies

```bash
|-- @syncfusion/ej2-angular-barcode-generator
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

### Package import

PDF417 is provided by its own `PDF417Generator` component and `PDF417GeneratorModule`, separate from `BarcodeGeneratorComponent`, in the same package.

```typescript
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
```

### Basic PDF417 generation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/pdf417-cs1" %}

### Rendering in SVG mode

SVG is the default rendering mode.

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

### Rendering in Canvas mode

Set `mode` to `Canvas` to render on a raster surface.

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

## PDF417 Generator

The `PDF417Generator` component (`<ejs-pdf417generator>`) renders a PDF417 symbol inside the target element. By default, it selects the compaction mode for each part of the value, uses the error correction level recommended for the data length, and calculates rows and columns automatically to fit the available space.

The component renders in SVG mode by default and uses a `role="img"` accessibility role.

## Basic Example

Renders a PDF417 symbol with only a value and a size.

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="320px" height="140px" value="SYNCFUSION PDF417"></ejs-pdf417generator>`
})
export class AppComponent {}
```

## PDF417-specific samples

### Compaction mode

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/compactionmode-cs1" %}

### Error correction level

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/errorcorrectionlevel-cs1" %}

### Row height ratio

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rowheightratio-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rowheightratio-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rowheightratio-cs1" %}

### Compact PDF417

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/iscompact-cs1" %}

### Rows and columns

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rows-columns-cs1" %}

## Customization

### Custom size

Sets the control to 500 px by 200 px; the symbol is scaled to fit.

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

### Display text customization

Shows the text `PDF417` above the symbol instead of the encoded value.

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
    text: 'PDF417',
    position: 'Top',
    alignment: 'Center'
  };
}
```

### Background and foreground color customization

Applies a light gray background and a dark red foreground color. Keep strong contrast between the two colors so the symbol stays scannable.

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

### Margin customization

Adds a 20 px margin on every side of the symbol.

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

## Compaction Modes

### Auto

`Auto` is the default mode. It chooses Text, Numeric, and Byte compaction per segment to reduce the number of codewords.

### Text

Use `Text` for printable ASCII, tab, line feed, and carriage return.

### Numeric

Use `Numeric` for digits only. It is the most compact choice for long numeric values.

### Byte

Use `Byte` for any character, including non-ASCII content.

## Error Correction

PDF417 uses Reed-Solomon error correction. Higher levels add more error-correction codewords, which improves resilience but increases symbol size.

- `Level0` adds 2 codewords
- `Level1` adds 4 codewords
- `Level2` adds 8 codewords
- `Level3` adds 16 codewords
- `Level4` adds 32 codewords
- `Level5` adds 64 codewords
- `Level6` adds 128 codewords
- `Level7` adds 256 codewords
- `Level8` adds 512 codewords

### Auto level

`Auto` uses the recommended level for the data length. If the recommended level does not fit, the implementation steps down until the symbol fits, but never below level 2.

### Recommended usage

- Use `Level2` or `Level3` for small payloads.
- Use `Level4` or `Level5` for typical labels and documents.
- Use higher levels when the barcode may be damaged, folded, or partially obscured.

## Layout Customization

### Automatic rows and columns

When both `rows` and `columns` are `0`, the component calculates the layout automatically.

### Fixed rows

Set `rows` to a value from `3` to `90` when the symbol must keep a fixed height.

### Fixed columns

Set `columns` to a value from `1` to `30` when the symbol must keep a fixed width.

### Limitation rules

- Rows must be `0` or `3` to `90`.
- Columns must be `0` or `1` to `30`.
- Rows × columns must not exceed `928`.
- If the requested layout cannot hold the encoded data, the `invalid` event is triggered.

### Row height ratio

The row height ratio controls how tall each row is relative to the module width. The minimum supported value is `3`.

## Compact PDF417

Compact PDF417 omits the right row indicator and shortens the stop pattern. It produces a narrower symbol than standard PDF417, which is useful when horizontal space is limited.

## UTF-8 and International Text

When the value contains non-ASCII characters, the encoder writes the data as UTF-8 and includes the ECI designator so scanners can decode the symbol correctly.

## Display Text

Display text is rendered as a single line. If the text is wider than the available width, it is shortened with an ellipsis.

Text alignment supports `Left`, `Center`, and `Right`, and the position supports `Top` and `Bottom`.

## Exporting

### exportImage

Exports the barcode as an image and downloads it in the browser. See the [BarcodeGenerator exportImage API](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGenerator#exportimage).

### exportAsBase64Image

Returns the barcode image as a base64 string. See the [BarcodeGenerator exportAsBase64Image API](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGenerator#exportasbase64image).

## Events

### invalid

Fires when the value or a property is invalid, or when the value does not fit in the symbol. The event argument is `ValidateEvent` (from `@syncfusion/ej2-barcode-generator`) with a `message: string` that describes the validation failure.

Common validation cases (each reports a localized message):

- Empty value
- Invalid text value for `Text` compaction
- Invalid numeric value for `Numeric` compaction
- Unsupported compaction mode
- Unsupported error correction level
- Invalid row or column values
- Capacity exceeded
- Insufficient width or height

#### Example

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { ValidateEvent } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-pdf417generator id="barcode" type="PDF417" value="SYNCFUSION" width="300px" height="120px"
      (invalid)="onInvalid($event)">
    </ejs-pdf417generator>
    @if (errorMessage) {
      <p role="alert">{{ errorMessage }}</p>
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

## API documentation

The properties below are members of the `PDF417Generator` class. Defaults, types, and ranges are taken from the `PDF417Generator` source; types for `compactionMode` and `errorCorrectionLevel` are exported from `@syncfusion/ej2-barcode-generator`.

### value

Defines the value to encode in the PDF417 symbol.

- **Type:** `string`
- **Default value:** `undefined`
- **Accepted values:** Any string. Empty values are invalid and trigger the `invalid` event.
- **Use case:** Encode shipment IDs, document numbers, or inventory codes.

### mode

Defines the rendering mode of the barcode.

- **Type:** `RenderingMode` (`'SVG' | 'Canvas'`)
- **Default value:** `'SVG'`
- **Accepted values:** `'SVG'` or `'Canvas'`
- **Use case:** Use SVG for crisp scaling; use Canvas when a raster surface is preferred.

### width

Defines the width of the control.

- **Type:** `string | number`
- **Default value:** `'100%'`
- **Accepted values:** A CSS length string (for example `'300px'`, `'100%'`) or a numeric pixel value.
- **Use case:** Reserve enough horizontal space for dense symbols.

### height

Defines the height of the control.

- **Type:** `string | number`
- **Default value:** `'100%'`
- **Accepted values:** A CSS length string or a numeric pixel value.
- **Use case:** Provide enough vertical space for the selected number of rows.

### compactionMode

Defines how the value is compacted into codewords. `PDF417CompactionMode` is a string-literal union type, not an enum.

- **Type:** `PDF417CompactionMode`
- **Default value:** `'Auto'`
- **Accepted values:** `'Auto' | 'Text' | 'Numeric' | 'Byte'`
- **Use case:** Use `Auto` for general data; use `Numeric` for long digit strings; use `Byte` for non-ASCII content.

### errorCorrectionLevel

Defines the error correction level. `PDF417ErrorCorrectionLevel` is a numeric enum where level `n` adds `2^(n+1)` error-correction codewords.

- **Type:** `PDF417ErrorCorrectionLevel`
- **Default value:** `PDF417ErrorCorrectionLevel.Auto` (`-1`)
- **Accepted values:** `Auto (-1)`, `Level0 (0)` through `Level8 (8)`
- **Auto behavior:** Level 2 for up to 40 data codewords, level 3 for up to 160, level 4 for up to 320, and level 5 above that.
- **Use case:** Increase the level when the barcode may be damaged or partially obscured.

### rows

Defines the number of rows in the symbol.

- **Type:** `number`
- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `3` to `90`.
- **Use case:** Fix the symbol height when the layout must match a pre-designed label.

### columns

Defines the number of data columns.

- **Type:** `number`
- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `1` to `30`.
- **Use case:** Fix the symbol width when the layout must fit a specific horizontal space.

### isCompact

Renders a Compact (truncated) PDF417 symbol, which omits the right row indicator and shortens the stop pattern to save horizontal space.

- **Type:** `boolean`
- **Default value:** `false`
- **Accepted values:** `true` or `false`
- **Use case:** Save horizontal space when the scanning workflow supports compact PDF417.

### rowHeightRatio

Defines the height of each row as a multiple of the module width (the narrowest bar). ISO/IEC 15438 requires at least `3`. The symbol keeps this ratio and is centered in any extra space.

- **Type:** `number`
- **Default value:** `3`
- **Accepted values:** Any number greater than or equal to `3`.
- **Use case:** Increase row height when a taller symbol is acceptable and easier to scan.

### displayText

Defines the text properties for the PDF417 barcode. The text is drawn on a single line; text wider than the available width is shortened with an ellipsis.

- **Type:** `DisplayTextModel` (exported from `@syncfusion/ej2-angular-barcode-generator`)
- **Default value:** empty `DisplayTextModel`
- **Accepted values:** A `DisplayTextModel` object with `text`, `position`, `alignment`, and `visibility` properties.
- **Use case:** Show a friendly label instead of the full encoded value.

### margin

Defines the margin properties for the PDF417 barcode.

- **Type:** `MarginModel` (exported from `@syncfusion/ej2-barcode-generator`)
- **Default value:** empty `MarginModel` (the component applies a quiet zone on every side)
- **Accepted values:** A `MarginModel` object with `left`, `right`, `top`, and `bottom` numeric properties.
- **Use case:** Leave enough quiet space around the control in labels or printed documents.

### backgroundColor

Defines the background color of the PDF417 barcode.

- **Type:** `string`
- **Default value:** `'white'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Match the barcode area to the surrounding design.

### foreColor

Defines the foreground color of the PDF417 barcode.

- **Type:** `string`
- **Default value:** `'black'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Apply branding while keeping enough contrast for scanning.

### symbolInfo (read-only)

Returns the rows, columns, and error correction level of the last successful render. Available on the component instance after rendering.

- **Type:** `{ rows: number; columns: number; errorCorrectionLevel: number } | null`
- **Use case:** Display the actual layout used by the encoder (for example, `'12 rows x 6 columns, error correction level 4.'`).

## Methods

The PDF417 Angular wrapper is `PDF417Generator`, exported from `@syncfusion/ej2-angular-barcode-generator`. Reference it with `@ViewChild('barcode')` and access the instance in `ngAfterViewInit()` — `@ViewChild` references are not available in `ngOnInit()`. Each example below uses the standalone `PDF417GeneratorModule`.

### destroy

Destroys the PDF417 component and releases its resources. The example below wires `destroy` to a button so it runs on user intent rather than immediately after component initialization.

```typescript
import { Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-pdf417generator #barcode id="barcode" type="PDF417" value="Syncfusion"></ejs-pdf417generator>
    <button (click)="onDestroy()">Destroy</button>
  `
})
export class AppComponent {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public onDestroy(): void {
    this.barcode?.destroy();
  }
}
```

### getModuleName

Returns the module name of the component. The PDF417 component returns the string `'PDF417Generator'`.

```typescript
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator #barcode id="barcode" type="PDF417" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent implements AfterViewInit {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public ngAfterViewInit(): void {
    console.log(this.barcode?.getModuleName()); // 'PDF417Generator'
  }
}
```

### exportImage

Exports the barcode as an image of the requested `BarcodeExportType` and triggers a browser download. Valid export types are `'PNG'` and `'JPG'`.

```typescript
import { Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-pdf417generator #barcode id="barcode" type="PDF417" value="Syncfusion"></ejs-pdf417generator>
    <button (click)="onExport()">Download PNG</button>
  `
})
export class AppComponent {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public onExport(): void {
    this.barcode?.exportImage('pdf417', 'PNG' as BarcodeExportType);
  }
}
```

### exportAsBase64Image

Returns a `Promise<string>` that resolves to a base64-encoded image of the requested export type.

```typescript
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
import { BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator #barcode id="barcode" type="PDF417" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent implements AfterViewInit {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public async ngAfterViewInit(): Promise<void> {
    const image: string | undefined = await this.barcode?.exportAsBase64Image('JPG' as BarcodeExportType);
    console.log(image);
  }
}
```

### dataBind

Re-renders the symbol with the current property values. Call this after changing component properties programmatically (for example, after updating `value`, `width`, or `errorCorrectionLevel`).

```typescript
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator #barcode id="barcode" type="PDF417" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent implements AfterViewInit {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public ngAfterViewInit(): void {
    this.barcode!.value = 'Updated value';
    this.barcode!.dataBind();
  }
}
```

## Accessibility

The component sets `role="img"` and generates an `aria-label` for the barcode element. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## RTL Behavior

PDF417 is not mirrored in RTL mode because the symbol structure must remain in its encoded order for scanning. Only the surrounding text and alignment behavior follow RTL layout expectations.

## Responsive and Refresh Behavior

The component uses the container size when it renders and recalculates the symbol when properties change. If the container is resized, update the `width` or `height` property (or call `dataBind()`) on the `PDF417Generator` instance to redraw the barcode with the new size.

## Framework Integration

The `PDF417Generator` component integrates seamlessly into Angular applications. It supports Angular's component binding, property binding, event binding, and template-driven patterns for a native Angular development experience.

## API Reference

### Class: `PDF417Generator`

| Member | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `undefined` | Value to encode. |
| `mode` | `RenderingMode` | `'SVG'` | Rendering mode (`'SVG'` or `'Canvas'`). |
| `width` | `string \| number` | `'100%'` | Width of the control. |
| `height` | `string \| number` | `'100%'` | Height of the control. |
| `compactionMode` | `PDF417CompactionMode` | `'Auto'` | Data compaction mode. |
| `errorCorrectionLevel` | `PDF417ErrorCorrectionLevel` | `Auto` | Error correction level. |
| `rows` | `number` | `0` | Number of rows (`0` = auto, otherwise `3`–`90`). |
| `columns` | `number` | `0` | Number of data columns (`0` = auto, otherwise `1`–`30`). |
| `isCompact` | `boolean` | `false` | Enables compact PDF417 rendering. |
| `rowHeightRatio` | `number` | `3` | Height of each row relative to module width. |
| `displayText` | `DisplayTextModel` | `{}` | Display text settings. |
| `margin` | `MarginModel` | `{}` | Outer margin settings. |
| `backgroundColor` | `string` | `'white'` | Background color. |
| `foreColor` | `string` | `'black'` | Foreground color. |
| `symbolInfo` | `{ rows; columns; errorCorrectionLevel } \| null` | — | Last render layout (read-only). |

### Type alias: `PDF417CompactionMode`

`PDF417CompactionMode` is a string-literal union type, not a TypeScript enum.

| Value | Description |
| --- | --- |
| `'Auto'` | Selects the most compact mode for each segment of the value. |
| `'Text'` | Encodes printable ASCII, tab, line feed, and carriage return. |
| `'Numeric'` | Encodes digits `0`–`9` only. |
| `'Byte'` | Encodes any character as bytes. |

### Enum: `PDF417ErrorCorrectionLevel`

Level `n` adds `2^(n+1)` error correction codewords.

| Value | Numeric value | Codewords |
| --- | --- | --- |
| `Auto` | `-1` | Recommended level for the data length. |
| `Level0` | `0` | 2 |
| `Level1` | `1` | 4 |
| `Level2` | `2` | 8 |
| `Level3` | `3` | 16 |
| `Level4` | `4` | 32 |
| `Level5` | `5` | 64 |
| `Level6` | `6` | 128 |
| `Level7` | `7` | 256 |
| `Level8` | `8` | 512 |

### Type alias: `BarcodeExportType`

`BarcodeExportType` is a string-literal union type, not a TypeScript enum.

| Value | Description |
| --- | --- |
| `'PNG'` | Exports the barcode as a PNG image. |
| `'JPG'` | Exports the barcode as a JPEG image. |

### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `destroy()` | `void` | Destroys the component and releases its resources. |
| `getModuleName()` | `string` | Returns the module name (`'PDF417Generator'`). |
| `dataBind()` | `void` | Re-renders the symbol with the current property values. |
| `exportImage(fileName, exportType)` | `void` | Downloads the barcode as an image. `exportType` is a `BarcodeExportType`. |
| `exportAsBase64Image(exportType)` | `Promise<string>` | Returns the barcode as a base64 image string. `exportType` is a `BarcodeExportType`. |

## Limitations and Constraints

- Rows must be within `3` to `90` when fixed.
- Columns must be within `1` to `30` when fixed.
- The symbol cannot exceed `928` codewords.
- A quiet zone is enforced on every side of the symbol.
- `rowHeightRatio` must be `3` or greater.
- Very large values may trigger `CapacityExceeded`.
- If automatic error correction cannot fit the data, the implementation steps down to a lower level, but not below `Level2`.
- UTF-8 input uses more bytes than ASCII input, so international text can increase symbol size.
