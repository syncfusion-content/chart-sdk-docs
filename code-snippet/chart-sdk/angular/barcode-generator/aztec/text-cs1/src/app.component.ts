import { Component } from "@angular/core";
import { AztecGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
    imports: [AztecGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    // specifies the template string for the Aztec generator component
    template: `<ejs-aztecgenerator style="display: block;" #barcode id="barcode" width="200px" height="200px" mode="SVG" [displayText]="{ visibility: true }" [margin]="{ left: 10, right: 10, top: 10, bottom: 10 }" value="Syncfusion"></ejs-aztecgenerator>`
})
export class AppComponent {}
