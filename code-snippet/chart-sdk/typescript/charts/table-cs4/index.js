var chart = new ej.charts.Chart({
     title: 'Population of India ( 2010 - 2016 )',
        // Initialize the chart axes
        primaryXAxis: {
            minimum: 2010, maximum: 2016,
            edgeLabelPlacement: 'Shift',
        },
        primaryYAxis: {
            minimum: 900, maximum: 1300,
            labelFormat: '{value}M',
        },
        // Initialize the chart series
        series: [
           {
                name: 'Female',
                dataSource: [
                    { x: 2010, y: 990 }, { x: 2011, y: 1010 },
                    { x: 2012, y: 1030 }, { x: 2013, y: 1070 },
                    { x: 2014, y: 1105 }, { x: 2015, y: 1138 },
                    { x: 2016, y: 1155 }
                ], xName: 'x', yName: 'y',
                marker: {
                    visible: true,
                    shape: 'Rectangle',
                    width: 2
                }
           }    
        ],
        tooltip: {
            enable: true,
            template:'#Female-Material'
        },
    width:'650px',
    height: '350px'
    }, '#element');

