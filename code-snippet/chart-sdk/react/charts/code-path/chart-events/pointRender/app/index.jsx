{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Legend, IPointRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const pointRenderHandler = (args) => {
        const yValues = data.map(d => d.sales);
        const max = Math.max(...yValues);
        const min = Math.min(...yValues);
        if (typeof args.point?.y === 'number') {
            if (args.point.y === max) {
                args.fill = '#e74c3c';
            } else if (args.point.y === min) {
                args.fill = '#27ae60';
            }
        }
    }

    return (
        <ChartComponent id='charts' pointRender={pointRenderHandler} primaryXAxis={{valueType: 'Category'}}
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
{% endraw %}