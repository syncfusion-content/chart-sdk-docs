import { Component } from "@angular/core";
import { QRCodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [QRCodeGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-qrcodegenerator style="display: block;" #barcode id="barcode" width="300px" height="300px" mode="SVG" value="(01)09506000134369(17)280131(10)LOT001" errorCorrectionLevel="High" [enableGS1]="true" [displayText]="{ text: 'High Reliability QR' }"></ejs-qrcodegenerator>`
})
export class AppComponent {}
