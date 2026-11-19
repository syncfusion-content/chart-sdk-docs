{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, DateTime, Legend, StepLineSeries, Tooltip, ISharedTooltipRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const sharedTooltipRenderHandler = (args) => {
        args.headerText = 'Shared Tooltip';
        if (args.text && args.text.length) {
            args.text = args.text.map((line) => {
                return line.replace(':', ' value:') + '%';
            });
        }
    }

    return (
        <ChartComponent id='charts' sharedTooltipRender={sharedTooltipRenderHandler} primaryXAxis={{valueType: 'DateTime'}}
        primaryYAxis={{title: 'Rate (%)'}}
        tooltip={{ enable: true, shared: true }} title='Unemployment Rates 1975-2010'>
            <Inject services={[StepLineSeries, ColumnSeries, Legend, Tooltip, DateTime]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y' width={2} type='StepLine' name='China' marker={{ visible: true, width: 10, height: 10 }}>
                </SeriesDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y1' type='Column' name='USA'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));
{% endraw %}