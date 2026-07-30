

import { Grid, Selection, Page, ActionEventArgs } from '@syncfusion/ej2-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { orderData } from './datasource.ts';
import { Chart, LineSeries, DateTime } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime);
Grid.Inject(Selection, Page);
let chart: Chart;
let data: Object = new DataManager(orderData as JSON[]).executeLocal(new Query().take(100));
let grid: Grid = new Grid(
    {
        dataSource: data,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        dataBound: () => {
            chart = new Chart({
                //Initializing Primary X Axis
                primaryXAxis: {
                    valueType: 'DateTime',
                    intervalType: 'Days'
                },
                series: [
                    {
                        type: 'Line',
                        dataSource: grid.getCurrentViewRecords(),
                        xName: 'OrderDate', marker: {
                            visible: true
                        },
                        yName: 'Freight', name: 'Germany'
                    },
                ],

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


