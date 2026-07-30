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
            radius: '108%'
        },{
            start: 25,
            end: 50,
            radius: '108%'
        },{
            start: 50,
            end: 75,
            radius: '108%'
        },{
            start: 75,
            end: 100,
            radius: '108%'
        }]
    }],
     legendSettings : {
       visible: true,
       position: 'Bottom',
            alignment:'Near',
            width:'450',
            height:'80',
            shapeWidth:30,
            shapeHeight:30,
            padding:15,
            border: {
                color:'green',
                width:3
            }
      }
}, '#element');

