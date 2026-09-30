import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, LegendSettingsModel, Legend, ColumnSeries, ILegendRenderEventArgs, Category } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Year', valueType: 'Double' };
  const primaryyAxis: AxisModel = { title: 'Sales (in USD)' };
  const title: string = 'Sales Performance by Year';
  const legendSettings: LegendSettingsModel = {
    visible: true,
    position: 'Bottom',
    mode: 'Point'
  };
  const handleLegendRender = (args: ILegendRenderEventArgs): void => {
    // `args.point` is available only when `legendSettings.mode` is `'Point'`.
    if (args.point) {
      args.text = args.series.name + ' (' + args.point.x + ', ' + args.point.y + ')';
    }
  };
  return <ChartComponent id='charts'
    primaryXAxis={primaryxAxis}
    primaryYAxis={primaryyAxis}
    title={title}
    legendSettings={legendSettings}
    legendRender={handleLegendRender}>
    <Inject services={[ColumnSeries, Legend, Category]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={chartData} xName='x' yName='y' name='Annual Sales' type='Column' animation={{ enable: false }} marker={{ visible: true }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
