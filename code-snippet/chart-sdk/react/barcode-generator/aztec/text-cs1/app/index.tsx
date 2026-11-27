{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AztecGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

ReactDOM.render(
  <AztecGeneratorComponent
    id="barcode"
    width={"200px"}
    height={"200px"}
    displayText={{ visibility: true }}
    margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
    mode="SVG"
    value='Syncfusion'
  ></AztecGeneratorComponent>,
  document.getElementById("barcode")
);
{% endraw %}