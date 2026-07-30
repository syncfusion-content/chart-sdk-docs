

import { PivotView, IDataSet, PivotChart } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
PivotView.Inject(PivotChart);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        columns: [{ name: 'Year' }, { name: 'Products' }],
        rows: [{ name: 'Country' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    displayOption: { view: 'Chart' },
    chartSettings: { chartSeries: { type: 'Pie' } },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');
var chartTypesDropDown: DropDownList = new DropDownList({
    floatLabelType: 'Auto',
    change: function (args: ChangeEventArgs) {
        pivotTableObj.chartSettings.chartSeries.type = args.value as any;
    }
});
chartTypesDropDown.appendTo('charttypes');



