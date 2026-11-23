import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// GS1-Code128 barcode with validation handler
const handleInvalid = (args) => {
  console.log('Barcode validation error: ' + args.message);
};

ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="300px"
    height="150px"
    type="GS1Code128"
    value="(01)12345678901234"
    invalid={handleInvalid}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
