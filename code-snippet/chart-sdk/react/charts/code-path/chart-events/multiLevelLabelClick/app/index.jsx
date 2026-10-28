{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, DataLabel, Legend, MultiLevelLabel, IMultiLevelLabelClickEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const multiLevelLabelClickHandler = (args) => {
        console.log('Multi-level label click event was triggered');
    }

    return (
        <ChartComponent id='charts' multiLevelLabelClick={multiLevelLabelClickHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Sales Analysis'>
            <Inject services={[ColumnSeries, Legend, DataLabel, Category, MultiLevelLabel]} />
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