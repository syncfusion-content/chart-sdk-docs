import {
    Category,
    Chart,
    ColumnSeries,
    Legend,
    Selection,
    ISelectionCompleteEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend, Selection);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Countries' },
    title: 'Olympic Medals',
    selectionMode: 'Point',
    series: [
        {
            dataSource: [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'gold',
            name: 'Gold'
        },
        {
            dataSource: [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'silver',
            name: 'Silver'
        },
        {
            dataSource: [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'bronze',
            name: 'Bronze'
        }
    ],
    selectionComplete: (args: ISelectionCompleteEventArgs): void => {
        console.log("Selection Complete event was triggered");
    }
}, '#element');