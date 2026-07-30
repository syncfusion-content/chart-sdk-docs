function GetDateTimeData(start, end, min, max, inc) {
    var series1 = [];
    var point = {};
    var value = 100;
    var date;
    inc = inc ? inc : 1;
    for (var i = 0; start <= end; i += inc) {
        date = start.getTime();
        if (min || max) {
            value = getRandomInt(min, max);
        }
        else {
            if (Math.random() > 0.5) {
                value += Math.random();
            }
            else {
                value -= Math.random();
            }
        }
        point = { x: new Date(date), y: value };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point);
    }
    return series1;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var range = new ej.charts.RangeNavigator({
    valueType: 'DateTime',
    intervalType: 'Months',
    labelFormat: 'MMM',
    value: [new Date(2018, 4, 1), new Date(2018, 8, 1)],
    dataSource: GetDateTimeData(new Date(2018, 0, 1), new Date(2019, 0, 1)),
    xName: 'x', yName: 'y'
});
range.appendTo('#element');