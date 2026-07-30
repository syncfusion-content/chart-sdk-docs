var pivotTableObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: pivotData,
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
            columns: [{ name: 'Year' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' },
            { name: 'Sold', caption: 'Units Sold' }],
            filters: []
        },
        allowNumberFormatting: true,
        height: 320
});
pivotTableObj.appendTo('#PivotTable');

var btn = new ej.buttons.Button({ isPrimary: true });
btn.appendTo('#Formatting');

document.getElementById('Formatting').addEventListener('click', () => {
    pivotTableObj.numberFormattingModule.showNumberFormattingDialog();
});

