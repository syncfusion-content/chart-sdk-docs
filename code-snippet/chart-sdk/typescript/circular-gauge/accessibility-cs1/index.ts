import {
    CircularGauge,
    GaugeTooltip,
    Annotations,
    Legend
} from '@syncfusion/ej2-circulargauge';

CircularGauge.Inject(GaugeTooltip, Annotations, Legend);

let gauge: CircularGauge = new CircularGauge({
    width: '650px',
    height: '430px',
    title: 'Circular gauge',
    tabIndex: 0,
    description: 'Circular temperature gauge from zero to 150 degrees Celsius. The current pointer value is 60 degrees Celsius.',
    enablePointerDrag: true,
    tooltip: {
        enable: true,
        type: ['Pointer', 'Range', 'Annotation']
    },
    legendSettings: {
        visible: true,
        position: 'Bottom'
    },
    axes: [
        {
            minimum: 0,
            maximum: 150,
            startAngle: 220,
            endAngle: 140,
            radius: '90%',
            lineStyle: {
                width: 2,
                color: 'red'
            },
            majorTicks: {
                interval: 10,
                height: 12,
                width: 2,
                color: 'blue'
            },
            minorTicks: {
                interval: 5,
                height: 6,
                width: 1,
                color: 'orange'
            },
            labelStyle: {
                format: '{value}°C',
                position: 'Inside',
                font: {
                    color: 'red',
                    size: '12px',
                    fontWeight: '600'
                }
            },
            pointers: [
                {
                    value: 60,
                    radius: '65%',
                    color: '#0088CC',
                    pointerWidth: 12,
                    cap: {
                        radius: 10,
                        color: '#E83E8C',
                        border: {
                            color: '#FFFFFF',
                            width: 2
                        }
                    },
                    needleTail: {
                        length: '20%',
                        color: '#E83E8C'
                    },
                    description: 'Current temperature is 60 degrees Celsius.'
                },
                {
                    value: 35,
                    type: 'RangeBar',
                    radius: '52%',
                    color: '#EC407A',
                    pointerWidth: 15,
                    roundedCornerRadius: 8,
                    description: 'Secondary temperature value is 35 degrees Celsius.'
                },
                {
                    value: 25,
                    type: 'RangeBar',
                    radius: '42%',
                    color: '#0077B5',
                    pointerWidth: 15,
                    roundedCornerRadius: 8,
                    description: 'Minimum temperature value is 25 degrees Celsius.'
                }
            ],
            ranges: [
                {
                    start: 50,
                    end: 80,
                    startWidth: 10,
                    endWidth: 10,
                    radius: '75%',
                    color: '#C548C8'
                },
                {
                    start: 85,
                    end: 105,
                    startWidth: 10,
                    endWidth: 10,
                    radius: '108%',
                    color: '#E956A0'
                }
            ],
            annotations: [
                {
                    content:
                        '<div role="note" aria-label="Gauge annotation">Gauge Annotation</div>',
                    angle: 90,
                    radius: '135%',
                    zIndex: '1',
                    description: 'Annotation describing the circular temperature gauge.'
                }
            ]
        }
    ],
    loaded: (): void => {
        let element: HTMLElement | null =
            document.getElementById('circular-gauge');

        if (element) {
            element.setAttribute('role', 'region');
            element.setAttribute(
                'aria-label',
                'Accessible circular temperature gauge. Use Tab to focus the gauge. The displayed temperature is 60 degrees Celsius.'
            );
            element.setAttribute(
                'aria-describedby',
                'gauge-instructions gauge-summary'
            );
        }
    }
});

gauge.appendTo('#circular-gauge');

let multipleAxisGauge: CircularGauge = new CircularGauge({
    width: '650px',
    height: '480px',
    title: 'Circular Gauge with Multiple Axis',
    tabIndex: 0,
    description: 'Circular gauge containing two scales from zero to 100 and three color-coded ranges.',
    legendSettings: {
        visible: true,
        position: 'Bottom',
        shape: 'Circle',
        width: '340px'
    },
    axes: [
        {
            minimum: 0,
            maximum: 100,
            startAngle: 200,
            endAngle: 160,
            radius: '95%',
            lineStyle: {
                width: 2,
                color: '#D9D9D9'
            },
            majorTicks: {
                interval: 10,
                height: 12,
                width: 2,
                color: 'red'
            },
            minorTicks: {
                interval: 5,
                height: 5,
                width: 2,
                color: 'green'
            },
            labelStyle: {
                position: 'Inside',
                font: {
                    size: '12px',
                    color: '#000000'
                }
            },
            pointers: [
                {
                    value: 90,
                    radius: '72%',
                    color: '#707070',
                    pointerWidth: 10,
                    cap: {
                        radius: 8,
                        color: '#707070'
                    },
                    needleTail: {
                        length: '15%',
                        color: '#707070'
                    },
                    description: 'Outer scale pointer value is 90.'
                }
            ]
        },
        {
            minimum: 10,
            maximum: 150,
            startAngle: 200,
            endAngle: 160,
            radius: '67%',
            lineStyle: {
                width: 2,
                color: '#D9D9D9'
            },
            majorTicks: {
                interval: 10,
                height: 10,
                width: 2,
                color: 'red'
            },
            minorTicks: {
                interval: 5,
                height: 5,
                width: 1,
                color: 'blue'
            },
            labelStyle: {
                position: 'Inside',
                font: {
                    color: 'red',
                    size: '12px',
                    fontWeight: '600'
                }
            },
            pointers: [
                {
                    value: 80,
                    type: 'RangeBar',
                    radius: '80%',
                    color: '#1976D2',
                    pointerWidth: 15,
                    roundedCornerRadius: 8,
                    description: 'Inner scale range-bar pointer value is 80.'
                },
                {
                    value: 45,
                    type: 'RangeBar',
                    radius: '48%',
                    color: '#1976D2',
                    pointerWidth: 15,
                    roundedCornerRadius: 8,
                    description: 'Inner scale secondary range-bar value is 45.'
                }
            ],
            ranges: [
                {
                    start: 10,
                    end: 25,
                    color: '#FF0000',
                    startWidth: 10,
                    endWidth: 10,
                    radius: '105%',
                    legendText: '10 - 25'
                },
                {
                    start: 25,
                    end: 55,
                    color: '#0000FF',
                    startWidth: 10,
                    endWidth: 10,
                    radius: '105%',
                    legendText: '25 - 55'
                },
                {
                    start: 55,
                    end: 85,
                    color: '#008000',
                    startWidth: 10,
                    endWidth: 10,
                    radius: '105%',
                    legendText: '55 - 85'
                }
            ]
        }
    ],
    loaded: (): void => {
        let element: HTMLElement | null =
            document.getElementById('multiple-axis-gauge');

        if (element) {
            element.setAttribute('role', 'region');
            element.setAttribute(
                'aria-label',
                'Circular gauge with multiple axes. The outer scale pointer value is 90 and the inner range-bar pointer value is 80.'
            );
            element.setAttribute(
                'aria-describedby',
                'multiple-axis-summary'
            );
        }
    }
});

multipleAxisGauge.appendTo('#element');