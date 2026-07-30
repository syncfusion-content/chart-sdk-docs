var maps = new ej.maps.Maps({
     useGroupingSeparator: true,
        format: 'n',
        zoomSettings: {
            enable: true
        },
        titleSettings: {
            text: 'Top 13 largest cities in the World',
            textStyle: {
                size: '16px'
            }
        },
        layers: [
            {
                shapeData: new ej.maps.MapAjax('//ej2.syncfusion.com/javascript/demos/src/maps/map-data/world-map.json'),
                shapeSettings: {
                    fill: '#C1DFF5'
                },
                markerClusterSettings: {
                    allowClustering: true,
                    shape: 'Circle',
                    height: 40,
                    width: 40,
                    labelStyle : { color: 'white'},
                },
                markerSettings: [
                    {
                        visible: true,
                        dataSource: cluster,
                        shape: 'Balloon',
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'area',
                            format: 'City: ${city} <br> Area: ${area}'
                        },
                        height: 20,
                        width: 20,
                        animationDuration: 0
                    },

                ]
            }
        ]
	});
    maps.appendTo('#container');

