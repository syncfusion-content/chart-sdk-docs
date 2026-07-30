


import { StockChart, IStockChartEventArgs } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, HiloOpenCloseSeries, CandleSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair }
    from '@syncfusion/ej2-charts';
import { Button } from '@syncfusion/ej2-buttons';
StockChart.Inject(DateTime, HiloOpenCloseSeries, CandleSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, RangeTooltip, Tooltip, Crosshair, Export);
let checked: boolean = false;

let stockChart: StockChart = new StockChart({
    series: [
        {
            type: 'Candle',
            animation: { enable: true },
            bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
        }
    ],
    title: 'AAPL Stock Price',
    noDataTemplate: `
        <div id="noDataTemplateContainer" class="light-bg">
                <div class="template-align">
                    <img src="no-data.png" alt="No Data"/>
                </div>
                <div class="template-align">
                    <p style="font-size: 15px; margin: 10px 0 0;"><strong>No data available to display.</strong></p>
                </div>
                <div class="template-align">
                    <button id="loadDataBtn" style="margin-top: 15px;"></button>
                </div>
            </div>
    `,
    loaded: (args: IStockChartEventArgs) => {
        const btnElem: HTMLElement | null = document.getElementById('loadDataBtn');
        if (btnElem) {
            const loadBtn: Button = new Button({
                content: 'Load Data',
                iconCss: 'e-icons e-refresh',
                cssClass: 'e-outline',
                isPrimary: false
            });
            loadBtn.appendTo(btnElem);

            loadBtn.element.onclick = (): void => {
                checked = !checked;
                if (checked) {
                    stockChart.series[0].dataSource = chartData;
                }
                stockChart.refresh();
            };
        }
    }
});
stockChart.appendTo("#element");

