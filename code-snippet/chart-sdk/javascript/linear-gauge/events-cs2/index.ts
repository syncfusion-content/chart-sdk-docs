

import { LinearGauge, Annotations } from '@syncfusion/ej2-lineargauge';
LinearGauge.Inject(Annotations);
let gauge: LinearGauge = new LinearGauge({
  annotationRender: function() {

  },
  annotations: [{
       content: '<div id="first"><h1>Gauge</h1></div>',
       verticalAlignment: 'Center',
       horizontalAlignment: 'Center',
       zIndex: '1'
  }]
}, '#element');


