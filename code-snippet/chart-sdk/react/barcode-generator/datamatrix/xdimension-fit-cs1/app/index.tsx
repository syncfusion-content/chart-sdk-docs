import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataMatrixGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <DataMatrixGeneratorComponent
    id="barcode"
    width={"300px"}
    height={"300px"}
    mode="SVG"
    value="SYNCFUSION"
    xDimension={8}
    sizeMode="Fit"
  ></DataMatrixGeneratorComponent>,
  document.getElementById("barcode")
);
