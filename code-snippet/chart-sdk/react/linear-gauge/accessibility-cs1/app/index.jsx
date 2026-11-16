import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective,
  RangesDirective, RangeDirective, AnnotationsDirective, AnnotationDirective, Inject,
  Annotations, GaugeTooltip, Gradient
} from '@syncfusion/ej2-react-lineargauge';

function App() {

  const axisLabelRender = (args) => {
    if (args.axis.visibleRange.min === args.value || args.axis.visibleRange.max === args.value) {
      args.text = '';
    }
  };

  const tooltipRender = (args) => {
    args.content = (args.axis.visibleRange.max === 25) ? args.content + ' cm' : args.content + ' in';
  };

  return (
    <div>
      <LinearGaugeComponent id='linear' title='LinearGauge Title' orientation='Horizontal'
        container={{ width: 140, border: { width: 2, color: '#a6a6a6' } }}
        tooltip={{ enable: true }}
        axisLabelRender={axisLabelRender} tooltipRender={tooltipRender}>
        <Inject services={[Annotations, GaugeTooltip, Gradient]} />
        <AxesDirective>
          <AxisDirective minimum={0} maximum={10}
            line={{ offset: 140 }}
            majorTicks={{ interval: 1 }}
            minorTicks={{ interval: 0.2 }}
            labelStyle={{ font: { color: '#000000' } }}>
            <PointersDirective>
              <PointerDirective type='Bar' value={5.4} offset={15} color='#ff66b3' enableDrag={true} />
              <PointerDirective value={2} type='Marker' markerType='Circle' color='red' enableDrag={true} />
              <PointerDirective value={10} type='Marker' markerType='Rectangle'
                linearGradient={{ startValue: '0%', endValue: '100%',
                  colorStop: [{ color: '#fef3f9', offset: '0%', opacity: 1 },
                             { color: '#f54ea2', offset: '100%', opacity: 1 }] }} />
              <PointerDirective value={7} type='Marker' markerType='Image'
                imageUrl='https://ej2.syncfusion.com/demos/src/linear-gauge/images/cycling.svg' />
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={7} end={8} startWidth={30} endWidth={30} color='#f54ea2' offset={30}
                linearGradient={{ startValue: '0%', endValue: '100%',
                  colorStop: [{ color: '#fef3f9', offset: '0%', opacity: 1 },
                             { color: '#f54ea2', offset: '100%', opacity: 1 }] }} />
              <RangeDirective start={3} end={4} color='red' />
            </RangesDirective>
          </AxisDirective>
          <AxisDirective opposedPosition={true} minimum={0} maximum={25}
            line={{ offset: -140 }}
            labelStyle={{ font: { color: '#000000' } }}
            majorTicks={{ interval: 1 }}
            minorTicks={{ interval: 0.2 }}>
            <PointersDirective>
              <PointerDirective type='Bar' offset={-15} value={16.5} color='#4d94ff' />
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={20} end={24} startWidth={10} endWidth={15} offset={30}
                radialGradient={{ radius: '65%',
                  outerPosition: { x: '50%', y: '70%' }, innerPosition: { x: '60%', y: '60%' },
                  colorStop: [{ color: '#fff5f5', offset: '5%', opacity: 0.9 },
                              { color: '#f54ea2', offset: '100%', opacity: 0.9 }] }} />
              <RangeDirective start={17} end={30} color='green' />
            </RangesDirective>
          </AxisDirective>
        </AxesDirective>
        <AnnotationsDirective>
          <AnnotationDirective content='<div id="first"><h1 style="font-size:15px">Inches</h1></div>'
            axisIndex={0} axisValue={5.4} x={35} y={-58} zIndex='1' />
          <AnnotationDirective content='<div id="second"><h1 style="font-size:15px">Centimeters</h1></div>'
            axisIndex={1} axisValue={16.5} x={50} y={52} zIndex='1' />
        </AnnotationsDirective>
      </LinearGaugeComponent>

      <LinearGaugeComponent id='thermometer'
        container={{ width: 30, type: 'Thermometer' }}>
        <AxesDirective>
          <AxisDirective>
            <PointersDirective>
              <PointerDirective value={50} width={15} type='Bar' />
            </PointersDirective>
          </AxisDirective>
        </AxesDirective>
      </LinearGaugeComponent>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('gauge-container'));
