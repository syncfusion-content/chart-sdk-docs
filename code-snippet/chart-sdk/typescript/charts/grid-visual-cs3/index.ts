

import { Grid, Filter, Page, Selection, ActionEventArgs } from '@syncfusion/ej2-grids';
import { orderData } from './datasource.ts';
import { AccumulationChart, ColumnSeries, DateTime, Category, AccumulationDataLabel } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(ColumnSeries, DateTime, Category, AccumulationDataLabel);

Grid.Inject(Filter, Page, Selection);
let chart: AccumulationChart;
let filtertype: { [key: string]: Object }[] = [
    { id: 'Menu', type: 'Menu' },
    { id: 'CheckBox', type: 'CheckBox' },
    { id: 'Excel', type: 'Excel' }
];

let grid: Grid = new Grid(
    {
        dataSource: orderData,
        allowPaging: true,
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            {
                field: 'OrderDate', headerText: 'Order Date', width: 130,
                format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, textAlign: 'Right'
            },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        pageSettings: { pageCount: 5 },
        dataBound: () => {
            chart = new AccumulationChart({
                series: [
                    {
                        dataSource: grid.getCurrentViewRecords(),
                        type: 'Pie',
                        xName: 'CustomerName',
                        yName: 'Freight', dataLabel: { visible: true }
                    }
                ]
            });
            chart.appendTo('#Chart');
        },
        actionComplete: (args: ActionEventArgs) => {
            if (args.requestType === 'paging') {
                chart.series[0].dataSource = grid.getCurrentViewRecords();
                chart.refresh();
            }
        }
    });
grid.appendTo('#Grid');


