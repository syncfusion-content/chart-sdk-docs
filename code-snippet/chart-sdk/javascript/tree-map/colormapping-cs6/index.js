var treemap = new ej.treemap.TreeMap({
   dataSource: [
        { fruit:'Apple', count:5000 },
        { fruit:'Mango', count:3000 },
        { fruit:'Orange', count:2300 },
        { fruit:'Banana', count:500 },
        { fruit:'Grape', count:4300 },
        { fruit:'Papaya', count:1200 },
        { fruit:'Melon', count:4500 }
    ],
    weightValuePath: 'count',
    rangeColorValuePath:'count',
    legendSettings:{
        visible: true
    },
    leafItemSettings: {
        labelPath: 'fruit',
            colorMapping:[
            {
               from:500,
               to:2500,
               color:'orange'
           },
           {
               from:3000,
               to:4000,
               color:'green'
           },
           {
               color:'red'
           }
        ]
     }
}, '#container');


