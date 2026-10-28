import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, IMouseEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const chartMouseLeaveHandler = (args: IMouseEventArgs): void => {
        console.log('chartMouseLeave event was triggered');
    }

    return (
        <ChartComponent id='charts' chartMouseLeave={chartMouseLeaveHandler} primaryXAxis={{valueType: 'Category'}}
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