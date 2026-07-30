var circulargauge = new ej.circulargauge.CircularGauge({
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
}, '#element');

document.getElementById("addRange").onclick = function () {
    var start = +(circulargauge.axes[0].ranges[circulargauge.axes[0].ranges.length - 1].start) + 20;
    var end = start + 20;
    if (end > circulargauge.axes[0].maximum) {
        circulargauge.axes[0].maximum = end;
     }
     var range = { start: start, end: end };
     circulargauge.axes[0].ranges.push(new ej.circulargauge.Range((circulargauge.axes[0].ranges[0]), 'ranges', range));
     circulargauge.refresh();
}

