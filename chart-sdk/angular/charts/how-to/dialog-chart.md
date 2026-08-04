---
layout: post
title: Dialog chart in Angular Chart component | Syncfusion
description: Learn here all about Dialog chart in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Dialog chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Dialog chart in Angular Chart component

Using the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) property of the Dialog component, you can show the chart in a dialog pop-up.

To show the chart in the Dialog component, follow the given steps:

**Step 1**:

Initialize the Dialog and Button components, and then create a basic chart and set the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#visible) property of the Dialog to `false` when initialized.

By setting the chart inside the [`content`](https://ej2.syncfusion.com/angular/documentation/api/dialog/#content) template of the Dialog component, you can show the chart when clicking the Button component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart-sdk/angular/charts/how-to-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/chart-sdk/angular/charts/how-to-cs5" %}