import { Component } from "@angular/core";
import { DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'
import { ValidationFailedEventArgs } from '@syncfusion/ej2-barcode-generator'

@Component({
    imports: [DataMatrixGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `<ejs-datamatrixgenerator style="display: block;" #barcode id="barcode" width="300px" height="300px" mode="SVG" value="(01)09506000134369(17)280131" [displayText]="{ text: 'Data Validation' }" [enableGS1]="true" (invalid)="onValidationError($event)"></ejs-datamatrixgenerator>`
})
export class AppComponent {
    onValidationError(args: ValidationFailedEventArgs): void {
        console.log(`Data Matrix validation error: ${args.message}`);
    }
}
