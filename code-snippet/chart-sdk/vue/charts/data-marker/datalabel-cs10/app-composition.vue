<template>
  <div id="app">
    <ejs-chart id="container" :title="title" :tooltip="tooltip" :legendSettings="legendSettings" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
      <e-series-collection>
        <e-series :dataSource="dataA" type="StackingColumn" xName="x" yName="y" name="Category A" fill="#254061" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataB" type="StackingColumn" xName="x" yName="y" name="Category B" fill="#376092" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataC" type="StackingColumn" xName="x" yName="y" name="Category C" fill="#4f81bd" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataD" type="StackingColumn" xName="x" yName="y" name="Category D" fill="CornflowerBlue" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataE" type="StackingColumn" xName="x" yName="y" name="Category E" fill="LightBlue" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataF" type="StackingColumn" xName="x" yName="y" name="Category F" fill="LightSteelBlue" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataG" type="StackingColumn" xName="x" yName="y" name="Category G" fill="Moccasin" :columnWidth="0.6" :marker="marker"></e-series>
        <e-series :dataSource="dataH" type="StackingColumn" xName="x" yName="y" name="Category H" fill="LightGrey" :columnWidth="0.6" :marker="marker"></e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { ChartComponent as EjsChart, SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries, StackingColumnSeries, Category, DataLabel, Tooltip,
  Legend } from '@syncfusion/ej2-vue-charts';

const dataA = [
  { x: 'Period 1', y: 35, text: '35%' },
  { x: 'Period 2', y: 30, text: '30%' },
  { x: 'Period 3', y: 32, text: '32%' }
];

const dataB = [
  { x: 'Period 1', y: 22, text: '22%' },
  { x: 'Period 2', y: 25, text: '25%' },
  { x: 'Period 3', y: 24, text: '24%' }
];

const dataC = [
  { x: 'Period 1', y: 14, text: '14%' },
  { x: 'Period 2', y: 16, text: '16%' },
  { x: 'Period 3', y: 15, text: '15%' }
];

const dataD = [
  { x: 'Period 1', y: 10, text: '10%' },
  { x: 'Period 2', y: 11, text: '11%' },
  { x: 'Period 3', y: 12, text: '12%' }
];

const dataE = [
  { x: 'Period 1', y: 7, text: '7%' },
  { x: 'Period 2', y: 8, text: '8%' },
  { x: 'Period 3', y: 6, text: '6%' }
];

const dataF = [
  { x: 'Period 1', y: 5, text: '5%' },
  { x: 'Period 2', y: 5, text: '5%' },
  { x: 'Period 3', y: 5, text: '5%' }
];

const dataG = [
  { x: 'Period 1', y: 4, text: '4%' },
  { x: 'Period 2', y: 3, text: '3%' },
  { x: 'Period 3', y: 4, text: '4%' }
];

const dataH = [
  { x: 'Period 1', y: 3, text: '3%' },
  { x: 'Period 2', y: 2, text: '2%' },
  { x: 'Period 3', y: 2, text: '2%' }
];

const primaryXAxis = {
  valueType: 'Category'
};

const primaryYAxis = {
  visible: false
};

const tooltip = {
  enable: true
};

const legendSettings = {
  visible: true
};

const marker = {
  dataLabel: {
    visible: true,
    name: 'text',
    fill: 'Transparent',
    labelIntersectAction: 'RelocateVertically',
    smartLabelSettings: {
      background: '#4f4f4f',
      border: {
        color: 'black',
        dashArray: '2',
        width: 2
      },
      connectorLineStyle: {
        color: 'black',
        width: 2
      },
      pointerShape: 'Arrow',
      offset: 0.5
    }
  }
};

const title = 'Chart Title';

provide('chart', [StackingColumnSeries, Category, DataLabel, Tooltip, Legend]);
</script>

<style>
#container {
  height: 350px;
}
</style>