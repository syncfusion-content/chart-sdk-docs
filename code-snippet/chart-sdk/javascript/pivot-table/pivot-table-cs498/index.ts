import { PivotView, FieldList, IDataSet, AggregateTypes } from '@syncfusion/ej2-pivotview';
import { L10n } from '@syncfusion/ej2-base';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);
L10n.load({
     'en-US': {
          pivotview: {
               CustomAggregateType1: 'Custom Aggregate Type 1',
               CustomAggregateType2: 'Custom Aggregate Type 2',
          },
          pivotfieldlist: {
               CustomAggregateType1: 'Custom Aggregate Type 1',
               CustomAggregateType2: 'Custom Aggregate Type 2',
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
let pivotObj: PivotView = new PivotView({
     dataSourceSettings: {
          expandAll: false,
          dataSource: pivotData as IDataSet[],
          columns: [{ name: 'Year' }, { name: 'Quarter' }],
          values: [{ name: 'Sold' }, { name: 'Amount' }],
          rows: [{ name: 'Country' }, { name: 'Products' }],
          formatSettings: [{ name: 'Amount', format: 'C0' }],
          subTotalsPosition: 'Bottom'
     },
     width: '100%',
     height: 300,
     showFieldList: true,
     dataBound: function () {
          pivotObj.getAllSummaryType = function () {
               return SummaryType as AggregateTypes[];
          };
          pivotObj.pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
          pivotObj.pivotFieldListModule.getAllSummaryType = function () {
               return SummaryType as AggregateTypes[];
          };
     },
     aggregateCellInfo(args) {
          if (args.aggregateType === 'CustomAggregateType1') {
               args.value = args.value * 100;
          }
          if (args.aggregateType === 'CustomAggregateType2') {
               args.value = args.value / 100;
          }
     }
});
pivotObj.appendTo('#PivotTable');