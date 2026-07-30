

let fruits:Object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
                     ];

import { TreeMap, TreeMapTooltip } from '@syncfusion/ej2-treemap';
TreeMap.Inject(TreeMapTooltip);

let treemap: TreeMap = new TreeMap({
    dataSource: fruits ,
    weightValuePath: 'count',
    palette:['#71B081','#5A9A77', '#498770', '#39776C', '#266665','#124F5E'],
     tooltipSettings: {
            visible: true,
            format:'${count} : ${fruit}'
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
}, '#container');



