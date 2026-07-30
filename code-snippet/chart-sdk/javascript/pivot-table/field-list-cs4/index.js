var pivotTableObj = new ej.pivotview.PivotView({
    allowDeferLayoutUpdate: true,
    enginePopulated: function () {
        if (fieldlistObj) {
            fieldlistObj.update(pivotTableObj);
        }
    },
    height: 350,
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
    allowDeferLayoutUpdate: true,
    renderMode: 'Fixed',
    enginePopulated: function () {
        if (fieldlistObj.isRequiredUpdate) {
            fieldlistObj.updateView(pivotTableObj);
        }
        pivotTableObj.notify('ui-update', pivotTableObj);
        fieldlistObj.notify('tree-view-update', fieldlistObj);
    }
});
fieldlistObj.appendTo('#Static_FieldList');

