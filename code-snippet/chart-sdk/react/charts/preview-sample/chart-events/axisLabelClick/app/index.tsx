import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, IAxisLabelClickEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const axisLabelClickHandler = (args: IAxisLabelClickEventArgs): void => {
        console.log('Axis label click event was triggered');
    }

    return (
        <ChartComponent id='charts' axisLabelClick={axisLabelClickHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Sales Analysis'>
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