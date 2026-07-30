var map = new ej.maps.Maps({
  layers: [{
      shapeData: world_map,
      tooltipSettings: {
          visible: true,
          valuePath: 'name',
          fill: '#D0D0D0',
          textStyle: {
              color: 'green',
              fontFamily: 'Times New Roman',
              fontStyle: 'Sans-serif'
          },
          duration: 3000
      }
  }]
});
map.appendTo('#element');