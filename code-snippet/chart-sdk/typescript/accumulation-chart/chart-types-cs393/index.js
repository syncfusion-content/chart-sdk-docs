/**
 * Sample for Pareto chart
 */
var paretoData = [
    { x: 'Button Defect', y: 23 },
    { x: 'Pocket Defect', y: 16 },
    { x: 'Collar Defect', y: null },
    { x: 'Cuff Defect', y: 7 },
    { x: 'Sleeve Defect', y: 6 },
    { x: 'Other Defect', y: 2 },
    { x: 'Stitching Defect', y: null },
    { x: 'Zipper Defect', y: 3 },
    { x: 'Fabric Defect', y: 9 }
  ];
var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        interval: 1,
        valueType: 'Category',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Pareto',
            dataSource: paretoData,
            xName: 'x', yName: 'y', name: 'Defect', width: 2, opacity: 0.75, columnWidth: 0.4,
            paretoOptions: {
                marker: { visible: true, isFilled: true, width: 7, height: 7 },
                fill: '#F7523F',
                width: 2
            },
            cornerRadius: { topLeft: ej.base.Browser.isDevice ? 4 : 6, topRight: ej.base.Browser.isDevice ? 4 : 6 },
            emptyPointSettings: {
                mode: 'Average',
                fill: 'red',
                border: { width: 2, color: 'green' }
            }
        }
    ],
    //Initializing Chart title
    title: 'Defects in Shirts',
    legendSettings: { visible: true, enableHighlight: true },
    //Initializing User Interaction
    tooltip: {
        enable: true,
        shared: true,
        format: '${series.name} : <b>${point.y}</b>'
    }
});
chart.appendTo('#element');