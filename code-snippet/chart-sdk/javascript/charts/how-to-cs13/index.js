var shapes = [
   'Diamond', 'Circle','Rectangle', 'Line', 'Triangle', 'Rectangle'
   ];
var shapeRender = function(args) {
 args.shape = shapes[args.point.index];
 }
var chart = new ej.charts.Chart({
     //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Countries', valueType: 'Category',
            interval: 1
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Penetration', rangePadding: 'None',
            labelFormat: '{value}%', minimum: 0,
            maximum: 75, interval: 15
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [{ x: 'WW', y: 12, text: 'World Wide' },
                { x: 'EU', y: 5, text: 'Europe' },
                { x: 'APAC', y: 15, text: 'Pacific' },
                { x: 'LATAM', y: 6.4, text: 'Latin' },
                { x: 'MEA', y: 30, text: 'Africa' },
                { x: 'NA', y: 25.3, text: 'America' }],
                name: 'December 2007',
                marker: {
                    visible: true, width: 10, height: 10,
                    shape: 'Diamond', dataLabel: { name: 'text' }
                },
                xName: 'x', width: 2,
                yName: 'y',
            },

        ],
        //Initializing Chart title
        title: 'FB Penetration of Internet Audience',
        legendSettings: { visible: false },
        pointRender: shapeRender,
    width:'650px',
    height: '350px'
    }, '#element');

