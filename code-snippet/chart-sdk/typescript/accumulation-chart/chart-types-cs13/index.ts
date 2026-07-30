

import { AccumulationChart, AccumulationDataLabel } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationDataLabel);
let piechart: AccumulationChart = new AccumulationChart({
    enableSmartLabels: true,
      series: [
            {
                dataSource: [
                    { x: 'Chrome', y: 100, text: 'Chrome (100M)<br>40%', tooltipMappingName: '40%' },
                    { x: 'UC Browser', y: 40, text: 'UC Browser (40M)<br>16%', tooltipMappingName: '16%' },
                    { x: 'Opera', y: 30, text: 'Opera (30M)<br>12%', tooltipMappingName: '12%' },
                    { x: 'Safari', y: 30, text: 'Safari (30M)<br>12%', tooltipMappingName: '12%' },
                    { x: 'Firefox', y: 25, text: 'Firefox (25M)<br>10%', tooltipMappingName: '10%' },
                    { x: 'Others', y: 25, text: 'Others (25M)<br>10%', tooltipMappingName: '10%' }
                ],
                xName: 'x',
                yName: 'y',
                startAngle: 270,
                endAngle: 90,
                explode: true,radius : '100%',
                innerRadius: '40%', tooltipMappingName: 'tooltipMappingName',
                dataLabel: {
                    visible: true, position: 'Inside' ,maxWidth:100,textWrap:'Wrap',
                    name: 'text', enableRotation:true,
                },
            }
        ],
}, '#element');


