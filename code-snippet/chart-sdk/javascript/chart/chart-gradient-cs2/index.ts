
import { Chart, ScatterSeries, Category, LineSeries, SplineSeries, Tooltip, Crosshair, Legend, DateTime, Trendlines } from '@syncfusion/ej2-charts';
Chart.Inject(ScatterSeries, LineSeries, SplineSeries, Trendlines, Category, Tooltip, Crosshair, Legend, DateTime);

const OrdersData = [
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

let chart: Chart = new Chart({
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
                linearGradient: {
                    x1: 0, y1: 0,
                    x2: 1, y2: 0,
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
