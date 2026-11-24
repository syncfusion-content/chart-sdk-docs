import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Omnidirectional barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="300px"
    height="200px"
    type="GS1DataBarOmnidirectional"
    value="12345678901231"
    displayText={{
      text: 'Retail Product'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
