---
layout: post
title: Accessibility customization in Accumulation chart control | Syncfusion
description: Learn here all about Accessibility customization in Syncfusion JavaScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Accessibility customization 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Accessibility customization

The Syncfusion® JavaScript Accumulation Chart control is structured to visualize data in a graphical manner. It provides robust customization options for accessibility, allowing you to enhance the user experience for those with disabilities. The main attributes of the JavaScript Accumulation Chart control's accessibility customization are briefly explained in this section.

The accumulation chart control has a number of characteristics that enable accessibility features to be customized, including:

* [`accessibilityDescription`](../api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the accumulation chart, improving support for screen readers.
* [`accessibilityRole`](../api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the accumulation chart, helping screen readers to identify the element appropriately.
* [`focusable`](../api/accumulation-chart/accessibilityModel/#focusable) - Allows the accumulation chart to receive focus, making it accessible via keyboard navigation.
* [`focusBorderColor`](../api/accumulation-chart/#focusbordercolor) - Sets the color of the focus border, enhancing visibility when the accumulation chart is focused.
* [`focusBorderMargin`](../api/accumulation-chart/#focusbordermargin) - Defines the margin around the focus border.
* [`focusBorderWidth`](../api/accumulation-chart/#focusborderwidth) - Specifies the width of the focus border.
* [`tabIndex`](../api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order for the accumulation chart element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs477" %}
{% endif %}

## Series

The [`series`](../api/accumulation-chart/#series) supports the customization of accessibility for data points, allowing key characteristics to be adjusted for enhanced accessibility, such as:

* [`accessibilityDescription`](../api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the series root element, enhancing support for screen readers.
* [`accessibilityRole`](../api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the series, helping screen readers to identify the element appropriately.
* [`focusable`](../api/accumulation-chart/accessibilityModel/#focusable) - Allows the series to receive focus, making it accessible via keyboard navigation.
* [`tabIndex`](../api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order of the series element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs478" %}
{% endif %}

## Legend

The [`legendSettings`](../api/accumulation-chart/#legendsettings) provide information about the series shown in the accumulation chart. The following [`accessibility`](../api/accumulation-chart/legendSettingsModel/#accessibility) properties in [`legendSettings`](../api/accumulation-chart/#legendsettings) can be used to alter the accessibility of the accumulation chart's legend:

* [`accessibilityDescription`](../api/accumulation-chart/accessibilityModel/#accessibilitydescription) - Provides a text description for the legend root element, enhancing support for screen readers..
* [`accessibilityRole`](../api/accumulation-chart/accessibilityModel/#accessibilityrole) - Specifies the role of the legend items to screen readers, providing appropriate context.
* [`focusable`](../api/accumulation-chart/accessibilityModel/#focusable) - Specifies whether legend items are focusable via keyboard navigation.
* [`tabIndex`](../api/accumulation-chart/accessibilityModel/#tabindex) - Specifies the tab order of the legend element, enabling efficient keyboard navigation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/accumulation-chart/chart-types-cs479" %}
{% endif %}