import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Expanded Stacked barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="400px"
    height="300px"
    type="GS1DataBarExpandedStacked"
    value="(01)09506000134352(17)271231(10)LOT12345"
    displayText={{
      text: 'Supply Chain Tracking'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
