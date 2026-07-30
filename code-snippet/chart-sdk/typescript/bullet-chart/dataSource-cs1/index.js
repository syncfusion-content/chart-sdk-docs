 var localData = [
       {
            value: 5, comparativeMeasureValue: 7.5,
            category: '2001'
        },
        {
            value: 7, comparativeMeasureValue: 5,
            category: '2002'
        },
        {
            value: 10, comparativeMeasureValue: 6,
            category: '2003'
        },
        {
            value: 5, comparativeMeasureValue: 8,
            category: '2004'
        },
        {
            value: 12, comparativeMeasureValue: 5,
            category: '2005'
        },
        {
            value: 8, comparativeMeasureValue: 6,
            category: '2006'
        }
    ];
var chart = new ej.charts.BulletChart({
        dataSource: localData,
        animation: { enable: false },
        valueField: 'value',
        targetField: 'comparativeMeasureValue',
        title: 'Profit in %',
        height: '400',
        ranges: [{ end: 5 },
            { end: 15 },
            { end: 20 }
        ],
        minimum: 0, maximum: 20, interval: 5,
}, '#element');


