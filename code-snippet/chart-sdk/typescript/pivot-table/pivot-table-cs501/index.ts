import { PivotView, FieldList, IDataSet, AggregateEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(FieldList);

let pivotGridObj: PivotView = new PivotView({
     dataSourceSettings: {
          expandAll: false,
          dataSource: pivotData as IDataSet[],
          columns: [{ name: 'Year' }, { name: 'Quarter' }],
          values: [{ name: 'Sold' }, { name: 'Amount' }],
          rows: [{ name: 'Country' }, { name: 'Products' }]
     },
     showFieldList: true,
     width: '100%',
     height: 500,
     aggregateCellInfo: (args: AggregateEventArgs) => {
          if (args.fieldName === 'Sold') {
               args.value = secondsToHms(args.value);
          }
     }
});
pivotGridObj.appendTo('#PivotTable');

function secondsToHms(d: number) {
     d = Number(d);
     var h = Math.floor(d / 3600);
     var m = Math.floor((d % 3600) / 60);
     var s = Math.floor((d % 3600) % 60);
     return (
          ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
     );
}