import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);

class SerialNoAdaptor extends ODataAdaptor {
    processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: {result: Object[], count: number} = super.processResponse.apply(this, arguments);
        // adding serial number
        original.result.forEach((item: Object) => item['Sno'] = ++i);
        return { result: original.result, count: original.count };
    }
}
let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new SerialNoAdaptor()
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
            xName: 'CustomerID', yName: 'Sno', query: query
        }
    ],
    title: 'Sprint Task Analysis'
}, '#element');



