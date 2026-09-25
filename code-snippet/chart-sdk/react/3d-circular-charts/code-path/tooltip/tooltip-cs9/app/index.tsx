{% raw %}

import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartTooltip3D, Inject } from '@syncfusion/ej2-react-charts';
import type { CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface SalesData {
  x: string;
  y: number;
  region: string;
  growth: number;
}

function App() {
  const circularData: SalesData[] = [
    { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
    { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
    { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
    { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
  ];
  const tooltip: Object = { enable: true };
  const legendSettings: Object = { visible: false };
  const tooltipRender = (args: CircularChart3DTooltipRenderEventArgs): void => {
    const rawData: SalesData = args.data.rawData as SalesData;
    if (rawData) {
      args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
        'Region: <b>' + rawData.region + '</b><br/>' +
        'Growth: <b>' + rawData.growth + '%</b>';
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