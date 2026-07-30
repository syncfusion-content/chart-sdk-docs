


import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair, ITooltipRenderEventArgs, IStockChartEventArgs, ChartTheme }
    from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair);


let stockChart: StockChart = new StockChart({
    chartArea: { border: { width: 0 } },
    primaryYAxis: {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 },
    },
    border : {width : 0},
    primaryXAxis: { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } },
    series: [
        {
            dataSource: chartData, name: 'Apple Inc',
            type: 'Candle', bearFillColor: '#00226C', bullFillColor: "#0450C2", fill: 'blue'
        },
    ],
    indicators: [{
        type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', xName: 'date', high: 'high', low: 'low', open: 'open', close: 'close',
        period: 10, upperLine: { color: '#ffb735', width: 1 },
        lowerLine: { color: '#f2ec2f', width: 1 }
    }],
    tooltipRender: (args: ITooltipRenderEventArgs) => {
        if (args.text.split('<br/>')[4]) {
            let target: number = parseFloat(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
            let value: string = (target / 100000000).toFixed(1) + 'B';
            args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    },
    seriesType: [],
    exportType: [],
    trendlineType: [],
    tooltip: {
        enable: true
    },
    crosshair: {
        enable: true
    },
    height: '350',
});
stockChart.appendTo('#element');



