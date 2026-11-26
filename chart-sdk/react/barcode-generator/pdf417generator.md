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

## PDF417 Overview

PDF417 is a two-dimensional barcode that can store large amounts of text, numeric, and binary data. It is commonly used in applications such as shipping labels, identity cards, boarding passes, inventory tracking, and document management systems.

Unlike traditional one-dimensional barcodes, PDF417 can hold significantly more information and includes built-in error correction, allowing scanners to read the barcode even when it is partially damaged or obscured.

The Syncfusion PDF417 Generator automatically:

* Encodes the provided data into a PDF417 barcode.
* Selects an efficient data compaction mode.
* Applies appropriate error correction.
* Calculates an optimal barcode layout based on the available size.

For most scenarios, only the `value` property is required to generate a barcode.

## Getting Started

### Dependencies

To use the PDF417 Generator in React, ensure the required Syncfusion Essential JS 2 packages are installed:

```bash
|-- @syncfusion/ej2-react-barcode-generator
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
```

### Package import

Import the PDF417 component:

```typescript
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
```

### Basic PDF417 generation

The following example creates a PDF417 barcode that encodes the specified value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs1" %}

For most applications:
* `value` specifies the data to encode.
* `width` controls the barcode width.
* `height` controls the barcode height.

The component automatically determines the barcode structure and error correction settings.

## Rendering Modes

The PDF417 Generator supports the following rendering modes through the `mode` property:

| Mode | Description |
|---|---|
| `SVG` | Renders the barcode as vector graphics. |
| `Canvas` | Renders the barcode to an HTML5 canvas. Useful for bitmap-based workflows and custom canvas processing. |

### SVG Mode (Default)

SVG mode provides crisp rendering regardless of zoom level or display resolution.

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

### Canvas Mode

Canvas mode renders the barcode directly onto an HTML5 canvas.

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

## PDF417 Configuration

### Compaction Modes

PDF417 supports multiple compaction modes that optimize how data is stored within the barcode.

For most scenarios, use the default `Auto` mode. It automatically selects the most efficient encoding method for the supplied data.

| Compaction Mode | Description | Typical Usage |
|---|---|---|
| `Auto` | Automatically selects the optimal encoding mode. | Recommended for most applications. |
| `Text` | Optimized for textual data. | Names, addresses, URLs, and documents. |
| `Numeric` | Optimized for numeric values. | Tracking numbers and identifiers. |
| `Byte` | Encodes binary and non-ASCII data. | International text and binary content. |

If the selected compaction mode contains unsupported characters, the barcode is not generated and the `invalid` event is triggered.

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
    compactionMode="Text"
  />,
  document.getElementById('element')
);
```

### Error Correction Levels

Error correction helps scanners successfully read a barcode even if it becomes partially damaged, dirty, or obscured.

Higher error correction levels improve reliability but increase barcode size.

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
    errorCorrectionLevel="Level2"
  />,
  document.getElementById('element')
);
```

### Row Height Ratio

The `rowHeightRatio` property controls the height of individual PDF417 rows.

* Smaller values create shorter barcodes.
* Larger values create taller barcodes.
* Taller barcodes may improve scanning performance in some environments.

The minimum supported value is `3`, which follows the PDF417 specification.

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
    rowHeightRatio={5}
  />,
  document.getElementById('element')
);
```

### Compact PDF417

Compact PDF417 (also known as Truncated PDF417) reduces the overall barcode width.

Enable compact mode through the `isCompact` property:

| Standard PDF417 | Compact PDF417 |
|---|---|
| Better scanner compatibility | Saves horizontal space |
| Recommended for most applications | Useful when label width is limited |

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
    isCompact={true}
  />,
  document.getElementById('element')
);
```

### Rows and Columns

By default, the component automatically determines the number of rows and columns required for the encoded data.

You can specify fixed values when a particular barcode layout is required.

| Property | Supported Range |
|---|---|
| `rows` | 3 to 90 |
| `columns` | 1 to 30 |

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
    rows={20}
    columns={5}
  />,
  document.getElementById('element')
);
```

## Customizing PDF417 Dimensions

The size of the PDF417 barcode is controlled by the `width` and `height` properties, as shown in the **Custom size** example above.

### xDimension

The `xDimension` property sets the width, in pixels, of the smallest module (bar) of the PDF417 barcode. It has no default value. The value must be a finite number greater than `0`. The row height is not set by `xDimension` directly. It is calculated as `xDimension * rowHeightRatio`, so changing the `rowHeightRatio` property changes the row height independently of the module width (see [Row height ratio](#row-height-ratio)).

Use the `sizeMode` property to choose how `xDimension` is applied. It accepts the case-sensitive string values `'Fit'` or `'XDimension'`, and it has no default value.

- `Fit`: Uses the configured `xDimension` when the symbol (including its quiet zone and the row height derived from `rowHeightRatio`) fits within the component's `width` and `height`. Otherwise, the module width is reduced to the largest whole-pixel size that fits. The value is never enlarged to fill unused space, and the barcode is centered in the available area. If not even 1 pixel per module fits, nothing is rendered and the `invalid` event is triggered.
- `XDimension`: Always uses the configured `xDimension` as the module width, and the row height is `xDimension * rowHeightRatio`. Any positive value is accepted, including values below 1 pixel. The barcode is drawn from the top-left margin, is not centered, and the rendered area grows beyond `width` and `height` when the barcode is larger.

`xDimension` based sizing is applied only when both `sizeMode` and `xDimension` are set. If either is omitted, the barcode is rendered using the configured `width` and `height`.

If `sizeMode` is set and `xDimension` is not a finite number greater than `0`, the `invalid` event is triggered with the message `Invalid xDimension` and the barcode is not drawn.

#### Fit the PDF417 barcode using xDimension

The following example sets `sizeMode` to `Fit`. The configured `xDimension` is kept when the symbol fits in the component; otherwise it is reduced to the largest whole-pixel size that fits.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-fit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-fit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-fit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-fit-cs1" %}

#### Preserve the PDF417 module width using xDimension

The following example sets `sizeMode` to `XDimension`. The configured `xDimension` is always used, and the rendered area grows if the symbol is larger than the configured `width` and `height`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/barcode-generator/pdf417generator/xdimension-cs1" %}

## PDF417-specific samples

### Compaction mode

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs1" %}

### Error correction level

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs2" %}

### Row height ratio

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs3" %}

### Compact PDF417

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs4" %}

### Rows and columns

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/react/barcode-generator/pdf417generator/pdf417-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/barcode/pdf417generator/pdf417-cs5" %}
## Barcode Customization

### Dimensions

Use the `width` and `height` properties to control barcode size.

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

### Display Text

Use the `displayText` property to show a user-friendly label along with the barcode.

Supported options:

| Property | Description |
|---|---|
| `text` | Text displayed with the barcode. |
| `position` | Displays text above or below the barcode (`'Top'` or `'Bottom'`). |
| `alignment` | Text alignment (`'Left'`, `'Center'`, or `'Right'`). |
| `visibility` | Shows or hides the display text. |

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

const displayText = {
  text: 'PDF417 Document ID',
  position: 'Top',
  alignment: 'Center'
};

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="150px"
    value="1234567890"
    displayText={displayText}
  />,
  document.getElementById('element')
);
```

### Colors

Customize barcode colors using:
* `foreColor`: Barcode bar color.
* `backgroundColor`: Barcode background surface color.

**Best Practice:** Use high-contrast color combinations such as dark bars on a light background to ensure reliable scanning.

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

### Margins

Use the `margin` property to add spacing around the barcode. Margins help preserve the quiet zone required for successful barcode scanning.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

const margin = {
  left: 20,
  right: 20,
  top: 20,
  bottom: 20
};

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="320px"
    height="140px"
    value="Syncfusion"
    margin={margin}
  />,
  document.getElementById('element')
);
```

## International Character Support

The PDF417 Generator supports Unicode and international characters. When the input contains non-ASCII characters, the barcode is encoded using an appropriate Unicode-compatible encoding, enabling supported scanners to correctly decode the data.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="350px"
    height="150px"
    value="こんにちは Syncfusion"
  />,
  document.getElementById('element')
);
```

No additional configuration is required.

## Exporting

### Export as Image

Download the barcode as a PNG or JPG image using the `exportImage` method:

| Supported Format | Description |
|---|---|
| `'PNG'` | Lossless image format. |
| `'JPG'` | Compressed image format with smaller file size. |

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

function App() {
  const barcodeRef = useRef(null);

  const onExport = () => {
    barcodeRef.current.exportImage('pdf417', 'PNG');
  };

  return (
    <div>
      <PDF417GeneratorComponent id="barcode" ref={barcodeRef} value="Syncfusion" />
      <button onClick={onExport}>Download Barcode</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('element'));
```

### Export as Base64

Generate a Base64 image string for use in image elements, email templates, reports, or remote APIs:

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

function App() {
  const barcodeRef = useRef(null);

  useEffect(() => {
    barcodeRef.current.exportAsBase64Image('PNG').then((imageData) => {
      console.log(imageData);
    });
  }, []);

  return <PDF417GeneratorComponent id="barcode" ref={barcodeRef} value="Syncfusion" />;
}

ReactDOM.render(<App />, document.getElementById('element'));
```

## Validation and Events

### invalid Event

The `invalid` event occurs when barcode generation fails because of invalid input or unsupported settings.

Common causes include:
* Empty value.
* Unsupported characters for the selected compaction mode.
* Invalid row or column configuration.
* Insufficient barcode dimensions.
* Data exceeding PDF417 capacity limits.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

function App() {
  const [errorMessage, setErrorMessage] = useState('');

  const onInvalid = (args) => {
    setErrorMessage(args.message);
  };

  return (
    <div>
      <PDF417GeneratorComponent id="barcode" value="SYNCFUSION" width="300px" height="120px" invalid={onInvalid} />
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('element'));
```

## Accessibility

The PDF417 Generator includes built-in accessibility support:
* Applies `role="img"` automatically.
* Generates accessible labels for screen readers.
* Supports localization of accessibility text and validation messages.

## Localization

Use the Syncfusion `L10n` framework to localize the screen reader label and validation messages. Set the component locale to the matching culture:

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'de': {
    'PDF417Generator': {
      ariaLabel: 'PDF417-Strichcode',
      EmptyValue: 'Der Wert ist leer.'
    }
  }
});

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width="300px"
    height="120px"
    value="Syncfusion"
    locale="de"
  />,
  document.getElementById('element')
);
```

## Best Practices

* Use `Auto` compaction mode unless a specific encoding mode is required.
* Use `Auto` error correction for most applications.
* Ensure sufficient barcode width and height for the amount of encoded data.
* Use high-contrast foreground and background colors.
* Preserve adequate quiet zones around the barcode.
* Test generated barcodes with the target scanner devices before production deployment.
* Use standard PDF417 unless compact mode is required to save space.

## Limitations and Constraints

* A PDF417 symbol has a maximum storage capacity defined by the PDF417 specification (up to 928 codewords).
* Fixed `rows` values must be between `3` and `90`.
* Fixed `columns` values must be between `1` and `30`.
* `rowHeightRatio` must be greater than or equal to `3`.
* Larger amounts of data require larger barcode dimensions.
* International text may require additional storage space compared to ASCII-only content.
