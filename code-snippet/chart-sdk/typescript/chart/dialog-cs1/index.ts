


import { Chart, ColumnSeries, DateTime, Legend, Tooltip, ILoadedEventArgs, ChartTheme, IMouseEventArgs } from '@syncfusion/ej2-charts';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
Chart.Inject(ColumnSeries, DateTime, Legend, Tooltip);

let dialogObj: Dialog = new Dialog({
        header: 'Chart 2',
        target: document.getElementById('target'),
        showCloseIcon: true,
        width: '500px',
        height: '450px',
        allowDragging: true,
        visible: false,
        content:'<div id="container2"></div>'
    });
    dialogObj.appendTo('#defaultDialog');

    let chart: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
                valueType: 'DateTime',
                labelFormat: 'y',
                intervalType: 'Years',
                edgeLabelPlacement: 'Shift',
        },
                //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',   animation: {enable: false},
            },
        ],
        //Initializing Chart title
        title: 'Inflation - Consumer Price',
    });
    chart.appendTo('#container');
    let chart2: Chart = new Chart({

        //Initializing Primary X Axis
        primaryXAxis: {
                valueType: 'DateTime',
                labelFormat: 'y',
                intervalType: 'Years',
                edgeLabelPlacement: 'Shift',
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                    { x: new Date(2007, 0, 1), y: 36 }
                ],
                xName: 'x', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                animation: {enable: false},
                yName: 'y', name: 'Germany', fill: 'blue'
            },
        ],
        width: '380',
        height:'300',
        //Initializing Chart title
        title: 'Inflation - Consumer Price',
    });
 chart2.appendTo('#container2');
 document.getElementById('targetButton').onclick = (): void => {
        dialogObj.show();
    };



