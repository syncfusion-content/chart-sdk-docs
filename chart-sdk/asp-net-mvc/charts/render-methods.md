---
layout: post
title: Render Methods in ASP.NET MVC Chart Component
description: Learn here all about Render Methods in Syncfusion ASP.NET MVC Chart component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Render Methods
publishingplatform: chart-sdk
documentation: ug
---

<!-- markdownlint-disable MD036 -->

# Rendering Types

Chart uses following two rendering methods.

* SVG
* Canvas

## SVG

SVG is used to render Chart by default for all browsers expect IE8 and old versions.

## Canvas

You can switch between SVG and Canvas rendering by using the `EnableCanvas` option. The canvas mode rendering is used in the following scenarios,

* Plotting large number of data points.
* Performing high frequency live updates.

**Limitations**

* Animation is not supported.