var pivotTableObj = new ej.pivotview.PivotView({
    height: 300,
    enginePopulated: function () {
        if (fieldlistObj) {
            fieldlistObj.update(pivotTableObj);
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var fieldlistObj = new ej.pivotview.PivotFieldList({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    renderMode: 'Fixed',
    showValuesButton: true,
    enginePopulated: function () {
        fieldlistObj.updateView(pivotTableObj);
    }
});
fieldlistObj.appendTo('#Static_FieldList');

