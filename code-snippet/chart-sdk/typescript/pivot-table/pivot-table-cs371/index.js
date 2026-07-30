var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
     height: 350,
    showGroupingBar: true,
    memberEditorOpen: function (args) {
       if(args.fieldName == 'Country') {
           args.fieldMembers = args.fieldMembers.filter((key) => {
               return (key.actualText == 'France' || key.actualText == 'Germany')
          });
       }
    },
});
pivotTableObj.appendTo('#PivotTable');

