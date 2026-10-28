// axisRangeCalculated event: modify the computed min/max/interval for axes.
var chartData = [
    { country: 'USA', gold: 50, silver: 70, bronze: 45 },
    { country: 'China', gold: 40, silver: 60, bronze: 55 },
    { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
    { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
    { country: 'France', gold: 50, silver: 45, bronze: 35 },
    { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
    { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
    { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
];

var chart = new ej.charts.Chart({
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
        dataSource: chartData,
        type: 'Column',
        xName: 'country',
        yName: 'gold',
        name: 'Gold'
    }],
    // axisRangeCalculated: modify the computed min/max/interval for axes
    axisRangeCalculated: function (args) {
        console.log('Axis range calculated event was triggered');

        if (args.axis.valueType === 'Category' && args.axis.name === 'primaryXAxis') {
            args.minimum = 1;
            args.maximum = 5;
            args.interval = 2;
            return;
        }

        // For Y axis (numeric), add 10% headroom and compute a clean interval
        if (args.axis.orientation === 'Vertical') {
            var currentMin = Number(args.minimum != null ? args.minimum : 0);
            var currentMax = Number(args.maximum != null ? args.maximum : 0);
            var range = Math.max(0, currentMax - currentMin);
            var pad = range * 0.1; // 10% headroom

            // Ensure baseline at 0 and padded max rounded to a nice step
            var newMin = 0;
            var newMax = Math.ceil((currentMax + pad) / 5) * 5;

            args.minimum = newMin;
            args.maximum = newMax;

            // Choose about 5 ticks
            var approxTicks = 5;
            var rawInterval = (newMax - newMin) / approxTicks || 1;
            // Snap interval to 1/2/5 multiples for readability
            var snap = function (val) {
                var pow = Math.pow(10, Math.floor(Math.log10(val)));
                var norm = val / pow;
                var m = 1;
                if (norm > 5) { m = 10; }
                else if (norm > 2) { m = 5; }
                else if (norm > 1) { m = 2; }
                return m * pow;
            };
            args.interval = snap(rawInterval);
        }
    }
}, '#element');