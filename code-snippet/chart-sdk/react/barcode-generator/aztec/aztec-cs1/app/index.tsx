{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AztecGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <AztecGeneratorComponent
    id="barcode"
    width={"200px"}
    height={"200px"}
    displayText={{ visibility: false }}
    mode="SVG"
    value='Syncfusion'
  ></AztecGeneratorComponent>,
  document.getElementById("barcode")
);
{% endraw %}