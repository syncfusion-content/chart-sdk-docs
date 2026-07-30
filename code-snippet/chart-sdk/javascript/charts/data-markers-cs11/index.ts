


import { Chart, LineSeries, Category } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, Category);

let chart: Chart = new Chart({
         series: [
            {
                type: 'Line',
                dataSource: numData, xName: 'x', yName: 'y',
                //Marker shape as image
                marker: {
                    visible: true,
                    width: 10, height: 10,
                    shape: 'Image',
                    imageUrl:'sun_annotation.png'
                }
            }
        ],

}, '#element');



