
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DataLabel, LineSeries, Double } from '@syncfusion/ej2-react-charts';
import { vietnam, indonesia, france, poland, mexico } from './datasource';

function App() {
    const primaryXAxis: AxisModel = {
        valueType: 'Double',
        majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
    };
    const primaryYAxis: AxisModel = {
        title: 'Volume in million metric tons',
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };
    const animation: Object = { enable: false };
    const vietnamMarker: Object = {
        visible: true,
        width: 7,
        height: 7,
        shape: 'Circle',
        isFilled: true,
        dataLabel: {
            visible: true,
            smartLabelSettings: {
                background: '#e0e0e0',
                border: { color: '#404040', width: 1 },
                pointerShape: 'Arrow',
                connectorLineStyle: { color: '#404040', width: 1.5 }
            }
        }
    };
    const indonesiaMarker: Object = {
        visible: true,
        width: 6,
        height: 6,
        shape: 'Triangle',
        isFilled: true,
        dataLabel: { visible: true }
    };
    const franceMarker: Object = {
        visible: true,
        width: 7,
        height: 7,
        shape: 'Diamond',
        isFilled: true,
        dataLabel: { visible: true }
    };
    const polandMarker: Object = {
        visible: true,
        width: 5,
        height: 5,
        shape: 'Rectangle',
        isFilled: true,
        dataLabel: { visible: true }
    };
    const mexicoMarker: Object = {
        visible: true,
        width: 7,
        height: 7,
        shape: 'Pentagon',
        isFilled: true,
        dataLabel: { visible: true }
    };

    return (
        <ChartComponent id='charts' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} enableSmartLabels={true}
            title='Annual Crude Steel Production by Country (2016–2024)' subTitle='Source: wikipedia.org'>
            <Inject services={[LineSeries, Double, DataLabel, Legend]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={vietnam} xName='x' yName='y' name='Vietnam' width={2} animation={animation} marker={vietnamMarker} type='Line'></SeriesDirective>
                <SeriesDirective dataSource={indonesia} xName='x' yName='y' name='Indonesia' width={2} animation={animation} marker={indonesiaMarker} type='Line'></SeriesDirective>
                <SeriesDirective dataSource={france} xName='x' yName='y' name='France' width={2} animation={animation} marker={franceMarker} type='Line'></SeriesDirective>
                <SeriesDirective dataSource={poland} xName='x' yName='y' name='Poland' width={2} animation={animation} marker={polandMarker} type='Line'></SeriesDirective>
                <SeriesDirective dataSource={mexico} xName='x' yName='y' name='Mexico' width={2} animation={animation} marker={mexicoMarker} type='Line'></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

