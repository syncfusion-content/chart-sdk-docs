---
layout: post
title: Smith Chart Dimensions in Vue Smith Chart | Syncfusion
description: Learn here all about Smithchart dimensions in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smith Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Smith Chart Dimensions in Vue Smith Chart

You can render the Smithchart either corresponding to its container size or you can set the size of the  Smithchart as per your requirement. To render the Smithchart corresponding to its container size, you need to set the size for the Smithchart container. Else to set the size for the Smithchart as per your requirement, you can use the width and height properties in the Smithchart.

## Size for Container

You can render Smithchart to it's container size. To achieve this, you need to specify the width and height of the Smithchart's container via inline or CSS as demonstrated below.

```javascript
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/smithchart/getting-started-cs10" %}

## Size for Smith Chart

<!-- markdownlint-disable MD036 -->

You can also set size for Smithchart directly through [`width`] and [`height`] properties. Using this properties, you can directly mention the width and height of the Smithchart in pixels or you can set the width and height in percentage.

**In Pixel**

In Smithchart's width and height property, you can directly give values in pixels like below demonstration. This will render Smithchart in same size as you mentioned in you code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/smithchart/getting-started-cs11" %}

**In percentage**

You can also specify the width and height of the Smithchart in percentage. If you mention the width and height in percentage, then Smithchart will be render as per the percentage of it's container size. You can set the values in percentage like below demonstration.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/smithchart/getting-started-cs12" %}
