var chartData = [
    { x: "Jan", y: 60 }, { x: "Feb", y: 50 },
    { x: "Mar", y: 64 }, { x: "Apr", y: 63 },
    { x: "May", y: 81 }, { x: "Jun", y: 64 },
    { x: "Jul", y: 82 }, { x: "Aug", y: 96 },
    { x: "Sep", y: 78 }, { x: "Oct", y: 60 },
    { x: "Nov", y: 58 }, { x: "Dec", y: 56 }
];
var chart = new ej.charts.Chart({
        primaryXAxis: {
            title: 'Month',
            valueType: 'Category'
        },
        primaryYAxis:
        {
            title: 'Temperature (Celsius)',
            labelFormat: '{value}°C'
        },
        series: [
            {
                type: 'Line', name: 'India',
                dataSource: chartData, xName: 'x', yName: 'y', width: 2,
                //Marker shape as image
                marker: {
                    visible: true,
                    width: 10, height: 10,
                    shape: 'Image',
                    imageUrl:'sun_annotation.png'
                }
            }
        ],
        title: 'Temperature flow over months'
}, '#element');

