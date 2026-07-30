var piechart = new ej.charts.AccumulationChart({
    enableSmartLabels: true,
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13, text: 'Jan: 13' },
                { x: 'Feb', y: 13, text: 'Feb: 13' },
                { x: 'Mar', y: 17, text: 'Mar: 17' },
                { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }],
            dataLabel: {
                visible: true, name: 'text', position: 'Outside',
                connectorStyle: {
                    //Length of the connector line in pixels
                    length: '50px',
                    //Width of the connector line in pixels
                    width: 2,
                    //dashArray of the connector line
                    dashArray: '5,3',
                    //Color of the connector line
                    color: '#f4429e',
                    //Specifies the type of the connector line either Line or Curve
                    type: 'Curve'
                }
            },
            xName: 'x',
            yName: 'y'
        }
    ]
}, '#element');

