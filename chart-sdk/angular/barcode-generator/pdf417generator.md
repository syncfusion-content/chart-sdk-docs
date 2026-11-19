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

To use the PDF417 Generator in Angular, ensure the required Syncfusion Essential JS 2 packages are installed:

```bash
|-- @syncfusion/ej2-angular-barcode-generator
    |-- @syncfusion/ej2-barcode-generator
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

### Package Import

Import the PDF417 module:

```typescript
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';
```

### Basic PDF417 Generation

The following example creates a PDF417 barcode that encodes the specified value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/pdf417-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/pdf417-cs1" %}

For most applications:
* `value` specifies the data to encode.
* `width` controls the barcode width.
* `height` controls the barcode height.

The component automatically determines the barcode structure and error correction settings.

## Rendering Modes

The PDF417 Generator supports the following rendering modes through the `mode` property:

| Mode | Description |
|---|---|
| `SVG` | Renders the barcode as vector graphics. Recommended for most applications because it scales without losing quality. |
| `Canvas` | Renders the barcode to an HTML5 canvas. Useful for bitmap-based workflows and custom canvas processing. |

### SVG Mode (Default)

SVG mode provides crisp rendering regardless of zoom level or display resolution.

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

Canvas mode renders the barcode directly onto an HTML5 canvas.

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

**Recommendation:** Use `Auto` unless the barcode contains only one type of content and you want to enforce a specific encoding mode.

If the selected compaction mode contains unsupported characters, the barcode is not generated and the `invalid` event is triggered.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/compactionmode-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/compactionmode-cs1" %}

### Error Correction Levels

Error correction helps scanners successfully read a barcode even if it becomes partially damaged, dirty, or obscured.

Higher error correction levels improve reliability but increase barcode size.

| Level | Usage |
|---|---|
| `Auto` | Automatically selects an appropriate level. Recommended. |
| `Level0` - `Level2` | Suitable for clean printing environments. |
| `Level3` - `Level5` | Suitable for shipping labels and general business applications. |
| `Level6` - `Level8` | Suitable for harsh environments where barcode damage is more likely. |

**Recommendation:** Use `Auto` for most applications.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/errorcorrectionlevel-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/errorcorrectionlevel-cs1" %}

### Row Height Ratio

The `rowHeightRatio` property controls the height of individual PDF417 rows.

* Smaller values create shorter barcodes.
* Larger values create taller barcodes.
* Taller barcodes may improve scanning performance in some environments.

The minimum supported value is `3`, which follows the PDF417 specification.

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

Compact PDF417 (also known as Truncated PDF417) reduces the overall barcode width.

Enable compact mode through the `isCompact` property:

| Standard PDF417 | Compact PDF417 |
|---|---|
| Better scanner compatibility | Saves horizontal space |
| Recommended for most applications | Useful when label width is limited |

**Recommendation:** Use standard PDF417 unless space constraints require a more compact barcode.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/iscompact-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/iscompact-cs1" %}

### Rows and Columns

By default, the component automatically determines the number of rows and columns required for the encoded data.

You can specify fixed values when a particular barcode layout is required.

| Property | Supported Range |
|---|---|
| `rows` | 3 to 90 |
| `columns` | 1 to 30 |

**Recommendation:** Leave both properties at their default values unless your application requires a specific barcode shape.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/barcode-generator/pdf417Generator/rows-columns-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/barcode/barcodegenerator/rows-columns-cs1" %}

## Barcode Customization

### Dimensions

Use the `width` and `height` properties to control barcode size.

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

Use the `displayText` property to show a user-friendly label along with the barcode.

Supported options:

| Property | Description |
|---|---|
| `text` | Text displayed with the barcode. |
| `position` | Displays text above or below the barcode (`'Top'` or `'Bottom'`). |
| `alignment` | Text alignment (`'Left'`, `'Center'`, or `'Right'`). |
| `visibility` | Shows or hides the display text. |

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

### Colors

Customize barcode colors using:
* `foreColor`: Barcode bar color.
* `backgroundColor`: Barcode background surface color.

**Best Practice:** Use high-contrast color combinations such as dark bars on a light background to ensure reliable scanning.

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

### Margins

Use the `margin` property to add spacing around the barcode. Margins help preserve the quiet zone required for successful barcode scanning.

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
  public margin: MarginModel = {
    left: 20,
    right: 20,
    top: 20,
    bottom: 20
  };
}
```

## International Character Support

The PDF417 Generator supports Unicode and international characters including:
* Chinese
* Japanese
* Korean
* Arabic
* Cyrillic languages
* European accented characters

When international characters are used, the barcode automatically applies the required encoding internally:

```typescript
import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator id="barcode" width="350px" height="150px" value="こんにちは Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent {}
```

No additional configuration is required.

## Exporting

### Export as Image

Download the barcode as a PNG or JPG image using the `exportImage` method:

| Supported Format | Description |
|---|---|
| `'PNG'` | Lossless image format, recommended for high quality. |
| `'JPG'` | Compressed image format with smaller file size. |

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
    this.barcode?.exportImage('pdf417', 'PNG' as BarcodeExportType);
  }
}
```

### Export as Base64

Generate a Base64 image string for use in image elements, email templates, reports, or remote APIs:

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
    const imageData: string | undefined = await this.barcode?.exportAsBase64Image('PNG' as BarcodeExportType);
    console.log(imageData);
  }
}
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

## Accessibility

The PDF417 Generator includes built-in accessibility support:
* Applies `role="img"` automatically.
* Generates accessible labels for screen readers.
* Supports localization of accessibility text and validation messages.

## Localization

Localization is supported through the Syncfusion `L10n` framework. You can localize screen reader labels, validation messages, and component-generated text:

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

## RTL Support

When RTL mode is enabled:
* The barcode itself is **not** mirrored.
* Display text follows RTL layout rules.
* Text alignment behaves according to the active RTL configuration.

This preserves barcode standards while providing a consistent user experience.

## Responsive Layout

If the barcode container size changes at runtime, update the component dimensions or call `dataBind()`:

```typescript
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PDF417Generator, PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator #barcode id="barcode" value="Syncfusion"></ejs-pdf417generator>`
})
export class AppComponent implements AfterViewInit {
  @ViewChild('barcode') public barcode?: PDF417Generator;

  public ngAfterViewInit(): void {
    this.barcode!.dataBind();
  }
}
```

This recalculates the layout and redraws the barcode.

## Best Practices

* Use `Auto` compaction mode unless a specific encoding mode is required.
* Use `Auto` error correction for most applications.
* Ensure sufficient barcode width and height for the amount of encoded data.
* Use high-contrast foreground and background colors.
* Preserve adequate quiet zones around the barcode.
* Test generated barcodes with the target scanner devices before production deployment.
* Use standard PDF417 unless compact mode is required to save space.

## Limitations

* A PDF417 symbol has a maximum storage capacity defined by the PDF417 specification (up to 928 codewords).
* Fixed `rows` values must be between `3` and `90`.
* Fixed `columns` values must be between `1` and `30`.
* `rowHeightRatio` must be greater than or equal to `3`.
* Larger amounts of data require larger barcode dimensions.
* International text may require additional storage space compared to ASCII-only content.
