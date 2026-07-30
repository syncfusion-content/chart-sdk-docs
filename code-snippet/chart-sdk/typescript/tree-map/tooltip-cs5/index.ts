

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
     tooltipSettings: {
            visible: true,
            format:'Name:${fruit} - TotalCount:${count}'
    },
    leafItemSettings: {
        labelPath: 'fruit'
     }
}, '#container');



