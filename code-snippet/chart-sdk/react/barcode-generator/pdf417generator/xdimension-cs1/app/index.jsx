import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDF417GeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <PDF417GeneratorComponent
    id="barcode"
    width={"500px"}
    height={"250px"}
    mode="SVG"
    value="SYNCFUSION PDF417 BARCODE"
    xDimension={3}
    sizeMode="XDimension"
    rowHeightRatio={3}
  ></PDF417GeneratorComponent>,
  document.getElementById("barcode")
);
