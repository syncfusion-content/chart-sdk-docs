

import { StockChart } from '@syncfusion/ej2-charts';
import { DateTimeCategory, DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair }
  from '@syncfusion/ej2-charts';
StockChart.Inject(DateTimeCategory, DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);

interface DataPoint {
  x: Date;
}

let datetimeCategoryData: DataPoint[] = [
  { x: new Date(2021, 1, 11) }, { x: new Date(2021, 1, 12) }, { x: new Date(2021, 1, 13) }, { x: new Date(2021, 1, 14) }, { x: new Date(2021, 1, 15) },
  { x: new Date(2021, 1, 19) }, { x: new Date(2021, 1, 20) }, { x: new Date(2021, 1, 21) }, { x: new Date(2021, 1, 22) }, { x: new Date(2021, 3, 1) },
  { x: new Date(2021, 3, 2) }, { x: new Date(2021, 4, 1) }, { x: new Date(2021, 4, 5) }, { x: new Date(2021, 4, 6) }, { x: new Date(2021, 4, 7) },
  { x: new Date(2021, 4, 11) }, { x: new Date(2021, 4, 13) }, { x: new Date(2021, 4, 15) }, { x: new Date(2021, 4, 16) }, { x: new Date(2021, 4, 17) },
  { x: new Date(2021, 4, 18) }, { x: new Date(2021, 4, 20) }, { x: new Date(2021, 4, 21) }, { x: new Date(2021, 4, 23) }, { x: new Date(2021, 4, 25) },
  { x: new Date(2021, 5, 1) }, { x: new Date(2021, 5, 2) }, { x: new Date(2021, 5, 6) }, { x: new Date(2021, 5, 7) }, { x: new Date(2021, 5, 8) },
  { x: new Date(2021, 5, 11) }, { x: new Date(2021, 5, 15) }, { x: new Date(2021, 5, 18) }, { x: new Date(2021, 5, 20) }, { x: new Date(2021, 5, 25) },
  { x: new Date(2021, 6, 1) }, { x: new Date(2021, 6, 2) }, { x: new Date(2021, 6, 3) }, { x: new Date(2021, 6, 4) }, { x: new Date(2021, 6, 5) },
  { x: new Date(2021, 6, 10) }, { x: new Date(2021, 6, 11) }, { x: new Date(2021, 6, 12) }, { x: new Date(2021, 6, 13) }, { x: new Date(2021, 6, 15) },
  { x: new Date(2021, 6, 16) }, { x: new Date(2021, 6, 17) }, { x: new Date(2021, 6, 18) }, { x: new Date(2021, 6, 19) }, { x: new Date(2021, 6, 20) }
]

let series2: Object[] = [];
let point2: Object;
for (var i = 0; i < 46; i++) {
  point2 = {
      x: datetimeCategoryData[i].x,
      y: getRandomInRange(120, 130),
      high: getRandomInRange(88, 92),
      low: getRandomInRange(76, 86),
      open: getRandomInRange(75, 85),
      close: getRandomInRange(85, 90),
      volume: getRandomInRange(660187068, 965935749)
  };
  series2.push(point2);
}
function getRandomInRange(min: number, max: number): number {
  const randomDecimal = Math.random();
  const randomValue = randomDecimal * (max - min) + min;
  return randomValue;
}

let stockChart: StockChart = new StockChart({
  primaryXAxis: { valueType: 'DateTimeCategory', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
  series: [
    {
      dataSource: series2,
      type: 'Line', xName: 'x', yName: 'y'
    },
  ],
  tooltip: {
    enable: true, header: 'AAPL Stock Price'
  },
  crosshair: {
    enable: true
  },
});
stockChart.appendTo('#element');



