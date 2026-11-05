import { PDF417Generator } from "@syncfusion/ej2-barcode-generator";

let barcode = new PDF417Generator({
    width: "300px",
    height: "200px",
    mode: "SVG",
    value: "Syncfusion PDF417",
    rowHeightRatio: 5
});
barcode.appendTo("#element");
