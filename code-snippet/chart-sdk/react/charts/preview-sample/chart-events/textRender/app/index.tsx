import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, DataLabel, Legend, LineSeries, ITextRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const textRenderHandler = (args: ITextRenderEventArgs): void => {
        if (typeof args.point?.y === 'number') {
            args.text = `$${args.point.y}K`;
        }
        if (args.point?.x === 'Aug') {
            args.text = `${args.text} ★`;
            args.color = '#e74c3c';
        }
    }

    return (
        <ChartComponent id='charts' textRender={textRenderHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Sales Analysis'>
            <Inject services={[LineSeries, Legend, DataLabel, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line' name='Sales'
            marker={{ dataLabel: { visible: true } }}>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));