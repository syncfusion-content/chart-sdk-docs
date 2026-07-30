


import {
    AccumulationChart, AccumulationDataLabel, FunnelSeries, PieSeries,
    PyramidSeries, AccumulationAnnotation, AccumulationLegend, AccumulationTooltip, IAccLoadedEventArgs
} from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend, AccumulationTooltip, AccumulationAnnotation, AccumulationDataLabel, FunnelSeries, PieSeries, PyramidSeries);
import { Button } from '@syncfusion/ej2-buttons';

let chartData: Object[] = [{ x: 'English', y: 48.20, text: '18.20%' },
{ x: 'Sanskrit', y: 27.3, text: '27.3%' },
{ x: 'French', y: 27.3, text: '27.3%' },
{ x: 'Tamil', y: 55.9, text: '55.9%' },
{ x: 'Maths', y: 76.8, text: '76.8%' },
{ x: 'Chemistry', y: 86.8, text: '76.8%' },
{ x: 'Biology', y: 96.8, text: '76.8%' },
{ x: 'Physics', y: 100, text: '100%' }];

let checked: boolean = false;
let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pie', xName: 'x', yName: 'y', animation: { enable: true },
    }],
    tooltip: { enable: true },
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
    legendSettings: { visible: false },
    title: 'Pie Annotation CoordinateUnits Point',
    titleStyle: { textOverflow: 'Trim' },
    loaded: (args: IAccLoadedEventArgs) => {
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
                    chart.series[0].dataSource = chartData;
                }
                chart.refresh();
            };
        }
    }
});
chart.appendTo('#element');