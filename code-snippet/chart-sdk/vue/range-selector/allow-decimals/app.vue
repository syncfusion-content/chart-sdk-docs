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

<script>
import { Browser } from '@syncfusion/ej2-base';
import {
  RangeNavigatorComponent,
  RangenavigatorSeriesDirective,
  RangenavigatorSeriesCollectionDirective,
  AreaSeries,
} from '@syncfusion/ej2-vue-charts';

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({ x: i, y: i * 2 });
}

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent,
    'e-rangenavigator-series-collection':
      RangenavigatorSeriesCollectionDirective,
    'e-rangenavigator-series': RangenavigatorSeriesDirective,
  },
  data: function () {
    return {
      data: data,
    };
  },

  provide: {
    rangeNavigator: [AreaSeries],
  },
};
</script>
