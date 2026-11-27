import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width={"200px"}
    height={"150px"}
    foreColor="#ff0000"
    type='Pdf417'
    value='SYNCFUSION'
    ></PDF417GeneratorComponent>,
  document.getElementById("barcode")
);
