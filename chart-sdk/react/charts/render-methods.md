---
layout: post
title: Render methods in React Charts | Syncfusion
description: Learn how to use the render and refresh methods on Syncfusion React Charts to re-render the chart manually after data or option changes.
control: Render methods 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Render methods in React Charts

Chart uses following two rendering methods.

* SVG
* Canvas

## SVG

SVG is used to render the Chart by default for all browsers except IE8 and older versions.

## Canvas

Switch between SVG and Canvas rendering by using the `enableCanvas` option. The canvas mode is useful in the following scenarios:

* Plotting large number of data points.
* Performing high frequency live updates.

**Limitations**

- Animation is not supported in canvas mode.
\
Note: Canvas rendering improves performance for very large datasets or high-frequency updates but may limit certain SVG-specific features.