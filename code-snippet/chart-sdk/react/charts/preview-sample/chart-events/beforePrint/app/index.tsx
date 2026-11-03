import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, IPrintEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    let chartInstance;
    const beforePrintHandler = (args: IPrintEventArgs): void => {
        console.log('beforePrint event was triggered');
    }

    return (
    <div>
        <button onClick={() => chartInstance.print()}>Print</button>
        <ChartComponent id='charts' ref={chart => chartInstance = chart} beforePrint={beforePrintHandler} primaryXAxis={{valueType: 'Category'}}
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