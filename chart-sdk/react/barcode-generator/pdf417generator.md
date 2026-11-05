---
layout: post
title: PDF417Generator in React Barcode control | Syncfusion®
description: Learn here all about PDF417Generator in Syncfusion® React Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: PDF417Generator
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# PDF417Generator in React Barcode control

## PDF417

PDF417 is a stacked two-dimensional barcode defined by ISO/IEC 15438. A symbol contains 3 to 90 rows, and each row has 1 to 30 data columns. It is widely used on identification cards, driver’s licenses, boarding passes, shipping labels, and inventory documents because it can store a large amount of data and still be scanned by both linear scanners and imagers.

PDF417 is a good choice when you need higher data capacity than linear barcodes, robust error correction, and a format that is practical for printed documents and transport labels.

## Getting Started

### Dependencies

```bash
|-- @syncfusion/ej2-react-barcode-generator
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

### Package import

```typescript
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
```

### Basic PDF417 generation

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    value="Syncfusion"
  />,
  document.getElementById('element')
);
```

```html
<div id="element"></div>
```

### Rendering in SVG mode

SVG is the default rendering mode.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    mode="SVG"
    value="Syncfusion"
  />,
  document.getElementById('element')
);
```

### Rendering in Canvas mode

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    mode="Canvas"
    value="Syncfusion"
  />,
  document.getElementById('element')
);
```

## PDF417 Generator

The `PDF417GeneratorComponent` renders a PDF417 symbol inside the target element. By default, it selects the compaction mode for each part of the value, uses the recommended error correction level, and calculates rows and columns automatically to fit the available space.

The component renders in SVG mode by default and uses a `role="img"` accessibility role.

## Basic Examples

### Simple PDF417 barcode

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="320px"
    height="140px"
    value="SYNCFUSION PDF417"
  />,
  document.getElementById('element')
);
```

### Custom size

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="500px"
    height="200px"
    value="Syncfusion"
  />,
  document.getElementById('element')
);
```

### Display text customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="150px"
    value="1234567890"
    displayText={{
      text: 'PDF417',
      position: 'Top',
      alignment: 'Center'
    }}
  />,
  document.getElementById('element')
);
```

### Background and foreground color customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    value="Syncfusion"
    backgroundColor="#f7f7f7"
    foreColor="#b91c1c"
  />,
  document.getElementById('element')
);
```

### Margin customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="320px"
    height="140px"
    value="Syncfusion"
    margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
  />,
  document.getElementById('element')
);
```

## PDF417-specific samples

### Compaction mode

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs1" %}

### Error correction level

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs2" %}

### Row height ratio

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs3" %}

### Compact PDF417

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs4" %}

### Rows and columns

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/barcode/pdf417generator/pdf417-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs5" %}

## Customization

### Custom size

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="500px"
    height="200px"
    value="Syncfusion"
  />,
  document.getElementById('element')
);
```

### Display text customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="150px"
    value="1234567890"
    displayText={{
      text: 'PDF417',
      position: 'Top',
      alignment: 'Center'
    }}
  />,
  document.getElementById('element')
);
```

### Background and foreColor customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    value="Syncfusion"
    backgroundColor="#f7f7f7"
    foreColor="#b91c1c"
  />,
  document.getElementById('element')
);
```

### Margin customization

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="320px"
    height="140px"
    value="Syncfusion"
    margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
  />,
  document.getElementById('element')
);
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

Exports the barcode as an image and downloads it in the browser.

### exportAsBase64Image

Returns the barcode image as a base64 string.

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

## API documentation

### value

Defines the value to encode in the PDF417 symbol.

- **Default value:** `undefined`
- **Accepted values:** Any string value. Empty values are invalid.
- **Use case:** Encode shipment IDs, document numbers, or inventory codes.

### mode

Defines the rendering mode.

- **Default value:** `'SVG'`
- **Accepted values:** `'SVG'` or `'Canvas'`
- **Use case:** Use SVG for crisp scaling and Canvas when a raster surface is preferred.

### width

Defines the width of the control.

- **Default value:** `'100%'`
- **Accepted values:** String or number.
- **Use case:** Reserve enough horizontal space for dense symbols.

### height

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
- **Use case:** Fix the symbol height when the layout must match a pre designed label.

### columns

Defines the number of data columns.

- **Default value:** `0`
- **Accepted values:** `0` for automatic calculation, or an integer from `1` to `30`.
- **Use case:** Fix the symbol width when the layout must fit a specific horizontal space.

### isCompact

Defines whether the compact PDF417 layout is used.

- **Default value:** `false`
- **Accepted values:** `true` or `false`
- **Use case:** Save horizontal space when the symbol is expected to remain readable and compact rendering is preferred.

### rowHeightRatio

Defines the height of each row as a multiple of the module width.

- **Default value:** `3`
- **Accepted values:** Any number greater than or equal to `3`
- **Use case:** Increase row height when a taller symbol is acceptable and easier to scan.

### displayText

Defines the text displayed with the barcode.

- **Default value:** empty object
- **Accepted values:** `DisplayTextModel`
- **Use case:** Show a friendly label instead of the full encoded value.

### margin

Defines the outer margin around the barcode.

- **Default value:** `10` on each side
- **Accepted values:** `MarginModel`
- **Use case:** Leave enough quiet space around the control in labels or printed documents.

### backgroundColor

Defines the background color of the barcode.

- **Default value:** `'white'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Match the barcode area to the surrounding design.

### foreColor

Defines the foreground color of the barcode.

- **Default value:** `'black'`
- **Accepted values:** Any valid CSS color string.
- **Use case:** Apply branding while keeping enough contrast for scanning.

## Methods

### destroy

Destroys the PDF417 component and releases its resources.

```typescript
const barcodeInstance = document.getElementById('barcode').ej2_instances[0];
barcodeInstance.destroy();
```

### getModuleName

Returns the module name of the component.

```typescript
const barcodeInstance = document.getElementById('barcode').ej2_instances[0];
console.log(barcodeInstance.getModuleName());
```

### exportImage

Exports the barcode as an image and downloads it in the browser.

```typescript
const barcodeInstance = document.getElementById('barcode').ej2_instances[0];
barcodeInstance.exportImage('pdf417', 'PNG');
```

### exportAsBase64Image

Returns a promise that resolves to a base64-encoded image string.

```typescript
const barcodeInstance = document.getElementById('barcode').ej2_instances[0];
const imageString = await barcodeInstance.exportAsBase64Image('JPG');
```

## Accessibility

The component sets `role="img"` and generates an `aria-label` for the barcode element. The label uses the display text when available; otherwise, it uses the barcode value. For very long values, the accessible text is truncated to keep the label manageable for assistive technologies.

## RTL Behavior

PDF417 is not mirrored in RTL mode because the symbol structure must remain in its encoded order for scanning. Only the surrounding text and alignment behavior follow RTL layout expectations.

## Responsive and Refresh Behavior

The component uses the container size when it renders and recalculates the symbol when properties change. If the container is resized, call `refresh()` to redraw the barcode with the new size.

## Framework Integration

The PDF417GeneratorComponent integrates seamlessly into React applications. It supports React's component lifecycle, props binding, and event handling patterns for a native React development experience.

## API Reference

### Class: `PDF417GeneratorComponent`

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

## Limitations and Constraints

- Rows must be within `3` to `90` when fixed.
- Columns must be within `1` to `30` when fixed.
- The symbol cannot exceed `928` codewords.
- Quiet zone is enforced on every side of the symbol.
- Row height ratio must be `3` or greater.
- Very large values may trigger `CapacityExceeded`.
- If automatic error correction cannot fit the data, the implementation steps down to a lower level, but not below `Level2`.
- UTF-8 input uses more bytes than ASCII input, so international text can increase symbol size.
