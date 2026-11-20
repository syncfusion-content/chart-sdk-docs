import { Component } from '@angular/core';
import { ChartModule, ColumnSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule],
  standalone: true,
  selector: 'app-container',
  providers: [ColumnSeriesService, CategoryService],
  template: `
    <ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis">
      <e-series-collection>
        <e-series [dataSource]="data" type="Column" xName="x" yName="y"></e-series>
      </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
  public data: Object[] = [
    { x: 'Mon', y: 1 }, { x: 'Tue', y: 2 }, { x: 'Wed', y: 3 },
    { x: 'Thu', y: 4 }, { x: 'Fri', y: 5 }
  ];
  public primaryXAxis: Object = { valueType: 'Category' };
  public primaryYAxis: Object = { title: 'Orders', allowDecimals: false };
}