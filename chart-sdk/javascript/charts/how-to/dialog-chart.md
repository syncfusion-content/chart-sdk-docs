---
layout: post
title: How to show a Chart in a Dialog in JavaScript Charts | Syncfusion
description: Learn here all about Dialog chart in Syncfusion JavaScript Charts of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Chart
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
appliesto: UI Component Suite, Chart SDK
---

# How to show a Chart in a Dialog in JavaScript Charts

Use the Dialog `content` property to provide a container for the Chart, and call the Dialog `show()` method from a button handler. Create or refresh the Chart after the Dialog becomes visible so the Chart can measure its container correctly.

## Configure the Dialog

Initialize the Dialog with `visible: false` so it remains hidden until the user selects the open button. The sample uses the following properties:

- `header`: Sets the Dialog title.
- `content`: Supplies the Chart container markup.
- `target`: Constrains the Dialog to the specified page element.
- `showCloseIcon`: Displays the close button.
- `width` and `height`: Define the Dialog dimensions.
- `allowDragging`: Enables dragging.
- `isModal`: Determines whether interaction outside the Dialog is blocked.
- `visible`: Controls the initial visibility.

## Render the Chart after opening the Dialog

The Chart container must exist before the Chart is created. The Dialog `open` event creates the Chart the first time the Dialog opens and calls `refresh()` on later openings.

```javascript
open: function () {
    if (!dialogChart) {
        dialogChart = createDialogChart();
    } else {
        dialogChart.refresh();
    }
}
```

## Open the Dialog

Use an ES5-compatible button handler to call `dialog.show()`.

```javascript
document.getElementById('openDialog').onclick = function () {
    dialog.show();
};
```

## Complete example

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart-sdk/javascript/charts/dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/chart-sdk/javascript/charts/dialog-cs1" %}

## Life cycle and responsive behavior

- Create the Chart after the Dialog opens when the hidden container cannot provide reliable dimensions.
- Call `chart.refresh()` after reopening or resizing the Dialog.
- If the controls are removed dynamically, call `destroy()` on the Chart and Dialog instances before removing their host elements.
- Use `isModal: true` when users must complete or dismiss the Dialog before interacting with the page; use `false` for non-modal behavior.

## Troubleshooting

- If the Dialog does not open, verify that the trigger ID matches the JavaScript handler and that the Dialog instance was appended successfully.
- If the Chart is blank, verify that the `dialogChart` container exists before Chart creation and call `refresh()` after the Dialog opens.
- If the Chart dimensions are incorrect, use explicit Dialog dimensions and a responsive Chart width, then refresh after opening or resizing.
- If the Dialog appears outside the expected area, verify that the `target` element exists and has a positioned layout.

## See also

- [Chart dimensions](../chart-dimensions)
- [Responsive Chart](../responsive)
- [Chart Getting Started](../es5-getting-started)