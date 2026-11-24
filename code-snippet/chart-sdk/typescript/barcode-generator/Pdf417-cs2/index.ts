import { PDF417Generator, PDF417ErrorCorrectionLevel } from "@syncfusion/ej2-barcode-generator";

let barcode = new PDF417Generator({
    width: "300px",
    height: "160px",
    mode: "SVG",
    value: "Syncfusion PDF417",
    errorCorrectionLevel: PDF417ErrorCorrectionLevel.Level5
});
barcode.appendTo("#element");
