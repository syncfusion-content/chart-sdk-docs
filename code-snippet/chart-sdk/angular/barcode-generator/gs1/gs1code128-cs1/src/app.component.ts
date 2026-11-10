import { Component } from "@angular/core";
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [BarcodeGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="300px" height="200px" mode="SVG" type="GS1Code128" value="(01)09506000134352(17)261231(10)ABC123" [displayText]="{ text: 'Product Serialization' }"></ejs-barcodegenerator>`
})
export class AppComponent {}
