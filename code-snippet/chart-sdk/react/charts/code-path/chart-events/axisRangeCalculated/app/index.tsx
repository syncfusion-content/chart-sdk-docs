{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, IAxisRangeCalculatedEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const axisRangeCalculatedHandler = (args: IAxisRangeCalculatedEventArgs): void => {
        console.log('Axis range calculated event was triggered', args.minimum, args.maximum);
    }

    return (
        <ChartComponent id='charts' axisRangeCalculated={axisRangeCalculatedHandler} primaryXAxis={{valueType: 'Category'}}
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
{% endraw %}