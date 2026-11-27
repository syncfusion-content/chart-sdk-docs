import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  Inject,
  AreaSeries,
} from '@syncfusion/ej2-react-charts';
import { createRoot } from 'react-dom/client';

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({ x: i, y: i * 2 });
}

function App() {
  return (
    <RangeNavigatorComponent
      id="range-navigator"
      valueType="Double"
      allowDecimals={false}
    >
      <Inject services={[AreaSeries]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          type="Area"
        />
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("charts"));