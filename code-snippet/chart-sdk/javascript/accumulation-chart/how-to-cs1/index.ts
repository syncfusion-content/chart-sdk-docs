


import { Chart, LineSeries, getElement } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries);
let series1: Object[] = [];
let value: number = 10;
let i: number;
let intervalId: number;

for (i = 0; i < 50; i++) { // Data update
    if (Math.random() > .5) {
        value += Math.random() * 2.0;
    }
    series1[i] = { x: i, y: value };
}

let chart: Chart = new Chart({
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

    let setTimeoutValue: number = 100;
    intervalId = setInterval(
        (): void => {
if (getElement('container') === null) {
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


