var data = [
  { x: 'January', y: 1200 },
  { x: 'February', y: 900 },
  { x: 'March', y: 1500 },
  { x: 'April', y: 700 },
  { x: 'May', y: 2000 },
  { x: 'June', y: 300 },
];

var crosshairLabelRender = (args) => {
    if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
        if (args.value > 1000) {
            args.text = (args.value / 1000).toFixed(1) + 'K';
            args.textStyle = args.textStyle || {};
            args.textStyle.color = '#d32f2f';
            args.fill = '#ffebee';
        }
        if (args.value < 0) {
            args.cancel = true;
        }
    }
    if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
        if (args.text.length > 8) {
            args.text = args.text.substring(0, 8) + '...';
        }
    }
};

var chart = new ej.charts.Chart({
    primaryXAxis: { valueType: 'Category', crosshairTooltip: { enable: true } },
    primaryYAxis: { crosshairTooltip: { enable: true } },
    crosshairLabelRender: crosshairLabelRender,
    series: [
        {
            dataSource: data, xName: 'x', yName: 'y', type: 'Line', name: 'Series'
        }
    ],
    crosshair: {enable: true}
});
chart.appendTo('#element');