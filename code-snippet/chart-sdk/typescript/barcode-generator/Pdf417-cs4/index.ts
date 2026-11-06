import { PDF417Generator } from "@syncfusion/ej2-barcode-generator";

let barcode = new PDF417Generator({
    width: "300px",
    height: "160px",
    mode: "SVG",
    value: "Syncfusion PDF417",
    isCompact: true
});
barcode.appendTo("#element");
