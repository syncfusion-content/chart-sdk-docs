var columnData = [{ country: "USA", gold: 50 }, { country: "China", gold: 40 }, { country: "Japan", gold: 70 },
{ country: "Australia", gold: 60 }, { country: "France", gold: 50 }, { country: "Germany", gold: 40 },
{ country: "Italy", gold: 40 }, { country: "Sweden", gold: 30 }];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    primaryYAxis: {
        title: '(m2/min)'
    },
    annotations: [{
        content: '<div id="text" style="transform: rotate(-90deg);">Speed Rate</div>',
        x: 6,
        y: 180,
        coordinateUnits: 'Pixel',
        Region: 'Chart'
    }],
    series: [{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column'
    }],
}, '#element');

