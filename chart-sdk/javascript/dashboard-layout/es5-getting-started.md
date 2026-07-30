---
layout: post
title: Es5 get started with JavaScript Dashboard layout | Syncfusion
description:  Checkout and learn about Es5 getting started with JavaScript Dashboard layout control of Syncfusion Essential JS 2 and more details.
platform: chart-sdk
control: Dashboard Layout 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Es5 getting started in JavaScript Dashboard layout control

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework that can be directly used in latest web browsers.

## Control initialization

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls can be initialized by using any of the following two ways:

  * Using local script and style references in an HTML page.
  * Using CDN link for script and style reference.

### Using local script and style references in an HTML page

**Step 1:** Create an app folder `myapp` for Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio<sup style="font-size:70%">&reg;</sup> JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\dist\global\{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\{PACKAGE_NAME}\styles\bootstrap5.3.css`

**Example:**

> Script: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-layouts\dist\global\ej2-layouts.min.js`
>
> Styles: `C:\Program Files (x86)\Syncfusion\Essential Studio\JavaScript - EJ2\32.1.19\Web (Essential JS 2)\JavaScript\ej2-layouts\styles\bootstrap5.3.css`

The below located script and style file contains all Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript (ES5) UI control resources in a single file.

> Scripts: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\dist\ej2.min.js`
>
> Styles: `**(installed location)**\Syncfusion\Essential Studio\JavaScript - EJ2\{RELEASE_VERSION}\Web (Essential JS 2)\JavaScript\ej2\bootstrap5.3.css`

**Step 3:** Create a folder `myapp/resources`, and copy and paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create an HTML page (index.html) in `myapp` location and add the Essential<sup style="font-size:70%">&reg;</sup> JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 bootstrap5.3 theme -->
            <link href="resources/bootstrap5.3.css" rel="stylesheet" type="text/css"/>
            <!-- Essential JS 2 Dashboard's global and dependent scripts -->
            <script src="resources/ej2-base.min.js" type="text/javascript"></script>
            <script src="resources/ej2-layouts.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, create a dashboard element to apply the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout** control in the `index.html` by using following code.

```html
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 bootstrap5.3 theme -->
        <link href="resources/bootstrap5.3.css" rel="stylesheet" type="text/css" />

        <!-- Essential JS 2 Dashboard's global and dependent scripts -->
        <script src="resources/ej2-base.min.js" type="text/javascript"></script>
        <script src="resources/ej2-layouts.min.js" type="text/javascript"></script>
    </head>

    <body>
        <div id="element">
            <!-- Add the HTML <div> element  -->
            <div style="margin: 50px;">
                <!--element which is going to render the Dashboard Layout-->
                <div id="dashboard_inline">
                    <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                        <div class="e-panel-container">
                            <div class="content">0</div>
                        </div>
                    </div>
                    <div id="two" class="e-panel" data-row="0" data-col="1" data-sizeX="3" data-sizeY="2">
                        <div class="e-panel-container">
                            <div class="content">1</div>
                        </div>
                    </div>
                    <div id="three" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                        <div class="e-panel-container">
                            <div class="content">2</div>
                        </div>
                    </div>
                    <div id="four" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="1">
                        <div class="e-panel-container">
                            <div class="content">3</div>
                        </div>
                    </div>
                    <div id="five" class="e-panel" data-row="2" data-col="0" data-sizeX="2" data-sizeY="1">
                        <div class="e-panel-container">
                            <div class="content">4</div>
                        </div>
                    </div>
                    <div id="six" class="e-panel" data-row="2" data-col="2" data-sizeX="1" data-sizeY="1">
                        <div class="e-panel-container">
                            <div class="content">5</div>
                        </div>
                    </div>
                    <div id="seven" class="e-panel" data-row="2" data-col="3" data-sizeX="1" data-sizeY="1">
                        <div class="e-panel-container">
                            <div class="content">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            //Initialize Dashboard Layout control
            var dashboard = new ej.layouts.DashboardLayout({
                cellSpacing: [10, 10],
                columns: 5
            });
            //Render initialized Dashboard Layout control
            dashboard.appendTo('#element');
        </script>
        <style>
            .content {
                vertical-align: middle;
                font-weight: 600;
                font-size: 20px;
                text-align: center;
                line-height: 60px;
            }

            #dashboard_inline .e-panel {
                transition: none !important;
            }
        </style>
    </body>
    </html>
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout** control.

### Using CDN link for script and style reference

The below example shows the rendering of Dashboard Layout control using CDN link for script and style reference

* Setting the [`panels`](../api/dashboard-layout#panels) property using HTML attribute
* Setting the [`panels`](../api/dashboard-layout#panels) property using script

#### Setting the [`panels`](../api/dashboard-layout#panels) property using HTML attributes

**Step 1:** Create an app folder `myapp` for the Essential<sup style="font-size:70%">&reg;</sup> JS 2 JavaScript controls.

**Step 2:** The Essential<sup style="font-size:70%">&reg;</sup> JS 2 control's global scripts and styles are already hosted in the following CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/bootstrap5.3.css`

**Example:**
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css`](https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css)

**Step 3:** Create an HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `dashboardlayout` element and initiate the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout** control in the index.html by using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in the web browser, it will render the **Essential<sup style="font-size:70%">&reg;</sup> JS 2 Dashboard Layout** control.

#### Setting the [`panels`](../api/dashboard-layout#panels) property using script

You can render the Dashboard Layout control by using the [`panels`](../api/dashboard-layout#panels) property through script. Add the HTML div element for Dashboard Layout into your `index.html` file.

`[src/index.html]`

```
<body>
    <div style="margin: 50px;">
        <!--element which is going to render the Dashboard Layout-->
        <div id="element">
        </div>
</body>

```

Now, render the panel property inside the `<script>` tag

```javascript

// initialize Dashboard Layout control
var dashboard  = new ej.layouts.DashboardLayout ({
    cellSpacing: [10, 10],
    columns: 5,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content:'<div class="content ">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content:'<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content:'<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">6</div>' }
    ]
});
// render initialized Dashboard Layout
dashboard.appendTo('#element');

```

The following example shows a basic Dashboard Layout by using the [`panels`](../api/dashboard-layout#panels) property.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/dashboard-layout/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/dashboard-layout/es5-getting-started-cs2" %}

> You can refer to our [JavaScript Dashboard Layout](https://www.syncfusion.com/javascript-ui-controls/js-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Dashboard Layout example](https://ej2.syncfusion.com/demos/#/bootstrap5.3/dashboard-layout/default.html) to knows how to present and manipulate data.
