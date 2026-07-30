import { Chart, StackingColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        interval: 1,
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Sales in Billions',
        minimum: 0,
        maximum: 400,
        interval: 100,
        labelFormat: '{value}B'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingColumn', name: 'UK',
            //Stacking group for stacked column series
            stackingGroup: 'UKAndGermany'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn', name: 'Germany',
            stackingGroup: 'UKAndGermany'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn', name: 'France',
            stackingGroup: 'FranceAndItaly'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn', name: 'Italy',
            stackingGroup: 'FranceAndItaly'
        }
    ],
    title: 'Mobile Game Market by Country'
}, '#element');