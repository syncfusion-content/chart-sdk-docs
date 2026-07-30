var gauge = new ej.lineargauge.LinearGauge({
axes: [{
        labelStyle: {
           format: '{value}°C'
        }
    },
    {
        opposedPosition: true,
        labelStyle: {
           format: '{value}°F'
        }
    }]
}, '#element');

