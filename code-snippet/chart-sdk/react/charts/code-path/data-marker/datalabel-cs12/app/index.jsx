{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { dataA, dataB, dataC, dataD, dataE, dataF, dataG, dataH } from './datasource';

function App() {
    const primaryXAxis = {
        valueType: 'Category'
    };
    const primaryYAxis = {
        visible: false
    };
    const tooltip = {
        enable: true
    };
    const legendSettings = {
        visible: true
    };
    const marker = {
        dataLabel: {
            visible: true,
            name: 'text',
            fill: 'Transparent',
            labelIntersectAction: 'RelocateVertically',
            smartLabelSettings: {
                background: '#4f4f4f',
                border: {
                    color: 'black',
                    dashArray: '2',
                    width: 2
                },
                connectorLineStyle: {
                    color: 'black',
                    width: 2
                },
                pointerShape: 'Arrow',
                offset: 0.5
            }
        }
    };

    return (
        <ChartComponent id='charts' title='Chart Title' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} legendSettings={legendSettings}>
            <Inject services={[StackingColumnSeries, Legend, Category, Tooltip, DataLabel]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={dataA} xName='x' yName='y' type='StackingColumn' name='Category A' fill='#254061' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataB} xName='x' yName='y' type='StackingColumn' name='Category B' fill='#376092' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataC} xName='x' yName='y' type='StackingColumn' name='Category C' fill='#4f81bd' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataD} xName='x' yName='y' type='StackingColumn' name='Category D' fill='CornflowerBlue' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataE} xName='x' yName='y' type='StackingColumn' name='Category E' fill='LightBlue' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataF} xName='x' yName='y' type='StackingColumn' name='Category F' fill='LightSteelBlue' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataG} xName='x' yName='y' type='StackingColumn' name='Category G' fill='Moccasin' columnWidth={0.6} marker={marker}></SeriesDirective>
                <SeriesDirective dataSource={dataH} xName='x' yName='y' type='StackingColumn' name='Category H' fill='LightGrey' columnWidth={0.6} marker={marker}></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}