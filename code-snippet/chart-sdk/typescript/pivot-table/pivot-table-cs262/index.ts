

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { pivotData } from './datasource.ts';
import {
    PivotView, Toolbar, ToolbarArgs, IDataSet
} from '@syncfusion/ej2-pivotview';

PivotView.Inject(Toolbar);

let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        filters: []
    },
    height: 350,
    toolbarRender: function (args: ToolbarArgs): void {
        args.customToolbar.splice(12, 0, {
                prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
                click: this.toolbarClicked.bind(this)
        });
    },
    toolbarClicked: function(args: any): void {
        pivotTableObj.dataSourceSettings.expandAll = !pivotTableObj.dataSourceSettings.expandAll;
    },
    toolbar: ['Expand/Collapse'],
    showToolbar: true,
    displayOption:{ view:'Both' },
    gridSettings: { columnWidth: 140 }
});
pivotTableObj.appendTo('#PivotTable');



