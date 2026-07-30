var gauge = new ej.lineargauge.LinearGauge({
    axes: [{
            ranges: [
                {
                    start: 0,
                    end: 30,
                    startWidth: 10,
                    endWidth: 10,
                    color: '#41f47f'
                },
                {
                    start: 30,
                    end: 50,
                    startWidth: 10,
                    endWidth: 10,
                    color: '#f49441'
                }, {
                    start: 50,
                    end: 100,
                    startWidth: 10,
                    endWidth: 10,
                    color: '#cd41f4'
                }
            ]
        }]
}, '#element');

