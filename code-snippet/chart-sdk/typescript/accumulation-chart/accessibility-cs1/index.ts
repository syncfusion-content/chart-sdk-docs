import { AccumulationChart, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-charts';

AccumulationChart.Inject(PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip);

let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'America', y: null },
                { x: 'England', y: 14 },
                { x: 'Germany', y: 12 }
            ],
            type: 'Pie',
            xName: 'x',
            yName: 'y',
            animation: {
                enable: false
            },
            dataLabel: {
                name: 'text',
                visible: true,
                position: 'Outside',
                fill: 'black',
                font: {
                    fontFamily: 'Times New Roman',
                    fontStyle: 'bold',
                    fontWeight: '500',
                    color: 'skyblue'
                },
                connectorStyle: {
                    type: 'Curve',
                    color: 'brown',
                    width: 3,
                    dashArray: '2,1',
                    length: '8'
                }
            },
            explode: true,
            emptyPointSettings: {
                mode: 'Average',
                fill: 'red'
            }
        }
    ],
    title: 'Empty Point as average',
    enableSmartLabels: true,
    tooltip:{ enable: true },
    legendSettings: {
        position: 'Left',
        shapePadding: 10,
        shapeHeight: 20,
        shapeWidth: 20,
        border: {
            color: 'black',
            width: 2
        }
    }
}, '#element');