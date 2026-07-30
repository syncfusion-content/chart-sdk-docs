

import { PivotView, IDataSet, PivotChart } from '@syncfusion/ej2-pivotview';
import { pivotData } from './datasource.ts';

PivotView.Inject(PivotChart);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['Germany'] }],
        columns: [{ name: 'Country' }, { name: 'Products' }],
        rows: [{ name: 'Year' }, { name: 'Quarter' }],
        formatSettings: [{ name: 'Amount', format: 'C' }],
        values: [{ name: 'Amount' }, { name: 'Sold' }],
        filters: []
    },
    displayOption: { view: 'Chart' },
    chartSettings: { columnHeader: 'Germany-Road Bikes', columnDelimiter: '-', chartSeries: { type: 'Doughnut' } },
    height: 350
});
pivotTableObj.appendTo('#PivotTable');



