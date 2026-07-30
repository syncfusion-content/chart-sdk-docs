


import {
    Chart, ColumnSeries, Category, DataLabel,Tooltip, ILoadedEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Tooltip);
    let count: number = 0;
    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },
            tickPosition: 'Inside',
            labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        },
        chartArea: { border: { width: 0 } },
        //Initializing Primary Y Axis
        primaryYAxis:
            {
                minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 },
                majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
            },

        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y',
                dataSource: [
                    { x: 'Egg', y: 106 },
                    { x: 'Fish', y: 103 },
                    { x: 'Misc', y: 198 },
                    { x: 'Tea', y: 189 },
                    { x: 'Fruit', y: 250 }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                },
            }
        ],
        legendSettings: { visible: false },
        //Initializing Chart title
        title: 'Trade in Food Groups', tooltip: { enable: false },
        loaded: (args: ILoadedEventArgs) => {
            let columninterval = setInterval(
                () => {
                    if (document.getElementById('element')) {
                        if (count === 0) {
                            chart.series[0].dataSource = [
                                { x: 'Egg', y: 206 },
                                { x: 'Fish', y: 123 },
                                { x: 'Misc', y: 48 },
                                { x: 'Tea', y: 240 },
                                { x: 'Fruit', y: 170 }
                            ];
                            chart.animate();
                            count++;
                        }
                        else if (count === 1) {
                            chart.series[0].dataSource = [
                                { x: 'Egg', y: 86 },
                                { x: 'Fish', y: 173 },
                                { x: 'Misc', y: 188 },
                                { x: 'Tea', y: 109 },
                                { x: 'Fruit', y: 100 }
                            ];
                            chart.animate();
                            count++;
                        }
                        else if (count === 2) {
                            chart.series[0].dataSource = [
                                { x: 'Egg', y: 156 },
                                { x: 'Fish', y: 33 },
                                { x: 'Misc', y: 260 },
                                { x: 'Tea', y: 200 },
                                { x: 'Fruit', y: 30 }
                            ];
                            chart.animate();
                            count = 0;
                        }
                    } else {
                        clearInterval(columninterval);
                    }
                },
                2000
            );
        },
}, '#element');



