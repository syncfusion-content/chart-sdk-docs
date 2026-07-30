

import { PivotView, IDataSet, GroupingBar, FieldList, Toolbar, NumberFormatting,
    ConditionalFormatting, PDFExport, ExcelExport, PivotActionBeginEventArgs, SaveReportArgs, FetchReportArgs, LoadReportArgs, RemoveReportArgs, RenameReportArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList, Toolbar, PDFExport, ExcelExport, ConditionalFormatting);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    showFieldList: true,
    displayOption: { view: 'Both' },
    toolbar: ['New', 'Save', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'MDX', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    showToolbar: true,
    actionBegin: (args: PivotActionBeginEventArgs) => {
        if (args.actionName == 'Add new report' || args.actionName == 'Save current report') {
            args.cancel = true;
        }
    },
    saveReport: function (args: SaveReportArgs): void {
        let reports: SaveReportArgs[] = [];
        let isSaved: boolean = false;
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reports = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            let report = JSON.parse(args.report);
            report.dataSourceSettings.dataSource = [];
            report.pivotValues = [];
            args.report = JSON.stringify(report);
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
    fetchReport: function (args: FetchReportArgs): void {
        let reportCollection: string[] = [];
        let reeportList: string[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item: any): void { reeportList.push(item.reportName); });
        args.reportName = reeportList;
    },
    loadReport: function (args: LoadReportArgs): void {
        let reportCollection: string[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item: any): void {
            if (args.reportName === item.reportName) {
                args.report = item.report;
            }
        });
        if (args.report) {
            let report = JSON.parse(args.report);
            report.dataSourceSettings.dataSource = pivotTableObj.dataSourceSettings.dataSource;
            pivotTableObj.dataSourceSettings = report.dataSourceSettings;
        }
    },
    removeReport: function (args: RemoveReportArgs): void {
        let reportCollection: any[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        for (let i: number = 0; i < reportCollection.length; i++) {
            if (reportCollection[i].reportName === args.reportName) {
                reportCollection.splice(i, 1);
            }
        }
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    },
    renameReport: function (args: RenameReportArgs): void {
        let reportCollection: any[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.isReportExists) {
            for (let i: number = 0; i < reportCollection.length; i++) {
                if (reportCollection[i].reportName === args.rename) {
                    reportCollection.splice(i, 1);
                }
            }
        }
        reportCollection.map(function (item: any): any { if (args.reportName === item.reportName) { item.reportName = args.rename; } });
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    },
    newReport: function (): void {
        pivotTableObj.setProperties({ dataSourceSettings: { columns: [], rows: [], values: [], filters: [] } }, false);
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



