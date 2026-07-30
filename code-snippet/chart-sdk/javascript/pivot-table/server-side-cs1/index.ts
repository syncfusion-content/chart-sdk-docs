import { PivotView, GroupingBar } from '@syncfusion/ej2-pivotview';

PivotView.Inject(GroupingBar);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        url: 'https://services.syncfusion.com/js/production/api/pivot/post',
        mode: 'Server',
        expandAll: true,
        enableSorting: true,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }
        ],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
        filters: []
    },
    // Attach an Authorization header before each server call
    beforeServiceInvoke: function (args: any) {
        const token = getAuthToken(); // obtain securely at runtime

        args.internalProperties = args.internalProperties || {};
        args.internalProperties.headers = {
            ...(args.internalProperties.headers || {}),
            'Authorization': `Bearer ${token}`
        };
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');

function getAuthToken() {
    // Retrieve and return a valid auth token securely
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
}
