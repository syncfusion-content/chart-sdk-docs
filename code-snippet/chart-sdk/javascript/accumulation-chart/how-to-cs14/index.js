
var chart = new ej.charts.AccumulationChart({
     series: [
            {
                dataSource: [
                    { 'x': 'Chrome', y: 37 }, { 'x': 'UC Browser', y: 17 },
                    { 'x': 'iPhone', y: 19 }, { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11 }
                ],
                dataLabel:{
                  visible:true
                },
                radius: '70%', xName: 'x',
                yName: 'y', startAngle: 0,
                endAngle: 360, innerRadius: '0%'
            }
        ],
        enableSmartLabels: true,
        legendSettings: {
            visible: false,
        },
        // Initialize tht tooltip
        tooltip: { enable: true },
        title: 'Mobile Browser Statistics',
         tooltipRender: function(args) {
           var value  = args.point.y / args.series.sumOfPoints * 100;
           args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
        },
        width:'650px',
        height: '350px'
    }, '#element');

