import { Component } from "@angular/core";
import { BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="300px" height="250px" mode="SVG" type="GS1DataBarLimited" value="12345678901231" [displayText]="{{ text: 'Small Retail Item' }}" [enableGS1]="false"></ejs-barcodegenerator>`
})
export class AppComponent {}
