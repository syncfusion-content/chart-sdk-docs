import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Legend3D, DataLabel3D, StackingColumnSeries3D } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const chartData: Object[] = [
        { x: '2014', y: 21.1, y1: 76.9, y2: 66.1, y3: 34.1 },
        { x: '2015', y: 127.3, y1: 20.5, y2: 19.3, y3: 38.2 },
        { x: '2016', y: 143.4, y1: 121.7, y2: 91.3, y3: 44.0 },
        { x: '2017', y: 559.9, y1: 342.5, y2: 62.4, y3: 91.6 },
        { x: '2018', y: 175.4, y1: 166.7, y2: 112.9, y3: 61.9 },
        { x: '2019', y: 189.0, y1: 182.9, y2: 122.4, y3: 71.5 },
        { x: '2020', y: 202.7, y1: 197.3, y2: 120.9, y3: 82.0 }
    ];

    return (
        <Chart3DComponent id='charts'
            primaryXAxis={{
                title: 'Years',
                interval: 1,
                valueType: 'Category'
            }}
            primaryYAxis={{
                title: 'Sales in Billions',
                labelFormat: '{value}B'
            }}
            legendSettings={{
                visible: true
            }}
            title='Mobile Game Market by Country'
            enableRotation={true} rotation={7} tilt={10} depth={100}>
            <Inject services={[Category3D, StackingColumnSeries3D, Legend3D, DataLabel3D]} />
            <Chart3DSeriesCollectionDirective>
                <Chart3DSeriesDirective dataSource={chartData} xName='x' yName='y' type='StackingColumn' name='UK' animation={{ enable: false }} columnWidth={0.5} dataLabel={{ visible: true, labelIntersectAction: 'RelocateVertically' }}>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={chartData} xName='x' yName='y1' type='StackingColumn' name='Germany' animation={{ enable: false }} columnWidth={0.5} dataLabel={{ visible: true, labelIntersectAction: 'RelocateVertically' }}>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={chartData} xName='x' yName='y2' type='StackingColumn' name='France' animation={{ enable: false }} columnWidth={0.5} dataLabel={{
                    visible: true,
                    labelIntersectAction: 'RelocateVertically',
                    smartLabelSettings: {
                        connectorLineStyle: {
                            color: 'RED',
                            width: 2
                        },
                        background: 'green',
                        border: {
                            color: 'yellow',
                            dashArray: '2',
                            width: 2
                        },
                        pointerShape: 'Arrow',
                        offset: 0.2
                    }
                }}>
                </Chart3DSeriesDirective>
                <Chart3DSeriesDirective dataSource={chartData} xName='x' yName='y3' type='StackingColumn' name='Italy' animation={{ enable: false }} columnWidth={0.5} dataLabel={{
                    visible: true,
                    labelIntersectAction: 'RelocateVertically',
                    smartLabelSettings: {
                        connectorLineStyle: {
                            color: 'RED',
                            width: 2
                        },
                        background: 'green',
                        border: {
                            color: 'yellow',
                            dashArray: '2',
                            width: 2
                        },
                        pointerShape: 'Arrow',
                        offset: 0.8
                    }
                }}>
                </Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('charts'));