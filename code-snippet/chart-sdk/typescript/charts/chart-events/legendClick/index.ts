import {
    Category,
    Chart,
    ColumnSeries,
    Legend,
    ILegendClickEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Countries' },
    primaryYAxis: { minimum: 0, maximum: 80, interval: 20, title: 'Medals' },
    title: 'Olympic Medals',
    legendSettings: { visible: true, position: 'Top' },
    series: [
        {
            dataSource: [
                { country: 'USA',       gold: 50, silver: 70, bronze: 45 },
                { country: 'China',     gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan',     gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France',    gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany',   gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy',    gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden',   gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'gold',
            name: 'Gold'
        },
        {
            dataSource: [
                { country: 'USA',       gold: 50, silver: 70, bronze: 45 },
                { country: 'China',     gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan',     gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France',    gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany',   gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy',    gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden',   gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'silver',
            name: 'Silver'
        },
        {
            dataSource: [
                { country: 'USA',       gold: 50, silver: 70, bronze: 45 },
                { country: 'China',     gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan',     gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France',    gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany',   gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy',     gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden',    gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'bronze',
            name: 'Bronze'
        }
    ],
    // legendClick: fired when a legend item is clicked
    legendClick: (args: ILegendClickEventArgs): void => {
        console.log('legendClick:', {
            legendText: args.legendText,
            seriesIndex: args.series?.index,
            isVisible: args.series?.visible
        });
    }
}, '#element');