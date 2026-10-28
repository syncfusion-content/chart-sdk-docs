{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, IExportEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    let chartInstance;
    const afterExportHandler = (args) => {
        console.log('afterExport event was triggered');
    }

    return (
    <div>
        <button onClick={() => chartInstance.exportModule.export('PNG', 'Chart')}>Export PNG</button>
        <ChartComponent id='charts' ref={chart => chartInstance = chart} afterExport={afterExportHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales'>
            <Inject services={[LineSeries, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line' name='Sales'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    </div>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));
{% endraw %}