{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, ScrollBar, Zoom, IScrollEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const scrollStartHandler = (args) => {
        console.log('Scroll start event was triggered');
    }

    return (
        <ChartComponent id='charts' scrollStart={scrollStartHandler} primaryYAxis={{labelFormat: '${value}K'}}
        primaryXAxis={{ valueType: 'Category', scrollbarSettings: { enable: true } }} title='Sales Analysis'>
            <Inject services={[LineSeries, Category, Legend, DataLabel, ScrollBar, Zoom]} />
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