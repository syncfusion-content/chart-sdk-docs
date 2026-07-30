

import { PivotView, Pager } from '@syncfusion/ej2-pivotview';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Pager as GridPager } from '@syncfusion/ej2-grids';

PivotView.Inject(Pager);

let remoteData: DataManager = new DataManager({
    url: 'https://bi.syncfusion.com/northwindservice/api/orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

let rowPager: GridPager;
let columnPager: GridPager;

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: {
        type: 'JSON',
        dataSource: remoteData,
        expandAll: true,
        columns: [{ name: 'ProductName', caption: 'Product Name' }],
        rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
        formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
        values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
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
    gridSettings: { columnWidth: 120 },
    dataBound: function () {
        updateTemplate();
    }
});
pivotObj.appendTo('#PivotTable');

function updateTemplate() {
    if (!isNullOrUndefined(rowPager)) {
        rowPager.destroy();
        rowPager = null;
    }
    rowPager = new GridPager({
        pageSize: pivotObj.pageSettings.rowPageSize,
        totalRecordsCount: pivotObj.engineModule.rowCount,
        currentPage: pivotObj.pageSettings.currentRowPage,
        pageCount: 5,
        click: rowPageClick
    });
    rowPager.appendTo('#row-pager');
    if (!isNullOrUndefined(columnPager)) {
        columnPager.destroy();
        columnPager = null;
    }
    columnPager = new GridPager({
        pageSize: pivotObj.pageSettings.columnPageSize,
        totalRecordsCount: pivotObj.engineModule.columnCount,
        currentPage: pivotObj.pageSettings.currentColumnPage,
        pageCount: 5,
        click: columnPageClick
    });
    columnPager.appendTo('#column-pager');
}

function rowPageClick(args: any) {
    pivotObj.pageSettings.currentRowPage = args.currentPage;
}

function columnPageClick(args: any) {
    pivotObj.pageSettings.currentColumnPage = args.currentPage;
}


