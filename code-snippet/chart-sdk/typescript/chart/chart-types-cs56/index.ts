


import { AccumulationChart, PyramidSeries} from '@syncfusion/ej2-charts';
AccumulationChart.Inject(PyramidSeries);

let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pyramid',
        dataSource: [{ x: 'Australia', y: 20, text: 'Australia 20%' },
            { x: 'France', y: 22, text: 'France 22%' },
            { x: 'China', y: 23, text: 'China 23%' },
            { x: 'India', y: 24, text: 'India 24%' },
            { x: 'Japan', y: 25, text: 'Japan 25%' },
            { x: 'Germany', y: 27, text: 'Germany 27%' }],
        xName: 'x', yName: 'y',
        }],
}, '#element');



