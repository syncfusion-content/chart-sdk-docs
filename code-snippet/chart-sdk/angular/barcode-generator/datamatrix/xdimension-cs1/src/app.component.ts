import { Component } from '@angular/core';
import { DataMatrixGeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [DataMatrixGeneratorModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-datamatrixgenerator style="display: block;" #barcode id="barcode" width="300px" height="300px" mode="SVG" value="SYNCFUSION" [xDimension]="5" sizeMode="XDimension"></ejs-datamatrixgenerator>`
})
export class AppComponent {}
