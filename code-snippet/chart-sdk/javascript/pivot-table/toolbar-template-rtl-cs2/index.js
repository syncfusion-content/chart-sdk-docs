var pivotTableObj = new ej.pivotview.PivotView({
     dataSourceSettings: {
        dataSource: pivotData,
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: [],
    },
    toolbar:[{template:'#enablertl'},{template:'#disablertl'}],
    showToolbar:true,
    height: 350,
});
pivotTableObj.appendTo('#PivotTable');
var btnEnableRtl = new ej.buttons.Button({ content: 'Enable Rtl', cssClass: "e-primary" });
    btnEnableRtl.appendTo('#btnenablertl');
var btnDisableRtl = new ej.buttons.Button({ content: 'Disable Rtl', cssClass: "e-primary" });
    btnDisableRtl.appendTo('#btndisablertl');
document.getElementById('btnenablertl').onclick = function () {
        pivotTableObj.enableRtl = true;
    };
document.getElementById('btndisablertl').onclick = function () {
        pivotTableObj.enableRtl = false;
    };    

