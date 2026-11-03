import {
    Category,
    Chart,
    DataLabel,
    LineSeries,
    IScrollEventArgs,
    Legend,
    ScrollBar
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, DataLabel, ScrollBar);

// Generate enough points so the scrollbar is useful
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let chartData: { month: string; sales: number }[] = Array.from({ length: 60 }, (_, i) => {
    const label = `${months[i % 12]} ${2022 + Math.floor(i / 12)}`;
    return { month: label, sales: Math.floor(20 + Math.random() * 40) };
});

let chart: Chart = new Chart({
    // Enable axis scrollbar
    primaryXAxis: {
        valueType: 'Category',
        scrollbarSettings: { enable: true },
        labelIntersectAction: 'Rotate45'
    },
    primaryYAxis: { labelFormat: '${value}K' },
    legendSettings: { visible: true },
    title: 'Sales Analysis',
    series: [{
        dataSource: chartData,
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        marker: { dataLabel: { visible: true } }
    }],
    // Fires whenever the axis scrollbar position/range changes
    scrollChanged: (args: IScrollEventArgs): void => {
        console.log('scroll changed event was triggered');
    }
}, '#element');