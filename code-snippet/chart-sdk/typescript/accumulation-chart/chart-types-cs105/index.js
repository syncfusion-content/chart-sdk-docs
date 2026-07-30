var multiColorData = [
    { month: 'Jan', sales: 35, color: '#1f77b4' },
    { month: 'Feb', sales: 28, color: '#ff7f0e' },
    { month: 'Mar', sales: 34, color: '#2ca02c' },
    { month: 'Apr', sales: 32, color: '#d62728' },
    { month: 'May', sales: 40, color: '#9467bd' },
    { month: 'Jun', sales: 32, color: '#8c564b' },
    { month: 'Jul', sales: 35, color: '#e377c2' },
    { month: 'Aug', sales: 55, color: '#7f7f7f' },
    { month: 'Sep', sales: 38, color: '#bcbd22' },
    { month: 'Oct', sales: 30, color: '#17becf' },
    { month: 'Nov', sales: 25, color: '#ff69b4' },
    { month: 'Dec', sales: 32, color: '#ff6347' }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Sales count'
    },
    series: [{
        dataSource: multiColorData,
        xName: 'month', yName: 'sales',
        pointColorMapping: 'color',
        //Series type as multi-colored line
        type: 'MultiColoredLine',
        width: 3
    }],
    title: 'Monthly Sales Comparison'
}, '#element');

