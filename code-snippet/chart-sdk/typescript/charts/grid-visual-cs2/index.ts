import {
    Chart,
    LineSeries,
    DateTime,
    Legend
} from '@syncfusion/ej2-charts';
import {
    Grid,
    Page,
    ActionEventArgs
} from '@syncfusion/ej2-grids';

Chart.Inject(LineSeries, DateTime, Legend);
Grid.Inject(Page);

interface OrderData {
    OrderID: number;
    OrderDate: Date;
    Freight: number;
}

const orderData: OrderData[] = [
    { OrderID: 10248, OrderDate: new Date(2026, 0, 3), Freight: 32.38 },
    { OrderID: 10249, OrderDate: new Date(2026, 0, 5), Freight: 11.61 },
    { OrderID: 10250, OrderDate: new Date(2026, 0, 8), Freight: 65.83 },
    { OrderID: 10251, OrderDate: new Date(2026, 0, 12), Freight: 41.34 },
    { OrderID: 10252, OrderDate: new Date(2026, 0, 15), Freight: 51.30 },
    { OrderID: 10253, OrderDate: new Date(2026, 0, 18), Freight: 58.17 },
    { OrderID: 10254, OrderDate: new Date(2026, 0, 22), Freight: 22.98 },
    { OrderID: 10255, OrderDate: new Date(2026, 0, 25), Freight: 148.33 },
    { OrderID: 10256, OrderDate: new Date(2026, 0, 28), Freight: 13.97 },
    { OrderID: 10257, OrderDate: new Date(2026, 1, 2), Freight: 81.91 },
    { OrderID: 10258, OrderDate: new Date(2026, 1, 5), Freight: 140.51 },
    { OrderID: 10259, OrderDate: new Date(2026, 1, 9), Freight: 3.25 },
    { OrderID: 10260, OrderDate: new Date(2026, 1, 12), Freight: 55.09 },
    { OrderID: 10261, OrderDate: new Date(2026, 1, 16), Freight: 3.05 },
    { OrderID: 10262, OrderDate: new Date(2026, 1, 20), Freight: 48.29 }
];

const chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        intervalType: 'Days',
        labelFormat: 'MMM d',
        title: 'Order date',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Freight',
        minimum: 0,
        labelFormat: '${value}'
    },
    series: [{
        type: 'Line',
        dataSource: [],
        xName: 'OrderDate',
        yName: 'Freight',
        name: 'Freight',
        width: 2,
        marker: {
            visible: true
        },
        animation: {
            enable: false
        }
    }],
    legendSettings: {
        visible: false
    },
    title: 'Freight for the Current Grid Page'
});

chart.appendTo('#Chart');

let grid: Grid;

function updateChartFromGrid(): void {
    const records: Object[] = grid.getCurrentViewRecords() as Object[];

    chart.series[0].dataSource = records;
    chart.refresh();

    (
        document.getElementById('recordStatus') as HTMLElement
    ).textContent =
        records.length + ' Grid records displayed in the Chart.';
}

grid = new Grid({
    dataSource: orderData,
    allowPaging: true,
    pageSettings: {
        pageSize: 5
    },
    columns: [
        {
            field: 'OrderID',
            headerText: 'Order ID',
            width: 110,
            textAlign: 'Right',
            isPrimaryKey: true
        },
        {
            field: 'OrderDate',
            headerText: 'Order Date',
            width: 140,
            type: 'date',
            format: 'yMd',
            textAlign: 'Right'
        },
        {
            field: 'Freight',
            headerText: 'Freight',
            width: 110,
            type: 'number',
            format: 'C2',
            textAlign: 'Right'
        }
    ],
    dataBound: (): void => {
        updateChartFromGrid();
    },
    actionComplete: (args: ActionEventArgs): void => {
        if (args.requestType === 'paging') {
            updateChartFromGrid();
        }
    }
});

grid.appendTo('#Grid');