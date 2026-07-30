var chart = new ej.charts.Chart({
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
    }, '#container');

var chart1 = new ej.charts.Chart({

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

    },'#container1');
     var chart2 = new ej.charts.Chart({

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

    },'#container2');
    //Initialize Tab component
    var tabObj = new ej.navigations.Tab({
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
    },'#tab_default');

