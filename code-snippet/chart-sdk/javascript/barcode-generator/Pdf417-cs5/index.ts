import { PDF417Generator } from "@syncfusion/ej2-barcode-generator";

let barcode = new PDF417Generator({
    width: "300px",
    height: "180px",
    mode: "SVG",
    value: "Syncfusion PDF417",
    rows: 8,
    columns: 4
});
barcode.appendTo("#element");
