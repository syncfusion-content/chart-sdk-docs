import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// GS1 Data Matrix with validation handling
const handleInvalid = (args) => {
  console.log('Data Matrix validation error: ' + args.message);
  // Examples of validation errors:
  // - "The data is too long for the specified Data Matrix symbol size."
  // - "Data Matrix accepts valid ASCII characters."
};

ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="200px"
    height="150px"
    type="DataMatrix"
    value="SYNCFUSION"
    mode="SVG"
    enableGS1={true}
    invalid={handleInvalid}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
