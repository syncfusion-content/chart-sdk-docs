var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [
            { name: 'Year', caption: 'Production Year' },
            { name: 'Quarter' },
        ],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ content: 'Print', cssClass: `e-primary`, isPrimary: true });
exportBtn.appendTo('#print');

document.getElementById('print').onclick = function () {
    // Method used to print the pivot table.
    pivotTableObj.grid.print();
};
