import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create ITF-14 barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="300px"
    height="150px"
    type="ITF14"
    value="12345678901231"
    displayText={{
      text: 'Carton Tracking'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
