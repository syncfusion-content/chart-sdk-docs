import {
    Category,
    Chart,
    ColumnSeries,
    Legend,
    ISeriesRenderEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category', title: 'Countries' },
    primaryYAxis: { title: 'Medals' },
    title: 'Olympic Medals',
    selectionMode: 'Point',
    series: [
        {
            dataSource: [
                { country: 'USA', gold: 50, silver: 70, bronze: 45 },
                { country: 'China', gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France', gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'gold',
            name: 'Gold'
        },
        {
            dataSource: [
                { country: 'USA', gold: 50, silver: 70, bronze: 45 },
                { country: 'China', gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France', gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'silver',
            name: 'Silver'
        },
        {
            dataSource: [
                { country: 'USA', gold: 50, silver: 70, bronze: 45 },
                { country: 'China', gold: 40, silver: 60, bronze: 55 },
                { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
                { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
                { country: 'France', gold: 50, silver: 45, bronze: 35 },
                { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
                { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
                { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
            ],
            type: 'Column',
            xName: 'country',
            yName: 'bronze',
            name: 'Bronze'
        }
    ],
    // seriesRender: customize series appearance before rendering
    seriesRender: (args: ISeriesRenderEventArgs): void => {
        console.log('Series render event was triggered');
        const palette = ['#f9c74f', '#90be6d', '#577590'];
        args.series.fill = palette[args.series.index] || '#7f8c8d';
        args.series.opacity = 0.9;
        args.series.border = { width: 1, color: '#ffffff' };
        args.series.columnWidth = 0.6;
        (args.series as any).cornerRadius = { topLeft: 6, topRight: 6 };
    }
}, '#element');