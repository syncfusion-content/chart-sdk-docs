---
layout: post
title: Title and subtitle in TypeScript Charts | Syncfusion
description: Learn here all about Title in Syncfusion TypeScript Charts control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Charts 
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Title and subtitle in TypeScript Charts component

Chart titles and subtitles provide context for the visualized data. The title identifies the main subject or metric, while the subtitle can provide supporting details such as a data source, time range, or explanatory note. Both elements can be customized to match the application design.

## Chart title

Set the [`title`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#title) property to display a Chart title. The title is displayed at the top of the Chart by default.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs15" %}

### Title position

Use [`titleStyle.position`](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings#position) to place the title at `Top`, `Bottom`, `Left`, or `Right`. The default value is `Top`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs21" %}

### Custom title position

Set `titleStyle.position` to `Custom`, and then use [`x`](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings#x) and [`y`](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings#y) to position the title using Chart coordinates.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs22" %}

### Title alignment

Use [`titleStyle.textAlignment`](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings#textalignment) to align the title using `Near`, `Center`, or `Far`. The default value is `Center`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/chart-appearance-cs23" %}

### Title overflow

Use [`titleStyle.textOverflow`](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings#textoverflow) to control how a long title is displayed.

- `None`: Displays the title without wrapping or trimming.
- `Wrap`: Wraps the title when it exceeds the available width. This is the default value.
- `Trim`: Trims the title when it exceeds the available width.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart-sdk/typescript/charts/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/typescript/charts/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/typescript/charts/getting-started-cs1" %}

## Chart subtitle

Set the [`subTitle`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#subtitle) property to display supporting text below the Chart title. Use [`subTitleStyle`](https://ej2.syncfusion.com/documentation/api/chart/chartmodel#subtitlestyle) to customize its position, alignment, overflow, font, opacity, and color.

```typescript
import { Chart, ColumnSeries } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries);

const chart: Chart = new Chart({
    title: 'Annual Revenue',
    subTitle: 'Source: Internal sales records, 2025',
    titleStyle: {
        textAlignment: 'Center'
    },
    subTitleStyle: {
        color: '#666666',
        size: '13px',
        fontFamily: 'Segoe UI',
        fontStyle: 'Italic',
        textAlignment: 'Center',
        textOverflow: 'Wrap'
    },
    primaryXAxis: {
        valueType: 'Category',
        title: 'Region'
    },
    primaryYAxis: {
        title: 'Revenue'
    },
    series: [{
        dataSource: [
            { x: 'North', y: 45 },
            { x: 'South', y: 38 },
            { x: 'East', y: 52 },
            { x: 'West', y: 41 }
        ],
        xName: 'x',
        yName: 'y',
        type: 'Column'
    }]
});

chart.appendTo('#element');
```

The subtitle uses the same position values, alignment values, overflow behavior, and custom coordinate options as the title through `subTitleStyle`.

## Troubleshooting

- If `x` and `y` do not affect the title or subtitle, set the corresponding `position` property to `Custom`.
- If a long title or subtitle does not wrap, set `textOverflow` to `Wrap` and ensure the Chart has a constrained width.
- If the subtitle is not displayed, verify that `subTitle` contains a non-empty string.
- If title text is clipped, use `Wrap`, reduce the font size, or increase the Chart width.

## See also

- [TitleStyleSettings API](https://ej2.syncfusion.com/documentation/api/chart/titlestylesettings)
- [Appearance](./appearance)
- [Chart dimensions](./chart-dimensions)
- [Accessibility](./accessibility)