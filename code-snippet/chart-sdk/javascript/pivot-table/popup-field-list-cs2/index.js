var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' },],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    showFieldList: true,
    enableFieldSearching: true,
    enginePopulated: function (args) {
        Object.keys(pivotTableObj.engineModule.fieldList).forEach((key, index) => {
                if (key === 'Quarter') {
                    pivotTableObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
                }
                else if (key === 'Year') {
                    pivotTableObj.engineModule.fieldList[key].caption = 'Production Year';
                }
        });  
    }
});
pivotTableObj.appendTo('#PivotTable');

