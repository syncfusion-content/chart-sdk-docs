var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: getCSVData(),
        type: 'CSV',
        expandAll: false,
        formatSettings: [{ name: 'Total Cost', format: 'C0' }, { name: 'Total Revenue', format: 'C0' }, { name: 'Total Profit', format: 'C0' }],
        drilledMembers: [{ name: 'Item Type', items: ['Baby Food'] }],
        rows: [
            { name: 'Country' },
            { name: 'Region' }
        ],
        columns: [
            { name: 'Sales Channel' },
            { name: 'Item Type' }
        ],
        values: [
            { name: 'Total Profit' },
            { name: 'Total Cost' },
            { name: 'Total Revenue' }
        ],
        filters: []
    },
    height: 290,
    width: '100%'
});
pivotObj.appendTo('#PivotTable');
function getCSVData() {
    var dataSource = [];
    var jsonObject = csvdata.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {   
        dataSource.push(jsonObject[i].split(','));
    }
    return dataSource;
}

