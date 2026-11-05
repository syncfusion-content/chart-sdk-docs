import { Component } from '@angular/core';
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [BarcodeGeneratorAllModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="250px" height="150px" mode="SVG" type="Pdf417" value="SYNCFUSION" rowHeightRatio="3"></ejs-barcodegenerator>`
})
export class AppComponent {}
