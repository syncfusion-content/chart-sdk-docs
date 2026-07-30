var map = new ej.maps.Maps({
    legendSettings:{
        visible:true,
        showLegendPath:'visibility'
    },
    layers: [
        {
            shapeData: new ej.maps.MapAjax('//ej2.syncfusion.com/javascript/demos/src/maps/map-data/world-map.json'),
            dataSource: default_data,            
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            shapeSettings: {
                colorValuePath: 'color'
            }            
        }
    ]
});
map.appendTo('#element');

