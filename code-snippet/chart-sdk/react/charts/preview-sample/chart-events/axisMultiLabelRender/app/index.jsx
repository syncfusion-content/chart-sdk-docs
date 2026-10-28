import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, LineSeries, DataLabel, Legend, MultiLevelLabel, IAxisMultiLabelRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const axisMultiLabelRenderHandler = (args) => {
        console.log('Multi-level axis label render event was triggered');
    }

    return (
        <ChartComponent id='charts' axisMultiLabelRender={axisMultiLabelRenderHandler} primaryXAxis={{
          valueType: 'Category',
          multiLevelLabels: [{
              categories: [
                  {
                      start: 0,
                      end: 5,
                      text: 'First Half'
                  }
              ]
          }]
      }}
        primaryYAxis={{labelFormat: '${value}K'}} title='Sales Analysis'>
            <Inject services={[LineSeries, Legend, DataLabel, Category, MultiLevelLabel]} />
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