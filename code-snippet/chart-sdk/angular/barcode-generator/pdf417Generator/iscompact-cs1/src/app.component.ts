import { Component } from '@angular/core';
import { PDF417GeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  imports: [PDF417GeneratorModule],
  providers: [],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-pdf417generator style="display: block;" #barcode id="barcode" width="250px" height="150px" mode="SVG" value="SYNCFUSION" [isCompact]="true"></ejs-pdf417generator>`
})
export class AppComponent {}
