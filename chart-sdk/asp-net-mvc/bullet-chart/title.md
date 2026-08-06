---
layout: post
title: Title in ASP.NET MVC Bullet Chart Component
description: Learn here all about Title in Syncfusion ASP.NET MVC Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Title
publishingplatform: chart-sdk
documentation: ug
---


# Title and subtitle

## Title

The title of the Bullet Chart displays the information about the data plotted by specifying it in the [`Title`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Title) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/title/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Title.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/title/title.cs %}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Title](images/blazor-bullet-chart-with-title.png)

## Subtitle

To show additional information about the data plotted, the Bullet Chart can also be given a subtitle using the [`Subtitle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Subtitle) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/sub-title/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Sub-title.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/sub-title/sub-title.cs %}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Subtitle](images/blazor-bullet-chart-subtitle.png)

## Title and subTitle position

The title and the subtitle positions can be customized using the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) property. Possible positions are **Left**, **Right**, **Top**, and **Bottom**.

### Position as left

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Left**, you can display the title and subtitle at the left side of the Bullet Chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/left/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Left.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/left/left.cs %}
{% endhighlight %}
{% endtabs %}



### Position as right

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Right**, you can display the title and subtitle at the right side of the Bullet Chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/right/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Right.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/right/right.cs %}
{% endhighlight %}
{% endtabs %}



### Position as top

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Top**, you can display the title and subtitle at the top of the Bullet Chart. The default title and subtitle positions of the Bullet Chart is **Top**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/top/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Top.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/top/top.cs %}
{% endhighlight %}
{% endtabs %}



### Position as bottom

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Bottom**, you can display the title and subtitle at the bottom of the Bullet Chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/bottom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Bottom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/bottom/bottom.cs %}
{% endhighlight %}
{% endtabs %}



![Title and Subtitle Position in Bullet Chart](images/blazor-bullet-chart-title-positions.png)

## Title customization

The title color, opacity, font size, font family, font weight, and font style can be customized using the [`TitleStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitleStyle) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/title-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Title-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/title-custom/title-custom.cs %}
{% endhighlight %}
{% endtabs %}



## SubTitle customization

The sub-title color, opacity, font size, font family, font weight, and font style can be customized using the [`SubtitleStyle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_SubtitleStyle) property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/sub-title-custom/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Sub-title-custom.cs" %}
{% include code-snippet/chart-sdk/asp-net-mvc/bullet-chart/title/sub-title-custom/sub-title-custom.cs %}
{% endhighlight %}
{% endtabs %}



![Customizing Title and Subtitle in Bullet Chart](images/blazor-bullet-chart-title-customization.png)