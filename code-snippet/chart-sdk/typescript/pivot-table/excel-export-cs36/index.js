var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    },
    width: '100%',
    height: 300,
    showFieldList: true,
    allowExcelExport: true,
    gridSettings: {
        excelHeaderQueryCellInfo: function (args) {
            args.style = { rotation: dropDownListObject.value };
        },
        excelQueryCellInfo: function (args) {
            args.style = { rotation: dropDownListObject.value };
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

var degree = [90, 135, 180, 270];
var dropDownListObject = new ej.dropdowns.DropDownList({
    dataSource: degree,
    placeholder: "Select a degree",
    width: 120
});
dropDownListObject.appendTo('#ddlelement');

document.getElementById('excel').onclick = function () {
    pivotTableObj.excelExport();
};