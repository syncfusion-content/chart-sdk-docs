<template>
  <div id="app">
    <ejs-chart
      id="container"
      :title="title"
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :loaded="loaded"
    >
      <e-series-collection>
        <e-series
          :dataSource="lineData"
          type="Line"
          xName="x"
          yName="y"
        >
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>

<script lang="ts">
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  type ILoadedEventArgs
} from '@syncfusion/ej2-vue-charts';

interface LineData {
  x: number;
  y: number;
}

export default {
  name: 'App',

  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },

  data() {
    const lineData: LineData[] = [
      { x: 1, y: 10 },
      { x: 2, y: 20 },
      { x: 3, y: 15 },
      { x: 4, y: 30 },
      { x: 5, y: 25 }
    ];

    return {
      lineData,
      primaryXAxis: {
        interval: 1
      },
      primaryYAxis: {
        title: 'Expense'
      },
      title: 'Efficiency of oil-fired power production'
    };
  },

  methods: {
    loaded(args: ILoadedEventArgs): void {
      console.log('Chart loaded successfully');
    }
  },

  provide: {
    chart: [LineSeries]
  }
};
</script>

<style>
#container {
  height: 350px;
}
</style>