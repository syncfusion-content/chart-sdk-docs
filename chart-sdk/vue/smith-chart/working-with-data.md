---
layout: post
title: Working with Data in Vue Smith Chart | Syncfusion
description: Learn here all about Working with data in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smith Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Working with Data in Vue Smith Chart

Smithchart can visualize the data bound from local data. The data you bind for the Smithchart, should be an array of object and that should contain the field resistance and rectangle. This should be bind to points or datasource in the Smithchart.

## Data Binding

You can bind simple JSON data to Smithchart using point property in series. JSON data should contain  [`resistance`] and [`reactance`] fields. This JSON data should be bind to points or datasource in the  Smithchart. You can any number of JSON for points or datasource as per your requirement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart-sdk/vue/smithchart/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/vue/smithchart/getting-started-cs29" %}