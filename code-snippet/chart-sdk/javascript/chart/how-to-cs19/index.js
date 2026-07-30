var chart = new ej.charts.Chart({
     //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Line',
                dataSource: [
                    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                    { x: new Date(2007, 0, 1), y: 30 }, { x: new Date(2008, 0, 1), y: 38 },
                    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                ],
                xName: 'x', width: 2, marker: {
                  dataLabel : { visible: true },
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'y', name: 'Germany',
            }
        ],

       //Initializing Chart title
        title: 'Inflation - Consumer Price',
        tooltip: {enable: true},
        tooltipRender: function(args) {  //  To format the current point x value
        var intl = new ej.base.Internationalization();
        var formattedString = intl.formatDate(new Date(args.point.x), { skeleton: 'yMd' });
        args.text = formattedString;
        },
    width:'650px',
    height: '350px'
},'#element');

