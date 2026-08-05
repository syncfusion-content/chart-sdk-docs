---
layout: post
title: Api accumulationAnnotationSettingsModel in JavaScript Accumulation chart control | Syncfusion
description: Learn here all about Api accumulationAnnotationSettingsModel in Syncfusion JavaScript Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Api accumulationAnnotationSettingsModel 
publishingplatform: chart-sdk
documentation: ug
domainurl: https://help.syncfusion.com/chart-sdk
---

# Api accumulationAnnotationSettingsModel in JavaScript Accumulation chart control

Interface for a class AccumulationAnnotationSettings

## Properties

### content `string`

Content of the annotation, which accepts the id of the custom element.

### coordinateUnits `string`

Specifies the coordinate units of the annotation. They are
* Pixel - Annotation renders based on x and y pixel value.
* Point - Annotation renders based on x and y axis value.

### description `string`

Information about annotation for assistive technology.

### horizontalAlignment `string`

Specifies the alignment of the annotation. They are
* Near - Align the annotation element as top side.
* Far - Align the annotation element as bottom side.
* Center - Align the annotation element as mid point.

### region `string`

Specifies the regions of the annotation. They are
* Chart - Annotation renders based on chart coordinates.
* Series - Annotation renders based on series coordinates.

### verticalAlignment `string`

Specifies the position of the annotation. They are
* Top - Align the annotation element as top side.
* Bottom - Align the annotation element as bottom side.
* Middle - Align the annotation element as mid point.

### x `string` &#124;  `Date` &#124;  `number`

if set coordinateUnit as `Pixel` X specifies the axis value else is specifies pixel or percentage of coordinate

### y `string` &#124;  `number`

if set coordinateUnit as `Pixel` Y specifies the axis value
else is specifies pixel or percentage of coordinate
