import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Limited barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="200px"
    height="100px"
    type="GS1DataBarLimited"
    value="12345678901231"
    displayText={{
      text: 'Small Retail Item'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
