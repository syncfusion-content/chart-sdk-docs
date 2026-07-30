


import { AccumulationChart, AccumulationTooltip, IAccTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
import { labelData } from './datasource.ts';
AccumulationChart.Inject(AccumulationTooltip);
let accChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: labelData,
            xName: 'x',
            yName: 'y'
        }],
        tooltip:{
            enable: true
        },
         tooltipRender: (args: IAccTooltipRenderEventArgs) => {
              if (args.point.index === 3) {
              args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' +'customtext';
              args.textStyle.color = '#f48042';
        }
           }
}, '#element');



