---
layout: post
title: Export in JavaScript Barcode control | Syncfusion®
description: Learn here all about Export in Syncfusion® JavaScript Barcode control of Syncfusion Essential® JS 2 and more.
platform: chart-sdk
control: Export 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Export in JavaScript Barcode control

Export barcode as an image and base64 string is common for barcode,QRcode and datamatrix. The following code samples explain how to export barcode as an image and base64 string.

## Export

Barcode provides the support to export its content as an image in the specified image type and downloads it in the browser.
The following code example shows how to export the barcode as an image

```ts

import { BarcodeGenerator, BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '200px', height: '150px',
    type: 'Code39',
    value: 'BARCODE',
    displayText: { text: 'ABCD' },
});
barcode.appendTo('#element');
let filename: string = 'Export';
barcode.exportImage(filename,'JPG');

```

The filename specifies the name of the file to be downloaded.

### Export As Base64String

Barcode provides the support to export its content as an image in the specified image type and returns it as base64 string.

The following code example shows how to export the barcode as a base64 string

```ts

import { BarcodeGenerator, BarcodeExportType } from '@syncfusion/ej2-barcode-generator';

let barcode: BarcodeGenerator = new BarcodeGenerator({
    width: '200px', height: '150px',
    type: 'Code39',
    value: 'BARCODE',
    displayText: { text: 'ABCD' },
});
barcode.appendTo('#element');
async function () {
// Can able to store the return base64 string in variable
var data = await barcode.exportAsBase64Image('JPG');
};

```

>**Note:**
>Format is to specify the type or format of the exported file. You can export the barcode to the following formats:
>* JPG.
>* PNG.