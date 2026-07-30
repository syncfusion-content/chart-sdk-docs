

import { Chart, LineSeries, DateTime, ITextRenderEventArgs, DataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, DataLabel);
let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                    { x: new Date(2007, 0, 1), y: 0 }, { x: new Date(2008, 0, 1), y: 38 },
                    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                ],
                xName: 'x', width: 2, marker: {
                  dataLabel : { visible: true },
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            }
        ],

        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        textRender: (args: ITextRenderEventArgs) => {
          args.cancel = args.point.y === 0;
        }
    width:'650px',
    height: '350px'
},'#element');


