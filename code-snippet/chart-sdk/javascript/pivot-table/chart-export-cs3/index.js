var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 320,
    displayOption: { view: 'Chart' },
    chartSettings: {
        chartSeries: {
         type: 'Column'
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#chartexport');

document.getElementById('chartexport').onclick = function () {
    pivotTableObj.chartExport('PNG', 'result');
};



