import { StockChart, DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, ICrosshairLabelRenderEventArgs } from '@syncfusion/ej2-charts'
import { stockData1 } from './datasource.ts';
StockChart.Inject(DateTime, SplineAreaSeries, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator);

const crosshairLabelRender: (args: ICrosshairLabelRenderEventArgs) => void = (args: ICrosshairLabelRenderEventArgs) => {
        if (args.axisName === 'primaryXAxis') {
            const date = args.value instanceof Date ? args.value : new Date(args.text);
            args.text = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        }
        if (args.axisName === 'primaryYAxis') {
            const price = typeof args.value === 'number' ? args.value : Number(args.text);
            args.text = '₹' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });
            if (price > 310) {
                args.textStyle.color = '#d32f2f';
                args.fill = '#ffebee';
            }
        }
};

let chart: StockChart = new StockChart({
    primaryXAxis: { valueType: 'DateTime', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
    primaryYAxis: { lineStyle: { color: 'transparent' }, majorTickLines: { color: 'transparent', height: 0 }, crosshairTooltip: { enable: true } },
    seriesType: [], indicatorType: [], chartArea: { border: { width: 0 } }, crosshair: { enable: true, lineType: 'Both' },
    crosshairLabelRender: crosshairLabelRender,
    series: [{
        dataSource: stockData1, xName: 'x', yName: 'high', type: 'SplineArea', opacity: 0.5
    }]
});
chart.appendTo('#element');