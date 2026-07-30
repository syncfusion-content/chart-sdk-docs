import { CircularGauge, Annotations, Gradient } from '@syncfusion/ej2-circulargauge';
CircularGauge.Inject(Annotations, Gradient);
let circulargauge: CircularGauge = new CircularGauge({
    animationDuration: 2000,
    axes: [
        {
            annotations: [{
                angle: 165,
                radius: '35%',
                zIndex: 1,
                content: '<div style="font-size:18px;margin-left: -20px;margin-top: -12px; color:#9DD55A">60</div>'
            }
            ],
            radius: '80%',
            startAngle: 230,
            endAngle: 130,
            majorTicks: {
                offset: 5,
            },
            lineStyle: { width: 8, color: '#E0E0E0' },
            minorTicks: {
                offset: 5,
            },
            labelStyle: {
                font: {
                    fontFamily: 'inherit',
                },
                offset: -1,
            },
            pointers: [
                {
                    value: 60,
                    radius: '60%',
                    pointerWidth: 7,
                    cap: {
                        radius: 8,
                        color: '#c06c84',
                        border: { width: 0 },
                    },
                    needleTail: {
                        length: '0%',
                    },
                    color: '#c06c84',
                    animation: {
                        enable: true,
                        duration: 500,
                    },
                },
            ],
            ranges: [
                {
                    start: 0,
                    end: 30,
                    color: '#E63B86',
                    startWidth: 22,
                    endWidth: 22,
                    radius: '60%',
                    linearGradient: {
                        startValue: '0%',
                        endValue: '100%',
                        colorStop: [
                            { color: '#9e40dc', offset: '0%', opacity: 1 },
                            { color: '#d93c95', offset: '70%', opacity: 1 }
                        ]
                    }
                },
                {
                    start: 30,
                    end: 60,
                    color: '#E0E0E0',
                    startWidth: 22,
                    endWidth: 22,
                    radius: '60%'
                }
            ]
        },
    ],
});
circulargauge.appendTo('#element');
