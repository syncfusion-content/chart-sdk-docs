{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, EmptyPointSettingsModel,
Inject, LineSeries, SeriesCollectionDirective, SeriesDirective  } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const emptyPointSettings1: EmptyPointSettingsModel = { xValueMode: 'Show', xValueText:'Sep' };
  const emptyPointSettings2: EmptyPointSettingsModel = { xValueMode: 'Show', xValueText:'Sep' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, LineSeries, ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales' emptyPointSettings={emptyPointSettings1} />
        <SeriesDirective dataSource={data} xName='month' type='Line' yName='sales' name='Sales' emptyPointSettings={emptyPointSettings2} />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
