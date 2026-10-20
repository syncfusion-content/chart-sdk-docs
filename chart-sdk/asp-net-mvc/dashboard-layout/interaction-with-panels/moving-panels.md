---
layout: post
title: Moving Panels in ASP.NET MVC Dashboard Layout control | Syncfusion
description: Learn here all about Moving Panels in Syncfusion ASP.NET MVC Dashboard Layout control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Moving Panels
publishingplatform: chart-sdk
documentation: ug
appliesto: UI Component Suite, Chart SDK
---


# Moving of panels programmatically

Other than drag and drop, it is possible to move the panels in Dashboard Layout programmatically. This can be achieved using `movePanel` method. The method is invoked as follows,

```js
movePanel(id, row, col)

```

Where,
* id - ID of the panel which needs to be moved.
* row - New row position for moving the panel.
* col - New column position for moving the panel.

Each time a panel's position is changed (Programmatically or through UI interaction), the Dashboard Layout's [`change`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2~Syncfusion.EJ2.Layouts.DashboardLayout~Change.html) event will be triggered.

The following sample demonstrates moving a panel programmatically to a new position in the Dashboard Layout's [created](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2~Syncfusion.EJ2.Layouts.DashboardLayout~Created.html) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/dashboard-layout/moving/razor %}
{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/dashboard-layout/moving/HomeController.cs %}
{% endhighlight %}
{% endtabs %}

![Moving of panels](./../images/moving.PNG)

N> You can refer to our [ASP.NET Core Dashboard Layout](https://www.syncfusion.com/aspnet-core-ui-controls/dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Dashboard Layout example](https://ej2.syncfusion.com/aspnetcore/DashboardLayout/DefaultFunctionalities#/material) to know how to present and manipulate data.