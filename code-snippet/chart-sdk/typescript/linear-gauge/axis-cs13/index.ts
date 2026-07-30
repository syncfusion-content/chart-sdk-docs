

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
let gauge: LinearGauge = new LinearGauge({
     axes: [{
        labelStyle: {
           format: '{value}°C'
        }
    },
    {
        opposedPosition: true,
        labelStyle: {
           format: '{value}°F'
        }
    }]
}, '#element');



