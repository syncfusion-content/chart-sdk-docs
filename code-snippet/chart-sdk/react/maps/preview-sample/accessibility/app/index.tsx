import * as React from "react";
import * as ReactDOM from "react-dom";
import { world_map } from './world-map';
import {
    MapsComponent,
    LayersDirective,
    LayerDirective,
    MapsTooltip,
    Legend,
    Selection,
    Marker,
    Zoom,
    Annotations,
    AnnotationsDirective,
    AnnotationDirective,
    MarkersDirective,
    MarkerDirective,
    Inject
} from '@syncfusion/ej2-react-maps';

export function App() {
    return (
        <MapsComponent id="maps" height="400px" width="600px"
            titleSettings={{ text: 'Membership of countries in the UN Security Council', textStyle: { size: '16px' } }}
            legendSettings={{ visible: true, position: 'Bottom', type: 'Layers' }}
            zoomSettings={{ enable: true, mouseWheelZoom: true, toolbarSettings: { backgroundColor: '#f5f5f5', buttonSettings: { toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] } } }}>
            <Inject services={[MapsTooltip, Legend, Selection, Marker, Zoom, Annotations]} />
            <AnnotationsDirective>
                <AnnotationDirective content='<div style="font-size:12px; font-weight:500; color:#333; background-color:#fff; padding:2px 6px; border:1px solid #ccc;">World Map</div>' x="0%" y="2%" zIndex="1" />
            </AnnotationsDirective>
            <LayersDirective>
                <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name'
                    dataSource={[
                        { Country: 'China', Membership: 'Permanent' },
                        { Country: 'France', Membership: 'Permanent' },
                        { Country: 'Russia', Membership: 'Permanent' },
                        { Country: 'United Kingdom', Membership: 'Permanent' },
                        { Country: 'United States', Membership: 'Permanent' }
                    ]}
                    shapeSettings={{ colorValuePath: 'Membership', colorMapping: [{ value: 'Permanent', color: '#D84444' }] }}
                    tooltipSettings={{ visible: true, valuePath: 'Country' }}>
                    <MarkersDirective>
                        <MarkerDirective visible={true} shape='Balloon' width={15} height={15} animationDuration={0}
                            border={{ width: 1, color: '#333' }} fill='#FF471A'
                            dataSource={[
                                { latitude: 39.9042, longitude: 116.4074, name: 'Beijing' },
                                { latitude: 48.8566, longitude: 2.3522, name: 'Paris' },
                                { latitude: 55.7558, longitude: 37.6173, name: 'Moscow' },
                                { latitude: 51.5074, longitude: -0.1278, name: 'London' },
                                { latitude: 38.8951, longitude: -77.0364, name: 'Washington D.C.' }
                            ]}
                            tooltipSettings={{ visible: true, valuePath: 'name' }} />
                    </MarkersDirective>
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('maps'));
