

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { pivotData } from './datasource.ts';
import {
    PivotView, Toolbar, ToolbarArgs, IDataSet, SaveReportArgs, FieldList
} from '@syncfusion/ej2-pivotview';

PivotView.Inject(Toolbar, FieldList);

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
    saveReport: function (args: SaveReportArgs): void {
            let reports: SaveReportArgs[] = [];
            let isSaved: boolean = false;
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reports = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.report && args.reportName && args.reportName !== '') {
                reports.map(function (item: any): any {
                    if (args.reportName === item.reportName) {
                        item.report = args.report; isSaved = true;
                    }
                });
                if (!isSaved) {
                    reports.push(args);
                }
                localStorage.pivotviewReports = JSON.stringify(reports);
        }
    },
    toolbarRender: function (args: ToolbarArgs): void {
        args.customToolbar.splice(2, 0, {
                prefixIcon: 'e-pivot-format-toolbar e-icons', tooltipText: 'Custom Button',
                click: this.customButton.bind(this),
        });
        args.customToolbar.splice(3, 0, {
                prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
                click: this.toolbarClicked.bind(this),
        });
        args.customToolbar[0].align = "Left";
        args.customToolbar[1].align = "Center";
        args.customToolbar[2].align = "Right";
    },
    customButton: function(args: any): void {
        // Here you can customize the click event for custom button
    },
    toolbarClicked: function(args: any): void {
        pivotTableObj.dataSourceSettings.expandAll = !pivotTableObj.dataSourceSettings.expandAll;
    },
    toolbar: ['Save', 'Export', 'FieldList'],
    showToolbar: true,
    showFieldList: true,
    displayOption:{ view:'Both' },
    gridSettings: { columnWidth: 140 }
});
pivotTableObj.appendTo('#PivotTable');



