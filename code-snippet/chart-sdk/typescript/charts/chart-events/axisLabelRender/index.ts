import {
    Category,
    Chart,
    DataLabel,
    IAxisLabelRenderEventArgs,
    Legend,
    LineSeries
} from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, DataLabel);

let chart: Chart = new Chart({
    // Data label for chart series
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
    legendSettings: {
        visible: true
    },
    title: 'Sales Analysis',
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
        marker: {
            dataLabel: { visible: true }
        }
    }],
    // Axis label render handler
    axisLabelRender: (args: IAxisLabelRenderEventArgs): void => {
        console.log('Chart axis label render event was triggered');
        // Example 1: Uppercase category X-axis labels
        if (args.axis.valueType === 'Category' && typeof args.text === 'string') {
            // Hide a specific label (e.g., 'Aug')
            if (args.text === 'Aug') {
                args.cancel = true;
                return;
            }
            args.text = args.text.toUpperCase();
        }

        // Example 2: Custom format for Y-axis numeric labels
        if (args.axis.valueType !== 'Category' && typeof args.value === 'number') {
            // Format as currency with 'K' suffix
            args.text = `$${args.value}K`;
        }
    }
}, '#element');