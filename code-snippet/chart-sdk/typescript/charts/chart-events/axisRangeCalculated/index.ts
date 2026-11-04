import {
    Category,
    Chart,
    ColumnSeries,
    IAxisRangeCalculatedEventArgs
} from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);

let chart: Chart = new Chart({
    // Keep X axis as Category; let the event adjust min/max/interval
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    // Basic Y axis; event will add padding and adjust interval
    primaryYAxis: {
        title: 'Gold Medals'
    },
    title: 'Olympic Medals',
    series: [{
        dataSource: [
            { country: 'USA', gold: 50 }, { country: 'China', gold: 40 },
            { country: 'Japan', gold: 70 }, { country: 'Australia', gold: 60 },
            { country: 'France', gold: 50 }, { country: 'Germany', gold: 40 },
            { country: 'Italy', gold: 40 }, { country: 'Sweden', gold: 30 }
        ],
        type: 'Column',
        xName: 'country',
        yName: 'gold',
        name: 'Gold'
    }],
    // axisRangeCalculated: modify the computed min/max/interval for axes
    axisRangeCalculated: (args: IAxisRangeCalculatedEventArgs): void => {
        console.log('Axis range calculated event was triggered');

        if (args.axis.valueType === 'Category' && args.axis.name === 'primaryXAxis') {
            args.minimum = 1;
            args.maximum = 5;
            args.interval = 2;
            return;
        }

        // For Y axis (numeric), add 10% headroom and compute a clean interval
        if (args.axis.orientation === 'Vertical') {
            const currentMin: number = Number(args.minimum ?? 0);
            const currentMax: number = Number(args.maximum ?? 0);
            const range: number = Math.max(0, currentMax - currentMin);
            const pad: number = range * 0.1; // 10% headroom

            // Ensure baseline at 0 and padded max rounded to a nice step
            const newMin: number = 0;
            const newMax: number = Math.ceil((currentMax + pad) / 5) * 5;

            args.minimum = newMin;
            args.maximum = newMax;

            // Choose about 5 ticks
            const approxTicks: number = 5;
            const rawInterval: number = (newMax - newMin) / approxTicks || 1;
            // Snap interval to 1/2/5 multiples for readability
            const snap: (val: number) => number = (val: number) => {
                const pow: number = Math.pow(10, Math.floor(Math.log10(val)));
                const norm: number = val / pow;
                let m: number = 1;
                if (norm > 5) { m = 10; }
                else if (norm > 2) { m = 5; }
                else if (norm > 1) { m = 2; }
                return m * pow;
            };
            args.interval = snap(rawInterval);
        }
    }
}, '#element');