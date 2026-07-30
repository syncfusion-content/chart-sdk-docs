import {
    AccumulationChart, AccumulationDataLabel, PieSeries, AccumulationLegend,
    IAccPointRenderEventArgs
} from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationDataLabel, PieSeries, AccumulationLegend);

const CategoryData = [
    { Category: "Electronics", Share: 22.5, DataLabel: "Electronics: 22.5%" },
    { Category: "Fashion", Share: 18.0, DataLabel: "Fashion: 18.0%" },
    { Category: "Home & Kitchen", Share: 15.5, DataLabel: "Home & Kitchen: 15.5%" },
    { Category: "Beauty & Health", Share: 10.0, DataLabel: "Beauty & Health: 10.0%" },
    { Category: "Sports & Outdoors", Share: 9.5, DataLabel: "Sports & Outdoors: 9.5%" },
    { Category: "Books", Share: 8.0, DataLabel: "Books: 8.0%" },
    { Category: "Toys & Games", Share: 7.0, DataLabel: "Toys & Games: 7.0%" },
    { Category: "Groceries", Share: 6.0, DataLabel: "Groceries: 6.0%" },
    { Category: "Other", Share: 3.5, DataLabel: "Other: 3.5%" }
];

const baseColors: string[] = ["#0072B2", "#E69F00", "#009E73", "#D55E00", "#CC79A7", "#56B4E9", "#F0E442", "#999999", "#7F3C8D"];

let chart: AccumulationChart = new AccumulationChart({
    series: [{
        type: 'Pie',
        innerRadius: '50%',
        dataSource: CategoryData,
        xName: 'Category',
        yName: 'Share',
        name: 'Share by Category',
        dataLabel: {
            visible: true,
            name: 'DataLabel',
            position: 'Outside',
            connectorStyle: { length: '10px' },
            font: { size: '12px' }
        },
        border: {
            color: '#FFFFFF',
            width: 2
        }
    }],
    pointRender: (args: IAccPointRenderEventArgs) => {
        const idx: number = args.point.index;
        const base: string = baseColors[idx % baseColors.length];

        args.radialGradient = {
            cx: 0.35, cy: 0.35, fx: 0.35, fy: 0.35, r: 0.85,
            gradientColorStop: [
                { offset: 0, color: base, opacity: 1, brighten: 0.85, lighten: 0 },
                { offset: 20, color: base, opacity: 0.98, brighten: 0.45, lighten: 0 },
                { offset: 50, color: base, opacity: 0.96, brighten: 0, lighten: 0 },
                { offset: 80, color: base, opacity: 0.94, brighten: -0.30, lighten: 0 },
                { offset: 100, color: base, opacity: 0.92, brighten: -0.55, lighten: 0 }
            ]
        }
    },
    legendSettings: { visible: true, position: 'Right' },
    tooltip: { enable: true },
    title: 'Orders by Category',
    enableSmartLabels: true,
});

chart.appendTo('#element');