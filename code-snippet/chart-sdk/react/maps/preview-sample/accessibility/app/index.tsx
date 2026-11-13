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
    Inject
} from '@syncfusion/ej2-react-maps';

export function App() {
    return (
        <MapsComponent id="maps" height="400px" width="600px"
            titleSettings={{ text: 'Membership of countries in the UN Security Council', textStyle: { size: '16px' } }}
            legendSettings={{ visible: true, position: 'Bottom', type: 'Layers' }}>
            <Inject services={[MapsTooltip, Legend, Selection]} />
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
                </LayerDirective>
            </LayersDirective>
        </MapsComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('maps'));
