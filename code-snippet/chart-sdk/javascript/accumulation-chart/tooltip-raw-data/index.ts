import { AccumulationChart, AccumulationTooltip, ITooltipRenderEventArgs } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';

AccumulationChart.Inject(AccumulationTooltip);

interface SalesData {
    x: string;
    y: number;
    region: string;
    growth: number;
}

let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }
    ],
    tooltip: {
        enable: true
    },
    tooltipRender: (args: ITooltipRenderEventArgs): void => {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }
}, '#element');