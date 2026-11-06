import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// GS1 Data Matrix with product identifier, expiration date, and lot number
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="300px"
    height="250px"
    type="DataMatrix"
    value="(01)09506000134369(17)280131(10)LOT001"
    mode="SVG"
    displayText={{
      text: 'Healthcare Traceability'
    }}
    enableGS1={true}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
