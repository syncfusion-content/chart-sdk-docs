import { Component } from "@angular/core";
import { BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="300px" height="250px" mode="SVG" type="GS1DataBarExpanded" value="(01)09506000134352(17)271231(10)LOT12345(21)SN987654321" [displayText]="{{ text: 'Product Traceability' }}" [enableGS1]="false"></ejs-barcodegenerator>`
})
export class AppComponent {}
