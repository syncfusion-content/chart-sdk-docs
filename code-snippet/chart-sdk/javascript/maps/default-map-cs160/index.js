var map = new ej.maps.Maps({
    mapsArea: {
        background: '#CCD1D1',
        border: {
            width: 2,
            color: 'green'
        }
    },
    layers: [{
        shapeData: world_map,
        shapeSettings: {
            autofill: true,
        }
    }]
});

map.appendTo('#element');

