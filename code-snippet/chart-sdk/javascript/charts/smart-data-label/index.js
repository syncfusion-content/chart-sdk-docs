var dataA = [{ x: 'Period 1', y: 35, text: '35%' }, { x: 'Period 2', y: 30, text: '30%' }, { x: 'Period 3', y: 32, text: '32%' }];
var dataB = [{ x: 'Period 1', y: 22, text: '22%' }, { x: 'Period 2', y: 25, text: '25%' }, { x: 'Period 3', y: 24, text: '24%' }];
var dataC = [{ x: 'Period 1', y: 14, text: '14%' }, { x: 'Period 2', y: 16, text: '16%' }, { x: 'Period 3', y: 15, text: '15%' }];
var dataD = [{ x: 'Period 1', y: 10, text: '10%' }, { x: 'Period 2', y: 11, text: '11%' }, { x: 'Period 3', y: 12, text: '12%' }];
var dataE = [{ x: 'Period 1', y: 7, text: '7%' }, { x: 'Period 2', y: 8, text: '8%' }, { x: 'Period 3', y: 6, text: '6%' }];
var dataF = [{ x: 'Period 1', y: 5, text: '5%' }, { x: 'Period 2', y: 5, text: '5%' }, { x: 'Period 3', y: 5, text: '5%' }];
var dataG = [{ x: 'Period 1', y: 4, text: '4%' }, { x: 'Period 2', y: 3, text: '3%' }, { x: 'Period 3', y: 4, text: '4%' }];
var dataH = [{ x: 'Period 1', y: 3, text: '3%' }, { x: 'Period 2', y: 2, text: '2%' }, { x: 'Period 3', y: 2, text: '2%' }];

var seriesData = [
    { name: 'Category A', data: dataA, fill: '#254061' },
    { name: 'Category B', data: dataB, fill: '#376092' },
    { name: 'Category C', data: dataC, fill: '#4f81bd' },
    { name: 'Category D', data: dataD, fill: 'CornflowerBlue' },
    { name: 'Category E', data: dataE, fill: 'LightBlue' },
    { name: 'Category F', data: dataF, fill: 'LightSteelBlue' },
    { name: 'Category G', data: dataG, fill: 'Moccasin' },
    { name: 'Category H', data: dataH, fill: 'LightGrey' }
];
var Chart = new ej.charts.Chart({
    title: 'Chart Title',
    tooltip: { enable: true },
    legendSettings: { visible: true },
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { visible: false },

    series: seriesData.map(function (item) {
        return {
            name: item.name,
            dataSource: item.data,
            xName: 'x',
            yName: 'y',
            type: 'StackingColumn',
            fill: item.fill,
            columnWidth: 0.6,
            marker: {
                dataLabel: {
                    visible: true,
                    name: 'text',
                    fill: 'Transparent',
                    labelIntersectAction: 'RelocateVertically',
                    smartLabelSettings: {
                        background: '#4f4f4f',
                        border: { color: 'black', dashArray: '2', width: 2 },
                        connectorLineStyle: { color: 'black', width: 2 },
                        pointerShape: 'Arrow',
                        offset: 0.5
                    }
                }
            }
        };
    })
}, '#element');

