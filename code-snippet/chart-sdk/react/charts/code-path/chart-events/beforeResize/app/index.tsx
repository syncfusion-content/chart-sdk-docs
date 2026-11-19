{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, IResizeEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const beforeResizeHandler = (args: IResizeEventArgs): void => {
        console.log('beforeResize event was triggered');
    }

    return (
        <ChartComponent id='charts' beforeResize={beforeResizeHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales'>
            <Inject services={[LineSeries, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line' name='Sales'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));
{% endraw %}