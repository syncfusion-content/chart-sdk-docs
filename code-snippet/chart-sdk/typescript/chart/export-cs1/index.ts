


import { AccumulationChart,Export }  from '@syncfusion/ej2-charts';
AccumulationChart.Inject(Export);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
            { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
            { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }],
            radius: '100%',
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');


    document.getElementById('print').onclick = () => {
        piechart.exportModule.export('PNG', 'result');
    };



