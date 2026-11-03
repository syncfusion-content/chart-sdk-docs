---
layout: post
title: Internationalization in JavaScript Charts | Syncfusion
description: Learn here all about Internationalization in Syncfusion JavaScript Chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# Internationalization in JavaScript charts

Chart provides internationalization support for the following elements:

- Data label
- Axis label
- Tooltip

For more information about number and date formatting, see the [internationalization guide](https://ej2.syncfusion.com/javascript/documentation/common/internationalization).


## Globalization

Globalization lets a component work with different cultures and locales. In the Chart component, use `setCulture` and `setCurrencyCode` (with `loadCldr` for non-default cultures) to localize numbers, dates, and times. Combine with the axis `labelFormat` property to control the output format.

> This page covers number, date, time, and currency formatting. For translating UI strings (button captions, error messages), use the [`L10n`](https://ej2.syncfusion.com/javascript/documentation/api/base/l10n) class.

## Setting the culture

Before you can format values in a non-default culture, you must load the corresponding CLDR data and call `setCulture` and (for currency) `setCurrencyCode`. In an ES5 (script-tag) setup, load the required CLDR JSON files:

```javascript
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as germanData from '@syncfusion/ej2-cldr-data/main/de/all.json';
import * as numberingSystems from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(germanData, numberingSystems);
setCulture('de-DE');
setCurrencyCode('EUR');
```

## Numeric format

The example below globalize axis labels, data labels, and tooltip labels to the EUR currency format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/internationalization-cs1" %}

## Troubleshooting

- **The expected culture is not applied:** Confirm that the required CLDR data is loaded before calling `setCulture` and before creating the Chart.
- **The wrong currency symbol is displayed:** Call `setCurrencyCode` with the required ISO currency code and use the `c` currency format in the axis or data-label configuration.
- **Dates or numbers use the default US format:** Verify that `setCulture` is called before the Chart is initialized.
- **A culture-loading error occurs:** Confirm that the required `numbers`, `currencies`, `ca-Gregorian`, `timeZoneNames`, and `numberingSystems` data files are available and loaded correctly.

## See also

* [Axis label format](./axis-labels#label-format)
* [Tooltip](./tool-tip)
* [Data label](./data-labels)
* [Common internationalization guide](https://ej2.syncfusion.com/javascript/documentation/common/internationalization)
* [`L10n` class API](https://ej2.syncfusion.com/javascript/documentation/api/base/l10n)