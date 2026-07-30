var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
    },
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');
var pivotLayout;
var btn = new ej.buttons.Button({ isPrimary: true });
btn.appendTo('#Save');

document.getElementById('Save').addEventListener('click', () => {
    pivotLayout = pivotTableObj.getPersistData();
});

var btn = new ej.buttons.Button({ isPrimary: true });
btn.appendTo('#Load');

document.getElementById('Load').addEventListener('click', () => {
    pivotTableObj.loadPersistData(pivotLayout);
});

