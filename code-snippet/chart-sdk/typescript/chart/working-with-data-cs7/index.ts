import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);
let dataManager: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
    adaptor: new ODataV4Adaptor()
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



