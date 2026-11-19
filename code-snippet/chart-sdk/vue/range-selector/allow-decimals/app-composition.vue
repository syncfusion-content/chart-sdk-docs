<template>
  <ejs-rangenavigator
    id="range-navigator"
    valueType="Double"
    :allowDecimals="false"
  >
    <e-rangenavigator-series-collection>
      <e-rangenavigator-series
        :dataSource="data"
        xName="x"
        yName="y"
        type="Area"
      >
      </e-rangenavigator-series>
    </e-rangenavigator-series-collection>
  </ejs-rangenavigator>
</template>

<script setup>
import { provide } from 'vue';
import {
  RangeNavigatorComponent as EjsRangenavigator,
  RngSeriesCollectionDirective as ERangenavigatorSeriesCollection,
  RngSeriesDirective as ERangenavigatorSeries,
  AreaSeries
} from '@syncfusion/ej2-vue-charts';

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({ x: i, y: i * 2 });
}

provide('rangeNavigator', [AreaSeries]);
</script>