var pivotTableObj = new ej.pivotview.PivotView({
           dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: []
        },
        showToolbar:true,
        toolbar:['ConditionalFormatting'],
        allowConditionalFormatting: true,
        height: 350
});
pivotTableObj.appendTo('#PivotTable');

