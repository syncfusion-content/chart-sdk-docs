


import { Chart, LineSeries, Tooltip, getElement, Zoom, Series,IZoomCompleteEventArgs } from '@syncfusion/ej2-charts';
import { downdata } from './datasource.ts';
Chart.Inject(LineSeries, Tooltip, Zoom);

/**
 * Sample for Downsampling
 */

let interval: number;
let chart: Chart = new Chart({
        primaryXAxis: { title: 'Time (s)', majorGridLines: { width: 0 } },
        primaryYAxis: { title: 'Velocity (m/s)', majorGridLines: { width: 0 }, minimum: -15, maximum: 15, interval: 5 },
        series: [
            {
                type: 'Line', xName: 'x', yName: 'y', dataSource: downdata,
                animation: { enable: false }, width: 2
            }
        ],
        chartArea: {
            border: {
                width: 0
            }
        },
        zoomSettings: {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            mode: 'X',
            enableScrollbar: false
        },
        title: 'Indonesia - Seismograph Analysis',
        tooltip: { enable: false },
        width: '800',
        load: function (args) {
             var threshold = parseInt(args.chart.width) / 8,
              xName = args.chart.series[0].xName,
              yName = args.chart.series[0].yName,
              sampledData = largestTriangleThreeBucket(downdata, threshold, xName, yName);
             args.chart.series[0].dataSource = sampledData;
          },
          zoomComplete: (args: IZoomCompleteEventArgs): void => {
              var zoomComplete:boolean = true;
            if(chart.primaryXAxis.zoomFactor<=0.4)
            {
                chart.series[0].dataSource =downdata;
            }
            else{
               var threshold = parseInt(chart.width) / 8,
               xName = chart.series[0].xName,
               yName = chart.series[0].yName,
               sampledData = largestTriangleThreeBucket(downdata, threshold, xName, yName);
               chart.series[0].dataSource = sampledData;
            }

        }
});
chart.appendTo('#element');

function largestTriangleThreeBucket(data :any, threshold :number, xProperty:any, yProperty:any) {
    yProperty = yProperty || 0;
    xProperty = xProperty || 1;

    var m = Math.floor,
      y = Math.abs,
      f =<number>data.length;

    if (threshold >= f || 0 === threshold) {
      return data;
    }

    var n = [],
      t = 0,
      p = (f - 2) / (threshold - 2),
      c = 0,
      v,
      u,
      w;

    n[t++] = data[c];

    for (var e = 0; e < threshold - 2; e++) {
      for (var g = 0,
        h = 0,
        a = m((e + 1) * p) + 1,
        d = m((e + 2) * p) + 1,
        d = d < f ? d : f,
        k = d - a; a < d; a++) {
        g += +data[a][xProperty], h += +data[a][yProperty];
      }

      for (var g = g / k,
        h = h / k,
        a = m((e + 0) * p) + 1,
        d = m((e + 1) * p) + 1,
        k = +data[c][xProperty],
        x = +data[c][yProperty],
        c = -1; a < d; a++) {
        "undefined" != typeof data[a] &&
          (u = .5 * y((k - g) * (data[a][yProperty] - x) - (k - data[a][xProperty]) * (h - x)),
            u > c && (c = u, v = data[a], w = a));
      }

      n[t++] = v;
      c = w;
    }

    n[t++] = data[f - 1];

    return n;
  };




