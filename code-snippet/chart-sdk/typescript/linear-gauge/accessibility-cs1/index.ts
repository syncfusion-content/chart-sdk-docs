import {
    LinearGauge,
    Annotations,
    GaugeTooltip,
    Gradient,
    IAxisLabelRenderEventArgs,
    ITooltipRenderEventArgs
} from '@syncfusion/ej2-lineargauge';

LinearGauge.Inject(Annotations, GaugeTooltip, Gradient);

let linearGauge: LinearGauge = new LinearGauge({
    title: 'LinearGauge Title',
    orientation: 'Horizontal',
    container: {
        width: 140,
        border: {
            width: 2,
            color: '#a6a6a6'
        }
    },
    tooltip: {
        enable: true
    },
    axisLabelRender: (args: IAxisLabelRenderEventArgs): void => {
        if (
            args.axis.visibleRange.min === args.value ||
            args.axis.visibleRange.max === args.value
        ) {
            args.text = '';
        }
    },
    tooltipRender: (args: ITooltipRenderEventArgs): void => {
        args.content = args.axis.visibleRange.max === 25
            ? args.content + ' cm'
            : args.content + ' in';
    },
    axes: [
        {
            minimum: 0,
            maximum: 10,
            line: {
                offset: 140
            },
            majorTicks: {
                interval: 1
            },
            minorTicks: {
                interval: 0.2
            },
            labelStyle: {
                font: {
                    color: '#000000'
                }
            },
            pointers: [
                {
                    type: 'Bar',
                    value: 5.4,
                    offset: 15,
                    color: '#ff66b3',
                    enableDrag: true
                },
                {
                    value: 2,
                    type: 'Marker',
                    markerType: 'Circle',
                    color: 'red',
                    enableDrag: true
                },
                {
                    value: 10,
                    type: 'Marker',
                    markerType: 'Rectangle',
                    linearGradient: {
                        startValue: '0%',
                        endValue: '100%',
                        colorStop: [
                            {
                                color: '#fef3f9',
                                offset: '0%',
                                opacity: 1
                            },
                            {
                                color: '#f54ea2',
                                offset: '100%',
                                opacity: 1
                            }
                        ]
                    }
                },
                {
                    value: 7,
                    type: 'Marker',
                    markerType: 'Image',
                    imageUrl: 'https://ej2.syncfusion.com/demos/src/linear-gauge/images/cycling.svg'
                }
            ],
            ranges: [
                {
                    start: 7,
                    end: 8,
                    startWidth: 30,
                    endWidth: 30,
                    color: '#f54ea2',
                    offset: 30,
                    linearGradient: {
                        startValue: '0%',
                        endValue: '100%',
                        colorStop: [
                            {
                                color: '#fef3f9',
                                offset: '0%',
                                opacity: 1
                            },
                            {
                                color: '#f54ea2',
                                offset: '100%',
                                opacity: 1
                            }
                        ]
                    }
                },
                {
                    start: 3,
                    end: 4,
                    color: 'red'
                }
            ]
        },
        {
            opposedPosition: true,
            minimum: 0,
            maximum: 25,
            line: {
                offset: -140
            },
            labelStyle: {
                font: {
                    color: '#000000'
                }
            },
            majorTicks: {
                interval: 1
            },
            minorTicks: {
                interval: 0.2
            },
            pointers: [
                {
                    type: 'Bar',
                    offset: -15,
                    value: 16.5,
                    color: '#4d94ff'
                }
            ],
            ranges: [
                {
                    start: 20,
                    end: 24,
                    startWidth: 10,
                    endWidth: 15,
                    offset: 30,
                    radialGradient: {
                        radius: '65%',
                        outerPosition: {
                            x: '50%',
                            y: '70%'
                        },
                        innerPosition: {
                            x: '60%',
                            y: '60%'
                        },
                        colorStop: [
                            {
                                color: '#fff5f5',
                                offset: '5%',
                                opacity: 0.9
                            },
                            {
                                color: '#f54ea2',
                                offset: '100%',
                                opacity: 0.9
                            }
                        ]
                    }
                },
                {
                    start: 17,
                    end: 25,
                    color: 'green'
                }
            ]
        }
    ],
    annotations: [
        {
            content: '<div id="first"><h1 style="font-size:15px">Inches</h1></div>',
            axisIndex: 0,
            axisValue: 5.4,
            x: 35,
            y: -58,
            zIndex: '1'
        },
        {
            content: '<div id="second"><h1 style="font-size:15px">Centimeters</h1></div>',
            axisIndex: 1,
            axisValue: 16.5,
            x: 50,
            y: 52,
            zIndex: '1'
        }
    ]
});

linearGauge.appendTo('#linear');

let thermometer: LinearGauge = new LinearGauge({
    container: {
        width: 30,
        type: 'Thermometer'
    },
    axes: [
        {
            pointers: [
                {
                    value: 50,
                    width: 15,
                    type: 'Bar'
                }
            ]
        }
    ]
});

thermometer.appendTo('#thermometer');