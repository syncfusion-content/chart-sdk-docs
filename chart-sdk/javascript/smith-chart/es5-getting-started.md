---
layout: post
title: ES5 getting started with JavaScript Smith Chart | Syncfusion
description:  Check out and learn about ES5 getting started with JavaScript Smith Chart control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Smith Chart
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# ES5 getting started with JavaScript Smith Chart control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5-formatted pure JavaScript framework that runs directly in modern web browsers.

## Dependencies

Below is the list of minimum dependencies required to use the Smith Chart.

```
|-- @syncfusion/ej2-charts
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-pdf-export
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-file-utils
```

## Control initialization

The Syncfusion Essential<sup style="font-size:70%">&reg;</sup> JS 2 Smith Chart control can be initialized in either of the following ways:

* Using local script.
* Using CDN link for script.

### Using local script references in a HTML page

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** You can get the global scripts from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**

> Dependency script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{DEPENDENCY_PACKAGE_NAME}/dist/global/{DEPENDENCY_PACKAGE_NAME}.min.js`
>
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web (Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>

**Example:**

> Dependency script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-base/dist/global/ej2-base.min.js`
>
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/32.1.19/Web (Essential JS 2)/JavaScript/ej2-charts/dist/global/ej2-charts.min.js`
>

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`

The [`Custom Resource Generator (CRG)`](https://crg.syncfusion.com/) is an online web tool, which can be used to generate the custom script for a set of specific controls. This web tool is useful to combine the required control scripts in a single file.

**Step 3:** Create a folder `~/quickstart/resources` and copy the global scripts from the above installed location into `~/quickstart/resources/<package>` in the corresponding package locations (for example, `base`, `svg-base`, `charts`).

**Step 4:** Create an HTML page (index.html) in `~/quickstart/index.html` and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script references.

```html
<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <!-- Essential JS 2 smithchart's global script (Control Script) -->
        <script src="resources/charts/ej2-charts.min.js" type="text/javascript"></script>
    </head>
    <body>
    </body>
</html>
```

**Step 5:** Add a container `div` and initialize the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Smith Chart** control in `~/quickstart/index.html` using the following code.

```html
<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>

        <!-- Essential JS 2 Base's global script (Dependency Script) -->
        <script src="resources/base/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/svg-base/ej2-svg-base.min.js" type="text/javascript"></script>

        <!-- Essential JS 2 smithchart's global script (Control Script) -->
        <script src="resources/charts/ej2-charts.min.js" type="text/javascript"></script>
    </head>
    <body>
        <!--container which is going to render the Smith Chart-->
        <div id='container'></div>
        <script>
            // initialize smithchart control
            var smithchart = new ej.charts.Smithchart();
            // Render initialized smithchart.
            smithchart.appendTo('#container');
        </script>
    </body>
</html>
```

**Step 6:** Open `index.html` in a web browser to render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smithchart** control.

### Using CDN link for script reference

**Step 1:** Create an app folder `quickstart` for getting started.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 controls' global scripts are already hosted in the below CDN link formats.

**Syntax:**
> Dependency Script: `https://cdn.syncfusion.com/ej2/{DEPENDENCY_PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Control Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js`](https://cdn.syncfusion.com/ej2/ej2-charts/dist/global/ej2-charts.min.js)

**Step 3:** Create an HTML page (index.html) in `~/quickstart/index.html` location and add the CDN link references. Now, add the `Smithchart` element and initiate the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) Smithchart** control in the index.html by using following code.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs1" %}

**Step 4:** Open `index.html` in a web browser to render the **Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript Smithchart** control.

## Add series to Smithchart

The Smithchart has two ways to add series:

* dataSource — Bind a data object by specifying resistance and reactance values; the series renders from the provided dataSource.
* points — Provide a collection of resistance and reactance value points for the series.

The sample below demonstrates adding two series to the Smithchart in both ways.

* First series `Transmission1` shows dataSource bound series.
* Second series `Transmission2` shows points bound series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs2" %}

## Add title to Smith Chart

You can add a title using the [`title`](../api/smithchart/smithchartmodel#title) property to the Smith Chart to provide quick information to the user about the data plotted in the Smith Chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs3" %}

## Enable markers in the Smithchart

You can add and customize markers in the Smith Chart. This can be achieved by setting the [`visible`](../api/smithchart/seriesmarkermodel#visible) property to `true` in the [`marker`](../api/smithchart/smithchartseriesmodel#marker) object. The sample below enables markers for the first series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs4" %}

## Enable data labels for Smithchart markers

You can add data labels to improve the readability of the Smith Chart. This can be achieved by setting the [`visible`](../api/smithchart/seriesmarkerdatalabelmodel#visible) property to `true` in the [`dataLabel`](../api/smithchart/seriesmarkermodel#datalabel) object. The sample below enables data labels for the first series.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs5" %}

## Enable legend for Smithchart

You can use a legend for the Smith Chart by setting the [`visible`](../api/smithchart/smithchartlegendsettingsmodel#visible) property to `true` in the [`legendSettings`](../api/smithchart/smithchartmodel#legendsettings) object. The following example shows enabling the legend for the Smithchart. The series name can be customized using the series `name`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs6" %}

## Enable tooltip for smithchart series

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](../api/smithchart/seriestooltipmodel#visible) property as `true` in [`tooltip`](../api/smithchart/smithchartseries#tooltip) object.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/smith-chart/smithchart-axis-cs7" %}