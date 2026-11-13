import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    PieSeries,
    AccumulationLegend,
    AccumulationTooltip,
    AccumulationDataLabel,
    AccumulationSelection
} from "@syncfusion/ej2-react-charts";

function App() {

    const data = [
        { 'x': 'Chrome', y: 37, text: '37%' },
        { 'x': 'UC Browser', y: 17, text: '8%' },
        { 'x': 'iPhone', y: 19, text: '14%' },
        { 'x': 'Others', y: 10, text: '7%' },
        { 'x': 'Android', y: 17, text: '21%' }
    ];

    return (
        <AccumulationChartComponent id='charts' title='Mobile Browser Statistics'
            legendSettings={{ visible: true, position: 'Bottom' }}
            tooltip={{ enable: true, header: 'Browser', format: '<b>${point.x}</b><br>Share: <b>${point.y}%</b>' }}
            selectionMode='Point'
            enableAnimation={false}>
            <Inject services={[AccumulationLegend, AccumulationTooltip, AccumulationDataLabel, PieSeries, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' innerRadius='20%' dataLabel={{ visible: true, name: 'text', position: 'Outside' }}>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
