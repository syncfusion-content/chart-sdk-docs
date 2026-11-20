import { Component } from "@angular/core";
import { AztecGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { AztecInvalidEventArgs } from '@syncfusion/ej2-barcode-generator';

@Component({
    imports: [AztecGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    // specifies the template string for the Aztec generator component
    template: `<ejs-aztecgenerator style="display: block;" #barcode id="barcode" width="200px" height="200px" mode="SVG" [displayText]="{ visibility: false }" value="Syncfusion" (invalid)="onInvalid($event)"></ejs-aztecgenerator>`
})
export class AppComponent {
    onInvalid(args: AztecInvalidEventArgs): void {
        console.log('Error message: ' + args.message);
        console.log('Reason: ' + args.reason);
    }
}
