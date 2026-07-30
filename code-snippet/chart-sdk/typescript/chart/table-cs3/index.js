var chart = new ej.charts.Chart({
     //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1, majorGridLines: { width: 0 },
            labelIntersectAction: 'Rotate90'
        },
        //Initializing Annotations
        annotations: [{ // watermark for chart
            content: '<div id="chart_cloud" style="font-size:450%; opacity: 0.3;" >syncfusion</div>',
            x: 'Wed', y: 20, coordinateUnits: 'Point', horizontalAlignment: 'Center'
        },{ //footer for chart
            content: '<div id="chart" > <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a></div>',
            x: 400, y: 340, coordinateUnits: 'Pixel', horizontalAlignment: 'Center'
        }
        ],
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 0,
            maximum: 40,
            interval: 10,
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Spline',
                dataSource: [
                    { x: 'Sun', y: 15 }, { x: 'Mon', y: 5 },{ x: 'Tue', y: 32 },
                    { x: 'Wed', y: 15 },{ x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
                    { x: 'Sat', y: 18 },
                ],
                xName: 'x', width: 2, marker: {
                    visible: true
                },
                yName: 'y', name: 'Max Temp',
            }

        ],
        //Initializing Chart title
        title: 'NC Weather Report - 2016',
        width:'650px',
        height: '350px'
    }, '#element');

