import { PivotView, ExcelExport, FieldList, IDataSet, AggregateTypes, AggregateEventArgs, SummaryTypes } from '@syncfusion/ej2-pivotview';
import { L10n } from '@syncfusion/ej2-base';
import { pivotData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

PivotView.Inject(FieldList, ExcelExport);
L10n.load({
    'en-US': {
        pivotview: {
            CustomAggregateType1: 'Custom Aggregate Type 1',
            CustomAggregateType2: 'Custom Aggregate Type 2'
        },
        pivotfieldlist: {
            CustomAggregateType1: 'Custom Aggregate Type 1',
            CustomAggregateType2: 'Custom Aggregate Type 2'
        }
    }
});
const SummaryType: string[] = [
    'Sum',
    'Count',
    'DistinctCount',
    'Avg',
    'CustomAggregateType1',
    'CustomAggregateType2'
];
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        expandAll: true,
        dataSource: pivotData as IDataSet[],
        columns: [{ name: 'Year' }],
        values: [{ name: 'Sold', type: 'CustomAggregateType1' as SummaryTypes }, { name: 'Amount', type: 'CustomAggregateType2' as SummaryTypes }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    },
    width: '100%',
    height: 300,
    showFieldList: true,
    allowExcelExport: true,
    dataBound: function (): void {
        pivotTableObj.getAllSummaryType = function () {
            return SummaryType as AggregateTypes[];
        };
        pivotTableObj.pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
        pivotTableObj.pivotFieldListModule.getAllSummaryType = function () {
            return SummaryType as AggregateTypes[];
        };
    },
    aggregateCellInfo: function (args: AggregateEventArgs): void {
        if (args.aggregateType === 'CustomAggregateType1' as SummaryTypes) {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2' as SummaryTypes) {
            args.value = args.value / 100;
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function (): void {
    pivotTableObj.excelExport();
};