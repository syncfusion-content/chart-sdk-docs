{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Selection, Inject, IShapeSelectedEventArgs } from '@syncfusion/ej2-react-maps';

export function App() {
    function shapeSelected(args: IShapeSelectedEventArgs) {
        let popup = document.getElementById('shapeSelectedPopup');
        let coordinates = document.getElementById('selectedCoordinates');
        if (popup && coordinates && args.x !== undefined && args.y !== undefined) {
            coordinates.textContent = 'X: ' + args.x + ', Y: ' + args.y;
            popup.style.left = args.x + 'px';
            popup.style.top = args.y + 'px';
            popup.style.display = 'block';
        }
    }

    return (
        <div className="control-section">
            <div align='center'>
                <MapsComponent id='container' style={{ display: 'block' }} shapeSelected={shapeSelected}>
                    <Inject services={[Selection]} />
                    <LayersDirective>
                        <LayerDirective shapeData={world_map} selectionSettings={{
                            enable: true,
                            fill: 'green',
                            border: { color: 'white', width: 2 }
                        }}>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>
                <div id="shapeSelectedPopup">
                    <strong>Selected coordinates</strong>
                    <div id="selectedCoordinates"></div>
                </div>
            </div>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}
