---
layout: post
title: Show or hide series in Angular Chart component | Syncfusion
description: Learn how to dynamically show or hide chart series by handling legend click events in the Syncfusion Angular Chart component.
platform: chart-sdk
control: Series visible 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Show or hide series in Angular Chart component

By using the [`chartMouseClick`](https://ej2.syncfusion.com/angular/documentation/api/chart/#chartmouseclick) event, you can show or hide series based on a legend item click. In this event, you can get the legend target ID, which allows you to retrieve the current series index. Based on the index, you can set the value of the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/chart/series/#visible) property to `true` or `false`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs18/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs18/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/how-to-cs18" %}