import { Chart, StackingColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { cylindricalData } from './datasource.ts';
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
        maximum: 700,
        interval: 100,
        labelFormat: '{value}B'
    },
    //Series type as stacked column with cylinder shape
    series: [
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y',
            type: 'StackingColumn', columnFacet: 'Cylinder', name: 'UK'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y1',
            type: 'StackingColumn', columnFacet: 'Cylinder', name: 'Germany'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y2',
            type: 'StackingColumn', columnFacet: 'Cylinder', name: 'France'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y3',
            type: 'StackingColumn', columnFacet: 'Cylinder', name: 'Italy'
        }
    ],
    title: 'Mobile Game Market by Country'
}, '#element');



