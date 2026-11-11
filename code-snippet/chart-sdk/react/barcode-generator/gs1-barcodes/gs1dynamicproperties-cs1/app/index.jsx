import * as React from "react";
import * as ReactDOM from "react-dom";
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';

// Create a GS1 barcode that can be updated dynamically
const App = () => {
  const [barcodeType, setBarcodeType] = React.useState('GS1Code128');
  const [value, setValue] = React.useState('(01)09506000134352');
  const [foreColor, setForeColor] = React.useState('black');
  const [backgroundColor, setBackgroundColor] = React.useState('white');
  
  return (
    <div style={{padding: '20px'}}>
      <div style={{marginBottom: '10px'}}>
        <label style={{marginRight: '10px'}}>Barcode Type: </label>
        <input 
          type="text" 
          value={barcodeType} 
          onChange={(e) => setBarcodeType(e.target.value)}
          placeholder="Enter barcode type"
          style={{padding: '5px', width: '200px'}}
        />
      </div>
      <div style={{marginBottom: '10px'}}>
        <label style={{marginRight: '10px'}}>Value: </label>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          style={{padding: '5px', width: '200px'}}
        />
      </div>
      <div style={{marginBottom: '10px'}}>
        <label style={{marginRight: '10px'}}>Fore Color: </label>
        <input 
          type="text" 
          value={foreColor} 
          onChange={(e) => setForeColor(e.target.value)}
          placeholder="Enter color"
          style={{padding: '5px', width: '200px'}}
        />
      </div>
      <div style={{marginBottom: '20px'}}>
        <label style={{marginRight: '10px'}}>Background Color: </label>
        <input 
          type="text" 
          value={backgroundColor} 
          onChange={(e) => setBackgroundColor(e.target.value)}
          placeholder="Enter color"
          style={{padding: '5px', width: '200px'}}
        />
      </div>
      <BarcodeGeneratorComponent
        id="barcode"
        width="300px"
        height="150px"
        type={barcodeType}
        value={value}
        foreColor={foreColor}
        backgroundColor={backgroundColor}
        displayText={{
          text: 'GS1 Barcode'
        }}
      ></BarcodeGeneratorComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("barcode"));
