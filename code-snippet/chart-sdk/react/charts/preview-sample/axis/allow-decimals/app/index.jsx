import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';

const data = [
  { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
  { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
];

function App() {
  return (
    <ChartComponent id="charts" primaryXAxis={{ valueType: 'Category' }}
      primaryYAxis={{ title: 'Orders', allowDecimals: false }}>
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName="x" yName="y" type="Column" />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));