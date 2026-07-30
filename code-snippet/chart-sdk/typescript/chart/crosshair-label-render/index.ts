import { Chart, LineSeries, Category, Crosshair, Double, Legend, Tooltip, Highlight, ICrosshairLabelRenderEventArgs } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(LineSeries, Category, Crosshair, Double, Legend, Tooltip, Highlight);

const crosshairLabelRender: (args: ICrosshairLabelRenderEventArgs) => void = (args: ICrosshairLabelRenderEventArgs) => {
    if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
        if (args.value > 1000) {
            args.text = (args.value / 1000).toFixed(1) + 'K';
            args.textStyle = args.textStyle || {};
            args.textStyle.color = '#d32f2f';
            args.fill = '#ffebee';
        }
        if (args.value < 0) {
            args.cancel = true;
        }
    }
    if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
        if (args.text.length > 8) {
            args.text = args.text.substring(0, 8) + '...';
        }
    }
};

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', crosshairTooltip: { enable: true } },
    primaryYAxis: { crosshairTooltip: { enable: true } },
    crosshairLabelRender: crosshairLabelRender,
    series: [
        {
            dataSource: data, xName: 'x', yName: 'y', type: 'Line', name: 'Series'
        }
    ],
    crosshair: {enable: true}
});
chart.appendTo('#element');