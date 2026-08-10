---
layout: post
title: Title in ASP.NET Core Bullet Chart Component | Syncfusion
description: Learn here all about Title in Syncfusion ASP.NET Core Bullet Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Title
publishingplatform: chart-sdk
documentation: ug
---


# Title and subtitle in Bullet Chart Control

## Title

The title of the Bullet Chart displays the information about the data plotted by specifying it in the [`title`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Title) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class DefaultBulletData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Title](images/blazor-bullet-chart-with-title.png)

## Subtitle

To show additional information about the data plotted, the Bullet Chart can also be given a subtitle using the [`Subtitle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_Subtitle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/sub-title/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class SubTitleData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Bullet Chart with Subtitle](images/blazor-bullet-chart-subtitle.png)

## Title and subTitle position

The title and the subtitle positions can be customized using the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) property. Possible positions are **Left**, **Right**, **Top**, and **Bottom**.

### Position as left

By setting the `titlePosition` to **Left**, you can display the title and subtitle at the left side of the Bullet Chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/left/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class Position
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



### Position as right

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Right**, you can display the title and subtitle at the right side of the Bullet Chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/right/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class RightPositionData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



### Position as top

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Top**, you can display the title and subtitle at the top of the Bullet Chart. The default title and subtitle positions of the Bullet Chart is **Top**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/top/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class TopPositionData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



### Position as bottom

By setting the [`TitlePosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitlePosition) to **Bottom**, you can display the title and subtitle at the bottom of the Bullet Chart.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/bottom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class BottomPositionData
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Title and Subtitle Position in Bullet Chart](images/blazor-bullet-chart-title-positions.png)

## Title customization

The title color, opacity, font size, font family, font weight, and font style can be customized using the [`TitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_TitleStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/title-custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class Customization
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



## SubTitle customization

The sub-title color, opacity, font size, font family, font weight, and font style can be customized using the [`SubtitleStyle`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Charts.BulletChart.html#Syncfusion_EJ2_Charts_BulletChart_SubtitleStyle) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/bullet-chart/title/sub-title-custom/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CSHTML.cs" %}
...
public class Custom
{           
    public double value;
    public double target;
}
{% endhighlight %}
{% endtabs %}



![Customizing Title and Subtitle in Bullet Chart](images/blazor-bullet-chart-title-customization.png)