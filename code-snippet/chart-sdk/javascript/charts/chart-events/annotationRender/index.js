// annotationRender event: customize or cancel annotations before they render.
var chartData = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 },
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 },
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 },
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 },
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { labelFormat: '${value}K' },
    title: 'Sales Analysis',
    // Define an annotation at the peak data point (Aug, 55)
    annotations: [{
        content: '<div class="anno">Peak</div>',
        x: 'Aug',
        y: 55,
        coordinateUnits: 'Point',
        region: 'Chart'
    }],
    series: [{
        type: 'Line',
        name: 'Sales',
        xName: 'month',
        yName: 'sales',
        marker: { visible: true },
        dataSource: chartData
    }],
    // Customize or cancel annotation before it renders
    annotationRender: function (args) {
        console.log('Annotation render event was triggered');

        if (args.content instanceof HTMLElement) {
            args.content.style.padding = '4px 8px';
            args.content.style.background = '#ffeb3b';
            args.content.style.color = '#000';
            args.content.style.borderRadius = '4px';
            args.content.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
            args.content.style.fontWeight = '600';
        }
    }
}, '#element');