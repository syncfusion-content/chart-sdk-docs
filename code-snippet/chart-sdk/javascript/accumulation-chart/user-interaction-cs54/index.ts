


import { Chart, ColumnSeries, Category, Crosshair } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Crosshair);
let chartData: Object[] = [
      { country: "USA", gold: 50 },
      { country: "China", gold: 40 },
      { country: "Japan", gold: 70 },
      { country: "Australia", gold: 60 },
      { country: "France", gold: 50 },
      { country: "Germany", gold: 40 },
      { country: "Italy", gold: 40 },
      { country: "Sweden", gold: 30 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        //Category in primary X Axis
        valueType: 'Category',
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],
    crosshair: { enable: true, line: { color: 'red' }, lineType: 'Vertical', highlightCategory: true },

}, '#element');



