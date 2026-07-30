    var count = 0;
    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1,
            tickPosition: 'Inside',
            labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0, maximum: 300, interval: 50, 
            labelStyle: { color: 'transparent' }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y',
                dataSource: [
                    { x: 'Egg', y: 106, text: 'Bangaladesh' },
                    { x: 'Fish', y: 103, text: 'Bhutn' },
                    { x: 'Misc', y: 198, text: 'Nepal' },
                    { x: 'Tea', y: 189, text: 'Thiland' },
                    { x: 'Fruit', y: 250, text: 'Malaysia' }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                },
            }
        ],
        legendSettings: { visible: false },
    }, '#element');

