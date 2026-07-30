

import { PivotView, VirtualScroll } from '@syncfusion/ej2-pivotview';

PivotView.Inject(VirtualScroll);
var pivotTableObj = new PivotView({
    dataSourceSettings: {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer]', caption: 'Customer' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ],
            filters: [
                { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
            ],
            formatSettings: [{ name: '[Measures].[Internet Sales Amount]', format: 'C0' }]
    },
    height: 350,
    enableVirtualization: true
});
pivotTableObj.appendTo('#PivotTable');



