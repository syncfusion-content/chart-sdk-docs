import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width={"200px"}
    height={"150px"}
    type='Pdf417'
    displayText={{ visibility: false }}
    value='SYNCFUSION'
    ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
