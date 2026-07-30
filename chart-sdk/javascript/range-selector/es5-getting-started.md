---
layout: post
title: ES5 getting started with JavaScript Range Navigator control | Syncfusion
description:  Check out and learn about ES5 getting started with JavaScript Range Navigator control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Range Navigator
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# ES5 getting started with JavaScript Range Navigator control

This section explains the steps required to create a simple range navigator and demonstrates the basic usage of the range navigator control.

## Dependencies

 The list of minimum dependencies required to use a range navigator is as follows:

```
    |-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-calendars

```

## Setup for local environment

Follow these steps to set up your local environment.

**Step 1:** Create a root folder **myapp** for your application.

**Step 2:** Create **myapp/resources** folder to store local scripts and styles.

**Step 3:** Create **myapp/index.js** and **myapp/index.html** files for initializing the Syncfusion Essential JS 2 Range Navigator control.

## Adding Syncfusion resources

The Syncfusion Essential JS 2 Range Navigator control can be initialized in either of the following ways:

* Using local script.
* Using CDN links for scripts.

### Using local script

You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

After installing the Essential JS 2 product build, you can copy the control and its dependency scripts and style files into the **resources/scripts** and **resources/styles** folder.

The following shows the path to the Range Navigator's script and style files.

**Syntax:**

> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-base/dist/global/ej2-base.min.js`
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-charts/dist/global/ej2-charts.min.js`
>

After copying the files, reference the scripts from `index.html`. The following HTML shows the minimal dependencies.

```

<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Range Navigator</title>

            <!-- Essential JS 2 Range Navigator's dependent scripts -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-data/dist/global/ej2-data.min.js" type="text/javascript"></script>
            <script src="https://cdn.syncfusion.com/ej2/ej2-svg-base/dist/global/ej2-svg-base.min.js" type="text/javascript"></script>

            <!-- Essential JS 2 Range Navigator's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>

```

### Using CDN links for scripts

Using CDN links, you can reference the control's script in the `index.html`.

Refer the control's CDN links as follows.

**Syntax:**

> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**

> Script: [`https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

The following HTML shows the minimal dependencies using CDN scripts.

```

<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Range Navigator</title>
            <!-- Essential JS 2 Range Navigator's global script -->
            <script src="https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
  
```

## Adding Range Navigator control

Now you can add the Range Navigator control to the application. To get started, add a **div** element for the Range Navigator in **index.html**. Then reference the **index.js** file in **index.html**.

This document uses `ej2.min.js`, which includes all Essential JS 2 components and dependencies.

```html
<!DOCTYPE html>
  <html xmlns="https://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2 Range Navigator</title>
            <!-- Essential JS 2 all script -->
            <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element for Range Navigator  -->
             <div id="element"></div>
             <script src="index.js" type="text/javascript"></script>
       </body>
  </html>

```

Place the following Range Navigator initialization code in `index.js`.

```javascript
var range = new ej.charts.RangeNavigator();
range.appendTo('#element');
```

The following example shows a basic Range Navigator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/range-selector/getting-started-cs9" %}

## Populate Range Navigator with Data

Now, provide data to the Range Navigator. Add a series object to the Range Navigator by using the `series` property. Map the field names `x` and `y` in the JSON data to the `xName` and `yName` properties of the series, then set the JSON data to the `dataSource` property.
Since the JSON contains DateTime data, set the `valueType` as `DateTime`. By default, the axis `valueType` is `Numeric`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/range-selector/getting-started-cs10" %}

> Note: Get data from [here](https://ej2.syncfusion.com/demos/src/range-navigator/data-source/default-data.json).

The sample should look like the [default](https://ej2.syncfusion.com/javascript/demos/#/material/range-navigator/default.html). Don’t worry about the gradient color; let it take the default color.

## Enable Tooltip

The tooltip is useful to show the selected data. You can enable the tooltip by setting the `enable` property to `true` in the `tooltip` object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/range-selector/getting-started-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/range-selector/getting-started-cs11" %}