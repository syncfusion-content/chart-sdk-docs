


import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { RangeTooltip, Tooltip, Crosshair }
from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);
StockChart.Inject( RangeTooltip, Tooltip, Crosshair);

let stockChart: StockChart = new StockChart({

series:[{
    dataSource: chartData,
    type: 'Candle'
}],
indicatorType: [];
trendlineType: [];
exportType: [];
});
stockChart.appendTo('#element');


