import { Chart3D, ColumnSeries3D, Category3D, Tooltip3D, Chart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';

Chart3D.Inject(ColumnSeries3D, Category3D, Tooltip3D);

interface SalesData {
    x: string;
    y: number;
    region: string;
    growth: number;
}

let chartData: SalesData[] = [
    { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
    { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
    { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
    { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
];

let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Country'
    },
    primaryYAxis: {
        title: 'Sales'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            name: 'Sales',
            type: 'Column'
        }
    ],
    tooltip: {
        enable: true
    },
    tooltipRender: (args: Chart3DTooltipRenderEventArgs): void => {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    },
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
    title: 'Sales by Country'
}, '#element');