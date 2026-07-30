import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
      minimum: 2004,
      maximum: 2012,
      interval: 1,
      title: 'Year'
    },
    primaryYAxis: {
      minimum: 3,
      maximum: 12,
      interval: 1,
      title: 'Percentage',
      labelFormat: '{value}%'
    },
    series: [
      {
        dataSource: chartData,
        xName: 'x', yName: 'y',
        // Series type as bar series
        type: 'Bar'
      },
      {
        dataSource: chartData,
        xName: 'x',
        yName: 'y1',
        columnWidth: 0.75,
        // Series type as bar series
        type: 'Bar',
      }
    ],
    title: 'Unemployment rate (%)'
  }, '#element');