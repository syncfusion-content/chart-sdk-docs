var chartCount = 0;
var chartInstances = [];
var chartHost = document.getElementById('dynamicChartHost');
var addButton = document.getElementById('addChart');
var removeButton = document.getElementById('removeChart');
var statusElement = document.getElementById('chartStatus');

var chartData = [
    { x: 1, y: 21 },
    { x: 2, y: 24 },
    { x: 3, y: 36 },
    { x: 4, y: 38 },
    { x: 5, y: 54 },
    { x: 6, y: 57 },
    { x: 7, y: 70 }
];

function updateControls() {
    removeButton.disabled = chartInstances.length === 0;
    statusElement.textContent = chartInstances.length + ' Charts displayed.';
}

function createChart() {
    var chartElement = document.createElement('div');
    var chartId = 'dynamicChart' + chartCount;
    var chart;

    chartElement.id = chartId;
    chartElement.className = 'dynamic-chart';
    chartHost.appendChild(chartElement);

    chart = new ej.charts.Chart({
        width: '100%',
        height: '320px',
        primaryXAxis: {
            title: 'Index'
        },
        primaryYAxis: {
            title: 'Value',
            minimum: 0,
            maximum: 80,
            interval: 20
        },
        series: [{
            type: 'Line',
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            name: 'Germany',
            width: 2,
            marker: {
                visible: true
            }
        }],
        title: 'Inflation - Consumer Price (' + (chartCount + 1) + ')',
        tooltip: {
            enable: true
        }
    }, '#' + chartId);

    chartInstances.push({
        chart: chart,
        element: chartElement
    });
    chartCount++;
    updateControls();
}

function removeLastChart() {
    var item;

    if (chartInstances.length === 0) {
        return;
    }

    item = chartInstances.pop();
    item.chart.destroy();

    if (item.element.parentNode) {
        item.element.parentNode.removeChild(item.element);
    }

    updateControls();
}

addButton.onclick = function () {
    createChart();
};

removeButton.onclick = function () {
    removeLastChart();
};

updateControls();