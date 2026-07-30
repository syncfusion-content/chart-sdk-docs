


import { StockChart } from '@syncfusion/ej2-charts';
import { DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, Export,SplineSeries } from '@syncfusion/ej2-charts';
import { RangeTooltip, Crosshair } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);
StockChart.Inject(RangeTooltip, Crosshair, Export);

    let stockChart: StockChart = new StockChart({
        primaryXAxis: { valueType: 'DateTime', majorGridLines: { color: 'transparent' },
                        crosshairTooltip: { enable: true } },
        primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 },
            crosshairTooltip: { enable: true }
        },
       series: [
            {
                dataSource: GetDateTimeData(), xName: 'x', yName: 'y', type: 'Line', name: 'google',
            }
        ],
        seriesType: [],
        indicatorType: [],
        exportType: [],
        trendlineType : [],
        periods: [
            { intervalType: 'Minutes', interval: 1, text: '1m' },
            { intervalType: 'Minutes', interval: 30, text: '30m' },
            { intervalType: 'Hours', interval: 1, text: '1H' },
            { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
            { text: '1D' }
        ],
        title: 'AAPL stock price by minutes',
        crosshair: {
            enable: true
        },
});
stockChart.appendTo('#element');

function GetDateTimeData() : {x: Date, y: number}[]{
       let series1: Object[] = [];
    let point1: Object;
    let value: number = 80;
    let i: number;
    for (i = 1; i < 500; i++) {
        if (Math.random() > .5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        point1 = { x: new Date(2000, 1, 1, 0, i), y: value.toFixed(1) };
        series1.push(point1);
    }
    return series1;
}



