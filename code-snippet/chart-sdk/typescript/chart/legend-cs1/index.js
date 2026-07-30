var total = [];

var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
    },
    chartArea: { border: { width: 0 } },
    //Initializing Primary X Axis
    primaryYAxis: {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Gold',
            dataSource: [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }],
            marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
        },
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Silver',
            dataSource: [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }],
            marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
        },
        {
            type: 'Column', xName: 'x', width: 2, yName: 'y', name: 'Bronze',
            dataSource: [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }],
            marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color:'#ffffff' } } }
        }
    ],
    //Initializing Chart Title
    title: 'Olympic Medal Counts - RIO', tooltip: { enable: true },
    width: ej.base.Browser.isDevice ? '100%' : '60%',
    seriesRender: function(args) {
        for (var i = 0; i < args.data.length; i++) {
          if (!total[args.data[i].x]) total[args.data[i].x] = 0;
          total[args.data[i].x] += parseInt(args.data[i].y);
        }
      },
    textRender: function(args) {
        var percentage = (parseInt(args.text) / total[args.point.x]) * 100;
        percentage = percentage % 1 === 0 ? percentage : percentage.toFixed(2);
        args.text = percentage + '%';
     },

});
chart.appendTo('#element');

