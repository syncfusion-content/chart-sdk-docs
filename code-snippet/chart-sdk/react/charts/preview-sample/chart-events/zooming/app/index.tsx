import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, Zoom, IZoomingEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const zoomingHandler = (args: IZoomingEventArgs): void => {
        console.log('Zoom selection started event was triggered');
    }

    return (
        <ChartComponent id='charts' onZooming={zoomingHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}}
        zoomSettings={{ enableSelectionZooming: true, enablePan: true, mode: 'X' }} title='Sales Analysis'>
            <Inject services={[LineSeries, Category, Legend, DataLabel, Zoom]} />
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