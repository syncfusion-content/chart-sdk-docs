import {
    Adaptor,
    HeatMap,
    ITooltipEventArgs,
    Legend,
    Tooltip
} from '@syncfusion/ej2-heatmap';

HeatMap.Inject(Adaptor, Tooltip, Legend);

interface SalesRecord {
    employee: string;
    month: string;
    revenue: number;
    target: number;
    region: string;
}

let heatmapData: SalesRecord[] = [
    {
        employee: 'Nancy',
        month: 'Jan',
        revenue: 73,
        target: 70,
        region: 'North America'
    },
    {
        employee: 'Nancy',
        month: 'Feb',
        revenue: 39,
        target: 50,
        region: 'North America'
    },
    {
        employee: 'Nancy',
        month: 'Mar',
        revenue: 26,
        target: 45,
        region: 'North America'
    },
    {
        employee: 'Andrew',
        month: 'Jan',
        revenue: 93,
        target: 80,
        region: 'Europe'
    },
    {
        employee: 'Andrew',
        month: 'Feb',
        revenue: 58,
        target: 55,
        region: 'Europe'
    },
    {
        employee: 'Andrew',
        month: 'Mar',
        revenue: 53,
        target: 60,
        region: 'Europe'
    },
    {
        employee: 'Janet',
        month: 'Jan',
        revenue: 99,
        target: 90,
        region: 'Asia Pacific'
    },
    {
        employee: 'Janet',
        month: 'Feb',
        revenue: 28,
        target: 40,
        region: 'Asia Pacific'
    },
    {
        employee: 'Janet',
        month: 'Mar',
        revenue: 22,
        target: 35,
        region: 'Asia Pacific'
    }
];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    dataSource: heatmapData,
    dataSourceSettings: {
        isJsonData: true,
        adaptorType: 'Cell',
        xDataMapping: 'employee',
        yDataMapping: 'month',
        valueMapping: 'revenue'
    },
    xAxis: {
        labels: ['Nancy', 'Andrew', 'Janet']
    },
    yAxis: {
        labels: ['Jan', 'Feb', 'Mar']
    },
    cellSettings: {
        showLabel: true,
        format: '${value}K'
    },
    showTooltip: true,
    tooltipRender: (args: ITooltipEventArgs): void => {
        let record: SalesRecord = args.data as SalesRecord;

        if (record) {
            args.content = [
                'Employee: ' + record.employee +
                '<br/>Month: ' + record.month +
                '<br/>Revenue: $' + record.revenue + 'K' +
                '<br/>Target: $' + record.target + 'K' +
                '<br/>Region: ' + record.region
            ];
        }
    }
});

heatmap.appendTo('#element');