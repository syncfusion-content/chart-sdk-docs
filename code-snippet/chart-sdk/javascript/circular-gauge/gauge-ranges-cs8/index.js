var rangeRadialGradient = {
    radius: '50%', innerPosition: { x: '50%', y: '50%' },
    outerPosition: { x: '50%', y: '50%' },
    colorStop: [
        { color: '#9E40DC', offset: '90%', opacity: 0.9 },
        { color: '#E63B86', offset: '160%', opacity: 0.9 }]
};
var circulargauge = new ej.circulargauge.CircularGauge({
    title: 'Short Put Distance',
    titleStyle: {
        size: '18px'
    },
    centerY: '57%',
    axes: [{
        annotations: [{
            content: '12 M', radius: '108%', angle: 98, zIndex: '1'
        }, {
            content: '11 M', radius: '80%', angle: 81, zIndex: '1'
        }, {
            content: '10 M', radius: '50%', angle: 69, zIndex: '1'
        }, {
            content: 'Doe', radius: '108%', angle: 190, zIndex: '1'
        }, {
            content: 'Almaida', radius: '80%', angle: 185, zIndex: '1'
        }, {
            content: 'John', radius: '50%', angle: 180, zIndex: '1'
        }],
        lineStyle: {
            width: 0
        },
        radius: '90%',
        labelStyle: {
        font: {
            size: '0px'
        }
        }, majorTicks: {
            width: 0
        }, minorTicks: {
            width: 0
        },
        startAngle: 200, endAngle: 130,
        minimum: 0, maximum: 14,
        ranges: [{
        start: 0, end: 12, radius: '115%',
        startWidth: 25, endWidth: 25,
        radialGradient: rangeRadialGradient
        }, {
            start: 0, end: 11, radius: '85%',
            startWidth: 25, endWidth: 25,
            radialGradient: rangeRadialGradient
        }, {
            start: 0, end: 10, radius: '55%',
            startWidth: 25, endWidth: 25,
            radialGradient: rangeRadialGradient
        }],
        pointers: [{
            type: 'Marker', value: 12, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/football.png',
            radius: '108%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 1500 }
        }, {
            type: 'Marker', value: 11, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/basketball.png',
            radius: '78%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 1200 }
        }, {
            type: 'Marker', value: 10, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/golfball.png',
            radius: '48%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 900 }
        }, {
            type: 'Marker', value: 12, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/athletic.png',
            radius: '0%', markerWidth: 90, markerHeight: 90,
            animation: { duration: 0 }
        }, {
            type: 'Marker', value: 0.1, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/girl-1.png',
            radius: '108%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 1500 }
        }, {
            type: 'Marker', value: 0.1, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/man-1.png',
            radius: '78%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 1500 }
         }, {
            type: 'Marker', value: 0.1, markerShape: 'Image',
            imageUrl: 'https://ej2.syncfusion.com/javascript/demos/src/circular-gauge/images/man-2.png',
            radius: '48%', markerWidth: 28, markerHeight: 28,
            animation: { duration: 1500 }
        }]
    }]
}, '#element');

