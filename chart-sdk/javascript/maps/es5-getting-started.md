---
layout: post
title: Es5 getting started with JavaScript Maps | Syncfusion
description:  Build your first JavaScript Maps (ES5) app from the CDN in a few minutes by loading the script, initializing the control, and rendering a sample map.
platform: chart-sdk
control: Es5 getting started 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Getting Started with Syncfusion® JavaScript (ES5) Maps Control

Build your first Syncfusion JavaScript (ES5) application with a simple Maps control in just a few minutes. This quickstart guides you through creating a minimal, runnable HTML page that loads the Syncfusion EJ2 (ES5) Maps from the CDN, initializes it with sample data, and renders an interactive map.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript controls with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/javascript/documentation/ai-coding-assistant/overview)

## Prerequisites

* [Visual Studio Code](https://code.visualstudio.com) (or any text editor)
* A web browser to view the result

## Quick Setup

### Step 1: Create Folder and HTML file

* Create a folder named `quickstart` in your desired directory
* Inside the `quickstart` folder, create a new file named `index.html`

### Step 2: Add Syncfusion<sup style="font-size:70%">&reg;</sup> CDN Resources

Include the following JavaScript links in the `<head>` section.

**Scripts (JavaScript):**
```
https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js
https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js
https://cdn.syncfusion.com/ej2/34.1.29/ej2-pdf-export/dist/global/ej2-pdf-export.min.js
https://cdn.syncfusion.com/ej2/34.1.29/ej2-svg-base/dist/global/ej2-svg-base.min.js
https://cdn.syncfusion.com/ej2/34.1.29/ej2-maps/dist/global/ej2-maps.min.js
```

### Step 3: Add Syncfusion<sup style="font-size:70%">&reg;</sup> Maps control to the application

Copy and paste the following complete code into your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Syncfusion Maps - Quick Start</title>
    
    <!-- Scripts -->
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-base/dist/global/ej2-base.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-data/dist/global/ej2-data.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-pdf-export/dist/global/ej2-pdf-export.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-svg-base/dist/global/ej2-svg-base.min.js"></script>
    <script src="https://cdn.syncfusion.com/ej2/34.1.29/ej2-maps/dist/global/ej2-maps.min.js"></script>
  </head>
  
  <body>
    <h1>Syncfusion Maps</h1>
    <div id="element" style="width: 100%; height: 400px;"></div>
    
    <script>
      var shapeData = { dataOptions: { type: 'GET', url: 'https://cdn.syncfusion.com/maps/map-data/world-map.json'} };
      
      // Create Maps
      var map = new ej.maps.Maps({
            layers: [
                {
                    shapeData: shapeData,
                }
            ]
        });
      
      // Render Map
      map.appendTo('#element');
    </script>
  </body>
</html>
```

### Step 4: Open in Browser

Open the `quickstart/index.html` file in your web browser. You should see the Syncfusion Maps control displaying the sample map data.

## Output

The following screenshot shows the output of the Syncfusion Maps quick start application:

![Syncfusion Maps Quick Start Output](../maps/images/MapProviders/maps.png)
