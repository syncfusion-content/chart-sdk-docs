var gauge = new ej.lineargauge.LinearGauge({
 tooltip: {
            enable: true,
            //tooltip template for Linear gauge
            template: '<div>Pointer: 80 </div>'
        },
        axes: [{
            pointers: [{
                value: 80
            }]
        }]
}, '#element');

