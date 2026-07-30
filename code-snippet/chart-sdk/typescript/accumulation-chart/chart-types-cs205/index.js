var stepData = [
    { x: 2005, y: 370 }, { x: 2006, y: 378 },
    { x: 2007, y: 416 }, { x: 2008, y: 404 },
    { x: 2009, y: undefined }, { x: 2010, y: 376 },
    { x: 2011, y: 365 }, { x: 2012, y: 350 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2004, 
        maximum: 2013,
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
    },
    series:[{
        dataSource: stepData,
        xName: 'x', yName: 'y',
        type: 'StepLine',
        width: 2,
        marker: { visible: true, width: 7, height: 7, isFilled: true },
        emptyPointSettings: {
            mode: 'Average',
            fill: '#800000'
        }
    }],
    title: 'CO2 - Intensity Analysis'
}, '#element');

