{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AztecGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

const handleInvalid = (args) => {
  console.log('Error message: ' + args.message);
  console.log('Reason: ' + args.reason);
};

ReactDOM.render(
  <AztecGeneratorComponent
    id="barcode"
    width={"200px"}
    height={"200px"}
    displayText={{ visibility: false }}
    mode="SVG"
    value='Syncfusion'
    invalid={handleInvalid}
  ></AztecGeneratorComponent>,
  document.getElementById("barcode")
);
{% endraw %}