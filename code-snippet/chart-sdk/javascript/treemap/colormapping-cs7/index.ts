


let fruits:Object[] = [{ fruit:'Apple', count:5000, color: 'red'},
                       { fruit:'Mango', count:3000, color:'blue'},
                       { fruit:'Orange', count:2300, color:'green' },
                       { fruit:'Banana', count:500, color:'yellow' },
                       { fruit:'Grape', count:4300, color:'orange' },
                       { fruit:'Papaya', count:1200, color:'pink' },
                       { fruit:'Melon', count:4500, color:'violet' }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
    colorValuePath:'color',
    leafItemSettings: {
        labelPath: 'fruit',
     }
}, '#container');



