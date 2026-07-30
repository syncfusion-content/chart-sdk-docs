

import { Chart, LineSeries, DateTime, ITooltipRenderEventArgs, DataLabel, Series, Selection, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, DataLabel, Selection, Tooltip);
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
                    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
                    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                ],
                xName: 'x', width: 2, marker: {
                  dataLabel : { visible: true },
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            },
             {
                type: 'Line',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
                    { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
                    { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }
                ],
                xName: 'x', width: 2, marker: {
                  dataLabel : { visible: true },
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'India',
            }
        ],

        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        selectionMode: 'Series',
        tooltip: { enable: true },
        tooltipRender: (args: ITooltipRenderEventArgs) => {
        let series: Series = <Series>(args.series);
       if (series.seriesElement.classList[0] === 'element_ej2_deselected') {
          args.cancel = true;
       }
        },
    width:'650px',
    height: '350px'
},'#element');


