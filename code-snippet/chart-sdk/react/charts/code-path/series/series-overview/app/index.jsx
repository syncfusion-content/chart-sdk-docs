{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries
} from '@syncfusion/ej2-react-charts';
import { lineData } from './datasource';

function App() {
  const onChartLoaded = () => {
    console.log('Chart loaded successfully');
  };

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        interval: 1
      }}
      primaryYAxis={{
        title: 'Expense'
      }}
      title="Efficiency of oil-fired power production"
      loaded={onChartLoaded}
    >
      <Inject services={[LineSeries]} />

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={lineData}
          type="Line"
          xName="x"
          yName="y"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}