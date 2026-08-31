{% raw %}

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import * as React from 'react';

const data: Object[] = [
  { x: 1, y: 10 },
  { x: 2, y: 18 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
  { x: 5, y: 30 },
  { x: 6, y: 28 }
];

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <ChartComponent id="charts" primaryXAxis={{ valueType: 'Double' }}>
        <Inject services={[LineSeries, Trendlines]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Line"
            trendlines={[
              { type: 'Linear', name: 'Linear Trend', fill: '#0066CC', width: 2 },
              { type: 'Exponential', name: 'Exponential Trend', fill: '#CC0000', width: 2 },
              { type: 'MovingAverage', name: 'Moving Average', period: 3, fill: '#009933', width: 2 }
            ]}>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );
  }
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}
