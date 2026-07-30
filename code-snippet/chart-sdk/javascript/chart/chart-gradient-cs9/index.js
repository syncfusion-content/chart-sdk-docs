var OrdersData = [
    { Month: "Jan", Orders: 24 },
    { Month: "Feb", Orders: 30 },
    { Month: "Mar", Orders: 27 },
    { Month: "Apr", Orders: 34 },
    { Month: "May", Orders: 41 },
    { Month: "Jun", Orders: 37 },
    { Month: "Jul", Orders: 49 },
    { Month: "Aug", Orders: 45 },
    { Month: "Sep", Orders: 39 },
    { Month: "Oct", Orders: 46 },
    { Month: "Nov", Orders: 54 },
    { Month: "Dec", Orders: 52 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        majorGridLines: {
            width: 0
        }
    },
    primaryYAxis: {
        lineStyle: {
            width: 0
        },
        majorTickLines: {
            width: 0
        }
    },
    series: [{
        dataSource: OrdersData,
        xName: 'Month', yName: 'Orders',
        type: 'Spline',
        marker: {
            visible: true
        },
        trendlines: [
            {
                type: 'Linear',
                width: 3,
                name: 'Trend',
                radialGradient: {
                    cx: 0.5, cy: 0.5, r: 0.5,
                    fx: 0.5, fy: 0.5,
                    gradientColorStop: [
                        { color: '#F97316', offset: 0, opacity: 1 },
                        { color: '#4F46E5', offset: 100, opacity: 1 }
                    ]
                }
            }
        ]
    }],
    legendSettings: {
        visible: true
    },
    title: 'Retail Orders Processed'
}, '#element');
