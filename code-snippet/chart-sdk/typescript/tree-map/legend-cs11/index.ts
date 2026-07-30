


let fruits:Object[] = [{ fruit:'Apple', count:5000, visibility: true , color: '#71B081' },
                       { fruit:'Grape', count:3000, visibility: false, color: '#5A9A77' },
                       { fruit:'Apple', count:2300, visibility: true, color: '#498770' },
                       { fruit:'Banana', count:500, visibility: false, color: '#39776C' },
                       { fruit:'Grape', count:4300, visibility: true, color: '#266665' },
                       { fruit:'Papaya', count:1200, visibility: false, color: '#124F5E' }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
    colorValuePath:'color',
    palette: [],
    legendSettings:{
        visible:true,
        valuePath:'fruit',
        removeDuplicateLegend: true
    },
    leafItemSettings: {
        labelPath: 'fruit',
     }
}, '#container');



