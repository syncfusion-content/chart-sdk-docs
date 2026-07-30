import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let columnData: Object[] = [
    { country: "USA",       gold: 50 },
    { country: "China",     gold: 40 },
    { country: "Japan",     gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France",    gold: 50 },
    { country: "Germany",   gold: 40 },
    { country: "Italy",     gold: 40 },
    { country: "Sweden",    gold: 30 }
];

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column',
        accessibility: {
            accessibilityDescription: 'This series displays the number of gold medals won by each country in the Olympics.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'The country ${point.x} won ${point.y} gold medals.'
        }
    }],
    title: 'Olympic Medals'
}, '#element');