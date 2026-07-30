var gauge = new ej.lineargauge.LinearGauge({
  annotations: [
            {
                content: '<div id="first"><h1 style="color:red;">Speed</h1></div>',
                verticalAlignment: 'Near',
                horizontalAlignment: 'Center',
                x: 100,
                y: 150,
                zIndex: '1'
            },
            {
                content: '<div id="first"><h1 style="color:blue;">Meter</h1></div>',
                verticalAlignment: 'Center',
                horizontalAlignment: 'Center',
                x: -100,
                y: -100,
                zIndex: '1'
            }]
}, '#element');

