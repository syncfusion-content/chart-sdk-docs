


import { StockChart } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, AreaSeries, HiloOpenCloseSeries, HiloSeries, LineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export, StockLegend } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair }
from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, AreaSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export, StockLegend);
const iconMap: { [key: string]: string } = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};
let stockChart: StockChart = new StockChart({
        primaryXAxis: {
            valueType: 'DateTime'
        },
        indicatorType : [],
        trendlineType : [],
        
        series: [
            { dataSource: chartData, xName: 'date', yName: 'low', type: 'Line', name: 'Google' , animation: {enable: false}},
            { dataSource: chartData, xName: 'date', yName: 'high', type: 'Line', name: 'MicrosoftEdge', animation: {enable: false} }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: {
            visible: true,
            template: (data: { series: { name: string } }) => {
                const icon: string = iconMap[data.series.name] || '';
                return '<div style="display:flex;align-items:center;gap:4px;">' +
                    '<img src="' + icon + '" width="30" height="30"/>' +
                    '<span>' + data.series.name + '</span>' +
                    '</div>';
            }
        }
});
stockChart.appendTo('#element');
