import {
    Sparkline,
    SparklineTooltip
} from '@syncfusion/ej2-charts';

Sparkline.Inject(SparklineTooltip);

let dateTimeData: Object[] = [
    { x: new Date(2018, 0, 1), y: 4 },
    { x: new Date(2018, 0, 2), y: 4.5 },
    { x: new Date(2018, 0, 3), y: 7 },
    { x: new Date(2018, 0, 4), y: 6 },
    { x: new Date(2018, 0, 5), y: 6.5 },
    { x: new Date(2018, 0, 6), y: 5.5 },
    { x: new Date(2018, 0, 7), y: 4 },
    { x: new Date(2018, 0, 8), y: 7.5 },
    { x: new Date(2018, 0, 9), y: 6.5 },
    { x: new Date(2018, 0, 10), y: 7.5 },
    { x: new Date(2018, 0, 11), y: 4 },
    { x: new Date(2018, 0, 12), y: 6 },
    { x: new Date(2018, 0, 13), y: 4.5 },
    { x: new Date(2018, 0, 14), y: 5 },
    { x: new Date(2018, 0, 15), y: 7 }
];

let categoryData: Object[] = [
    { x: 'Robert', y: 60 },
    { x: 'Andrew', y: 65 },
    { x: 'Suyama', y: 70 },
    { x: 'Michael', y: 80 },
    { x: 'Janet', y: 55 },
    { x: 'Davolio', y: 90 },
    { x: 'Fuller', y: 75 },
    { x: 'Nancy', y: 85 },
    { x: 'Margaret', y: 65 },
    { x: 'Steven', y: 95 },
    { x: 'Laura', y: 50 },
    { x: 'Anne', y: 35 }
];

let numericData: Object[] = [
    { x: 1, y: 12 },
    { x: 2, y: 5 },
    { x: 3, y: 10 },
    { x: 4, y: 7 },
    { x: 5, y: 15 },
    { x: 6, y: 9 },
    { x: 7, y: 20 }
];

let dateTimeSparkline: Sparkline = new Sparkline({
    width: '165px',
    height: '100px',
    type: 'Column',
    valueType: 'DateTime',
    dataSource: dateTimeData,
    xName: 'x',
    yName: 'y',
    fill: '#00BDAE',
    dataLabelSettings: {
        visible: ['All'],
        offset: {
            x: 0,
            y: -5
        }
    },
    tooltipSettings: {
        visible: true,
        format: '${x} : ${y} hours'
    }
});

dateTimeSparkline.appendTo('#datetime-sparkline');

let categorySparkline: Sparkline = new Sparkline({
    width: '165px',
    height: '100px',
    type: 'Column',
    valueType: 'Category',
    dataSource: categoryData,
    xName: 'x',
    yName: 'y',
    fill: '#00BDAE',
    tooltipSettings: {
        visible: true,
        format: '${x} : ${y}%'
    }
});

categorySparkline.appendTo('#category-sparkline');

let numericSparkline: Sparkline = new Sparkline({
    width: '165px',
    height: '100px',
    type: 'Column',
    valueType: 'Numeric',
    dataSource: numericData,
    xName: 'x',
    yName: 'y',
    fill: '#00BDAE',
    tooltipSettings: {
        visible: true,
        format: 'Trip ${x} : $${y}'
    }
});

numericSparkline.appendTo('#numeric-sparkline');