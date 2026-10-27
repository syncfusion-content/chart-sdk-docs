import {
    Category,
    Chart,
    ColumnSeries,
    DataLabel,
    IAxisMultiLabelRenderEventArgs,
    Legend,
    MultiLevelLabel
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend, DataLabel, MultiLevelLabel);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        // Multi-level labels: two groups by index range
        multiLevelLabels: [{
            categories: [
                // Start and end accept number, date, or string values
                { start: -0.5, end: 3.5, text: 'Half Yearly 1' },
                { start: 3.5, end: 7.5, text: 'Half Yearly 2' }
            ],
            border: { type: 'Rectangle', color: '#BDBDBD', width: 1 },
            alignment: 'Center'
        }]
    },
    primaryYAxis: {
        title: 'Gold Medals'
    },
    legendSettings: { visible: false },
    title: 'Olympic Medals',
    series: [{
        dataSource: [
            { country: 'USA', gold: 50 }, { country: 'China', gold: 40 },
            { country: 'Japan', gold: 70 }, { country: 'Australia', gold: 60 },
            { country: 'France', gold: 50 }, { country: 'Germany', gold: 40 },
            { country: 'Italy', gold: 40 }, { country: 'Sweden', gold: 30 }
        ],
        type: 'Column',
        xName: 'country',
        yName: 'gold',
        name: 'Gold'
    }],
    // axisMultiLabelRender: customize or cancel multi-level labels at render time
    axisMultiLabelRender: (args: IAxisMultiLabelRenderEventArgs): void => {
        console.log('Axis MultiLabel Render Event was triggered');
    }
}, '#element');