{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
  const tooltip = { enable: true };
  const tooltipRender = (args) => {
    const rawData = args.data.rawData;
    if (rawData) {
      args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
        'Region: <b>' + rawData.region + '</b><br/>' +
        'Growth: <b>' + rawData.growth + '%</b>';
    }
  };
  return (
    <AccumulationChartComponent id="chart" tooltip={tooltip} tooltipRender={tooltipRender} title="Sales by Country">
      <Inject services={[PieSeries, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={chartData} xName="x" yName="y" name="Sales" type="Pie"></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}