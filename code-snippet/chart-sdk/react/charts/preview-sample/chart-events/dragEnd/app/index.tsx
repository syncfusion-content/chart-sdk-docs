import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataEditing, LineSeries, IDataEditingEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const dragEndHandler = (args: IDataEditingEventArgs): void => {
        console.log('dragEnd event was triggered');
    }

    return (
        <ChartComponent id='charts' dragEnd={dragEndHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales (Drag a point to edit)'>
            <Inject services={[LineSeries, Category, DataEditing]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line' name='Sales'
            dragSettings={{ enable: true, minY: 0, maxY: 60 }}>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));