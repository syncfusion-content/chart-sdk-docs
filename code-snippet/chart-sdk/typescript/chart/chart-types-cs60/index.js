var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
                { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }],
            dataLabel: { visible: true, name: 'text', position: 'Outside' },
            groupTo: '11',
            xName: 'x',
            yName: 'y',
            explode: true,
            //Specifies the distance of the point from the center during explode, which takes values in both pixels and percentage
            explodeOffset: '10',

            //If set true, all the points in the series will get exploded on load
            explodeAll: false,

            //Specifies index of the point, to be exploded on load
            explodeIndex: 2
        }
    ],
    textRender: (args) => {
        if (args.text.indexOf('Others') > -1) {
            args.color = 'red';
            args.border.width = 1;
        }
    },
    pointRender: (args) => {
        if ((args.point.x).indexOf('Others') > -1) {
            args.fill = '#D3D3D3';
        }
    },
}, '#element');

