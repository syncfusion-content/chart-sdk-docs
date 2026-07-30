var gauge = new ej.lineargauge.LinearGauge({
    orientation: 'Horizontal',
    axes: [
        {
            majorTicks: {
                interval: 20,
                position: 'Outside'
            },
            minorTicks: {
                position: 'Outside'
            },
            labelStyle: {
                position: 'Outside',
                font: { fontFamily: 'inherit' }
            },
            pointers: [
                {
                    value: 60,
                    markerType: 'Image',
                    imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/linear-gauge/images/step-count.png',
                    offset: -27,
                    height: 40,
                    width: 40
                }
            ]
        }
    ],
}, '#element');

