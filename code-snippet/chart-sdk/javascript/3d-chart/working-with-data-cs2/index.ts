


import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
import { DataManager, Query } from '@syncfusion/ej2-data';

Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders'
});
let query: Query = new Query().take(5).where('Estimate', 'lessThan', 3, false);

let chart: Chart3D = new Chart3D({
    //Initializing Primary X and Y Axis
    primaryXAxis: {
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    },
   series:[{
        dataSource: dataManager,
        type: 'Column',
        xName: 'CustomerID', yName: 'Freight', query: query
    }],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
}, '#element');



