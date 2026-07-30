---
layout: post
title: Custom path in JavaScript Maps component | Syncfusion
description: Learn here all about Custom path in Syncfusion JavaScript Maps component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Custom path 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Custom path in JavaScript Maps component

Maps component can be customized as the desired layout using the custom path map feature. Here, the Maps component has been showcased with normal geometry type shapes to represent the bus seat selection layout. Please refer to the following example to render the bus seat selection.

<!-- markdownlint-disable MD031 -->

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/maps/how-to/custom-path-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/maps/how-to/custom-path-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/maps/how-to/custom-path-cs1" %}

```
 <div class="col-lg-9 control-section">
      <div style="width:200px;margin:auto;padding-bottom:20px">
          <img src="src/app/images/bus-icon.png" style="width:25px;height:25px;float:left">
          <div style="padding-left:30px;font-size:20px;font-weight:400;">Bus seat selection</div>
      </div>
      <div style="border: 3px solid darkgray;width:200px;display:block;margin:auto;border-radius:5px">
          <img src="src/app/images/wheel.png" style="width:30px;height:30px;margin-left:18%;margin-top:10px">
          <div id="maps"></div>
      </div>
  </div>
```