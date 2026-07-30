import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend);

let columnData: Object[] = [
    { country: "USA",       gold: 50, silver: 70, bronze: 45 },
    { country: "China",     gold: 40, silver: 60, bronze: 55 },
    { country: "Japan",     gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France",    gold: 50, silver: 45, bronze: 35 },
    { country: "Germany",   gold: 40, silver: 30, bronze: 22 },
    { country: "Italy",     gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden",    gold: 30, silver: 25, bronze: 27 }
];

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries',
        labelPlacement: 'OnTicks'
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series: [
        {
            dataSource: columnData,
            xName: 'country', yName: 'gold',
            name: 'Gold', type: 'Column'
        }, 
        {
            dataSource: columnData,
            xName: 'country', yName: 'silver',
            name: 'Silver', type: 'Column'
        }, 
        {
            dataSource: columnData,
            xName: 'country', yName: 'bronze',
            name: 'Bronze', type: 'Column'
        }
    ],
    title: 'Olympic Medals Comparison by Country',
    titleStyle: {
        accessibility: {
            accessibilityDescription: 'This chart shows the number of gold, silver, and bronze medals won by different countries in the Olympics.',
            accessibilityRole: 'heading'
        }
    },
    subTitle: 'Medal Comparison',
    subTitleStyle: {
        accessibility: {
            accessibilityDescription: 'The subtitle provides additional context for the Olympic medal distribution chart.',
            accessibilityRole: 'heading'
        }
    }
}, '#element');