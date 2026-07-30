var pivotTableObj = new ej.pivotview.PivotView({
     dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
    },
     toolbarTemplate:'#template',
    showToolbar:true,
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');
var btnExpand = new ej.buttons.Button({ content: 'Expand All', cssClass: "e-primary" });
    btnExpand.appendTo('#btnexpand');
var btnCollapse = new ej.buttons.Button({ content: 'Collapse All', cssClass: "e-primary" });
    btnCollapse.appendTo('#btncollapse');
document.getElementById('btnexpand').onclick = function () {
        pivotTableObj.dataSourceSettings.expandAll = true;
    };
document.getElementById('btncollapse').onclick = function () {
        pivotTableObj.dataSourceSettings.expandAll = false;
    };    

