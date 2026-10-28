import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, Legend, ILegendRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { medalData } from './datasource';

function App() {
    const legendRenderHandler = (args) => {
        console.log('Legend render event was triggered');
        switch (args.text) {
            case 'Gold':
                args.text = 'Gold (Au)';
                args.fill = '#FFC107';
                args.shape = 'Circle';
                break;
            case 'Silver':
                args.fill = '#9E9E9E';
                args.shape = 'Rectangle';
                break;
            case 'Bronze':
                args.fill = '#CD7F32';
                args.shape = 'Diamond';
                break;
        }
    }

    return (
        <ChartComponent id='charts' legendRender={legendRenderHandler} primaryXAxis={{valueType: 'Category', title: 'Countries'}}
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