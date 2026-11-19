import { Component } from '@angular/core';
import { RangeNavigatorModule, AreaSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [RangeNavigatorModule],
  standalone: true,
  selector: 'app-container',
  providers: [AreaSeriesService],
  template: `
    <ejs-rangenavigator
      id="range-container"
      valueType="Double"
      [allowDecimals]="false">
      <e-rangenavigator-series-collection>
        <e-rangenavigator-series
          [dataSource]="data"
          xName="x"
          yName="y"
          type="Area">
        </e-rangenavigator-series>
      </e-rangenavigator-series-collection>
    </ejs-rangenavigator>`
})
export class AppComponent {
  public data: Object[] = [];

  constructor() {
    for (let i: number = 1; i <= 10; i++) {
      this.data.push({ x: i, y: i * 2 });
    }
  }
}