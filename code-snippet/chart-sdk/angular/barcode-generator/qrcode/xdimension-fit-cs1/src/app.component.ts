import { Component } from '@angular/core';
import { QRCodeGeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [QRCodeGeneratorModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-qrcodegenerator style="display: block;" #barcode id="barcode" width="300px" height="300px" mode="SVG" value="https://www.syncfusion.com" [xDimension]="8" sizeMode="Fit"></ejs-qrcodegenerator>`
})
export class AppComponent {}
