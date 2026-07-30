var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { 'x': 'Net-tution', y: 21, text: '21%' },
                { 'x': 'Private Gifts', y: 8, text: '8%' },
                { 'x': 'All Other', y: 9, text: '9%' },
                { 'x': 'Local Revenue', y: 4, text: '4%' },
                { 'x': 'State Revenue', y: 21, text: '21%' },
                { 'x': 'Federal Revenue', y: 16, text: '16%' },
                { 'x': 'Self-supporting Operations', y: 21, text: '21%' },
            ],
            xName: 'x',
            yName: 'y',
            startAngle: 0,
            endAngle: 360,
            innerRadius: '40%',      
        }
    ],
    //Initializing Legend
    legendSettings: {
        visible: true,
        position: 'Right',
        height: '44%',
        width: '64%',
        textWrap:'Wrap',
        maximumLabelWidth:60,
    },

}, '#element');

