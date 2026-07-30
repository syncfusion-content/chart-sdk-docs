

import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import { loadCldr, setCulture, Ajax, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture("de");
setCurrencyCode('EUR');
let gauge: LinearGauge = new LinearGauge({
    locale: "de",
    format:'c',
    axes: [{
      labelStyle: {
        font: {
          color: 'red'
        }
      }
    }]
}, '#element');



