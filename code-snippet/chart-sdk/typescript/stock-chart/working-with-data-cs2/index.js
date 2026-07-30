var checked = false;
var stockChart = new ej.charts.StockChart({
    series: [
        {
            type: 'Candle',
            animation: { enable: true },
            bearFillColor: '#2ecd71', bullFillColor: '#e74c3d',
        }
    ],
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
            });
            loadBtn.appendTo(btnElem);

            loadBtn.element.addEventListener('click', function () {
                checked = !checked;
                if (checked) {
                    stockChart.series[0].dataSource = chartData;
                }
                stockChart.refresh();
            });
        }
    }
});
stockChart.appendTo('#element');

