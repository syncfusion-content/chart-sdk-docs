


import { CircularGauge } from '@syncfusion/ej2-circulargauge';
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');
let gauge: CircularGauge = new CircularGauge({
    axes: [{
        labelStyle: {
            position: 'Inside',
            //Label format set as currency.
            format: 'c'
        }
    }]
}, '#element');



