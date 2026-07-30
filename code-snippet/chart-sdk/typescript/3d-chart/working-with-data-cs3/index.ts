


import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);
import { DataManager, Query, ODataAdaptor  } from '@syncfusion/ej2-data';

let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/orders',
    adaptor: new ODataAdaptor()
});
let query: Query = new Query();

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
        xName: 'CustomerID', yName: 'Freight', query: query,
    }],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
}, '#element');



