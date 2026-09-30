import { Chart, ColumnSeries, Category, Tooltip, TooltipRenderEventArgs } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category, Tooltip);
interface SalesData {
    month: string;
    sales: number;
    country: string;
    growth: number;
}

const chartData: SalesData[] = [
    { month: 'Jan', sales: 35, country: 'USA', growth: 12.5 },
    { month: 'Feb', sales: 42, country: 'UK', growth: 15.2 },
    { month: 'Mar', sales: 38, country: 'India', growth: 10.8 },
    { month: 'Apr', sales: 48, country: 'Germany', growth: 18.4 }
];

const chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    tooltip: {
        enable: true
    },
    series: [
        {
            type: 'Column',
            dataSource: chartData,
            xName: 'month',
            yName: 'sales',
            name: 'Sales'
        }
    ],
    tooltipRender: (args: TooltipRenderEventArgs): void => {
        const rawData: SalesData = args.data.rawData as SalesData;

        if (rawData) {
            args.text =
                'Sales: <b>' + rawData.sales + '</b><br/>' +
                'Country: <b>' + rawData.country + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    }
});

chart.appendTo('#element');