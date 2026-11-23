import { Component } from '@angular/core';
import { Chart3DModule, ColumnSeries3DService, Category3DService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [Chart3DModule],
  standalone: true,
  selector: 'app-container',
  providers: [ColumnSeries3DService, Category3DService],
  template: `
    <ejs-chart3d id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]="data" type="Column" xName="x" yName="y"></e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>`
})
export class AppComponent {
  public data: Object[] = [
    { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
    { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
  ];
  public primaryXAxis: Object = { valueType: 'Category' };
  public primaryYAxis: Object = { title: 'Orders', allowDecimals: false };
}