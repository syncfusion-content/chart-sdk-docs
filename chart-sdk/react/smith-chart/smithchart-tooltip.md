---
layout: post
title: Tooltip in React Smith Chart | Syncfusion
description: Enable tooltips on the React Smith Chart by setting tooltip visible to true and injecting the TooltipRender module into services.
control: Smithchart tooltip
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Tooltip in React Smith Chart

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriestooltipmodel#visible) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#tooltip) object and by injecting the `TooltipRender` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/chart-sdk/react/smith-chart/code-path/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/react/smith-chart/getting-started-cs7" %}
