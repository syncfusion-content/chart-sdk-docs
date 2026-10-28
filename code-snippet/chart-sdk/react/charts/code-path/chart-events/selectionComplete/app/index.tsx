{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Selection, ISelectionCompleteEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const selectionCompleteHandler = (args: ISelectionCompleteEventArgs): void => {
        console.log('selectionComplete event was triggered');
    }

    return (
        <ChartComponent id='charts' selectionComplete={selectionCompleteHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}}
        selectionMode='Point' title='Monthly Sales'>
            <Inject services={[ColumnSeries, Category, Selection]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));
{% endraw %}