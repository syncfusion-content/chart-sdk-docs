import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge(
    {
        orientation: 'Horizontal',
        axes: [
            {
                majorTicks: {
                    interval: 20,
                    position: 'Outside',
                },
                minorTicks: {
                    position: 'Outside',
                },
                labelStyle: {
                    position: 'Outside',
                    font: { fontFamily: 'inherit' },
                },
                pointers: [
                    {
                        value: 60,
                        markerType: 'Image',
                        imageUrl:
                            'https://ej2.syncfusion.com/demos/src/linear-gauge/images/step-count.png',
                        offset: -27,
                        height: 40,
                        width: 40,
                    },
                ],
            },
        ],
    },
    '#element'
);
