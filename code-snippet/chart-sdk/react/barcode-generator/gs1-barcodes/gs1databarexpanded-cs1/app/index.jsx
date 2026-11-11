import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create GS1 DataBar Expanded barcode
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="400px"
    height="100px"
    type="GS1DataBarExpanded"
    value="(01)09506000134352(17)271231(10)LOT12345(21)SN987654321"
    displayText={{
      text: 'Product Traceability'
    }}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
