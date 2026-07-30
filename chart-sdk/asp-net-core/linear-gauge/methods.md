---
layout: post
title: Methods in ASP.NET Core Linear Gauge Component
description: Learn here all about Methods in Syncfusion ASP.NET Core Linear Gauge component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Methods
publishingplatform: chart-sdk
documentation: ug
---

# Methods in ASP.NET Core Linear Gauge

The following methods are available in the Linear Gauge component.

## setPointerValue

To change the pointer value dynamically, use the [`setPointerValue`](https://ej2.syncfusion.com/documentation/api/linear-gauge#setpointervalue) method in the Linear Gauge component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     axisIndex        |    Specifies the index of the axis in which the pointer value is to be updated.|
|     pointerIndex     |    Specifies the index of the pointer to be updated.           |
|     pointerValue     |    Specifies the value of the pointer to be updated.           |

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/methods/setPointerValue/tagHelper %}
{% endhighlight %}
{% endtabs %}



## setAnnotationValue

To change the annotation content dynamically, use the [`setAnnotationValue`](https://ej2.syncfusion.com/documentation/api/linear-gauge#setannotationvalue) method in the Linear Gauge component. The following are the arguments for this method.

|   Argument name      |   Description                            |
|----------------------| -----------------------------------------|
|     annotationIndex  |    Specifies the index number of the annotation to be updated. |
|     content          |    Specifies the text for the annotation to be updated.        |
|     axisValue        |    Specifies the value of the axis where the annotation is to be placed.|

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/methods/setAnnotationValue/tagHelper %}
{% endhighlight %}
{% endtabs %}



## refresh

The [`refresh`](https://ej2.syncfusion.com/documentation/api/linear-gauge#refresh) method can be used to change the state of the component and render it again.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/chart-sdk/asp-net-core/linear-gauge/methods/refresh/tagHelper %}
{% endhighlight %}
{% endtabs %}

