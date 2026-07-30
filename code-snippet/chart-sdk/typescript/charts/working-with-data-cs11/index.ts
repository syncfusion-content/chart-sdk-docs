import {
    Chart, LineSeries, Category, ChartTheme,
    Tooltip, ILoadedEventArgs
} from '@syncfusion/ej2-charts';
import { Button } from '@syncfusion/ej2-buttons';

/**
 * Sample for No Data Template
 */

Chart.Inject(LineSeries, Category, Tooltip);

    const chartData: Object[] = [
        { Month: 'January', Value: 19173 },
        { Month: 'February', Value: 17726 },
        { Month: 'March', Value: 19874 },
        { Month: 'April', Value: 19391 },
        { Month: 'May', Value: 20072 },
        { Month: 'June', Value: 19233 }
    ];

    let checked: boolean = false;

    const chart: Chart = new Chart({
        title: 'Milk Production in US - 2025',
        subTitle: 'Source: nass.usda.gov',
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
        },
        primaryYAxis: {
            title: 'Production (in million pounds)',
            titleStyle: { fontWeight: '600' },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },
        chartArea: {
            border: { width: 0 },
        },
        series: [{
            dataSource: [],
            xName: 'Month',
            yName: 'Value',
            type: 'Line',
            width: 2,
            marker: {
                visible: true, width: 7, height: 7
            }
        }],
        tooltip: {
            enable: true,
            header: 'Milk Production',
            format: '${point.x} : <b>${point.y}M</b>'
        },
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
        loaded: (args: ILoadedEventArgs) => {
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
