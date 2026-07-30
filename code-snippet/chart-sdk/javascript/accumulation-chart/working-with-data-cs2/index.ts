


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);
let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders'
});
let query: Query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Freight rate in U.S. dollars'
    },
    series: [
        {
            type: 'Column',
            dataSource: dataManager,
            xName: 'CustomerID', yName: 'Freight', query: query
        }
    ],
    title: 'Container freight rate'
}, '#element');



