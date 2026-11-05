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

```typescript
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
```

### Basic PDF417 generation

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="300px" height="120px" type="Pdf417" value="Syncfusion"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/pdf417-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/pdf417-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/pdf417-cs1" %}

### Rendering in SVG mode

SVG is the default rendering mode.

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="300px" height="120px" mode="SVG" type="Pdf417" value="Syncfusion"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

### Rendering in Canvas mode

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="300px" height="120px" mode="Canvas" type="Pdf417" value="Syncfusion"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

## PDF417 Generator

The `BarcodeGenerator` component renders a PDF417 symbol inside the target element when its `type` is set to `Pdf417`. By default, it selects the compaction mode for each part of the value, uses the recommended error correction level, and calculates rows and columns automatically to fit the available space.

The component renders in SVG mode by default and uses a `role="img"` accessibility role.

## PDF417-specific samples

### Compaction mode

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/compactionmode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/compactionmode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/compactionmode-cs1" %}

### Error correction level

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/errorcorrectionlevel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/errorcorrectionlevel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/errorcorrectionlevel-cs1" %}

### Row height ratio

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/rowheightratio-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/rowheightratio-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rowheightratio-cs1" %}

### Compact PDF417

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/iscompact-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/iscompact-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/iscompact-cs1" %}

### Rows and columns

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/barcode/barcodegenerator/rows-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/barcode/barcodegenerator/rows-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rows-columns-cs1" %}

## Customization

### Custom size

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="500px" height="200px" type="Pdf417" value="Syncfusion"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

### Display text customization

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="300px" height="150px" type="Pdf417" value="1234567890" [displayText]="{ text: 'PDF417', position: 'Top', alignment: 'Center' }"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

### Background and foreColor customization

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="300px" height="120px" type="Pdf417" value="Syncfusion" backgroundColor="#f7f7f7" foreColor="#b91c1c"></ejs-barcodegenerator>`
})
export class AppComponent {}
```

### Margin customization

```typescript
import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator id="barcode" width="320px" height="140px" type="Pdf417" value="Syncfusion" [margin]="{ left: 20, right: 20, top: 20, bottom: 20 }"></ejs-barcodegenerator>`
})
export class AppComponent {}
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

Exports the barcode as an image and downloads it in the browser. See the [BarcodeGenerator exportImage API](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGenerator/#exportimage).

### exportAsBase64Image

Returns the barcode image as a base64 string. See the [BarcodeGenerator exportAsBase64Image API](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGenerator/#exportasbase64image).

## Events

### invalid

Fires when the value or a property is invalid, or when the value does not fit in the symbol. Handle this event with Angular event binding, for example `(invalid)="onInvalid($event)"`.

Common validation cases include:

- Empty value
- Invalid text value for `Text` compaction
- Invalid numeric value for `Numeric` compaction
- Unsupported compaction mode
- Unsupported error correction level
- Invalid row or column values
- Capacity exceeded
- Insufficient width or height

## API documentation

### [value](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#value)

Defines the value to encode in the PDF417 symbol.

- **Default value:** `undefined`
- **Accepted values:** Any string value. Empty values are invalid.
- **Use case:** Encode shipment IDs, document numbers, or inventory codes.

### [mode](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#mode)

Defines the rendering mode.

- **Default value:** `'SVG'`
- **Accepted values:** `'SVG'` or `'Canvas'`
- **Use case:** Use SVG for crisp scaling and Canvas when a raster surface is preferred.

### [width](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#width)

Defines the width of the control.

- **Default value:** `'100%'`
- **Accepted values:** String or number.
- **Use case:** Reserve enough horizontal space for dense symbols.

### [height](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#height)

Defines the height of the control.

- **Default value:** `'100%'`
- **Accepted values:** String or number.
- **Use case:** Provide enough vertical space for the selected number of rows.

### compactionMode

Defines how the value is compacted into codewords.

- **Default value:** `'Auto'`
- **Accepted values:** `'Auto'`, `'Text'`, `'Numeric'`, `'Byte'`
- **Use case:** Choose `Numeric` for long digit strings or `Text` for printable ASCII content.

### errorCorrectionLevel

Defines the error correction level.

- **Default value:** `'Auto'`
- **Accepted values:** `Auto`, `Level0` through `Level8`
- **Use case:** Increase the level when the barcode may be damaged or partially obscured.

### rows

Defines the number of rows.

- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `3` to `90`.
- **Use case:** Fix the symbol height when the layout must match a pre-designed label.

### columns

Defines the number of data columns.

- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `1` to `30`.
- **Use case:** Fix the symbol width when the layout must fit a specific horizontal space.

### isCompact

Defines whether the compact PDF417 layout is used.

- **Default value:** `false`
- **Accepted values:** `true` or `false`
- **Use case:** Save horizontal space when compact rendering is preferred and supported by the scanning workflow.

### rowHeightRatio

Defines the height of each row as a multiple of the module width.

- **Default value:** `3`
- **Accepted values:** Any number greater than or equal to `3`
- **Use case:** Increase row height when a taller symbol is acceptable and easier to scan.

### [displayText](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#displaytext)

Defines the text displayed with the barcode.

- **Default value:** empty object
- **Accepted values:** `DisplayTextModel`
- **Use case:** Show a friendly label instead of the full encoded value.

### [margin](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#margin)

Defines the outer margin around the barcode.

- **Default value:** `10` on each side
- **Accepted values:** `MarginModel`
- **Use case:** Leave enough quiet space around the control in labels or printed documents.

### [backgroundColor](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#backgroundcolor)

Defines the background color of the barcode.

- **Default value:** `'white'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Match the barcode area to the surrounding design.

### [foreColor](https://ej2.syncfusion.com/angular/documentation/api/barcode/barcodeGeneratorModel/#forecolor)

Defines the foreground color of the barcode.

- **Default value:** `'black'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Apply branding while keeping enough contrast for scanning.

## Methods

### destroy

Destroys the PDF417 component and releases its resources.

```typescript
@ViewChild('barcode') barcodeInstance!: PDF417GeneratorComponent;

ngOnInit() {
  this.barcodeInstance.destroy();
}
```

### getModuleName

Returns the module name of the component.

```typescript
@ViewChild('barcode') barcodeInstance!: PDF417GeneratorComponent;

ngOnInit() {
  console.log(this.barcodeInstance.getModuleName());
}
```

### exportImage

Exports the barcode as an image and downloads it in the browser.

```typescript
@ViewChild('barcode') barcodeInstance!: PDF417GeneratorComponent;

ngOnInit() {
  this.barcodeInstance.exportImage('pdf417', 'PNG');
}
```

### exportAsBase64Image

Returns a promise that resolves to a base64-encoded image string.

```typescript
@ViewChild('barcode') barcodeInstance!: PDF417GeneratorComponent;

async ngOnInit() {
  const imageString = await this.barcodeInstance.exportAsBase64Image('JPG');
}
```

## Accessibility

The component sets `role="img"` and generates an `aria-label` for the barcode element. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## RTL behavior

PDF417 is not mirrored in RTL mode because the symbol structure must remain in its encoded order for scanning. Only the surrounding text and alignment behavior follow RTL layout expectations.

## Responsive behavior

The component uses the container size when it renders and recalculates the symbol when properties change. If the container is resized, call `refresh()` on the BarcodeGenerator instance to redraw the barcode with the new size.

## Limitations and Constraints

- Rows must be within `3` to `90` when fixed.
- Columns must be within `1` to `30` when fixed.
- The symbol cannot exceed `928` codewords.
- Quiet zone is enforced on every side of the symbol.
- Row height ratio must be `3` or greater.
- Very large values may trigger `CapacityExceeded`.
- If automatic error correction cannot fit the data, the implementation steps down to a lower level, but not below `Level2`.
- UTF-8 input uses more bytes than ASCII input, so international text can increase symbol size.
