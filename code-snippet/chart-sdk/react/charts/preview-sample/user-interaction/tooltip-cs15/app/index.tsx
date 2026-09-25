import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import type { AxisModel, TooltipSettingsModel, ITooltipRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { chartData, SalesData } from './datasource';

function App() {
  const primaryXAxis: AxisModel = { valueType: 'Category' };
  const tooltip: TooltipSettingsModel = { enable: true };
  const tooltipRender = (args: ITooltipRenderEventArgs): void => {
    const rawData: SalesData = args.data.rawData as SalesData;
    if (rawData) {
      args.text = 'Sales: <b>' + rawData.sales + '</b><br/>' +
        'Country: <b>' + rawData.country + '</b><br/>' +
        'Growth: <b>' + rawData.growth + '%</b>';
    }
  };
  return (
    <ChartComponent id="chart" primaryXAxis={primaryXAxis} tooltip={tooltip} tooltipRender={tooltipRender} title="Monthly Sales">
      <Inject services={[ColumnSeries, Category, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} type="Column" xName="month" yName="sales" name="Sales"></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));