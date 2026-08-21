---
layout: post
title: How to add a range to the Circular Gauge dynamically | Syncfusion
description: Learn how to add a range to the Circular Gauge dynamically on a button click by pushing new ranges to the axes collection.
platform: chart-sdk
control: Gauge range 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# How to add a range to the Circular Gauge dynamically

## Add a range to the circular gauge dynamically

You can add a range to the circular gauge dynamically by pushing the new ranges to the circular gauge axes in button click.

To add ranges dynamically to the circular gauge, follow the given steps:

**Step 1**:

Initialize the circular gauge with one range.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs1" %}

**Step 2**:

You can add ranges to the circular gauge dynamically using the button click event. In button click, add the new ranges to the circular gauge axes. To refresh the circular gauge, invoke the `refresh` method.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/circular-gauge/how-to-cs2" %}
