---
layout: post
title: Getting Started with Blazor 3D Circular Chart in Server App | Syncfusion®
description: Learn how to get started with Syncfusion Blazor 3D Circular Chart in a Blazor Server App. Explore setup, NuGet packages, registration, and first chart example.
platform: chart-sdk
control: 3D Circular Chart
documentation: ug
keywords: Blazor 3D Circular Chart, SfCircularChart3D, 3D Pie Chart, 3D Doughnut Chart, 3D Circular Chart getting started, Blazor Server App
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD040 -->

# Getting Started with Blazor 3D Circular Chart in Server App

This section briefly explains how to include the `Blazor 3D Circular Chart` component in a Blazor Server App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/), and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

> **Ready to streamline your Blazor development?** <br/>Discover the full potential of Blazor components with AI Coding Assistants. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Code Studio and more. [Explore AI Coding Assistants](https://blazor.syncfusion.com/documentation/ai-coding-assistant/overview)

## Create a new Blazor Server App

{% tabcontents %}

{% tabcontent Visual Studio %}

Create a **Blazor Server App** by using the **Blazor Web App** template in Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-integration/template-studio).

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command to create a new Blazor Server App.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet new blazor -o BlazorApp --interactivity Server
cd BlazorApp

{% endhighlight %}
{% endtabs %}

Alternatively, create a **Blazor Server App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vsc) or the [Syncfusion® Blazor Extension](https://blazor.syncfusion.com/documentation/visual-studio-code-integration/create-project), or the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.

{% endtabcontent %}

{% tabcontent .NET CLI %}

Run the following command to create a new Blazor Server App.

{% tabs %}
{% highlight razor tabtitle="Command Prompt" %}

dotnet new blazor -o BlazorApp --interactivity Server
cd BlazorApp

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

N> Configure the appropriate [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-10.0&pivots=vs) while creating a Blazor Server App. For detailed information, refer to the [interactive render mode documentation](https://blazor.syncfusion.com/documentation/common/interactive-render-mode).

### Install the required Blazor package

Install the [Syncfusion.Blazor.Chart3D](https://www.nuget.org/packages/Syncfusion.Blazor.Chart3D/) NuGet package. This package delivers every Syncfusion Blazor 3D chart component, including the `Blazor 3D Circular Chart`. All Syncfusion Blazor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet package (`Syncfusion.Blazor.Chart3D`) and install it.

Alternatively, you can install the same package using the Package Manager Console with the following command.

{% tabs %}
{% highlight razor tabtitle="Package Manager Console" %}

Install-Package Syncfusion.Blazor.Chart3D -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet add package Syncfusion.Blazor.Chart3D -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent .NET CLI %}

Open the command prompt and run the following command.

{% tabs %}
{% highlight razor tabtitle="Command Prompt" %}

dotnet add package Syncfusion.Blazor.Chart3D -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

### Add import namespaces

After the package is installed, open the **~/Components/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Chart3D` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Chart3D

{% endhighlight %}
{% endtabs %}

### Register the Blazor service

Open the **Program.cs** file in Blazor Server App and register the Blazor service. Add `using Syncfusion.Blazor;` at the top of the file.

{% tabs %}
{% highlight C# tabtitle="Program.cs" %}

builder.Services.AddSyncfusionBlazor();

{% endhighlight %}
{% endtabs %}

## Add script resources

The script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the required [script references](https://blazor.syncfusion.com/documentation/common/adding-script-references) at the end of the `<body>` section in the **~/Components/App.razor** file to enable 3D Circular Chart functionality.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<script src="_content/Syncfusion.Blazor.Chart3D/scripts/sf-circular-chart-3d.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

## Add Blazor 3D Circular Chart component

Open a Razor file located in the **~/Components/Pages/*.razor** (for example, **Home.razor**) and add the `Blazor 3D Circular Chart` component inside the razor file.

N> If the interactivity location is set to `Per page/component`, define a render mode at the top of the razor file. For example, use `@rendermode InteractiveServer`. If the Interactivity is set to `Global`, the render mode is automatically configured in the `App.razor` file by default.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@rendermode InteractiveServer
@using Syncfusion.Blazor.Chart3D

<SfCircularChart3D Title="Browser Market Shares in November 2023" Tilt="-45">
    <CircularChart3DSeriesCollection>
        <CircularChart3DSeries DataSource="@BrowserShareData" XName="X" YName="Y">
            <CircularChart3DDataLabelSettings Visible="true" Name="X" Position="CircularChart3DLabelPosition.Outside">
                <CircularChart3DDataLabelFont FontWeight="600" />
                <CircularChart3DConnector Length="40px" />
            </CircularChart3DDataLabelSettings>
        </CircularChart3DSeries>
    </CircularChart3DSeriesCollection>
    <CircularChart3DLegendSettings Visible="true" Position="LegendPosition.Right" />
</SfCircularChart3D>

@code {
    public class BrowserData
    {
        public string X { get; set; } = string.Empty;
        public double Y { get; set; }
    }

    private List<BrowserData> BrowserShareData = new List<BrowserData>
    {
        new BrowserData { X = "Chrome", Y = 62.92 },
        new BrowserData { X = "Internet Explorer", Y = 6.12 },
        new BrowserData { X = "Opera", Y = 3.15 },
        new BrowserData { X = "Edge", Y = 5.5 },
        new BrowserData { X = "Safari", Y = 19.97 },
        new BrowserData { X = "Others", Y = 2.34 }
    };
}

{% endhighlight %}
{% endtabs %}

### Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The `Blazor 3D Circular Chart` component will render in your default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent .NET CLI %}

Open the command prompt and run the following command.

{% tabs %}
{% highlight razor tabtitle="Command Prompt" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Populate the 3D Circular Chart with data

The `Blazor 3D Circular Chart` (`SfCircularChart3D`) visualizes categorical data distributions as 3D pie or doughnut slices with true perspective depth, horizontal tilt, and axial rotation. Slices are rendered as three-dimensional polygon meshes sorted dynamically using Binary Space Partitioning (BSP) trees for artifact-free depth sorting.

Key mappings to configure:

* `DataSource` is the `IEnumerable<TItem>` collection that supplies data to the chart or series (`BrowserShareData`).
* `XName` specifies the property name from the data source that supplies category names (`BrowserData.X`). These category names populate legend labels, data label text, and tooltip headers.
* `YName` specifies the numerical property name from the data source (`BrowserData.Y`). It determines the proportional angular sweep of each 3D slice relative to the sum of all valid points.
* `CircularChart3DDataLabelSettings` configures data labels on slices. Setting `Visible="true"` displays category names or percentages, while `Position` specifies label placement such as `CircularChart3DLabelPosition.Outside` or `CircularChart3DLabelPosition.Inside`. The `CircularChart3DConnector` defines connecting leader lines between outside labels and 3D slices.
* `CircularChart3DLegendSettings` configures the legend display. Setting `Visible="true"` enables the legend, with `Position` determining placement (`Right`, `Left`, `Top`, `Bottom`, or `Auto`).
* `Tilt` specifies the horizontal inclination angle in degrees (ranging between `-90` and `90`) to view the 3D circular chart from different perspectives.

## See also

1. [Getting Started with Blazor Web Assembly App in Visual Studio or .NET CLI](https://blazor.syncfusion.com/documentation/getting-started/blazor-webassembly-app)
2. [Getting Started with Blazor Web App in Visual Studio or .NET CLI](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app)
