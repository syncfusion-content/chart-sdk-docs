import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);
let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new WebApiAdaptor()
});
let query: Query = new Query();

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    //Initializing Chart Sample
    series: [
        {
            type: 'Column',
            dataSource: dataManager,
            xName: 'CustomerID', yName: 'Freight', query: query
        }
    ],
    title: 'Sprint Task Analysis'
}, '#element');



