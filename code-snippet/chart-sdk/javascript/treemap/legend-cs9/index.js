var treemap = new ej.treemap.TreeMap({
    dataSource: [{ fruit:'Apple', count:5000, visibility: true , color: '#71B081' },
                       { fruit:'Orange', count:3000, visibility: false, color: '#5A9A77' },
                       { fruit:'Apple', count:2300, visibility: true, color: '#498770' },
                       { fruit:'Banana', count:500, visibility: false, color: '#39776C' },
                       { fruit:'Mango', count:4300, visibility: true, color: '#266665' },
                       { fruit:'Papaya', count:1200, visibility: false, color: '#124F5E' }
                     ],
	weightValuePath: 'count',
    colorValuePath:'color',
    palette: [],
    legendSettings: {
        visible: true,
        valuePath:'fruit'
    },
    leafItemSettings: {
        labelPath: 'fruit'       
     }
}, '#container');



