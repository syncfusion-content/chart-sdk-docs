import {
    Chart,
    LineSeries,
    DateTime,
    Zoom
} from '@syncfusion/ej2-charts';

Chart.Inject(LineSeries, DateTime, Zoom);

const chartData: { date: Date; value: number }[] = [];
const startDate: Date = new Date(2026, 0, 1, 0, 0, 0);
const pointCount: number = 90 * 24;

for (let i: number = 0; i < pointCount; i++) {
    chartData.push({
        date: new Date(startDate.getTime() + (i * 60 * 60 * 1000)),
        value: 40 + (Math.sin(i / 24) * 10) + ((i % 12) * 0.5)
    });
}

const chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Date and time',
        labelFormat: 'MMM d',
        intervalType: 'Days',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Value',
        minimum: 20,
        maximum: 70,
        interval: 10
    },
    series: [{
        type: 'Line',
        dataSource: chartData,
        xName: 'date',
        yName: 'value',
        name: 'Reading',
        animation: {
            enable: false
        }
    }],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        enableScrollbar: true,
        mode: 'X'
    },
    legendSettings: {
        visible: false
    },
    title: 'Hourly Readings'
});

chart.appendTo('#element');

function showDateRange(
    visibleStart: Date,
    visibleEnd: Date,
    labelFormat: string,
    intervalType: string
): void {
    const minimum: number = chartData[0].date.getTime();
    const maximum: number = chartData[chartData.length - 1].date.getTime();
    const totalDuration: number = maximum - minimum;

    const start: number = Math.max(minimum, visibleStart.getTime());
    const end: number = Math.min(maximum, visibleEnd.getTime());

    if (totalDuration <= 0 || end <= start) {
        return;
    }

    const zoomFactor: number = Math.min(
        1,
        Math.max(0.0001, (end - start) / totalDuration)
    );

    const zoomPosition: number = Math.min(
        1 - zoomFactor,
        Math.max(0, (start - minimum) / totalDuration)
    );

    chart.primaryXAxis.zoomFactor = zoomFactor;
    chart.primaryXAxis.zoomPosition = zoomPosition;
    chart.primaryXAxis.labelFormat = labelFormat;
    chart.primaryXAxis.intervalType = intervalType as any;
    chart.refresh();
}

function getLastDataDate(): Date {
    return chartData[chartData.length - 1].date;
}

(document.getElementById('showLastMonth') as HTMLButtonElement).onclick = (): void => {
    const end: Date = getLastDataDate();
    const start: Date = new Date(end.getTime());

    start.setMonth(start.getMonth() - 1);

    showDateRange(start, end, 'MMM d', 'Days');
};

(document.getElementById('showLastDay') as HTMLButtonElement).onclick = (): void => {
    const end: Date = getLastDataDate();
    const start: Date = new Date(end.getTime() - (24 * 60 * 60 * 1000));

    showDateRange(start, end, 'MMM d, HH:mm', 'Hours');
};

(document.getElementById('resetRange') as HTMLButtonElement).onclick = (): void => {
    chart.primaryXAxis.zoomFactor = 1;
    chart.primaryXAxis.zoomPosition = 0;
    chart.primaryXAxis.labelFormat = 'MMM d';
    chart.primaryXAxis.intervalType = 'Days';
    chart.refresh();
};