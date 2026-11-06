import { PDF417Generator, PDF417CompactionMode } from "@syncfusion/ej2-barcode-generator";

let barcode = new PDF417Generator({
    width: "300px",
    height: "160px",
    mode: "SVG",
    value: "Syncfusion PDF417 12345",
    compactionMode: PDF417CompactionMode.Text
});
barcode.appendTo("#element");
