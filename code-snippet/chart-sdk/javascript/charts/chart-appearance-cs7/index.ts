


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 } },
        primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        series: [
            {
                pointColorMapping: "color",
                dataSource: [
                    { x: 'Jan', y: 6.96, color: "red" },
                    { x: 'Feb', y: 8.9, color: "blue" },
                    { x: 'Mar', y: 12, color: "orange" },
                    { x: 'Apr', y: 17.5, color: "aqua" },
                    { x: 'May', y: 22.1, color: "grey" }

                ], xName: 'x', yName: 'y', type: 'Column',
                animation: { enable: false },
                cornerRadius: {
                    topLeft: 10, topRight: 10
                },
            }
        ],
        title: 'USA CLIMATE - WEATHER BY MONTH',
}, '#element');



