import * as React from "react";
import {
  RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  Inject,
  AreaSeries,
} from '@syncfusion/ej2-react-charts';
import { createRoot } from 'react-dom/client';
import * as React from 'react';

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

const root = createRoot(document.getElementById('charts'));
root.render(<App />);