{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, Tooltip, ITooltipRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const tooltipRenderHandler = (args) => {
        console.log('tooltipRender event was triggered');
    }

    return (
        <ChartComponent id='charts' tooltipRender={tooltipRenderHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}}
        tooltip={{ enable: true }} title='Monthly Sales'>
            <Inject services={[LineSeries, Category, Tooltip]} />
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