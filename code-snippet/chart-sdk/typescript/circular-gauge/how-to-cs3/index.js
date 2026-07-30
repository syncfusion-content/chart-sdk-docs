var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [
        {
            startAngle: -60,
            endAngle: 60,
            lineStyle: { width: 8, color: '#E0E0E0' },
            pointers: [
                {
                    radius: '70%',
                    needleEndWidth: 2,
                    pointerWidth: 5,
                    value: 70,
                    cap: {
                        radius: 8,
                        border: { width: 2 },
                    },
                },
            ],

        },
    ],
}, '#element');

