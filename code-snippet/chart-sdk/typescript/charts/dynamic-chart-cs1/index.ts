import {
    Chart,
    LineSeries,
    Legend,
    Tooltip
} from '@syncfusion/ej2-charts';

Chart.Inject(LineSeries, Legend, Tooltip);

interface ChartData {
    x: number;
    y: number;
}

interface DynamicChart {
    chart: Chart;
    element: HTMLDivElement;
}

let chartCount: number = 0;
const chartInstances: DynamicChart[] = [];

const chartHost: HTMLElement | null =
    document.getElementById('dynamicChartHost');

const addButton: HTMLButtonElement | null =
    document.getElementById('addChart') as HTMLButtonElement;

const removeButton: HTMLButtonElement | null =
    document.getElementById('removeChart') as HTMLButtonElement;

const statusElement: HTMLElement | null =
    document.getElementById('chartStatus');

const chartData: ChartData[] = [
    { x: 1, y: 21 },
    { x: 2, y: 24 },
    { x: 3, y: 36 },
    { x: 4, y: 38 },
    { x: 5, y: 54 },
    { x: 6, y: 57 },
    { x: 7, y: 70 }
];

function updateControls(): void {
    if (removeButton) {
        removeButton.disabled = chartInstances.length === 0;
    }

    if (statusElement) {
        const count: number = chartInstances.length;
        statusElement.textContent =
            count + (count === 1 ? ' chart displayed.' : ' charts displayed.');
    }
}

function createChart(): void {
    if (!chartHost) {
        return;
    }

    chartCount++;

    const chartElement: HTMLDivElement =
        document.createElement('div');

    const chartId: string = `dynamicChart${chartCount}`;

    chartElement.id = chartId;
    chartElement.className = 'dynamic-chart';
    chartHost.appendChild(chartElement);

    const chart: Chart = new Chart({
        width: '100%',
        height: '320px',
        primaryXAxis: {
            title: 'Index'
        },
        primaryYAxis: {
            title: 'Value',
            minimum: 0,
            maximum: 80,
            interval: 20
        },
        series: [
            {
                type: 'Line',
                dataSource: chartData,
                xName: 'x',
                yName: 'y',
                name: 'Germany',
                width: 2,
                marker: {
                    visible: true
                }
            }
        ],
        title: `Inflation - Consumer Price (${chartCount})`,
        tooltip: {
            enable: true
        }
    });

    chart.appendTo(chartElement);

    chartInstances.push({
        chart: chart,
        element: chartElement
    });

    updateControls();
}

function removeLastChart(): void {
    const item: DynamicChart | undefined = chartInstances.pop();

    if (!item) {
        return;
    }

    item.chart.destroy();
    item.element.remove();

    updateControls();
}

if (addButton) {
    addButton.addEventListener('click', createChart);
}

if (removeButton) {
    removeButton.addEventListener('click', removeLastChart);
}

updateControls();