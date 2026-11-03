import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Legend, IPointEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const pointDoubleClickHandler = (args: IPointEventArgs): void => {
        console.log('Point double click event was triggered', {
            x: args.point?.x,
            y: args.point?.y,
            seriesIndex: args.seriesIndex,
            pointIndex: args.pointIndex
        });
    }

    return (
        <ChartComponent id='charts' pointDoubleClick={pointDoubleClickHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Monthly Sales'>
            <Inject services={[ColumnSeries, Legend, Category]} />
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