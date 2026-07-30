

let CarDetails:Object[] = [{ Car:'Mustang', Brand:'Ford', count:232, color: '#71B081' },
                       { Car:'EcoSport', Brand:'Ford', count:121,  color: '#5A9A77' },
                       { Car:'Swift', Brand:'Maruti', count:143, color: '#498770' },
                       { Car:'Baleno', Brand:'Maruti', count:454, color: '#39776C' },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 , color: '#266665' },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123, color: '#124F5E' }
                     ];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    dataSource: CarDetails ,
    weightValuePath: 'count',
    colorValuePath: 'color',
    enableRtl:true,
    legendSettings: {
        visible: true,
        position:'Top'
    },
    leafItemSettings: {
        labelPath: 'Car'
     },
}, '#container');



