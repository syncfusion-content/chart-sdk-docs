var headerTooltip;
var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    }, 
    dataBound: function () {
        if (!headerTooltip) {
            headerTooltip = new ej.popups.Tooltip({
                target: 'td.e-rowsheader,th.e-columnsheader', beforeRender: beforeRender
            });
            headerTooltip.appendTo(pivotTableObj.element);
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

// Method used to customize the tooltip content while hovering each row and column headers in the pivot table.
function beforeRender(args) {
    if (args.target.parentElement.querySelector('.e-rowsheader')) {
        // Here you can set custom content for row header(s) tooltip from its cell information.
        var index = Number(args.target.getAttributeNode('index').value);
        var colIndex = Number(args.target.getAttributeNode('data-colindex').value);
        var cell = pivotTableObj.engineModule.pivotValues[index][colIndex];
        var valueText = cell.valueSort ? cell.valueSort : '';
        if (cell.formattedText !== 'Grand Total') {
            this.content =
            '<div>' +
            'FieldName: ' +
            valueText.axis +
            '</br>' +
            'Text: ' +
            cell.formattedText +
            '</div>';
        } else {
            this.content =
            '<div>' +
            'FieldName: ' +
            valueText.uniqueName +
            '</br>' +
            'Text: ' +
            cell.formattedText +
            '</div>';
        }
    } else {
        // Here you can set custom content for column header(s) tooltip from its cell information.
        if (args.target.querySelector('.e-cellvalue')) {
            this.content = args.target.querySelector('.e-cellvalue').innerText;
        } else if (args.target.querySelector('.e-headertext')) {
            this.content = args.target.querySelector('.e-headertext').innerText;
        } else if (args.target.querySelector('.e-stackedheadercelldiv')) {
            this.content = args.target.querySelector('.e-stackedheadercelldiv').innerText;
        } else {
            this.content = '';
        }
    }
}