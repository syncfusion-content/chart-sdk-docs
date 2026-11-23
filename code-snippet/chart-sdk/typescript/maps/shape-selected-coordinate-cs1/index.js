var map = new ej.maps.Maps({
    layers: [{
        shapeData: world_map,
        selectionSettings: {
            enable: true,
            fill: 'green',
            border: {
                color: 'white',
                width: 2
            }
        }
    }],
    shapeSelected: function (args) {
        var popup = document.getElementById(
            'shapeSelectedPopup'
        );
        var coordinates = document.getElementById(
            'selectedCoordinates'
        );
        if (
            popup &&
            coordinates &&
            args.x !== undefined &&
            args.y !== undefined
        ) {
            coordinates.textContent =
                'X: ' + args.x + ', Y: ' + args.y;
            popup.style.left = args.x + 'px';
            popup.style.top = args.y + 'px';
            popup.style.display = 'block';
        }
    }
});

map.appendTo('#element');