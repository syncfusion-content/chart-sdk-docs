var treemap = new ej.treemap.TreeMap({
       dataSource: [
              { fruit:'Apple', count:5000 },
              { fruit:'Mango', count:3000 },
              { fruit:'Orange', count:2300 },
              { fruit:'Banana', count:500 },
              { fruit:'Grape', count:4300 },
              { fruit:'Papaya', count:1200 },
              { fruit:'Melon', count:4500 }
       ],
       weightValuePath: 'count',
       tooltipSettings: {
              visible: true,
              format:'Name:${fruit} - TotalCount:${count}'
       },
       leafItemSettings: {
              labelPath: 'fruit'
       }
}, '#container');


