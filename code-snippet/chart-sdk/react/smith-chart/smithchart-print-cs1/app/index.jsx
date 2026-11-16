import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  SmithchartComponent,
  SmithchartSeriesCollectionDirective,
  SmithchartSeriesDirective
} from '@syncfusion/ej2-react-charts';

let smithchartInstance;

function App() {
  return (
    <SmithchartComponent
      id="smithchart"
      ref={(smithchart) => {
        smithchartInstance = smithchart;
      }}
    >
      <SmithchartSeriesCollectionDirective>
        <SmithchartSeriesDirective
          points={[
            { resistance: 10, reactance: 25 },
            { resistance: 8, reactance: 6 },
            { resistance: 6, reactance: 4.5 },
            { resistance: 4.5, reactance: 2 },
            { resistance: 3.5, reactance: 1.6 },
            { resistance: 2.5, reactance: 1.3 },
            { resistance: 2, reactance: 1.2 },
            { resistance: 1.5, reactance: 1 },
            { resistance: 1, reactance: 0.8 },
            { resistance: 0.5, reactance: 0.4 },
            { resistance: 0.3, reactance: 0.2 },
            { resistance: 0, reactance: 0.15 }
          ]}
          name="Transmission1"
        />
      </SmithchartSeriesCollectionDirective>
    </SmithchartComponent>
  );
}

const printSmithchart = () => {
  if (smithchartInstance) {
    smithchartInstance.print();
  }
};

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('smithchart')
);

const printButton = document.getElementById('print');

if (printButton) {
  printButton.onclick = printSmithchart;
}