var map = new ej.maps.Maps({
   layers: [{
        shapeData: new ej.maps.MapAjax('//ej2.syncfusion.com/javascript/demos/src/maps/map-data/world-map.json'),
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: Population_Density,
        legendSettings:{
            visible: true
        },
        shapeSettings: {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: 'skyblue',
                },
                {
                    from: 101, to: 200, color: 'blue',
                },
                {
                    color: 'green'
                }
            ]
        }
    }]
});
map.appendTo('#element');

