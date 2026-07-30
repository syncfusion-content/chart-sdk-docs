---
layout: post
title: Es5 getting started with JavaScript Barcode control | Syncfusion®
description:  Checkout and learn about Es5 getting started with JavaScript Barcode control of Syncfusion Essential® JS 2 and more details.
platform: chart-sdk
control: Es5 getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Es5 getting started in JavaScript Barcode control

The Essential® JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization

The Essential® JS 2 JavaScript components can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential® JS 2 JavaScript components.

**Step 2:** You can get the global scripts and styles from the [Essential Studio® JavaScript (Essential® JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-barcode-generator/dist/global/ej2-barcode-generator.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.30/Essential JS 2/ej2-barcode-generator/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials® JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential® JS 2</title>
            <!-- Essential® JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential® JS 2 Barcode's global script -->
            <script src="resources/ej2-barcode-generator.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `Barcode` element and initiate the `Essential® JS 2 barcode-generator` component in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential® JS 2</title>
            <!-- Essential® JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential® JS 2 Barcode's global script -->
            <script src="resources/ej2-barcode-generator.min.js" type="text/javascript"></script>
       </head>
       <body>
            <!-- Add the HTML <div> element  -->
             <div id="element">Barcode</div>
            <script>
                // initialize barcode component
                var barcode = new ej.barcodegenerator.BarcodeGenerator({
                              width: '200px',
                              height: '150px',
                              mode: 'SVG',
                              type: 'Codabar',
                              value: '123456789',
                              });
                              barcode.appendTo('#element');
            </script>
       </body>
  </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential® JS 2 BarcodeGenerator** component.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential® JS 2 JavaScript components.

**Step 2:** The Essential® JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `http://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`http://cdn.syncfusion.com/ej2/ej2-barcode-generator/dist/global/ej2-barcode-generator.min.js`](http://cdn.syncfusion.com/ej2/ej2-barcode-generator/dist/global/ej2-barcode-generator.min.js)
>
> Styles: [`http://cdn.syncfusion.com/ej2/ej2-barcode-generator/styles/material.css`](http://cdn.syncfusion.com/ej2/ej2-barcode-generator/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `Barcode` element and initiate the `Essential® JS 2 BarcodeGenerator` component in the index.html by using following code.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential® JS 2</title>
            <!-- Essential® JS 2 material theme -->
            <link href="http://cdn.syncfusion.com/ej2/ej2-barcode-generator/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential® JS 2 barcode's global script -->
            <script src="http://cdn.syncfusion.com/ej2/ej2-barcode-generator/dist/global/ej2-barcode-generator.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element  -->
             <div id="element">Barcode</div>
            <script>
                // initialize barcode component
                  var barcode = new ej.barcodegenerator.BarcodeGenerator({
                                  width: '200px',
                                  height: '150px',
                                  mode: 'SVG',
                                  type: 'Codabar',
                                  value: '123456789',
                                  });
                                barcode.appendTo('#element');
            </script>
            </script>
       </body>
  </html>

```

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential® JS 2 BarcodeGenerator` component.

## Adding Barcode Generator control

You can start adding Essential® JS 2 barcode-generator component to the application. To get started, add the barcode component in `app.ts` and `index.html` files using the following code.

Place the following barcode-generator  code in the `app.ts`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs4" %}

## Adding QR Generator control

You can add the QR code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs5" %}

## Adding Datamatrix Generator control

You can add the datamatrix code in our barcode generator component.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/barcode-generator/getting-started-cs6" %}