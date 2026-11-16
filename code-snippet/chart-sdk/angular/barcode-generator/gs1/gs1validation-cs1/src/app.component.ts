import { Component } from "@angular/core";
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'
import { ValidationFailedEventArgs } from '@syncfusion/ej2-barcode-generator'

@Component({
    imports: [BarcodeGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <ejs-barcodegenerator 
            style="display: block;" 
            #barcode 
            id="barcode" 
            width="300px" 
            height="150px" 
            mode="SVG" 
            type="GS1Code128" 
            value="(01)12345678901234" 
            (invalid)="onValidationError($event)">
        </ejs-barcodegenerator>
    `
})
export class AppComponent {
    onValidationError(args: ValidationFailedEventArgs): void {
        // Handle validation errors
        console.log(`Barcode validation error: ${args.message}`);
    }
}
