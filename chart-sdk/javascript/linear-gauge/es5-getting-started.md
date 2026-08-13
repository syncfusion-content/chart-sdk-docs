---
layout: post
title: ES5 getting started with JavaScript Linear Gauge | Syncfusion
description: Learn how to create and configure a Syncfusion JavaScript ES5 Linear Gauge component using CDN resources.
platform: chart-sdk
control: Linear Gauge
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting Started with Syncfusion® JavaScript (ES5) Linear Gauge Control

Build your first Syncfusion JavaScript (ES5) application with a Linear Gauge in a few minutes. This quickstart guides you through creating a minimal HTML page, loading the required Syncfusion scripts from the CDN, initializing the Linear Gauge, and configuring its title, axis, labels, and pointer.

## Prerequisites

* [Visual Studio Code](https://code.visualstudio.com) or another text editor
* A modern web browser
* A local web server, such as the Visual Studio Code [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

> Register your Syncfusion license key before using the component. For more information, refer to the [license key registration documentation](https://ej2.syncfusion.com/documentation/licensing/license-key-registration).

## Dependencies

The Linear Gauge component is available in the `@syncfusion/ej2-lineargauge` package. The following dependencies are required:

```text
|-- @syncfusion/ej2-lineargauge
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
```

> `@syncfusion/ej2-pdf-export` is required only when using PDF export features.

## Quick Setup

### Step 1: Create the Folder and Files

Create a folder named `quickstart` in your preferred directory.

Inside the `quickstart` folder, create the following files:

* `index.html`
* `index.js`

### Step 2: Add Syncfusion® CDN Resources

You can load the Linear Gauge component by using individual package scripts or the combined Syncfusion bundle. Choose only one of these approaches.

#### Individual Package Scripts

Add the following script references to the `<head>` section of `index.html`. Load the dependencies before the Linear Gauge component script.

```html
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>
<script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-lineargauge/dist/global/ej2-lineargauge.min.js" type="text/javascript"></script>
```
#### Combined Bundle

Alternatively, load all Syncfusion JavaScript components from a single combined bundle:

```html
<script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js" type="text/javascript"></script>
```

> Do not include the combined bundle together with the individual package scripts.

### Step 3: Add the Syncfusion® Linear Gauge Control to the Application

The `index.html` file contains the Linear Gauge container and references a separate `index.js` file that contains the component initialization.

The global scripts added in Step 2 register the `ej.lineargauge.LinearGauge` class in the `ej` namespace. Therefore, no module imports are required.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

The `new ej.lineargauge.LinearGauge({...})` call creates the Linear Gauge component and the `lineargauge.appendTo('#element')` renders the component inside the `<div id="element">` element declared in `index.html`.

### Step 4: Open the Application in a Browser

Open `quickstart/index.html` through a local web server.

If you are using the Visual Studio Code **Live Server** extension:

1. Right-click `index.html` in the Explorer.
2. Select **Open with Live Server**.
3. Open the URL displayed by Live Server, such as `http://127.0.0.1:5500/`.

The browser displays the initialized Linear Gauge.

## Output

After completing the quick setup, the browser displays a Linear Gauge.

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/linear-gauge/es5-getting-started-cs1" %}

![Syncfusion Linear Gauge Quick Start Output](./images/linear-gauge.png)

## Troubleshooting

- **The page is blank.** Open `index.html` through a local web server instead of opening the file directly from the file system.
- **`ej is not defined`.** Ensure that the Syncfusion CDN scripts are loaded before `index.js`.
- **`ej.lineargauge` is undefined.** Verify that `ej2-lineargauge.min.js` is loaded after `ej2-base.min.js` and `ej2-svg-base.min.js`.
- **The Linear Gauge is not displayed.** Ensure that the container ID in `index.html` matches the selector passed to `appendTo('#element')`.