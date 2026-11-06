---
layout: post
title: PDF417Generator in TypeScript Barcode control | Syncfusion®
description: Learn here all about PDF417Generator in Syncfusion® TypeScript Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: Pdf417generator
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# PDF417Generator in TypeScript Barcode control

## PDF417

PDF417 is a stacked two-dimensional barcode defined by ISO/IEC 15438. A symbol contains 3 to 90 rows, and each row has 1 to 30 data columns. It is widely used on identification cards, driver’s licenses, boarding passes, shipping labels, and inventory documents because it can store a large amount of data and still be scanned by both linear scanners and imagers.

PDF417 is a good choice when you need higher data capacity than linear barcodes, robust error correction, and a format that is practical for printed documents and transport labels.

## Getting Started

### Dependencies

```javascript
|-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

### Package import

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';
```

### Basic PDF417 generation

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '300px',
    height: '120px',
    mode: 'SVG',
    value: 'Syncfusion'
});
barcode.appendTo('#element');
```

```html
<div id="element"></div>
```

### Rendering in SVG mode

SVG is the default rendering mode.

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '300px',
    height: '120px',
    mode: 'SVG',
    value: 'Syncfusion'
});
barcode.appendTo('#element');
```

### Rendering in Canvas mode

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '300px',
    height: '120px',
    mode: 'Canvas',
    value: 'Syncfusion'
});
barcode.appendTo('#element');
```

## PDF417 Generator

The `PDF417Generator` component renders a PDF417 symbol inside the target element. By default, it selects the compaction mode for each part of the value, uses the recommended error correction level, and calculates rows and columns automatically to fit the available space.

The component renders in SVG mode by default, and it uses a `role="img"` accessibility role.

## Basic Examples

### Simple PDF417 barcode

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '320px',
    height: '140px',
    value: 'SYNCFUSION PDF417'
});
barcode.appendTo('#element');
```

### Custom size

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '500px',
    height: '200px',
    value: 'Syncfusion'
});
barcode.appendTo('#element');
```

### Display text customization

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '300px',
    height: '150px',
    value: '1234567890',
    displayText: {
        text: 'PDF417',
        position: 'Top',
        alignment: 'Center'
    }
});
barcode.appendTo('#element');
```

### Background and foreColor customization

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '300px',
    height: '120px',
    value: 'Syncfusion',
    backgroundColor: '#f7f7f7',
    foreColor: '#b91c1c'
});
barcode.appendTo('#element');
```

### Margin customization

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    width: '320px',
    height: '140px',
    value: 'Syncfusion',
    margin: { left: 20, right: 20, top: 20, bottom: 20 }
});
barcode.appendTo('#element');
```

## PDF417-specific samples

### Compaction mode

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs1/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs1" %}
{% endif %}

### Error correction level

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs2/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs2/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs2" %}
{% endif %}

### Row height ratio

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs3/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs3/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs3" %}
{% endif %}

### Compact PDF417

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs4/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs4/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs4" %}
{% endif %}

### Rows and columns

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs5/ts/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/barcode-generator/Pdf417-cs5/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/Pdf417-cs5" %}
{% endif %}

## API documentation

### value

Defines the value to encode in the PDF417 symbol.

- **Default value:** `undefined`
- **Accepted values:** Any string value. Empty values are invalid.
- **Use case:** Encode shipment IDs, document numbers, or inventory codes.

```typescript
let barcode = new PDF417Generator({
    value: 'A123456789'
});
```

### mode

Defines the rendering mode.

- **Default value:** `'SVG'`
- **Accepted values:** `'SVG'` or `'Canvas'`
- **Use case:** Use SVG for crisp scaling and Canvas when a raster surface is preferred.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    mode: 'Canvas'
});
```

### width

Defines the width of the control.

- **Default value:** `'100%'`
- **Accepted values:** String or number.
- **Use case:** Reserve enough horizontal space for dense symbols.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    width: '400px'
});
```

### height

Defines the height of the control.

- **Default value:** `'100%'`
- **Accepted values:** String or number.
- **Use case:** Provide enough vertical space for the selected number of rows.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    height: '180px'
});
```

### compactionMode

Defines how the value is compacted into codewords.

- **Default value:** `'Auto'`
- **Accepted values:** `'Auto'`, `'Text'`, `'Numeric'`, `'Byte'`
- **Use case:** Choose `Numeric` for long digit strings or `Text` for printable ASCII content.

```typescript
let barcode = new PDF417Generator({
    value: '12345678901234567890',
    compactionMode: 'Numeric'
});
```

### errorCorrectionLevel

Defines the error correction level.

- **Default value:** `PDF417ErrorCorrectionLevel.Auto`
- **Accepted values:** `Auto`, `Level0` through `Level8`
- **Use case:** Increase the level when the barcode may be damaged or partially obscured.

```typescript
import { PDF417Generator, PDF417ErrorCorrectionLevel } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    value: 'Syncfusion',
    errorCorrectionLevel: PDF417ErrorCorrectionLevel.Level5
});
```

### rows

Defines the number of rows.

- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `3` to `90`.
- **Use case:** Fix the symbol height when the layout must match a pre designed label.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    rows: 8
});
```

### columns

Defines the number of data columns.

- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `1` to `30`.
- **Use case:** Fix the symbol width when the layout must fit a specific horizontal space.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    columns: 4
});
```

### isCompact

Defines whether the compact PDF417 layout is used.

- **Default value:** `false`
- **Accepted values:** `true` or `false`
- **Use case:** Save horizontal space when the symbol is expected to remain readable and compact rendering is preferred.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    isCompact: true
});
```

### rowHeightRatio

Defines the height of each row as a multiple of the module width.

- **Default value:** `3`
- **Accepted values:** Any number greater than or equal to `3`
- **Use case:** Increase row height when a taller symbol is acceptable and easier to scan.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    rowHeightRatio: 4
});
```

### displayText

Defines the text displayed with the barcode.

- **Default value:** empty object
- **Accepted values:** `DisplayTextModel`
- **Use case:** Show a friendly label instead of the full encoded value.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    displayText: {
        text: 'PDF417',
        visibility: true,
        position: 'Bottom',
        alignment: 'Center'
    }
});
```

### margin

Defines the outer margin around the barcode.

- **Default value:** `10` on each side
- **Accepted values:** `MarginModel`
- **Use case:** Leave enough quiet space around the control in labels or printed documents.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    margin: { left: 15, right: 15, top: 15, bottom: 15 }
});
```

### backgroundColor

Defines the background color of the barcode.

- **Default value:** `'white'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Match the barcode area to the surrounding design.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    backgroundColor: '#f9fafb'
});
```

### foreColor

Defines the foreground color of the barcode.

- **Default value:** `'black'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Apply branding while keeping enough contrast for scanning.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    foreColor: '#1f2937'
});
```

## Compaction Modes

### Auto

`Auto` is the default mode. It chooses Text, Numeric, and Byte compaction per segment to reduce the number of codewords.

```typescript
let barcode = new PDF417Generator({
    value: 'PDF417 1234567890',
    compactionMode: 'Auto'
});
```

### Text

Use `Text` for printable ASCII, tab, line feed, and carriage return.

```typescript
let barcode = new PDF417Generator({
    value: 'SYNCFUSION REPORT',
    compactionMode: 'Text'
});
```

### Numeric

Use `Numeric` for digits only. It is the most compact choice for long numeric values.

```typescript
let barcode = new PDF417Generator({
    value: '0123456789012345678901234567890',
    compactionMode: 'Numeric'
});
```

### Byte

Use `Byte` for any character, including non-ASCII content.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion™',
    compactionMode: 'Byte'
});
```

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

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    errorCorrectionLevel: 'Auto'
});
```

### Recommended usage

- Use `Level2` or `Level3` for small payloads.
- Use `Level4` or `Level5` for typical labels and documents.
- Use higher levels when the barcode may be damaged, folded, or partially obscured.

```typescript
import { PDF417Generator, PDF417ErrorCorrectionLevel } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    value: 'Syncfusion',
    errorCorrectionLevel: PDF417ErrorCorrectionLevel.Level4
});
```

## Layout Customization

### Automatic rows and columns

When both `rows` and `columns` are `0`, the component calculates the layout automatically.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion'
});
```

### Fixed rows

Set `rows` to a value from `3` to `90` when the symbol must keep a fixed height.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    rows: 8
});
```

### Fixed columns

Set `columns` to a value from `1` to `30` when the symbol must keep a fixed width.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    columns: 6
});
```

### Limitation rules

- Rows must be `0` or `3` to `90`.
- Columns must be `0` or `1` to `30`.
- Rows × columns must not exceed `928`.
- If the requested layout cannot hold the encoded data, the `invalid` event is triggered.

### Row height ratio

The row height ratio controls how tall each row is relative to the module width. The minimum supported value is `3`.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    rowHeightRatio: 4
});
```

## Compact PDF417

Compact PDF417 omits the right row indicator and shortens the stop pattern. It produces a narrower symbol than standard PDF417, which is useful when horizontal space is limited.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    isCompact: true
});
```

## UTF-8 and International Text

When the value contains non-ASCII characters, the encoder writes the data as UTF-8 and includes the ECI designator so scanners can decode the symbol correctly.

```typescript
let barcode = new PDF417Generator({
    value: 'Привет Syncfusion',
    compactionMode: 'Byte'
});
```

## Display Text

Display text is rendered as a single line. If the text is wider than the available width, it is shortened with an ellipsis.

Text alignment supports `Left`, `Center`, and `Right`, and the position supports `Top` and `Bottom`.

```typescript
let barcode = new PDF417Generator({
    value: 'Syncfusion',
    displayText: {
        text: 'Shipment 1234567890',
        position: 'Top',
        alignment: 'Right'
    }
});
```

## Exporting

### exportImage

Exports the barcode as an image and downloads it in the browser.

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    value: 'Syncfusion',
    width: '300px',
    height: '120px'
});
barcode.appendTo('#element');
barcode.exportImage('pdf417-export', 'JPG');
```

### exportAsBase64Image

Returns the barcode image as a base64 string.

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    value: 'Syncfusion',
    width: '300px',
    height: '120px'
});
barcode.appendTo('#element');

async function getImage() {
    const image = await barcode.exportAsBase64Image('PNG');
    console.log(image);
}
```

## Events

### invalid

Fires when the value or a property is invalid, or when the value does not fit in the symbol.

Common validation cases include:

- Empty value
- Invalid text value for `Text` compaction
- Invalid numeric value for `Numeric` compaction
- Unsupported compaction mode
- Unsupported error correction level
- Invalid row or column values
- Capacity exceeded
- Insufficient width or height

```typescript
import { PDF417Generator } from '@syncfusion/ej2-barcode-generator';

let barcode = new PDF417Generator({
    value: 'Syncfusion',
    rows: 2,
    invalid: function (args) {
        console.log(args);
    }
});
barcode.appendTo('#element');
```

## Methods

### destroy

Destroys the PDF417 component.

```typescript
barcode.destroy();
```

### getModuleName

Returns the module name of the component.

```typescript
console.log(barcode.getModuleName());
```

### exportImage

Exports the barcode as an image and downloads it in the browser.

```typescript
barcode.exportImage('pdf417', 'PNG');
```

### exportAsBase64Image

Returns a promise that resolves to a base64 image string.

```typescript
const image = await barcode.exportAsBase64Image('JPG');
```

## Accessibility

The component sets `role="img"` and generates an `aria-label` for the barcode element. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## RTL Behavior

PDF417 is not mirrored in RTL mode because the symbol structure must remain in its encoded order for scanning. Only the surrounding text and alignment behavior follow RTL layout expectations.

## Responsive and Refresh Behavior

The component uses the container size when it renders and recalculates the symbol when properties change. If the container is resized, call `refresh()` to redraw the barcode with the new size.

When persistence is enabled, the component keeps its loaded state, but the barcode is always redrawn from the current properties when refreshed.

## Framework Integration

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ejs-pdf417generator value="ANGULAR PDF417" width="320px" height="160px"></ejs-pdf417generator>`
})
export class AppComponent { }
```

### React

```tsx
import * as React from 'react';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

export default function App() {
    return <PDF417GeneratorComponent value="REACT PDF417" width="320px" height="160px" />;
}
```

### Vue

```html
<template>
  <ejs-pdf417generator value="VUE PDF417" width="320px" height="160px"></ejs-pdf417generator>
</template>

<script>
import { PDF417GeneratorComponent } from '@syncfusion/ej2-vue-barcode-generator';

export default {
  data() {
    return { };
  }
};
</script>
```

## API Reference

### Class: `PDF417Generator`

| Member | Description |
| --- | --- |
| `value` | Value to encode. |
| `mode` | Rendering mode: `SVG` or `Canvas`. |
| `width` | Width of the control. |
| `height` | Height of the control. |
| `compactionMode` | Data compaction mode. |
| `errorCorrectionLevel` | Error correction level. |
| `rows` | Number of rows. |
| `columns` | Number of columns. |
| `isCompact` | Enables compact PDF417 rendering. |
| `rowHeightRatio` | Height of each row relative to module width. |
| `displayText` | Display text settings. |
| `margin` | Outer margin settings. |
| `backgroundColor` | Background color. |
| `foreColor` | Foreground color. |
| `invalid` | Event triggered when validation fails. |

### Enum: `PDF417CompactionMode`

| Value | Description |
| --- | --- |
| `Auto` | Selects the best compaction per segment. |
| `Text` | Encodes printable ASCII text. |
| `Numeric` | Encodes digits only. |
| `Byte` | Encodes any character as bytes. |

### Enum: `PDF417ErrorCorrectionLevel`

| Value | Description |
| --- | --- |
| `Auto` | Uses the recommended level for the data length. |
| `Level0` | 2 error correction codewords. |
| `Level1` | 4 error correction codewords. |
| `Level2` | 8 error correction codewords. |
| `Level3` | 16 error correction codewords. |
| `Level4` | 32 error correction codewords. |
| `Level5` | 64 error correction codewords. |
| `Level6` | 128 error correction codewords. |
| `Level7` | 256 error correction codewords. |
| `Level8` | 512 error correction codewords. |

### Methods

| Method | Description |
| --- | --- |
| `destroy()` | Destroys the component. |
| `getModuleName()` | Returns `PDF417Generator`. |
| `exportImage(fileName, exportType)` | Downloads the barcode as an image. |
| `exportAsBase64Image(exportType)` | Returns the barcode as a base64 image string. |

### Event: `invalid`

| Event | Description |
| --- | --- |
| `invalid` | Triggered when the value or one of the properties is invalid, or the symbol does not fit. |

## Limitations and Constraints

- Rows must be within `3` to `90` when fixed.
- Columns must be within `1` to `30` when fixed.
- The symbol cannot exceed `928` codewords.
- Quiet zone is enforced on every side of the symbol.
- Row height ratio must be `3` or greater.
- Very large values may trigger `CapacityExceeded`.
- If automatic error correction cannot fit the data, the implementation steps down to a lower level, but not below `Level2`.
- UTF-8 input uses more bytes than ASCII input, so international text can increase symbol size.
