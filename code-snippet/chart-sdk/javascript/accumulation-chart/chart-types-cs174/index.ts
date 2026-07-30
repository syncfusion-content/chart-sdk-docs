import { Chart, ColumnSeries, Category, Tooltip } from '@syncfusion/ej2-charts';
import { cylindricalData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, Tooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        interval: 1
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 10, 
        title: 'Medal Count'
    },
    series: [{
        dataSource: cylindricalData,
        xName: 'country', yName: 'gold', 
        tooltipMappingName: 'tooltipMappingName',
        // Series type as column series with cylinder shape
        type: 'Column', columnFacet: 'Cylinder'
    }],
    title: 'Olympic Gold Medal Counts - RIO',
    tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" }
}, '#element');