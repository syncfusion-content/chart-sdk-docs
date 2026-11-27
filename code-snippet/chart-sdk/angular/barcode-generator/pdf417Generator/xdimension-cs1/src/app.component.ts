import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator style="display: block;" #barcode id="barcode" width="500px" height="250px" mode="SVG" value="SYNCFUSION PDF417 BARCODE" [xDimension]="3" sizeMode="XDimension" [rowHeightRatio]="3"></ejs-pdf417generator>`
})
export class AppComponent {}
