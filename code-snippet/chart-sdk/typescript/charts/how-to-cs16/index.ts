import {
    Chart,
    ScatterSeries,
    Legend,
    Selection
} from '@syncfusion/ej2-charts';
import {
    Grid,
    Page
} from '@syncfusion/ej2-grids';

Chart.Inject(ScatterSeries, Legend, Selection);
Grid.Inject(Page);

const chartData: { x: number; y: number }[] = [
    { x: 1971, y: 50 },
    { x: 1972, y: 20 },
    { x: 1973, y: 63 },
    { x: 1974, y: 81 },
    { x: 1975, y: 64 },
    { x: 1976, y: 36 },
    { x: 1977, y: 22 },
    { x: 1978, y: 78 },
    { x: 1979, y: 60 },
    { x: 1980, y: 41 },
    { x: 1981, y: 62 },
    { x: 1982, y: 56 },
    { x: 1983, y: 96 },
    { x: 1984, y: 48 },
    { x: 1985, y: 23 },
    { x: 1986, y: 54 },
    { x: 1987, y: 73 },
    { x: 1988, y: 56 },
    { x: 1989, y: 67 },
    { x: 1990, y: 79 }
];

const grid: Grid = new Grid({
    dataSource: [],
    allowPaging: true,
    pageSettings: {
        pageSize: 8
    },
    columns: [
        {
            field: 'x',
            headerText: 'Year',
            type: 'number',
            textAlign: 'Right',
            width: 100
        },
        {
            field: 'y',
            headerText: 'Profit',
            type: 'number',
            format: 'N0',
            textAlign: 'Right',
            width: 100
        }
    ]
});

grid.appendTo('#Grid');

function getSelectedPoints(selectedDataValues: Object[][]): Object[] {
    const selectedPoints: Object[] = [];

    if (!selectedDataValues) {
        return selectedPoints;
    }

    for (let seriesIndex: number = 0; seriesIndex < selectedDataValues.length; seriesIndex++) {
        const seriesPoints: Object[] = selectedDataValues[seriesIndex] || [];

        for (let pointIndex: number = 0; pointIndex < seriesPoints.length; pointIndex++) {
            selectedPoints.push(seriesPoints[pointIndex]);
        }
    }

    return selectedPoints;
}

const chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 1970,
        maximum: 1991,
        interval: 5,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 100,
        interval: 25,
        title: 'Profit',
        labelFormat: '{value}%'
    },
    series: [{
        type: 'Scatter',
        dataSource: chartData,
        xName: 'x',
        yName: 'y',
        name: 'Product A',
        marker: {
            shape: 'Triangle',
            width: 10,
            height: 10
        }
    }],
    selectionMode: 'DragXY',
    legendSettings: {
        visible: true,
        toggleVisibility: false
    },
    dragComplete: (args: any): void => {
        const selectedPoints: Object[] = getSelectedPoints(
            args.selectedDataValues as Object[][]
        );

        grid.dataSource = selectedPoints;
        grid.refresh();

        (document.getElementById('selectionStatus') as HTMLElement).textContent =
            selectedPoints.length + ' points selected.';
    },
    title: 'Product A Profit',
    width: '100%',
    height: '400px'
});

chart.appendTo('#element');