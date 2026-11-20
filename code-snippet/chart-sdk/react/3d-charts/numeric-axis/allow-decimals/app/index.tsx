import * as React from "react";
import * as ReactDOM from "react-dom";
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective,
  Inject, ColumnSeries3D, Category3D } from '@syncfusion/ej2-react-charts';

const data = [
  { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
  { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];

function App() {
  return (
    <Chart3DComponent id="charts" primaryXAxis={{ valueType: 'Category' }}
      primaryYAxis={{ title: 'Orders', allowDecimals: false }}>
      <Inject services={[ColumnSeries3D, Category3D]} />
      <Chart3DSeriesCollectionDirective>
        <Chart3DSeriesDirective dataSource={data} xName="x" yName="y" type="Column" />
      </Chart3DSeriesCollectionDirective>
    </Chart3DComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));