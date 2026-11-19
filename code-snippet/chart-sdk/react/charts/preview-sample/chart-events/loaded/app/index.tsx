import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, ILoadedEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const loadedHandler = (args: ILoadedEventArgs): void => {
        console.log('Chart loaded event triggered');
    }

    return (
        <ChartComponent id='charts' loaded={loadedHandler} primaryXAxis={{valueType: 'Category'}}
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