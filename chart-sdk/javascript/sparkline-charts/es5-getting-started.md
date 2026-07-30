---
layout: post
title: ES5 getting started with JavaScript Sparkline control | Syncfusion
description:  Checkout and learn about ES5 getting started with JavaScript Sparkline control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: ES5 getting started 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# ES5 getting started in JavaScript Sparkline control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is a pure ES5-based JavaScript framework that can be used directly in the latest web browsers.

## Dependencies

The following list of minimum dependencies are required to use the sparkline:

```javascript
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
```

## Control Initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls support initialization through either of the following approaches.

* Using local script references in a HTML page.
* Using CDN link for script reference.

### Using local script references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-base/dist/global/ej2-base.min.js`
>
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-charts/dist/global/ej2-charts.min.js`

The below located script file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script for a set of specific controls. This web tool is useful to combine the required control scripts in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy/paste the global scripts from the above installed location to `~/quickstart/resources/package` corresponding package location.

**Step 4:** Create a HTML page (index.html) in `~/quickstart/index.html` and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" 
        type="text/javascript"></script>
        <script src="resources/data/ej2-data.min.js" 
        type="text/javascript"></script>
        <script src="resources/svg-base/ej2-svg-base.min.js" 
        type="text/javascript"></script>
        
        <!-- Essential JS 2 charts's global script (Control Script) -->
        <script src="resources/charts/ej2-charts.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Now, add the `Charts` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Charts** control in the `~/quickstart/index.html` by using following code.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 sparkline's global script (Control Script) -->
        <script src="resources/charts/ej2-charts.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Add the HTML <sparkline> element  -->
        <sparkline id="element">Sparkline</sparkline>
        <script>
            // initialize sparkline control
            var sparkline = new ej.charts.Sparkline();
            // Render initialized sparkline.
            sparkline.appendTo('#element');
        </script>
    </body>
</html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Sparkline** control.

## Bind data source to sparkline

The `dataSource` property enables data binding for the sparkline. It accepts a collection of values as input, such as a list of objects.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs1" %}

## Change the type of sparkline

The sparkline type can be configured using the `type` property, which supports `Line`, `Column`, `WinLoss`, `Pie`, and `Area`. Here, the `area` type is applied.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs2" %}

## Enable tooltip for sparkline

The sparkline provides additional information through a tooltip that appears when the mouse pointer hovers over the chart. You can enable tooltip by setting the [`visible`] property to true in [`tooltipSettings`] and injecting `SparklineTooltip` module using the `Sparkline.Inject(SparklineTooltip )` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/sparkline-charts/getting-started-cs3" %}