

import { Chart, ColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-charts';

Chart.Inject(ColumnSeries, Category, Legend, Tooltip);

let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
        minimum: 0,
        maximum: 40,
        interval: 10,
        lineStyle: {width : 0},
        minorTickLines: {width: 0},
        majorTickLines: {width : 0},
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [
                    { x: 'DEU', y: 35.5 }, { x: 'CHN', y: 18.3 }, { x: 'ITA', y: 17.6 }, { x: 'JPN', y: 13.6 },
                    { x: 'US', y: 12 }, { x: 'ESP', y: 5.6 }, { x: 'FRA', y: 4.6 }, { x: 'AUS', y: 3.3 },
                    { x: 'BEL', y: 3 }, { x: 'UK', y: 2.9 }
                ],
                xName: 'x', width: 2,
                yName: 'y'
            }
        ],
    }, '#element');

    document.getElementById('export').onclick = () => {
        let svg: any = document.querySelector("#element_svg");
        var svgData = new XMLSerializer().serializeToString(svg);
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        let ctx: any = canvas.getContext("2d");
        var img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          var imagedata = canvas.toDataURL("image/png");
          console.log(imagedata); // printed base64 in console
          canvas.remove();
        };
    };



