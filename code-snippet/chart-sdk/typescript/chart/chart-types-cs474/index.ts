/* eslint-disable @typescript-eslint/tslint/config */
import {
    AccumulationChart, AccumulationDataLabel, AccumulationLegend,
    AccumulationTooltip, PieSeries, IAccLegendRenderEventArgs
} from '@syncfusion/ej2-charts';

AccumulationChart.Inject(AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries);


const StatisticsDetails:any = [
    { Browser: 'Chrome', Users: 37, Color: '#a16ee5' },
    { Browser: 'UC Browser', Users: 17, Color: '#f7ce69' },
    { Browser: 'iPhone', Users: 19, Color: '#55a5c2' },
    { Browser: 'Others', Users: 4, Color: '#7ddf1e' },
    { Browser: 'Opera', Users: 11, Color: '#ff6ea6' },
    { Browser: 'Android', Users: 12, Color: '#7953ac' }
];



const chart = new AccumulationChart({
    title: 'Mobile Browser Statistics',

    legendSettings: {
        visible: true,
        template: `<div style="display:flex; align-items:center; gap:8px; padding:4px 0; line-height:1.1;">
      <div style="display:flex; flex-direction:column;">
          <span class="browser-name" style="font-weight:800; font-size:14px; color:;"></span>
          <span class="browser-info" style="font-size:12px; opacity:0.85;"></span>
      </div>
   </div>`,
        itemPadding: 25,
        width: '70'
    },

    tooltip: { enable: true },

    series: [{
        radius: '65%',
        type: 'Pie',
        dataSource: StatisticsDetails,
        xName: 'Browser',
        yName: 'Users',
        pointColorMapping: 'Color',
        dataLabel: {
            visible: true,
            format: '{value}M',
            position: 'Outside'
        }
 
    }],

    legendRender: (args: IAccLegendRenderEventArgs) => {
        const points = (chart.series[0] as any).points;
        const pt = points.find((p: any) => p.x === args.text);

        args.template = args.template

        .replace('></span>', '>' + args.text + '</span>')
            .replace('></span>', '>' + pt.y + 'millon people use ' + args.text + '</span>');
    }
});

chart.appendTo('#container');
