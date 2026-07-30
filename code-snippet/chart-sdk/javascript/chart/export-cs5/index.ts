import { Chart, ColumnSeries, LineSeries, DateTime, Category, Legend, Export, AccumulationChart, AccumulationLegend, PieSeries, AccumulationDataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, LineSeries, Category, DateTime, Legend, Export);
AccumulationChart.Inject(AccumulationLegend, PieSeries, AccumulationDataLabel);
import { EmitType } from '@syncfusion/ej2-base';

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Line',
            dataSource: [{ x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
            { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
            { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
            { x: new Date(2011, 0, 1), y: 70 }
            ],
            xName: 'x', width: 2, yName: 'y', name: 'Germany',
            marker: { visible: true, width: 10, height: 10 },
        },
        {
            type: 'Line',
            dataSource: [{ x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
            { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
            { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 },
            { x: new Date(2011, 0, 1), y: 84 }
            ],
            xName: 'x', width: 2, yName: 'y', name: 'England',
            marker: { visible: true, width: 10, height: 10 },
        }
    ],
    title: 'Medal Count',
}, '#element');
let chart1: Chart = new Chart({
    primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }

    },
    primaryYAxis:
    {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
    },
    series: [
        {
            type: 'Column',
            dataSource: [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
            { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }],
            xName: 'x', width: 2,
            yName: 'y'
        }
    ],
    title: 'Sales Comparision',
}, '#element1');
let pie: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [{ x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
            { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
            { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
            { x: 'Insurance', y: 16, text: '16%' }],
            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                    fontWeight: '600',
                    color: '#ffffff'
                }
            },
            radius: '70%', xName: 'x',
            yName: 'y', startAngle: 0,
            endAngle: 360,
            name: 'Project'
        }
    ],
    enableSmartLabels: true,
    legendSettings: {
        visible: true
    },
    tooltip: { enable: false },
    title: 'Project Cost Breakdown'
});
pie.appendTo('#element2');

document.getElementById('print').onclick = () => {
    chart.exportModule.export('PDF', 'Chart', null, [chart, chart1, pie], null, null, true, undefined, undefined, true);
};