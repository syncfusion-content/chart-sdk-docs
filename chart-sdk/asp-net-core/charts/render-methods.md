---
layout: post
title: Render Methods in ASP.NET Core Charts | Syncfusion
description: Learn here all about Render Methods in Syncfusion ASP.NET Core Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Render Methods
documentation: ug
appliesto: UI Component Suite, Chart SDK
---

<!-- markdownlint-disable MD036 -->

# Render Methods in ASP.NET Core Charts

The chart uses the following two rendering methods:

* SVG
* Canvas

## SVG

SVG is used to render the chart by default for all browsers except IE8 and older versions.

## Canvas

You can switch between SVG and canvas rendering by setting the `enableCanvas` property. The canvas rendering mode is used in the following scenarios:

* Plotting large number of data points.
* Performing high frequency live updates.

**Limitations**

* Animation is not supported.

The canvas mode has limited accessibility support compared to the SVG mode. The available features and rendered output may differ slightly between the two rendering modes.