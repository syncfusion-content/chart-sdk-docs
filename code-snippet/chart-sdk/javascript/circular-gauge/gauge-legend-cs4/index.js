var circulargauge = new ej.circulargauge.CircularGauge({
axes: [{
        minimum: 0,
        maximum: 100,
        majorTicks: {
            useRangeColor: true
        },
        minorTicks: {
            useRangeColor: true
        },
        labelStyle: {
            useRangeColor: true
        },
        ranges: [{
            start: 0,
            end: 25,
            radius: '108%',
            legendText: 'light air'
        },{
            start: 25,
            end: 50,
            radius: '108%',
            legendText: 'light air'
        },{
            start: 50,
            end: 75,
            radius: '108%',
            legendText: 'light breeze'

        },{
            start: 75,
            end: 100,
            radius: '108%',
            legendText: 'Gentle breeze'
        }]
    }],
     legendSettings : {
       visible: true
      }
}, '#element');

