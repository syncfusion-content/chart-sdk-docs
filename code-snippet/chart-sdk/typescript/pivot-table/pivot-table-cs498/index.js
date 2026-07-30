ej.base.L10n.load({
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
var SummaryType = [
    'Sum',
    'Count',
    'DistinctCount',
    'Avg',
    'CustomAggregateType1',
    'CustomAggregateType2'
];
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
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
            return SummaryType;
        };
        pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
        pivotObj.pivotFieldListModule.getAllSummaryType = function () {
            return SummaryType;
        };
    },
    aggregateCellInfo: function (args) {
        if (args.aggregateType === 'CustomAggregateType1') {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2') {
            args.value = args.value / 100;
        }
    }
});
pivotObj.appendTo('#PivotTable');