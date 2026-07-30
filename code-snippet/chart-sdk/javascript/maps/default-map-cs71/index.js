var map = new ej.maps.Maps({
    legendSettings: {
        visible: true,
        valuePath: 'continent',
        removeDuplicateLegend: true
    },
    layers: [{
        shapeData: new ej.maps.MapAjax('//ej2.syncfusion.com/javascript/demos/src/maps/map-data/world-map.json'),
        shapeDataPath: 'continent',
        shapePropertyPath: 'continent',
        dataSource: default_data,
        shapeSettings: {
            colorValuePath:'color'
        }
    }]
});
map.appendTo('#element');

