import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Stacked Omnidirectional barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="350px"
    height="200px"
    type="GS1DataBarStackedOmnidirectional"
    value="12345678901231"
    displayText={{
      text: 'Compact Retail Item'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
