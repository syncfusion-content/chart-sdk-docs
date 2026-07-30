


import { Chart, ScrollBar, Zoom, IScrollEventArgs, LineSeries, Tooltip, DateTime } from '@syncfusion/ej2-charts';
import { Internationalization, DateFormatOptions } from '@syncfusion/ej2-base';
Chart.Inject(DateTime, ScrollBar, Zoom, LineSeries, Tooltip);

let intl: Internationalization = new Internationalization();
let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Day',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        skeleton: 'yMMM',
        skeletonType: 'Date',
        scrollbarSettings: {
            range: {
                minimum: new Date(2009, 0, 1),
                maximum: new Date(2014, 0, 1)
            },
            enable: true,
        }
    },
    primaryYAxis: {
        title: 'Server Load',
        labelFormat: '{value}MB'
    },
    series: [{
        dataSource: GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1)),
        xName: 'x', yName: 'y',
        type: 'Line', animation: { enable: false },
    }],
    height: '450',
    title: 'Network Load',
    crosshair: { enable: true, lineType: 'Vertical' },
    tooltip: { enable: true, shared: true },
    legendSettings: { visible: true },
    scrollEnd: (args: IScrollEventArgs) => {
        if (lazymode.value === 'Range') {
            chart.series[0].dataSource = GetDateTimeData(args.currentRange.minimum as Date, args.currentRange.maximum as Date);
        }
        chart.dataBind();
    },
}, '#element');

function GetDateTimeData(start: Date, end: Date): { x: Date, y: number }[] {
    let series1: { x: Date, y: number }[] = [];
    let date: number;
    let value: number = 30;
    let option: DateFormatOptions = {
        skeleton: 'full',
        type: 'dateTime'
    };

    let dateParser: Function = intl.getDateParser(option);
    let dateFormatter: Function = intl.getDateFormat(option);
    for (let i: number = 0; start <= end; i++) {
        date = Date.parse(dateParser(dateFormatter(start)));
        if (Math.random() > .5) {
            value += (Math.random() * 10 - 5);
        } else {
            value -= (Math.random() * 10 - 5);
        }
        if (value < 0) {
            value = getRandomInt(20, 40);
        }
        let point1: { x: Date, y: number } = { x: new Date(date), y: Math.round(value) };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point1);
    }
    return series1;
} function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




