var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: Group_Data,
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Product_ID', caption: 'Product ID' }],
    rows: [{ name: 'Date', caption: 'Date' }],
    values: [
      { name: 'Sold', caption: 'Unit Sold' },
      { name: 'Amount', caption: 'Sold Amount' },
    ],
    formatSettings: [{ name: 'Amount', format: 'C' }],
    groupSettings: [
      { name: 'Product_ID', type: 'Number', rangeInterval: 3 },
      {
        name: 'Date',
        type: 'Date',
        groupInterval: ['Years', 'Months'],
        startingAt: new Date(2015, 6, 1),
        endingAt: new Date(2017, 6, 31),
      },
    ],
        filters: []
    },
    showGroupingBar: true,
    allowGrouping: true,
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

