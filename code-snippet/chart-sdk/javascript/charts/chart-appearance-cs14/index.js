var count = 0;

var dataSource1 = [
    { x: 'Egg', y: 106 },
    { x: 'Fish', y: 103 },
    { x: 'Misc', y: 198 },
    { x: 'Tea', y: 189 },
    { x: 'Fruit', y: 250 }
];

var dataSource2 = [
    { x: 'Egg', y: 180 },
    { x: 'Fish', y: 150 },
    { x: 'Misc', y: 120 },
    { x: 'Tea', y: 220 },
    { x: 'Fruit', y: 190 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        tickPosition: 'Inside',
        labelPosition: 'Inside',
        labelStyle: {
            color: '#ffffff'
        }
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 300,
        interval: 50,
        title: 'Sales'
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    series: [{
        type: 'Column',
        dataSource: dataSource1,
        xName: 'x',
        yName: 'y',
        name: 'Sales',
        cornerRadius: {
            bottomLeft: 10,
            bottomRight: 10,
            topLeft: 10,
            topRight: 10
        },
        animation: {
            enable: true,
            duration: 1000,
            delay: 0
        }
    }],
    legendSettings: {
        visible: false
    },
    title: 'Fluid Animation'
}, '#element');

document.getElementById('updateData').onclick = function () {
    count++;

    var updatedData = count % 2 === 0
        ? dataSource1
        : dataSource2;

    chart.series[0].dataSource = updatedData;
    chart.animate();
};