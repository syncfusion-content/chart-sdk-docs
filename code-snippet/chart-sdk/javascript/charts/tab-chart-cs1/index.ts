


import { Tab } from '@syncfusion/ej2-navigations';
import { Chart, ColumnSeries, DateTime, Legend, Tooltip, ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DateTime, Legend, Tooltip);

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
                    { x: new Date(2007, 0, 1), y: 36 }
                ],
                xName: 'x', width: 2,fill: 'orange', marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            },
        ],

        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },

    });
    chart.appendTo('#container');
     let chart1: Chart = new Chart({

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
                xName: 'x', width: 2, fill: 'red', marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            },
        ],

        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },

    });
    chart1.appendTo('#container1');
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
                xName: 'x', width: 2, fill: 'green', marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            },
        ],

        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        //Initializing User Interaction Tooltip
        tooltip: {
            enable: true
        },

    });
    chart2.appendTo('#container2');
    //Initialize Tab component
    let tabObj: Tab = new Tab({
        items: [
            {
                header: { 'text': 'Chart 1' },
                content: '#container'
            },
            {
                header: { 'text': 'Chart 2' },
                content: '#container1'
            },
            {
                header: { 'text': 'Chart 3' },
                content: '#container2'
            }
        ]
    });
    //Render initialized Tab component
    tabObj.appendTo('#tab_default');


