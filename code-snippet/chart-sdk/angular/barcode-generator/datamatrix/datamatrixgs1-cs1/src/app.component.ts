import { Component } from "@angular/core";
import { DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [DataMatrixGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-datamatrixgenerator style="display: block;" #barcode id="barcode" width="300px" height="300px" mode="SVG" value="(01)09506000134369(17)280131(10)LOT001" [displayText]="{ text: 'Healthcare Traceability' }" [enableGS1]="true"></ejs-datamatrixgenerator>`
})
export class AppComponent {}
