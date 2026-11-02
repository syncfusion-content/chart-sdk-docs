import {
    Category,
    Chart,
    ChartAnnotation,
    IAnnotationRenderEventArgs,
    Legend,
    LineSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: { valueType: 'Category' },
    primaryYAxis: { labelFormat: '${value}K' },
    title: 'Sales Analysis',
    // Define an annotation at the peak data point (Aug, 55)
    annotations: [{
        content: '<div id="annotation">Peak</div>',
        x: 'Aug',
        y: 55,
        coordinateUnits: 'Point',
        region: 'Chart'
    }],
    series: [{
        dataSource: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ],
        type: 'Line',
        xName: 'month',
        yName: 'sales',
        name: 'Sales',
        marker: { visible: true }
    }],
    // Customize or cancel annotation before it renders
    annotationRender: (args: IAnnotationRenderEventArgs): void => {
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