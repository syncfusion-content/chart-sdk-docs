import {
    HeatMap,
    Legend,
    Tooltip,
    ITooltipEventArgs
} from '@syncfusion/ej2-heatmap';

HeatMap.Inject(Legend, Tooltip);

const heatmapData: number[][] = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
];

const heatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    cellSettings: {
        showLabel: true
    },
    xAxis: {
        labels: [
            'Nancy',
            'Andrew',
            'Janet',
            'Margaret',
            'Steven',
            'Michael',
            'Robert',
            'Laura',
            'Anne',
            'Paul',
            'Karin',
            'Mario'
        ]
    },
    yAxis: {
        labels: [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat'
        ]
    },
    dataSource: heatmapData,
    legendSettings: {
        position: 'Right',
        showLabel: true,
        height: '150px'
    },
    showTooltip: true,
    tooltipSettings: {
        fill: '#696295',
        textStyle: {
            color: '#FFFFFF',
            size: '12px'
        },
        border: {
            width: 2,
            color: '#F0C27B'
        }
    },
    tooltipRender: (args: ITooltipEventArgs): void => {
        args.content = [
            'In ' + args.yLabel + ', the ' + args.xLabel +
            ' produced ' + args.value + ' million barrels per day'
        ];
    }
});

heatmap.appendTo('#chart');

const bubbleHeatmap: HeatMap = new HeatMap({
    titleSettings: {
        text: 'HeatMap with Bubble',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    cellSettings: {
        border: {
            width: 1
        },
        tileType: 'Bubble',
        bubbleType: 'Size',
        showLabel: false
    },
    xAxis: {
        labels: [
            'Nancy',
            'Andrew',
            'Janet',
            'Margaret',
            'Steven',
            'Michael',
            'Robert',
            'Laura',
            'Anne',
            'Paul',
            'Karin',
            'Mario'
        ]
    },
    yAxis: {
        labels: [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat'
        ]
    },
    dataSource: heatmapData,
    legendSettings: {
        position: 'Right',
        showLabel: true,
        height: '150px'
    },
    paletteSettings: {
        palette: [
            {
                color: '#C06C84',
                label: 'Low',
                value: 50
            },
            {
                color: '#6C5B7B',
                label: 'Moderate',
                value: 80
            },
            {
                color: '#355C7D',
                label: 'High',
                value: 100
            }
        ],
        type: 'Gradient'
    },
    showTooltip: true
});

bubbleHeatmap.appendTo('#bubble');