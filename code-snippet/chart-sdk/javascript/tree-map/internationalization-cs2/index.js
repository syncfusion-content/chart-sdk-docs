var treemap = new ej.treemap.TreeMap({
    dataSource: [
    { Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                       { car:'RS7 Sportback', Brand:'Audi', count:523 }
],    
    weightValuePath: 'count',    
    enableRtl:true,
    palette:['#71B081','#5A9A77', '#498770', '#39776C', '#266665','#124F5E'],
    legendSettings: {
        visible: true,
        position:'Top'        
    },
    tooltipSettings: {
            visible: true,
            format:'${count} : ${fruit}'
    },
    leafItemSettings: {
        labelPath: 'Car'        
     },
}, '#container');


