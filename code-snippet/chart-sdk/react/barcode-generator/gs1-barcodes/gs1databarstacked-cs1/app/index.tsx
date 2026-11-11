import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Stacked barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="350px"
    height="200px"
    type="GS1DataBarStacked"
    value="12345678901231"
    displayText={{
      text: 'Compact Product Labeling'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
