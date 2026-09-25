<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :legendSettings="legendSettings" :title="title" :wallColor='wallColor'
      :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="chartData" type="StackingColumn" xName="x" yName="y" name="UK" :animation="animation" :columnWidth="0.5" :dataLabel="defaultDataLabel"></e-chart3d-series>
        <e-chart3d-series :dataSource="chartData" type="StackingColumn" xName="x" yName="y1" name="Germany" :animation="animation" :columnWidth="0.5" :dataLabel="defaultDataLabel"></e-chart3d-series>
        <e-chart3d-series :dataSource="chartData" type="StackingColumn" xName="x" yName="y2" name="France" :animation="animation" :columnWidth="0.5" :dataLabel="franceDataLabel"></e-chart3d-series>
        <e-chart3d-series :dataSource="chartData" type="StackingColumn" xName="x" yName="y3" name="Italy" :animation="animation" :columnWidth="0.5" :dataLabel="italyDataLabel"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>

<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, StackingColumnSeries3D, Legend3D, DataLabel3D } from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',

  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },

  data() {
    return {
      chartData: [
        { x: '2014', y: 21.1, y1: 76.9, y2: 66.1, y3: 34.1 },
        { x: '2015', y: 127.3, y1: 20.5, y2: 19.3, y3: 38.2 },
        { x: '2016', y: 143.4, y1: 121.7, y2: 91.3, y3: 44.0 },
        { x: '2017', y: 559.9, y1: 342.5, y2: 62.4, y3: 91.6 },
        { x: '2018', y: 175.4, y1: 166.7, y2: 112.9, y3: 61.9 },
        { x: '2019', y: 189.0, y1: 182.9, y2: 122.4, y3: 71.5 },
        { x: '2020', y: 202.7, y1: 197.3, y2: 120.9, y3: 82.0 }
      ],
      primaryXAxis: {
        title: 'Years',
        interval: 1,
        valueType: 'Category'
      },
      primaryYAxis: {
        title: 'Sales in Billions',
        labelFormat: '{value}B'
      },
      legendSettings: {
        visible: true
      },
      animation: {
        enable: false
      },
      defaultDataLabel: {
        visible: true,
        labelIntersectAction: 'RelocateVertically'
      },
      franceDataLabel: {
        visible: true,
        labelIntersectAction: 'RelocateVertically',
        smartLabelSettings: {
          connectorLineStyle: {
            color: 'RED',
            width: 2
          },
          background: 'green',
          border: {
            color: 'yellow',
            dashArray: '2',
            width: 2
          },
          pointerShape: 'Arrow',
          offset: 0.2
        }
      },
      italyDataLabel: {
        visible: true,
        labelIntersectAction: 'RelocateVertically',
        smartLabelSettings: {
          connectorLineStyle: {
            color: 'RED',
            width: 2
          },
          background: 'green',
          border: {
            color: 'yellow',
            dashArray: '2',
            width: 2
          },
          pointerShape: 'Arrow',
          offset: 0.8
        }
      },
      title: 'Mobile Game Market by Country',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },

  provide: {
    chart3d: [Category3D, StackingColumnSeries3D, Legend3D, DataLabel3D]
  }
};
</script>

<style>
#container {
  height: 350px;
}
</style>