var treemap = new ej.treemap.TreeMap({
    dataSource: [
    { Car:'Mustang', Brand:'Ford', count:232, color: '#71B081' },
                       { Car:'EcoSport', Brand:'Ford', count:121,  color: '#5A9A77' },
                       { Car:'Swift', Brand:'Maruti', count:143, color: '#498770' },
                       { Car:'Baleno', Brand:'Maruti', count:454, color: '#39776C' },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 , color: '#266665' },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123, color: '#124F5E' } 
],    
    weightValuePath: 'count',    
    enableRtl:true,
    colorValuePath: 'color',
    legendSettings: {
        visible: true,
        position:'Top'        
    },
    leafItemSettings: {
        labelPath: 'Car'        
     },
}, '#container');


