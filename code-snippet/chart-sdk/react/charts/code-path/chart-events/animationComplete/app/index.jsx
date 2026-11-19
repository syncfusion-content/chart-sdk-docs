{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, IAnimationCompleteEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const animationCompleteHandler = (args) => {
        console.log('Chart animation complete event was triggered');
    }

    return (
        <ChartComponent id='charts' animationComplete={animationCompleteHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales'>
            <Inject services={[LineSeries, Legend, DataLabel, Category]} />
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