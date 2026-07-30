var chartData = [
    { Month: 'January', Value: 19173 },
    { Month: 'February', Value: 17726 },
    { Month: 'March', Value: 19874 },
    { Month: 'April', Value: 19391 },
    { Month: 'May', Value: 20072 },
    { Month: 'June', Value: 19233 }
];

var hasData = false;

var chart = new ej.charts.Chart({
    title: 'Milk Production in US - 2025',
    subTitle: 'Source: nass.usda.gov',
    primaryXAxis: { valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } },
    primaryYAxis: { title: 'Production (in million pounds)', titleStyle: { fontWeight: '600' }, majorTickLines: { width: 0 }, lineStyle: { width: 0 } },
    series: [{
        dataSource: [],
        xName: 'Month',
        yName: 'Value',
        type: 'Line',
        marker:
        {
            visible: true,
            width: 7,
            height: 7
        },
        width: 2,
    }],
    chartArea: {
        border: { width: 0 }
    },
    tooltip: { enable: true, header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' },
    animation: { enable: true },
    noDataTemplate: '<div id="noDataTemplateContainer" class="light-bg">' +
        '<div class="template-align">' +
        '<img src="no-data.png" alt="No Data"/>' +
        '</div>' +
        '<div class="template-align">' +
        '<p style="font-size: 15px; margin: 10px 0 0;"><strong>No data available to display.</strong></p>' +
        '</div>' +
        '<div class="template-align">' +
        '<button id="loadDataBtn" style="margin-top: 15px;"></button>' +
        '</div>' +
        '</div>',
    loaded: function (args) {
        var btnElem = document.getElementById('loadDataBtn');
        if (btnElem) {
            var loadBtn = new ej.buttons.Button({
                content: 'Load Data',
                iconCss: 'e-icons e-refresh',
                cssClass: 'e-outline',
                isPrimary: false
            }, btnElem);

            loadBtn.element.addEventListener('click', function () {
                hasData = true;
                chart.series[0].dataSource = chartData;
                chart.noDataTemplate = '';
                chart.refresh();
            });
        }
    }
}, '#element');

