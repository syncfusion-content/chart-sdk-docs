import { CircularChart3D, CircularChartTooltip3D, PieSeries3D, CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
CircularChart3D.Inject(PieSeries3D, CircularChartTooltip3D);

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

let chart: CircularChart3D = new CircularChart3D({
    series: [
        {
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            name: 'Sales'
        }
    ],
    tilt: -45,
    tooltip: {
        enable: true
    },
    legendSettings: {
        visible: false
    },
    tooltipRender: (args: CircularChart3DTooltipRenderEventArgs): void => {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    },
    title: 'Sales by Country'
}, '#element');