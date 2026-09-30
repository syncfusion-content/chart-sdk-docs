{% raw %}

import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartTooltip3D, Inject } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  const circularData = [
    { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
    { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
    { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
    { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
  ];
  const tooltip = { enable: true };
  const legendSettings = { visible: false };
  const tooltipRender = (args) => {
    const rawData = args.data.rawData;
    if (rawData) {
      args.text = 'Sales: <b>' + rawData.y + '</b><br/>' + 'Region: <b>' + rawData.region + '</b><br/>' + 'Growth: <b>' + rawData.growth + '%</b>';
    }
  };
  return (
    <CircularChart3DComponent id="chart" tilt={-45} tooltip={tooltip} legendSettings={legendSettings} tooltipRender={tooltipRender} title="Sales by Country">
      <Inject services={[PieSeries3D, CircularChartTooltip3D]} />
      <CircularChart3DSeriesCollectionDirective>
        <CircularChart3DSeriesDirective dataSource={circularData} xName="x" yName="y" name="Sales"></CircularChart3DSeriesDirective>
      </CircularChart3DSeriesCollectionDirective>
    </CircularChart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));

{% endraw %}