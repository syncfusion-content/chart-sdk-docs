

import { PivotView, IDataSet, PivotChart, ChartSeriesCreatedEventArgs } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(PivotChart);
let pivotTableObj: PivotView = new PivotView({
        dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
    },
    displayOption: { view: 'Chart' },
    chartSettings: {
        value: 'Amount', chartSeries: { type: 'Column' },
        multiLevelLabelRender(args) {
            args.alignment = 'Near';
            args.textStyle = { fontFamily: 'Bold', fontWeight: '400', size: '16px', color: 'red' };
            if (args.text === ' + United Kingdom') {
                args.text = 'Text Changed';
                args.textStyle = { fontFamily: 'Bold', fontWeight: '800', size: '16px', color: 'Blue' };
            }
        }
    },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



