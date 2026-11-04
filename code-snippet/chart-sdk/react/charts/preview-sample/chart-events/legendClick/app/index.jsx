import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Legend, ILegendClickEventArgs } from '@syncfusion/ej2-react-charts';
import { medalData } from './datasource';

function App() {
    const legendClickHandler = (args) => {
        console.log('legendClick:', {
            legendText: args.legendText,
            seriesIndex: args.series?.index,
            isVisible: args.series?.visible
        });
    }

    return (
        <ChartComponent id='charts' legendClick={legendClickHandler} primaryXAxis={{valueType: 'Category', title: 'Countries'}}
        primaryYAxis={{minimum: 0, maximum: 80, interval: 20, title: 'Medals'}}
        legendSettings={{ visible: true, position: 'Top' }} title='Olympic Medals'>
            <Inject services={[ColumnSeries, Legend, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={medalData} xName='country' yName='gold' type='Column' name='Gold'>
                </SeriesDirective>
                <SeriesDirective dataSource={medalData} xName='country' yName='silver' type='Column' name='Silver'>
                </SeriesDirective>
                <SeriesDirective dataSource={medalData} xName='country' yName='bronze' type='Column' name='Bronze'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));