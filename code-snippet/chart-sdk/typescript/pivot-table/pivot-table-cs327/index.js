var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
        fieldMapping: [
                { name: 'Year', showFilterIcon: false },
                { name: 'Quarter', showSortIcon: false },
                { name: 'Country', allowDragAndDrop: false },
                { name: 'Products', showFilterIcon: false, showRemoveIcon: false },
                { name: 'Sold', showValueTypeIcon: false },
                { name: 'Amount', showValueTypeIcon: false },
            ]
    },
    height: 350,
    showGroupingBar: true,
    showFieldList: true,

});
pivotTableObj.appendTo('#PivotTable');

