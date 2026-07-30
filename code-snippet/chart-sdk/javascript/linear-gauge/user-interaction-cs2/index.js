var gauge = new ej.lineargauge.LinearGauge({
tooltip: {
       enable: true,
       format: '{value}km'
   },
   axes: [{
            pointers: [{
                value: 80
            }]
        }]
}, '#element');


