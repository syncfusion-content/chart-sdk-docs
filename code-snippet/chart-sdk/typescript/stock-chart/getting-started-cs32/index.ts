


import { StockChart } from '@syncfusion/ej2-charts';
import { DateTime,AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries ,Logarithmic } from '@syncfusion/ej2-charts';
import { SplineAreaSeries, SplineSeries  } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair, IStockChartEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
StockChart.Inject(DateTime,Logarithmic,  AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineAreaSeries, SplineSeries );
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);

let stockChart: StockChart = new StockChart({
    primaryXAxis: {
        title: 'Months',
    },
    primaryYAxis: {
        title: 'Rupees against Dollars',
        interval: 5
    },
    tooltip:{enable:true},
    chartArea: { border: { width: 0 } },
    series: [{
        dataSource: chartData,
        name: 'Apple Inc',
        fill: '#0066FF',
        //Series type as candle
        type: 'Candle',
        trendlines: [{ type: 'MovingAverage', enableTooltip:false, fill: 'red', width:2 }]
    }],
    seriesType: [],
    indicatorType: [],
    exportType: [],
    title: 'Historical Indian Rupee Rate (INR USD)'
});
stockChart.appendTo('#element');



