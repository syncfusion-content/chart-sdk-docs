var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    height: 350,
    displayOption: { view: 'Chart' },
    chartSettings: {
        chartSeries: { type: 'Column' },
        multiLevelLabelRender(args) {
            args.alignment = 'Near';
            args.textStyle = { fontFamily: 'Bold', fontWeight: '400', size: '16px', color: 'red' };
            if (args.text === ' + United Kingdom') {
                args.text = 'Text Changed';
                args.textStyle = { fontFamily: 'Bold', fontWeight: '800', size: '16px', color: 'Blue' };
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

