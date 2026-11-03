import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, IMouseEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const chartMouseClickHandler = (args) => {
        console.log('chartMouseClick event was triggered');
    }

    return (
        <ChartComponent id='charts' chartMouseClick={chartMouseClickHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales'>
            <Inject services={[ColumnSeries, Category]} />
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