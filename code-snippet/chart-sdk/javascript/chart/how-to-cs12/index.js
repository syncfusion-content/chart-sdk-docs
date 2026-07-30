var series1 = [];
var value = 10;
var i;
var intervalId;

for (i = 0; i < 50; i++) { // Data update
    if (Math.random() > .5) {
        value += Math.random() * 2.0;
    }
    series1[i] = { x: i, y: value };
}

var chart = new ej.charts.Chart({
    series: [
            {
                type: 'Line',
                dataSource: series1,
                xName: 'x',
                yName: 'y', animation: { enable: false }
            },
        ],
    width:'650px',
    height: '350px'
    },'#element');

    var setTimeoutValue = 100;
    intervalId = setInterval(
        function() {
if (document.getElementById('container') === null) {
        clearInterval(intervalId);
    } else {
    if (Math.random() > .5) {
        value += Math.random() * 2.0;
    }
    series1.push({ x: i, y: value });
    i++;
    series1.shift(); // Used to remove the first element
    chart.series[0].dataSource = series1;
    chart.refresh();
    }
    }, setTimeoutValue);

