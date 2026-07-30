var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        minimum: 0,
        maximum: 12,
        startAngle: 0,
        endAngle: 360,
        lineStyle: { width: 0 },
        ranges: [
            {
                start: 0, end: 3,
                color: 'rgba(29,29,29,0.7)'
            }, {
                start: 3, end: 12,
                color: 'rgba(168,145,102,0.1)'
            }
        ],
        annotations: [{
            angle: 270,
            radius: '40%',
            content: '<div id="subGauge" style="width:90px;height:90px;"></div>'
        },{
            angle: 90,
            radius: '40%',
            content: '<div id="time"><span>6:30 PM</span></div>'
        }],
        labelStyle: {
            hiddenLabel: 'First'
        },
        pointers: [{
            pointerWidth: 5,
            radius: '40%',
            value: 6.5,
            color: 'rgb(29,29,29)',
            border: { width: 1, color: 'rgb(29,29,29)' },
            cap: {
                color: 'rgb(29,29,29)',
                radius: 0,
                border: {
                    width: 0.2,
                    color: 'red'
                }
            },
            needleTail: {
                length: '0%'
            }, animation: {
                enable: false
            }
        }, {
            radius: '60%',
            pointerWidth: 5,
            color: 'rgb(29,29,29)',
            border: {
                width: 1,
                color: 'rgb(29,29,29)'
            },
            value: 6,
            cap: {
                color: 'rgb(29,29,29)',
                radius: 0,
                border: {
                    width: 0.2,
                    color: 'red'
                }
            },
            needleTail: {
                length: '0%'
            }, animation: {
                enable: false
            }
        }, {
            radius: '70%',
            pointerWidth: 4,
            value: 9.8,
            color: 'rgba(168,145,102,1)',
            cap: {
                color: 'rgba(168,145,102,1)',
                radius: 4,
                border: {
                    width: 0.2,
                    color: 'rgba(168,145,102,1)'
                }
            },
            needleTail: {
                color: 'rgba(168,145,102,1)',
                length: '20%'
            }, animation: {
                enable: false,
                duration: 500
            }
        }]
    }]
}, '#element');

var circulargauge = new ej.circulargauge.CircularGauge({
    axes: [{
        minimum: 0,
        maximum: 12,
        startAngle: 0,
        endAngle: 360,
        majorTicks:{
            interval: 3
        },
        lineStyle: { width: 0 },
        ranges: [
            {
                start: 0, end: 3,
                startWidth: 5, endWidth: 5,
                color: 'rgba(29,29,29,0.7)'
            }, {
                start: 3, end: 12,
                startWidth: 5, endWidth: 5,
                color: 'rgba(168,145,102,0.1)'
            }
        ],
        labelStyle: {
            hiddenLabel: 'First',
            offset: -5
        },
        pointers: [{
            pointerWidth: 2,
            radius: '40%',
            color: 'rgb(29,29,29)',
            border: { width: 1, color: 'rgb(29,29,29)' },
            cap: {
                color: 'rgb(29,29,29)',
                radius: 2,
                border: {
                    width: 0.2,
                    color: 'red'
                }
            },
            needleTail: {
                length: '0%'
            }, animation: {
                enable: false
            }
        }]
    }]
}, '#subGauge');

