


import { CircularGauge, Range } from '@syncfusion/ej2-circulargauge';

// initialize the circular gauge.
let circulargauge: CircularGauge = new CircularGauge({
  axes: [
    {
      minimum: 0, maximum: 120,
      // initialize the ranges.
      ranges: [
        {
          start: 0, end: 20
        }
      ]
    }
  ]
});

// render initialized circular gauge.
circulargauge.appendTo('#element');


