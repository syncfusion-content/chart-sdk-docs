/**
 * Sample for Pareto chart
 */

var paretoData = [
    { x: 'Button Defect', y: 23 },
    { x: 'Pocket Defect', y: 16 },
    { x: 'Coller Defect', y: 10 },
    { x: 'Cuff Defect', y: 7 },
    { x: 'Sleeve Defect', y: 6 },
    { x: 'Other Defect', y: 2 }
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
            xName: 'x', yName: 'y', name: 'Defect', width: 2,
            paretoOptions: {
                marker: { visible: true, isFilled: true, width: 7, height: 7 },
                width: 2
            }
        }
    ],
    //Initializing Chart title
    title: 'Pareto chart - Defects in Shirts',
    legendSettings: { visible: true },
    //Initializing User Interaction
    tooltip: {
        enable: true,
        shared: true
    },
    pointRender: function (args) {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
});
chart.appendTo('#element');