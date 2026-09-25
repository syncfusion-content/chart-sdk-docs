---
layout: post
title: Getting Started with Blazor Sunburst Chart in Server App | Syncfusion®
description: Learn how to get started with Syncfusion Blazor Sunburst Chart in a Blazor Server App. Explore setup, NuGet packages, registration, and first chart example.
platform: chart-sdk
control: Sunburst Chart
documentation: ug
keywords: Blazor Sunburst Chart, SfSunburstChart, hierarchical data, Sunburst Chart getting started, Blazor Server App
---

<!-- markdownlint-disable MD040 -->

# Getting Started with Blazor Sunburst Chart in Server App

This section briefly explains how to include the `Blazor Sunburst Chart` component in a Blazor Server App using [Visual Studio](https://visualstudio.microsoft.com/vs/), [Visual Studio Code](https://code.visualstudio.com/), and the [.NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/).

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

Install the [Syncfusion.Blazor.Charts](https://www.nuget.org/packages/Syncfusion.Blazor.Charts/) NuGet package. This package delivers every Syncfusion Blazor chart component, including the `Blazor Sunburst Chart`. All Syncfusion Blazor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). See the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for details.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to *Tools → NuGet Package Manager → Manage NuGet Packages for Solution*.
2. Search the required NuGet package (`Syncfusion.Blazor.Charts`) and install it.

Alternatively, you can install the same package using the Package Manager Console with the following command.

{% tabs %}
{% highlight razor tabtitle="Package Manager Console" %}

Install-Package Syncfusion.Blazor.Charts -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the terminal and run the following command.

{% tabs %}
{% highlight razor tabtitle="Terminal" %}

dotnet add package Syncfusion.Blazor.Charts -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent .NET CLI %}

Open the command prompt and run the following command.

{% tabs %}
{% highlight razor tabtitle="Command Prompt" %}

dotnet add package Syncfusion.Blazor.Charts -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

### Add import namespaces

After the package is installed, open the **~/Components/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.Charts` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.Charts

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

The script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the required [script references](https://blazor.syncfusion.com/documentation/common/adding-script-references) at the end of the `<body>` section in the **~/Components/App.razor** file to enable Sunburst Chart functionality.

{% tabs %}
{% highlight razor tabtitle="App.razor" %}

<script src="_content/Syncfusion.Blazor.Charts/scripts/sf-sunburst-chart.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

## Add Blazor Sunburst Chart component

Open a Razor file located in the **~/Components/Pages/*.razor** (for example, **Home.razor**) and add the `Blazor Sunburst Chart` component inside the razor file.

N> If the interactivity location is set to `Per page/component`, define a render mode at the top of the razor file. For example, use `@rendermode InteractiveServer`. If the Interactivity is set to `Global`, the render mode is automatically configured in the `App.razor` file by default.

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@rendermode InteractiveServer

<SfSunburstChart TItem="NodeDetails"
                 DataSource="@DataSource"
                 IdMemberPath="@nameof(NodeDetails.Id)"
                 ParentIdMemberPath="@nameof(NodeDetails.ParentId)"
                 ValueMemberPath="@nameof(NodeDetails.Value)"
                 LabelMemberPath="@nameof(NodeDetails.Name)"
                 Width="100%"
                 Height="450px">
</SfSunburstChart>

@code {
    public class NodeDetails
    {
        public string Id { get; set; } = string.Empty;
        public string? ParentId { get; set; }
        public string Name { get; set; } = string.Empty;
        public double Value { get; set; }
    }

    public List<NodeDetails> DataSource = new()
    {
        new NodeDetails { Id = "USA", ParentId = null, Name = "USA" },
        new NodeDetails { Id = "USA-Electronics", ParentId = "USA", Name = "Electronics", Value = 35 },
        new NodeDetails { Id = "India", ParentId = null, Name = "India" },
        new NodeDetails { Id = "India-Electronics", ParentId = "India", Name = "Electronics", Value = 30 },
        new NodeDetails { Id = "Germany", ParentId = null, Name = "Germany" },
        new NodeDetails { Id = "Germany-Electronics", ParentId = "Germany", Name = "Electronics", Value = 20 }
    };
}

{% endhighlight %}
{% endtabs %}

### Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The `Blazor Sunburst Chart` component will render in your default web browser.

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

![Blazor Sunburst Chart](images/getting-started/blazor-sunburst-chart.webp)

## Populate the Sunburst Chart with data

The `Blazor Sunburst Chart` renders hierarchical data as concentric rings. As shown in the previous example, the hierarchy is defined using a flat `IEnumerable<TItem>` collection, where each record's `ParentId` maps to another record's `Id`. Records whose `ParentId` is `null` form the top-level branches, and their descendants are rendered in the next outer ring.

Key mappings to configure:

* `DataSource` is the `IEnumerable<NodeDetails>` collection that supplies the nodes.
* `IdMemberPath` specifies the field that contains the unique identifier for each node (`NodeDetails.Id`). The default value is `string.Empty`. Every node must have a unique, non-null, and non-empty identifier. Missing or duplicate identifiers invalidate the hierarchy, and the chart does not generate identifiers automatically.
* `ParentIdMemberPath` specifies the field that contains the parent identifier for each node (`NodeDetails.ParentId`). The default value is `string.Empty`. A null, empty, or whitespace parent identifier creates a top-level node. Unresolved parent identifiers, self-references, and cyclic references invalidate the hierarchy.
* `LabelMemberPath` specifies the field that contains the display label for each node (`NodeDetails.Name`). The default value is `string.Empty`. A null, empty, or whitespace label uses the localized unknown text as the display label.
* `ValueMemberPath` specifies the numeric field that determines the segment sweep (`NodeDetails.Value`). The default value is `string.Empty`.

Leaf nodes contain the numeric `Value` that drives rendering. Ancestor nodes with a value less than or equal to `0` use the aggregated value of their descendants.

## See also

1. [Getting Started with Blazor Web Assembly App in Visual Studio or .NET CLI](https://blazor.syncfusion.com/documentation/getting-started/blazor-webassembly-app)
2. [Getting Started with Blazor Web App in Visual Studio or .NET CLI](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app)
