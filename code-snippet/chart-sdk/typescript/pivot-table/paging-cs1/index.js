var remoteData = new ej.data.DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
});
var rowPager;
var columnPager;
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{
            name: 'ProductName',
            caption: 'Product Name'
        }],
        rows: [{
            name: 'ShipCountry',
            caption: 'Ship Country'
        }, {
            name: 'ShipCity',
            caption: 'Ship City'
        }],
        formatSettings: [{
            name: 'UnitPrice',
            format: 'C0'
        }],
        values: [{
            name: 'Quantity'
        }, {
            name: 'UnitPrice',
            caption: 'Unit Price'
        }],
        filters: []
    },
    width: '100%',
    height: 350,
    enablePaging: true,
    pageSettings: {
        rowPageSize: 10,
        columnPageSize: 5,
        currentColumnPage: 1,
        currentRowPage: 1
    },
    pagerSettings: {
        template: '#template'
    },
    gridSettings: {
        columnWidth: 120
    },
    dataBound: function () {
        updateTemplate();
    }
});
pivotObj.appendTo("#PivotTable");

function updateTemplate() {
    if (!ej.base.isNullOrUndefined(rowPager)) {
        rowPager.destroy();
        rowPager = null;
    }
    rowPager = new ej.grids.Pager({
        pageSize: pivotObj.pageSettings.rowPageSize,
        totalRecordsCount: pivotObj.engineModule.rowCount,
        currentPage: pivotObj.pageSettings.currentRowPage,
        pageCount: 5,
        click: rowPageClick
    });
    rowPager.appendTo('#row-pager');
    if (!ej.base.isNullOrUndefined(columnPager)) {
        columnPager.destroy();
        columnPager = null;
    }
    columnPager = new ej.grids.Pager({
        pageSize: pivotObj.pageSettings.columnPageSize,
        totalRecordsCount: pivotObj.engineModule.columnCount,
        currentPage: pivotObj.pageSettings.currentColumnPage,
        pageCount: 5,
        click: columnPageClick
    });
    columnPager.appendTo('#column-pager');
}

function rowPageClick(args) {
    pivotObj.pageSettings.currentRowPage = args.currentPage;
}

function columnPageClick(args) {
    pivotObj.pageSettings.currentColumnPage = args.currentPage;
}

