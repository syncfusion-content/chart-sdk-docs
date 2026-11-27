import * as React from "react";
import * as ReactDOM from "react-dom";
import { QRCodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <QRCodeGeneratorComponent
    id="barcode"
    width={"300px"}
    height={"300px"}
    mode="SVG"
    value="https://www.syncfusion.com"
    xDimension={5}
    sizeMode="XDimension"
  ></QRCodeGeneratorComponent>,
  document.getElementById("barcode")
);
