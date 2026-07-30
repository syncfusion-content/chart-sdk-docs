


import { AccumulationChart, AccumulationDataLabel } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    enableSmartLabels: true,
    series: [
        {
            dataSource: labelData,
            dataLabel: {
                visible: true, name: 'text', position: 'Outside',
                connectorStyle: {
                    //Length of the connector line in pixels
                    length: '50px',
                    //Width of the connector line in pixels
                    width: 2,
                    //dashArray of the connector line
                    dashArray: '5,3',
                    //Color of the connector line
                    color: '#f4429e',
                    //Specifies the type of the connector line either Line or Curve
                    type: 'Curve'
                }
            }, xName: 'x', yName: 'y'
        }
    ]
}, '#element');



