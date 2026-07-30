


import { StockChart } from '@syncfusion/ej2-charts';
import { DateTime, CandleSeries, LineSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, Tooltip, Crosshair, IBeforeIndicatorChangeEventArgs, IIndicatorChangedEventArgs  } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, CandleSeries, LineSeries, SplineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(TmaIndicator, Export, Tooltip, Crosshair);
import { chartData } from './datasource';

let stockChart: StockChart = new StockChart({
    title: 'AAPL Stock Price',
    primaryXAxis: {
        valueType: 'DateTime'
    },
    tooltip: { enable: true },
    crosshair: { enable: true },
    series: [
        {
            dataSource: chartData,
            xName: 'date',
            open: 'open',
            high: 'high',
            low: 'low',
            close: 'close',
            volume: 'volume',
            name: 'Apple Inc',
            type: 'Candle'
        }
    ],
    beforeIndicatorChange: (args: IBeforeIndicatorChangeEventArgs) => {
        console.log('Before Indicator Change:', args.type);
        // prevent EMA indicator
        if (args.type === 'Ema') {
            args.cancel = true;
        }
    },
    indicatorChanged: (args: IIndicatorChangedEventArgs) => {
        console.log(args.type + ' indicator ' + (args.isAdd ? 'added' : 'removed'));
    }
});

stockChart.appendTo('#element');
