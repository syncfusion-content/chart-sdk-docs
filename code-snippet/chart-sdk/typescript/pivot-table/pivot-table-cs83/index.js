var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
    },
    height: 350,
    dataBound: function () {
        if (pivotTableObj && pivotTableObj.dataSourceSettings.values.length === 0) {
            pivotTableObj.pivotFieldListModule.dialogRenderer.onShowFieldList();
        }
    },
    showFieldList: true
});
pivotTableObj.appendTo('#PivotTable');

