


import { ChartAnnotation, Chart, StackingColumnSeries, Category, DataLabel, Tooltip, ILoadedEventArgs,IAnnotationRenderEventArgs, Points } from '@syncfusion/ej2-charts';
Chart.Inject(StackingColumnSeries, ChartAnnotation, DataLabel, Category, Tooltip);
import { EmitType } from '@syncfusion/ej2-base';
    let i: number = 0;
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1
        },
        // Initialize the chart series
        series: [
            {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Apple', animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }, {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Orange',  animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            },
            {
                type: 'StackingColumn', xName: 'x', width: 2, yName: 'y', name: 'Grapes', animation: {enable: false},
                dataSource: [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }],
                marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
            }
        ],
        annotations:[
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'Jamesh', y: '11', coordinateUnits: 'Point', region: 'Series'
            },
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'Michael', y: '10', coordinateUnits: 'Point', region: 'Series'
            },
            {
               content: '<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>',
               x: 'John', y: '12', coordinateUnits: 'Point', region: 'Series'
            }
        ],
        // Initialize the chart title
        title: 'Fruit Consumption', tooltip: { enable: true, shared: true },
        annotationRender: (args: IAnnotationRenderEventArgs) => {
          let length = chart.series.length - 1;
          let value = chart.series[length].stackedValues.endValues[i];
          i += (i == length) ? -length : 1;
          args.content.children[0].children[0].innerHTML = value;
        }
    width:'650px',
    height: '350px'
    });
    chart.appendTo('#element');


