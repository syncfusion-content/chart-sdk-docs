var gauge = new ej.lineargauge.LinearGauge({
    animationDuration: 3000,
    orientation: 'Horizontal',
    axes: [
        {
            pointers: [
                {
                    value: 10,
                    height: 15,
                    width: 15,
                    placement: 'Near',
                    offset: -38,
                    markerType: 'Triangle',
                },
            ],
            ranges: [
                {
                    start: 0,
                    end: 50,
                    startWidth: 10,
                    endWidth: 10,
                    color: '#F45656',
                    offset: 35,
                },
            ],
            majorTicks: {
                interval: 10,
                height: 20,
                color: '#9E9E9E',
            },
            minorTicks: {
                interval: 2,
                height: 10,
                color: '#9E9E9E',
            },
            labelStyle: {
                offset: 48,
                font: {
                    fontFamily: 'inherit',
                },
            },
        },
    ],
    annotations: [
        {
            content:
                '<div id="pointer" style="width:70px;margin-left:-3%;margin-top: 21%;font-size:16px;">10 MPH</div>',
            axisIndex: 0,
            axisValue: 10,
            x: 10,
            y: -70,
            zIndex: '1',
        },
    ],
});
gauge.appendTo('#element');
