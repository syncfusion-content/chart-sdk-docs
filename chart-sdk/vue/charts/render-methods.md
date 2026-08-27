---
layout: post
title: Rendering Methods in Vue Charts | Syncfusion
description: Learn how to use chart render methods in Syncfusion Vue Charts to customize rendering behavior, improve visuals, and control chart elements.
control: Render methods 
platform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---
<!-- markdownlint-disable MD036 -->

# Rendering Methods in Vue Charts

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

Note: Canvas rendering improves performance for very large datasets or high-frequency updates but may limit certain SVG-specific features.