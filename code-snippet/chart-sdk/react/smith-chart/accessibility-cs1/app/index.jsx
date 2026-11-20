import * as React from "react";
import * as ReactDOM from "react-dom";
import { Inject, SmithchartComponent, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartLegend, TooltipRender } from '@syncfusion/ej2-react-charts';

function App() {

    return ( <SmithchartComponent id="smithchart"
                title={{ visible: true, text: 'Transmission details', subtitle: { text: 'Values' } }}
                renderType='Admittance'
                legendSettings={{ visible: true }}>
                    <Inject services={[SmithchartLegend, TooltipRender]}/>
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective
                                points={[
                                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                    { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                    { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                    { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                    { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                                ]}
                                name='Transmission2'
                                enableAnimation={true}
                                animationDuration={500}
                                tooltip={{ visible: true }}
                                marker={{ visible: true, dataLabel: { visible: true } }}
                                >
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
            </SmithchartComponent> );

};
export default App;
ReactDOM.render(<App />, document.getElementById('smithchart'));