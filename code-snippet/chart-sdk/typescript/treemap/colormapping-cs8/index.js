var treemap = new ej.treemap.TreeMap({
   dataSource:  [{ fruit:'Apple', count:5000 },
                       { fruit:'Grape', count:3000 },
                       { fruit:'Apple', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 }
                     ] ,
    palette:['#71B081','#5A9A77', '#498770', '#39776C', '#266665','#124F5E'], 
    weightValuePath: 'count',    
    width: '700px',
    height: '500px',
    legendSettings:{
        visible:true,
        position:'Auto'
    },
    leafItemSettings: {
        labelPath: 'fruit',
     }
}, '#container');


