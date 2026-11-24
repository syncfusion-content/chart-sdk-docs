import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1-Code128 barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="300px"
    height="200px"
    type="GS1Code128"
    value="(01)09506000134352(17)261231(10)ABC123"
    displayText={{
      text: 'Product Serialization'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
