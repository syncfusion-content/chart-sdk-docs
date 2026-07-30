var SalesData = [
    { Month: "Jan", Amount: 78 },
    { Month: "Feb", Amount: 88 },
    { Month: "Mar", Amount: 99 },
    { Month: "Apr", Amount: 92 },
    { Month: "May", Amount: 95 },
    { Month: "Jun", Amount: 102 },
    { Month: "Jul", Amount: 110 },
    { Month: "Aug", Amount: 105 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis: {
        labelFormat: '${value}k'
    },
    series: [{
        dataSource: SalesData,
        xName: 'Month', yName: 'Amount',
        name: 'Sales',
        type: 'Column',
        linearGradient: {
            x1: 0, y1: 0,
            x2: 0, y2: 1,
            gradientColorStop: [
                { color: '#4F46E5', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                { color: '#22D3EE', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
            ]
        },
        marker: {
            visible: true, isFilled: true,
            dataLabel: {
                visible: true
            }
        },
    }],
    tooltip: {
        enable: true
    },
    legendSettings: {
        visible: true
    },
    title: 'Monthly Sales Performance'
}, '#element');