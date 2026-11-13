import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
ReactDOM.render(<BarcodeGeneratorComponent id="barcode" width={"300px"} height={"200px"} type='Pdf417' value='SYNCFUSION'></BarcodeGeneratorComponent>, document.getElementById("barcode"));