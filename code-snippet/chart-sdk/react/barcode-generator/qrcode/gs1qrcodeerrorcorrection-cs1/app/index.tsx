import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// GS1 QR Code with high error correction level
ReactDOM.render(
  <BarcodeGeneratorComponent
    id="barcode"
    width="250px"
    height="250px"
    type="QRCode"
    value="(01)09506000134352(17)271231(10)ABC123"
    mode="SVG"
    errorCorrectionLevel="High"
    displayText={{
      text: 'Product Code',
      alignment: 'Center'
    }}
    enableGS1={true}
  ></BarcodeGeneratorComponent>,
  document.getElementById("barcode")
);
