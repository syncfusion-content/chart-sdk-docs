---
layout: post
title: EJ1 Api Migration in ASP.NET Core Sparkline Charts | Syncfusion
description: Learn here all about Ej1 Api Migration in Syncfusion ASP.NET Core Sparkline Charts component of Syncfusion Essential JS 2 and more.
platform: chart-sdk
control: Ej1 Api Migration
publishingplatform: chart-sdk
documentation: ug
---


# EJ1 API Migration in ASP.NET Core Sparkline Charts

This article describes the API migration process of Accordion component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Sparkline Charts Types

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Type| **Property:** *type*<br/><br/> `<ej-spark-line id="Sparkline Charts" type="@SparklineType.Line"></ej-spark-line>`| **Property:** *type*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" type="@SparklineType.Line"></ejs-Sparkline Charts>` |

## Databinding

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Datasource| **Property:** *dataSource*<br/><br/> `<ej-spark-line id="Sparkline Charts" datasource="data"></ej-spark-line>` |**Property:** *dataSource*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" dataSource="data"></ejs-Sparkline Charts>`|
|Binding X values with datasource| **Property:** *xName*<br/><br/> `<ej-spark-line id="Sparkline Charts" xName="xValue"></ej-spark-line>` |**Property:** *xName*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" xName="xValue"></ejs-Sparkline Charts>`|
|Binding Y values with datasource| **Property:** *yName*<br/><br/> `<ej-spark-line id="Sparkline Charts" yName="yValue"></ej-spark-line>` |**Property:** *yName*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" yName="yValue"></ejs-Sparkline Charts>`|

## Markers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable markers| **Property:** *markerSettings.visible*<br/><br/> `<ej-spark-line id="Sparkline Charts">            <e-marker-settings visible="true"></e-marker-settings></ej-spark-line>`| **Property:** *markerSettings.visible*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings visible="all"></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`<br/><br/>`var all = new string[] {"All"}`|
|Color| **Property:** *markerSettings.fill*<br/><br/> `<ej-spark-line id="Sparkline Charts">            <e-marker-settings fill="green"></e-marker-settings></ej-spark-line>` |**Property:** *markerSettings.fill*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings fill="green"></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`|
|Size| **Property:** *markerSettings.width*<br/><br/> `<ej-spark-line id="Sparkline Charts">            <e-marker-settings width="10"></e-marker-settings></ej-spark-line>`  |**Property:** *markerSettings.size*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings size=5></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`|
|Opacity| **Property:** *markerSettings.opacity*<br/><br/> `<ej-spark-line id="Sparkline Charts">            <e-marker-settings opacity=0.5></e-marker-settings></ej-spark-line>` |**Property:** *markerSettings.opacity*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings opacity=0.5></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`|
|Border color| **Property:** *markerSettings.border.color*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-marker-settings><e-border color="green"></e-border></e-marker-settings></ej-spark-line>`| **Property:** *markerSettings.border.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings border="border"></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`<br/><br/>`var border = new {color="red"}`|
|Border width| **Property:** *markerSettings.border.width*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-marker-settings><e-border width="2"></e-border></e-marker-settings></ej-spark-line>` |**Property:** *markerSettings.border.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">            <e-Sparkline Charts-markersettings border="border"></e-Sparkline Charts-markersettings></ejs-Sparkline Charts>`<br/><br/>`var border = new {width=2}`|
|Border opacity| **Property:** *markerSettings.border.opacity*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-marker-settings><e-border opacity=0.7></e-border></e-marker-settings></ej-spark-line>` |Not applicable|

## Data labels

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable data labels| Not applicable |**Property:** *dataLabelSettings.visible*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings visible="all"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var all = new string[] {"All"}`|
|Color| Not applicable |**Property:** *dataLabelSettings.fill*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings fill="red"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`|
|Opacity| Not applicable |**Property:** *dataLabelSettings.opacity*<br/><br/>`<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings opacity=0.5></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>` |
|Border color| Not applicable |**Property:** *dataLabelSettings.border.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings border="border"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var border = new {color="red"}`|
|Border width| Not applicable |**Property:** *dataLabelSettings.border.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings border="border"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var border = new {width=2}`|
|Format| Not applicable |**Property:** *dataLabelSettings.format*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings format="${xval}: ${yval}"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`|
|Horizontal Offset| Not applicable |**Property:** *dataLabelSettings.offset.x*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings offset="offset"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var offset = new {x=100}`|
|Vertical Offset| Not applicable |**Property:** *dataLabelSettings.offset.y*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings offset="offset"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var offset = new {y=100}`|
|Font color| Not applicable |**Property:** *dataLabelSettings.textStyle.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {color="green"}`|
|Font family| Not applicable |**Property:** *dataLabelSettings.textStyle.fontFamily*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {fontFamily="Arial"}`|
|Font style| Not applicable |**Property:** *dataLabelSettings.textStyle.fontStyle*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {fontStyle="normal"}`|
|Font weight| Not applicable |**Property:** *dataLabelSettings.textStyle.fontWeight*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {fontWeight="bold"}`|
|Font opacity| Not applicable |**Property:** *dataLabelSettings.textStyle.opacity*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {opacity=0.5}`|
|Font size| Not applicable |**Property:** *dataLabelSettings.textStyle.fontSize*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-datalabelsettings textStyle="textStyle"></e-Sparkline Charts-datalabelsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new {fontSize="12px"}`|

## Range band

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Color| **Property:** *rangeBandSettings.color*<br/><br/>`<ej-spark-line id="Sparkline Charts">          <e-range-band-settings color="red"></e-range-band-settings></ej-spark-line>` |**Property:** *rangeBandSettings.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">        <e-Sparkline Charts-rangebandsettings><e-Sparkline Charts-rangebandsetting color="red" ></e-Sparkline Charts-rangebandsetting></e-Sparkline Charts-rangebandsettings></ejs-Sparkline Charts>`|
|Opacity| **Property:** *rangeBandSettings.opacity*<br/><br/> `<ej-spark-line id="Sparkline Charts">            <e-range-band-settings opacity="0.5"></e-range-band-settings></ej-spark-line>` |**Property:** *rangeBandSettings.opacity*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">        <e-Sparkline Charts-rangebandsettings><e-Sparkline Charts-rangebandsetting opacity="0.5"></e-Sparkline Charts-rangebandsetting></e-Sparkline Charts-rangebandsettings></ejs-Sparkline Charts>`|
|Start range| **Property:** *rangeBandSettings.startRange*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-range-band-settings start-range="5"></e-range-band-settings></ej-spark-line>` |**Property:** *rangeBandSettings.startRange*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">        <e-Sparkline Charts-rangebandsettings><e-Sparkline Charts-rangebandsetting startRange="5"></e-Sparkline Charts-rangebandsetting></e-Sparkline Charts-rangebandsettings></ejs-Sparkline Charts>`|
|End range| **Property:** *rangeBandSettings.endRange*<br/><br/> `<ej-spark-line id="Sparkline Charts">    <e-range-band-settings end-range="10"></e-range-band-settings></ej-spark-line>` |**Property:** *rangeBandSettings.endRange*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts">        <e-Sparkline Charts-rangebandsettings><e-Sparkline Charts-rangebandsetting endRange="10"></e-Sparkline Charts-rangebandsetting></e-Sparkline Charts-rangebandsettings></ejs-Sparkline Charts>`|

## Special points customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|High point color| **Property:** *highPointColor*<br/><br/> `<ej-spark-line id="Sparkline Charts" high-point-color="green"></ej-spark-line>` |**Property:** *highPointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" highPointColor="red"></ejs-Sparkline Charts>`|
|Low point color| **Property:** *lowPointColor*<br/><br/> `<ej-spark-line id="Sparkline Charts" low-point-color="green"></ej-spark-line>` |**Property:** *lowPointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" lowPointColor="red"></ejs-Sparkline Charts>`|
|Negative point color| **Property:** *negativePointColor*<br/><br/> `<ej-spark-line id="Sparkline Charts" negative-point-color="green"></ej-spark-line>` |**Property:** *negativePointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" negativePointColor="red"></ejs-Sparkline Charts>`|
|Start point color| **Property:** *startPointColor*<br/><br/> `<ej-spark-line id="Sparkline Charts" start-point-color="green"></ej-spark-line>` |**Property:** *startPointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" startPointColor="red"></ejs-Sparkline Charts>`|
|End point color| **Property:** *endPointColor*<br/><br/> `<ej-spark-line id="Sparkline Charts" end-point-color="green"></ej-spark-line>` |**Property:** *endPointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" endPointColor="red"></ejs-Sparkline Charts>`|
|Tie point color| **Property:** *tiePointColor*<br/><br/>Not Applicable |**Property:** *tiePointColor*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" tiePointColor="red"></ejs-Sparkline Charts>`|

## Axis customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show axis line| **Property:** *axisSettings.visible*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-axis-line-settings visible="true"></e-axis-line-settings></ej-spark-line>` |**Property:** *axisSettings.lineSettings.visible*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { Visible= true}`|
|Line color| **Property:** *axisSettings.color*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-axis-line-settings color="green"></e-axis-line-settings></ej-spark-line>` |**Property:** *axisSettings.lineSettings.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { Color= "red"}`|
|Line width| **Property:** *axisSettings.width*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-axis-line-settings width="3"></e-axis-line-settings></ej-spark-line>` |**Property:** *axisSettings.lineSettings.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { Width= 2}`|
|Dash array| **Property:** *axisSettings.dashArray*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-axis-line-settings dash-array="5,3"></e-axis-line-settings></ej-spark-line>` |**Property:** *axisSettings.lineSettings.dashArray*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { DashArray= "5,3"}`|
|X axis minimum value| Not applicable |**Property:** *axisSettings.minX*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { MinX= 0}`|
|X axis maximum value| Not applicable |**Property:** *axisSettings.maxX*<br/><br/>`<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { MaxY= 100}`|
|Y axis minimum value| Not applicable |**Property:** *axisSettings.minY*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { MinY= 0}`|
|Y axis maximum value| Not applicable |**Property:** *axisSettings.maxY*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { MaxY= 10}`|
|Horizontal axis line position| Not applicable |**Property:** *axisSettings.value*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" ><e-Sparkline Charts-axissettings lineSettings="lineSettings"></e-Sparkline Charts-axissettings></ejs-Sparkline Charts>`<br/><br/>`var lineSettings = new SparklineLineSettings { Value= 10}`|

## Appearance customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Background color| **Property:** *background*<br/><br/> `<ej-spark-line id="Sparkline Charts" background="grey"></ej-spark-line>` |**Property:** *containerArea.background*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-containerarea background="red"></e-Sparkline Charts-containerarea></ejs-Sparkline Charts>`|
|Border color | Not applicable |**Property:** *containerArea.border.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-containerarea border="border"></e-Sparkline Charts-containerarea></ejs-Sparkline Charts>`<br/><br/>`var border = new {color="green"}`|
|Border width | Not applicable |**Property:** *containerArea.border.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-containerarea border="border"></e-Sparkline Charts-containerarea></ejs-Sparkline Charts>`<br/><br/>`var border = new {color="green"}`|
|Series color| **Property:** *fill*<br/><br/> `<ej-spark-line id="Sparkline Charts" fill="grey"></ej-spark-line>` |**Property:** *fill*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" fill="lime"></ejs-Sparkline Charts>`|
|Series opacity| **Property:** *opacity*<br/><br/> `<ej-spark-line id="Sparkline Charts" opacity=0.5></ej-spark-line>` |**Property:** *opacity*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" opacity=0.5></ejs-Sparkline Charts>`|
|Line series width| **Property:** *width*<br/><br/> `<ej-spark-line id="Sparkline Charts" width=3></ej-spark-line>` |**Property:** *lineWidth*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" lineWidth=4></ejs-Sparkline Charts>`|
|Series border color| **Property:** *border.color*<br/><br/> `<ej-spark-line id="Sparkline Charts" ><e-border color="red"></e-border></ej-spark-line>` |**Property:** *border.color*<br/><br/>`<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-border color="green" ></e-Sparkline Charts-border></ejs-Sparkline Charts>`|
|Series border width| **Property:** *border.width*<br/><br/> `<ej-spark-line id="Sparkline Charts" ><e-border width="1"></e-border></ej-spark-line>` |**Property:** *border.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-border width=10></e-Sparkline Charts-border></ejs-Sparkline Charts>`|
|Series palette| **Property:** *palette*<br/><br/> `<ej-spark-line id="Sparkline Charts" palette="palettes"></ej-spark-line>`<br/><br/>`var palettes = new string[] { "red", "green", "orange", "blue" };` |**Property:** *palette*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" palette="palettes"></ejs-Sparkline Charts>`<br/><br/>`var palettes = new string[] { "red", "green", "orange", "blue" };`|
|Theme| **Property:** *theme*<br/><br/> `<ej-spark-line id="Sparkline Charts" theme="flatdark"></ej-spark-line>` |**Property:** *theme*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" theme="Material"></ejs-Sparkline Charts>`|
|Width| **Property:** *size.width*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-size width="300px"></e-size></ej-spark-line>` |**Property:** *width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" width="400px"></ejs-Sparkline Charts>`|
|Height| **Property:** *size.height*<br/><br/> `<ej-spark-line id="Sparkline Charts" ><e-size color="red" height="300px"></e-size></ej-spark-line>` |**Property:** *height*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" height="200px"></ejs-Sparkline Charts>`|

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show tooltip| **Property:** *tooltip.visible*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip visible="true"></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.visible*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings visible="true"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|
|Background| **Property:** *tooltip.fill*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip fill="white"></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.fill*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings fill="white"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|
|Format| Not applicable |**Property:** *tooltipSettings.format*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings format="${xval}: ${yval}"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|
|Template| **Property:** *tooltip.template*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip template="tooltip"></e-tool-tip></e-size></ej-spark-line>`<br/><br/>`<div id="tooltip">`</br>&nbsp;        `<div>#point.x#</div>`</br>&nbsp;&nbsp;`<div>#point.y#</div>`</br>`</div>`|**Property:** *tooltipSettings.template*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings template="tooltip"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`<div id="tooltip">${x} : ${y}<div>`|
|Font color| **Property:** *tooltip.font.color*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font color="green"></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { color="gray"};`|
|Font opacity| **Property:** *tooltip.font.opacity*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font opacity=0.7></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.opacity*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { opacity=0.5};`|
|Font size| **Property:** *tooltip.font.size*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font size="14px"></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.size*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { size="14px"};`|
|Font family| **Property:** *tooltip.font.fontFamily*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font font-family="Arial"></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.fontFamily*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { fontFamily="Arial"};`|
|Font style| **Property:** *tooltip.font.fontStyle*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font font-style="normal"></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.fontStyle*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { fontStyle="normal"};`|
|Font weight| **Property:** *tooltip.font.fontWeight*<br/><br/> `<ej-spark-line id="Sparkline Charts"><e-tool-tip><e-font font-weight="bold"></e-font></e-tool-tip></e-size></ej-spark-line>` |**Property:** *tooltipSettings.textStyle.fontWeight*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings textstyle="textStyle"></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`<br/><br/>`var textStyle = new { fontWeight="bold"};`|
|Enable track line| Not applicable |**Property:** *tooltipSettings.trackLineSettings.visible*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings><e-sparklinetooltipsettings-tracklinesettings visible="true"></e-sparklinetooltipsettings-tracklinesettings></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|
|Track line color| Not applicable |**Property:** *tooltipSettings.trackLineSettings.color*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings><e-sparklinetooltipsettings-tracklinesettings color="red"></e-sparklinetooltipsettings-tracklinesettings></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|
|Track line width| Not applicable |**Property:** *tooltipSettings.trackLineSettings.width*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts"><e-Sparkline Charts-tooltipsettings><e-sparklinetooltipsettings-tracklinesettings width=5></e-sparklinetooltipsettings-tracklinesettings></e-Sparkline Charts-tooltipsettings></ejs-Sparkline Charts>`|

## Rendering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable canvas rendering| **Property:** *enableCanvasRendering*<br/><br/> `<ej-spark-line id="Sparkline Charts" enable-canvas-rendering="true"></ej-spark-line>` | Not applicable |

## Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Localization| **Property:** *locale*<br/><br/> `<ej-spark-line id="Sparkline Charts" locale="en-US"></ej-spark-line>` | **Property:** *type*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" locale="en-US"></ejs-Sparkline Charts>` |

## Methods

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Dynamically updating Sparkline Charts| **Method:** *redraw*<br/><br/> `var Sparkline Charts = $("#container").ejSparkline("instance");`</br>`Sparkline Charts.redraw();` | **Method:** *refresh*<br/><br/> `var Sparkline Charts = document.getElementById("container").ej2_instances[0];`</br>`Sparkline Charts.refresh();` |

## Events

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Load| **Event:** *load*<br/><br/> `<ej-spark-line id="Sparkline Charts" load="load">       </ej-spark-line>`<br/><br/>`function load(args) { }` | **Event:** *load*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" load="load"></ejs-Sparkline Charts>`<br/><br/>`function load(args) { }` |
|Load completed| **Event:** *loaded*<br/><br/> `<ej-spark-line id="Sparkline Charts" loaded="loaded">       </ej-spark-line>`<br/><br/>`function loaded(args) { }` | **Event:** *loaded*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" loaded="loaded"></ejs-Sparkline Charts>`<br/><br/>`function loaded(args) { }` |
|Initialize tooltip| **Event:** *tooltipInitialize*<br/><br/> `<ej-spark-line id="Sparkline Charts" tooltip-initialize="tooltipInitialize"></ej-spark-line>`<br/><br/>`function tooltipInitialize(args) { }` | **Event:** *tooltipInitialize*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" tooltipInitialize="tooltipInitialize"></ejs-Sparkline Charts>`<br/><br/>`function tooltipInitialize(args) { }` |
|Series rendering| **Event:** *seriesRendering*<br/><br/> `<ej-spark-line id="Sparkline Charts" series-rendering="seriesRendering"></ej-spark-line>`<br/><br/>`function seriesRendering(args) { }` | **Event:** *seriesRendering*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" seriesRendering="seriesRendering"></ejs-Sparkline Charts>`<br/><br/>`function seriesRendering(args) { }` |
|Region mouse move| **Event:** *pointRegionMouseMove*<br/><br/> `<ej-spark-line id="Sparkline Charts" point-region-mouse-move="pointRegionMove"></ej-spark-line>`<br/><br/>`function pointRegionMove(args) { }` | **Event:** *pointRegionMouseMove*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" pointRegionMouseMove="pointRegionMouseMove"></ejs-Sparkline Charts>`<br/><br/>`function pointRegionMouseMove(args) { }` |
|Region click| **Event:** *pointRegionMouseClick*<br/><br/> `<ej-spark-line id="Sparkline Charts" point-region-mouse-click="pointRegionClick"></ej-spark-line>`<br/><br/>`function pointRegionClick(args) { }` | **Event:** *pointRegionMouseClick*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" pointRegionMouseClick="pointRegionMouseClick"></ejs-Sparkline Charts>`<br/><br/>`function pointRegionMouseClick(args) { }` |
|Mouse move| **Event:** *sparklineMouseMove*<br/><br/> `<ej-spark-line id="Sparkline Charts" Sparkline Charts-mouse-move="mouseMove">  </ej-spark-line>`<br/><br/>`function mouseMove(args) { }` | **Event:** *sparklineMouseMove*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" sparklineMouseMove="sparklineMouseMove"></ejs-Sparkline Charts>`<br/><br/>`function sparklineMouseMove(args) { }` |
|Mouse leave| **Event:** *sparklineMouseLeave*<br/><br/> `<ej-spark-line id="Sparkline Charts" Sparkline Charts-mouse-leave="mouseLeave"></ej-spark-line>`<br/><br/>`function mouseLeave(args) { }` | Not applicable |
|Click| **Event:** *click*<br/><br/> `<ej-spark-line id="Sparkline Charts" Sparkline Charts-mouse-click="sparklineMouseClick">       </ej-spark-line>`<br/><br/>`function sparklineMouseClick(args) { }` | **Event:** *sparklineMouseClick*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" sparklineMouseClick="sparklineMouseClick"></ejs-Sparkline Charts>`<br/><br/>`function sparklineMouseClick(args) { }` |
|doubleClick| **Event:** *doubleClick*<br/><br/>`<ej-spark-line id="Sparkline Charts" ldouble-click="doubleClick">       </ej-spark-line>`<br/><br/>`function doubleClick(args) { }` | Not applicable |
|rightClick| **Event:** *rightClick*<br/><br/> `<ej-spark-line id="Sparkline Charts" right-click="rightClick">       </ej-spark-line>`<br/><br/>`function rightClick(args) { }` | Not applicable |
|axisRendering| Not applicable | **Event:** *axisRendering*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" axisRendering="axisRendering"></ejs-Sparkline Charts>`<br/><br/>`function axisRendering(args) { }` |
|dataLabelRendering| Not applicable | **Event:** *dataLabelRendering*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" dataLabelRendering="dataLabelRendering"></ejs-Sparkline Charts>`<br/><br/>`function dataLabelRendering(args) { }` |
|markerRendering| Not applicable | **Event:** *markerRendering*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" markerRendering="markerRendering"></ejs-Sparkline Charts>`<br/><br/>`function markerRendering(args) { }` |
|pointRendering| Not applicable | **Event:** *pointRendering*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" pointRendering="pointRendering"></ejs-Sparkline Charts>`<br/><br/>`function pointRendering(args) { }` |
|resize| Not applicable | **Event:** *resize*<br/><br/> `<ejs-Sparkline Charts id="Sparkline Charts" resize="resize"></ejs-Sparkline Charts>`<br/><br/>`function resize(args) { }` |