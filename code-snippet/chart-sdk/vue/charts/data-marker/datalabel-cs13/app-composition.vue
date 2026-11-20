<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :subTitle="subTitle" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :enableSmartLabels="true">
      <e-series-collection>
        <e-series :dataSource="vietnam" type="Line" xName="x" yName="y" name="Vietnam" :width="2" :animation="animation" :marker="vietnamMarker"></e-series>
        <e-series :dataSource="indonesia" type="Line" xName="x" yName="y" name="Indonesia" :width="2" :animation="animation" :marker="indonesiaMarker"></e-series>
        <e-series :dataSource="france" type="Line" xName="x" yName="y" name="France" :width="2" :animation="animation" :marker="franceMarker"></e-series>
        <e-series :dataSource="poland" type="Line" xName="x" yName="y" name="Poland" :width="2" :animation="animation" :marker="polandMarker"></e-series>
        <e-series :dataSource="mexico" type="Line" xName="x" yName="y" name="Mexico" :width="2" :animation="animation" :marker="mexicoMarker"></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, LineSeries, DataLabel, Legend } from '@syncfusion/ej2-vue-charts';

const vietnam = [
  { x: 2016, y: 7.8 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 15.5 },
  { x: 2019, y: 17.5 },
  { x: 2020, y: 19.5 },
  { x: 2021, y: 23.0 },
  { x: 2022, y: 20.0 },
  { x: 2023, y: 19.0 },
  { x: 2024, y: 22.1 }
];

const indonesia = [
  { x: 2016, y: 4.8 },
  { x: 2017, y: 5.2 },
  { x: 2018, y: 6.2 },
  { x: 2019, y: 7.8 },
  { x: 2020, y: 9.3 },
  { x: 2021, y: 14.3 },
  { x: 2022, y: 15.6 },
  { x: 2023, y: 16.0 },
  { x: 2024, y: 17.0 }
];

const france = [
  { x: 2016, y: 14.6 },
  { x: 2017, y: 15.5 },
  { x: 2018, y: 15.4 },
  { x: 2019, y: 14.4 },
  { x: 2020, y: 11.6 },
  { x: 2021, y: 13.9 },
  { x: 2022, y: 12.1 },
  { x: 2023, y: 10.0 },
  { x: 2024, y: 10.8 }
];

const poland = [
  { x: 2016, y: 8.9 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 10.8 },
  { x: 2019, y: 9.0 },
  { x: 2020, y: 7.9 },
  { x: 2021, y: 8.5 },
  { x: 2022, y: 7.4 },
  { x: 2023, y: 6.4 },
  { x: 2024, y: 7.1 }
];

const mexico = [
  { x: 2016, y: 19.0 },
  { x: 2017, y: 20.0 },
  { x: 2018, y: 20.2 },
  { x: 2019, y: 18.4 },
  { x: 2020, y: 16.8 },
  { x: 2021, y: 18.5 },
  { x: 2022, y: 18.4 },
  { x: 2023, y: 16.3 },
  { x: 2024, y: 13.7 }
];

const primaryXAxis = {
  valueType: 'Double',
  majorGridLines: { width: 0 },
  edgeLabelPlacement: 'Shift'
};

const primaryYAxis = {
  title: 'Volume in million metric tons',
  labelFormat: '{value}',
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 }
};

const animation = { enable: false };

const vietnamMarker = {
  visible: true,
  width: 7,
  height: 7,
  shape: 'Circle',
  isFilled: true,
  dataLabel: {
    visible: true,
    smartLabelSettings: {
      background: '#e0e0e0',
      border: { color: '#404040', width: 1 },
      pointerShape: 'Arrow',
      connectorLineStyle: { color: '#404040', width: 1.5 }
    }
  }
};

const indonesiaMarker = {
  visible: true,
  width: 6,
  height: 6,
  shape: 'Triangle',
  isFilled: true,
  dataLabel: { visible: true }
};

const franceMarker = {
  visible: true,
  width: 7,
  height: 7,
  shape: 'Diamond',
  isFilled: true,
  dataLabel: { visible: true }
};

const polandMarker = {
  visible: true,
  width: 5,
  height: 5,
  shape: 'Rectangle',
  isFilled: true,
  dataLabel: { visible: true }
};

const mexicoMarker = {
  visible: true,
  width: 7,
  height: 7,
  shape: 'Pentagon',
  isFilled: true,
  dataLabel: { visible: true }
};

const title = 'Annual Crude Steel Production by Country (2016–2024)';
const subTitle = 'Source: wikipedia.org';

provide('chart', [LineSeries, DataLabel, Legend]);
</script>

<style>
#container {
  height: 350px;
}
</style>