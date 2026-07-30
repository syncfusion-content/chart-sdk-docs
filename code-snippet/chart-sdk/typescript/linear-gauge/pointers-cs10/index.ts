import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge(
    {
        orientation: 'Horizontal',
        axes: [
            {
                line: {
                    width: 5
                },
                ranges: [
                    {
                        start: 0,
                        end: 30,
                        color: '#6FC78A',
                        startWidth: 50,
                        endWidth: 50,
                        position: 'Inside'
                    },
                    {
                        start: 30,
                        end: 65,
                        color: '#ECC85B',
                        startWidth: 50,
                        endWidth: 50,
                        position: 'Inside'
                    },
                    {
                        start: 65,
                        end: 100,
                        color: '#FB7D55',
                        startWidth: 50,
                        endWidth: 50,
                        position: 'Inside'
                    },
                ],
                majorTicks: {
                    interval: 20,
                    height: 7,
                    width: 1,
                    position: 'Inside'
                },
                minorTicks: {
                    interval: 10,
                    height: 3,
                    position: 'Inside'
                },
                labelStyle: {
                    position: 'Inside',
                    font: { fontFamily: 'inherit' }
                },
                pointers: [
                    {
                        value: 13,
                        markerType: 'Text',
                        text: 'Low',
                        color: 'black',
                        offset: '-50',
                        textStyle: {
                            size: '18px',
                            fontWeight: 'bold'
                        }
                    },
                    {
                        value: 48,
                        markerType: 'Text',
                        text: 'Moderate',
                        color: 'black',
                        offset: '-50',
                        textStyle: {
                            size: '18px',
                            fontWeight: 'bold'
                        }
                    },
                    {
                        value: 83,
                        markerType: 'Text',
                        text: 'High',
                        color: 'black',
                        offset: '-50',
                        textStyle: {
                            size: '18px',
                            fontWeight: 'bold'
                        }
                    },
                ],
                minimum: 0,
                maximum: 100,
                opposedPosition: true
            }
        ]
    },
    '#element'
);
