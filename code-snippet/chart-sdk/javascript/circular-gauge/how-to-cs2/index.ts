


import { CircularGauge, Range } from '@syncfusion/ej2-circulargauge';
let circulargauge: CircularGauge = new CircularGauge({
  axes: [
    {
      minimum: 0, maximum: 120,
      ranges: [
        {
          start: 0, end: 20
        }
      ]
    }
  ]
});
circulargauge.appendTo('#element');

document.getElementById("addRange").onclick = function () {
    let start: number;
    let end: number;
    start = +(circulargauge.axes[0].ranges[circulargauge.axes[0].ranges.length - 1].start) + 20;
    end = start + 20;
    if (end > circulargauge.axes[0].maximum) {
        circulargauge.axes[0].maximum = end;
    }
    let range = { start: start, end: end };
    circulargauge.axes[0].ranges.push(new Range(<Range>(circulargauge.axes[0].ranges[0]), 'ranges', range));
    circulargauge.refresh();
}


