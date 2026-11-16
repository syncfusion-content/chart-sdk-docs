import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective,
  RangesDirective, RangeDirective, AnnotationsDirective, AnnotationDirective, Inject,
} from '@syncfusion/ej2-react-circulargauge';

function App() {

  return (
    <div>
      <CircularGaugeComponent id='circular' title='Circular gauge'
        enablePointerDrag={true} enableRangeDrag={true}
        tooltip={{ type: ['Range', 'Annotation'], enable: true, enableAnimation: false,
          annotationSettings: { template: '<div> Tooltip for Annotation </div>' },
          rangeSettings: { fill: 'red' } }}>
        <Inject services={[GaugeTooltip, Annotations]} />
        <AxesDirective>
          <AxisDirective radius='100%' startAngle={230} endAngle={130}
            minimum={0} maximum={150}
            majorTicks={{ interval: 10, color: 'blue', height: 10, width: 3 }}
            lineStyle={{ width: 2, color: 'red' }}
            minorTicks={{ interval: 5, color: 'yellow', height: 5, width: 2 }}
            labelStyle={{ format: '{value}°C', offset: 10, autoAngle: true,
              font: { color: 'red', size: '12px', fontWeight: 'Bold' } }}>
            <AnnotationsDirective>
              <AnnotationDirective content='<div> Gauge Annotation </div>' zIndex='1' angle={90} radius='150%' />
            </AnnotationsDirective>
            <PointersDirective>
              <PointerDirective animation={{ enable: false }} value={60} radius='60%' color='#007DD1'
                pointerWidth={25} needleStartWidth={4} needleEndWidth={4}
                cap={{ radius: 8, border: { color: '#007DD1', width: 5 } }}
                needleTail={{ length: '25%', color: '#007DD1' }} />
              <PointerDirective value={30} type='RangeBar' radius='60%' color='#007DD1'
                border={{ color: 'grey', width: 2 }} pointerWidth={15} roundedCornerRadius={6} />
              <PointerDirective value={45} type='Marker' markerShape='InvertedTriangle' radius='100%'
                markerHeight={15} markerWidth={15} border={{ color: '#007DD1', width: 2 }} />
              <PointerDirective value={55} type='Marker' markerShape='Image' radius='100%'
                markerHeight={35} markerWidth={35}
                imageUrl='https://ej2.syncfusion.com/demos/src/circular-gauge/images/athletics.png' />
              <PointerDirective radius='60%' value={40} animation={{ duration: 1000 }} pointerWidth={10}
                linearGradient={{ startValue: '0%', endValue: '100%',
                  colorStop: [{ color: '#FEF3F9', offset: '0%', opacity: 0.9 }, { color: '#E63B86', offset: '70%', opacity: 0.9 }] }}
                cap={{ radius: 8, color: 'white', border: { color: '#E63B86', width: 1 } }}
                needleTail={{ length: '20%', linearGradient: { startValue: '0%', endValue: '100%',
                  colorStop: [{ color: '#FEF3F9', offset: '0%', opacity: 0.9 }, { color: '#E63B86', offset: '70%', opacity: 0.9 }] } }} />
              <PointerDirective radius='80%' value={25} animation={{ enable: true, duration: 1000 }} pointerWidth={10}
                radialGradient={{ radius: '50%', innerPosition: { x: '50%', y: '50%' }, outerPosition: { x: '50%', y: '50%' },
                  colorStop: [{ color: '#FEF3F9', offset: '0%', opacity: 0.9 }, { color: '#E63B86', offset: '60%', opacity: 0.9 }] }}
                cap={{ radius: 8, color: 'white', border: { color: '#E63B86', width: 1 } }}
                needleTail={{ length: '20%', radialGradient: { radius: '50%',
                  innerPosition: { x: '50%', y: '50%' }, outerPosition: { x: '50%', y: '50%' },
                  colorStop: [{ color: '#FEF3F9', offset: '0%', opacity: 0.9 }, { color: '#E63B86', offset: '60%', opacity: 0.9 }] } }} />
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={20} end={40} endWidth={15} startWidth={15} color='#ff5985' radius='100' />
              <RangeDirective start={45} end={80} radius='70%' roundedCornerRadius={5}
                linearGradient={{ startValue: '0%', endValue: '100%',
                  colorStop: [{ color: '#9E40DC', offset: '0%', opacity: 0.9 }, { color: '#E63B86', offset: '70%', opacity: 0.9 }] }} />
              <RangeDirective start={85} end={100} radius='108%' roundedCornerRadius={5}
                radialGradient={{ radius: '50%', innerPosition: { x: '50%', y: '50%' }, outerPosition: { x: '50%', y: '50%' },
                  colorStop: [{ color: '#9E40DC', offset: '90%', opacity: 0.9 }, { color: '#E63B86', offset: '160%', opacity: 0.9 }] }} />
            </RangesDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>

      <CircularGaugeComponent id='multiplecircular' title='Circular Gauge with Multiple Axis'
        enablePointerDrag={true}
        tooltip={{ enable: true }}
        legendSettings={{ visible: true, shapeWidth: 30, shapeHeight: 30, position: 'Bottom',
          padding: 15, toggleVisibility: true, height: '50' }}>
        <Inject services={[GaugeTooltip, LegendService]} />
        <AxesDirective>
          <AxisDirective minimum={0} maximum={150}
            majorTicks={{ interval: 10, color: 'green', height: 10, width: 3 }}
            lineStyle={{ width: 2, color: 'red' }}
            minorTicks={{ interval: 5, color: 'violet', height: 5, width: 2 }}
            labelStyle={{ offset: 10, autoAngle: true, font: { color: 'red', size: '12px', fontWeight: 'Bold' } }}>
            <PointersDirective>
              <PointerDirective value={30} type='RangeBar' radius='60%' color='#007DD1'
                border={{ color: 'grey', width: 2 }} pointerWidth={15} roundedCornerRadius={6} />
              <PointerDirective value={45} type='Marker' markerShape='Circle' radius='100%'
                markerHeight={15} markerWidth={15} border={{ color: '#007DD1', width: 2 }} />
            </PointersDirective>
            <RangesDirective>
              <RangeDirective start={10} end={25} color='red' />
              <RangeDirective start={25} end={55} color='blue' />
              <RangeDirective start={55} end={85} color='green' />
            </RangesDirective>
          </AxisDirective>
          <AxisDirective minimum={0} maximum={100}
            majorTicks={{ interval: 10, position: 'Inside', height: 10, color: 'red' }}
            minorTicks={{ interval: 5, position: 'Inside', height: 5, color: 'green' }}>
            <PointersDirective>
              <PointerDirective value={90} />
              <PointerDirective value={50} type='RangeBar' radius='60%' color='#007DD1'
                border={{ color: 'grey', width: 2 }} pointerWidth={15} />
            </PointersDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('loader'));
