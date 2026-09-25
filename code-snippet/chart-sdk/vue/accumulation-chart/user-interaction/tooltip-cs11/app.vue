<template>
  <div id="app">
    <ejs-accumulationchart id="container" :tooltip="tooltip" :tooltipRender="tooltipRender" :title="title">
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource="seriesData" type="Pie" xName="x" yName="y" name="Sales"></e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationTooltip } from '@syncfusion/ej2-vue-charts';

export default {
  name: 'App',
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
      ],
      tooltip: { enable: true },
      title: 'Sales by Country'
    };
  },
  methods: {
    tooltipRender(args) {
      const rawData = args.data.rawData;
      if (rawData) {
        args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
          'Region: <b>' + rawData.region + '</b><br/>' +
          'Growth: <b>' + rawData.growth + '%</b>';
      }
    }
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationTooltip]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>