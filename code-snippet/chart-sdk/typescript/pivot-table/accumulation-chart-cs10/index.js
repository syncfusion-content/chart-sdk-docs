var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Products' }],
        rows: [{ name: 'Country' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: {chartSeries: { type: 'Pie'}}
});
pivotTableObj.appendTo('#PivotTable');
var chartTypesDropDown = new ej.dropdowns.DropDownList({
    floatLabelType: 'Auto',
    change: function (args) {
        pivotTableObj.chartSettings.chartSeries.type = args.value;
    }
});
chartTypesDropDown.appendTo('#charttypes');


