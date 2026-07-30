var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        expandAll: false,
        dataSource: pivotData,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold' }, { name: 'Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }]
    },    
    showFieldList: true,
    width: '100%',
    height: 500,
    aggregateCellInfo: function (args) {
        if (args.fieldName === 'Sold') {
            args.value = secondsToHms(args.value);
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    return (
         ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
    );
}

