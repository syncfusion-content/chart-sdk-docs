import {
    Chart,
    ColumnSeries,
    Category,
    ChartAnnotation
} from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    annotations: [
        {
            content: 'USA: 50 Gold Medals',
            region: 'Series',
            coordinateUnits: 'Point',
            x: 'USA',
            y: 50,
            horizontalAlignment: 'Near',
            verticalAlignment: 'Top'
        },
        {
            content: 'Japan: 70 Gold Medals',
            region: 'Series',
            coordinateUnits: 'Point',
            x: 'Japan',
            y: 70,
            horizontalAlignment: 'Center',
            verticalAlignment: 'Middle'
        },
        {
            content: 'Germany: 40 Gold Medals',
            region: 'Series',
            coordinateUnits: 'Point',
            x: 'Germany',
            y: 40,
            horizontalAlignment: 'Far',
            verticalAlignment: 'Bottom'
        }
    ],
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
            xName: 'country',
            yName: 'gold',
            name: 'Gold',
            type: 'Column'
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
            xName: 'country',
            yName: 'silver',
            name: 'Silver',
            type: 'Column'
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
            xName: 'country',
            yName: 'bronze',
            name: 'Bronze',
            type: 'Column'
        }
    ],
    title: 'Annotation Alignment'
}, '#element');

chart.appendTo('#element');