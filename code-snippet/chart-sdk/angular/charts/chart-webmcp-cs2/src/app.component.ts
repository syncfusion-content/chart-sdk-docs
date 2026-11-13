import { Component } from '@angular/core';
import {
  ChartModule,
  WebMcpChartService,
  CategoryService,
  DateTimeService,
  LineSeriesService,
  AreaSeriesService,
  SplineSeriesService,
  SplineAreaSeriesService,
  ColumnSeriesService,
  RangeAreaSeriesService,
  CandleSeriesService,
  HiloSeriesService,
  HiloOpenCloseSeriesService,
  TooltipService,
  LegendService,
  CrosshairService,
  SelectionService,
  ZoomService,
  DataLabelService,
  ChartAnnotationService,
  ExportService,
  StripLineService,
  TrendlinesService,
  EmaIndicatorService,
  RsiIndicatorService,
  BollingerBandsService,
  TmaIndicatorService,
  MomentumIndicatorService,
  SmaIndicatorService,
  AtrIndicatorService,
  AccumulationDistributionIndicatorService,
  MacdIndicatorService,
  StochasticIndicatorService
} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartModule],
  providers: [
    WebMcpChartService,
    CategoryService,
    DateTimeService,
    LineSeriesService,
    AreaSeriesService,
    SplineSeriesService,
    SplineAreaSeriesService,
    ColumnSeriesService,
    RangeAreaSeriesService,
    CandleSeriesService,
    HiloSeriesService,
    HiloOpenCloseSeriesService,
    TooltipService,
    LegendService,
    CrosshairService,
    SelectionService,
    ZoomService,
    DataLabelService,
    ChartAnnotationService,
    ExportService,
    StripLineService,
    TrendlinesService,
    EmaIndicatorService,
    RsiIndicatorService,
    BollingerBandsService,
    TmaIndicatorService,
    MomentumIndicatorService,
    SmaIndicatorService,
    AtrIndicatorService,
    AccumulationDistributionIndicatorService,
    MacdIndicatorService,
    StochasticIndicatorService
  ],
  template: `
    <ejs-chart id="charts" width="100%" height="500px" title="Revenue and Orders Performance"
      [enableWebMcp]="true" [webMcpSettings]="webMcpSettings" [enableExport]="true" [dataSource]="data"
      [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [axes]="axes" [tooltip]="tooltip"
      [crosshair]="crosshair" [zoomSettings]="zoomSettings" [legendSettings]="legendSettings"
      selectionMode="Point" (beforeWebMcp)="beforeWebMcp($event)">
      <e-series-collection>
        <e-series type="SplineArea" name="Revenue" xName="month" yName="revenue" fill="#4439b868" [opacity]="0.3"></e-series>
        <e-series type="Column" name="Orders" xName="month" yName="orders" yAxisName="ordersAxis" fill="#11B5A4"></e-series>
        <e-series type="Spline" name="Target" xName="month" yName="target" fill="#159FE0" dashArray="7 5"></e-series>
      </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
  public data: Object[] = [
  { month: 'Jan', revenue: 42000, target: 40000, orders: 720 },
  { month: 'Feb', revenue: 47000, target: 43000, orders: 790 },
  { month: 'Mar', revenue: 53000, target: 47000, orders: 860 },
  { month: 'Apr', revenue: 58000, target: 52000, orders: 940 },
  { month: 'May', revenue: 67000, target: 58000, orders: 1080 },
  { month: 'Jun', revenue: 72000, target: 65000, orders: 1160 },
  { month: 'Jul', revenue: 81000, target: 71000, orders: 1290 },
  { month: 'Aug', revenue: 86000, target: 78000, orders: 1370 },
  { month: 'Sep', revenue: 92000, target: 84000, orders: 1490 },
  { month: 'Oct', revenue: 101000, target: 91000, orders: 1620 },
  { month: 'Nov', revenue: 112000, target: 98000, orders: 1780 },
  { month: 'Dec', revenue: 126000, target: 108000, orders: 1960 }
];
  public webMcpSettings: Object = { name: 'selectedToolsChart', tools: ['inspectChart', 'getSeriesData', 'getChartAxes', 'updateChartTitle', 'toggleChartSeriesVisibility', 'exportChart'] };
  public primaryXAxis: Object = { valueType: 'Category', majorGridLines: { width: 0 } };
  public primaryYAxis: Object = { title: 'Revenue (USD)', labelFormat: '${value}', minimum: 0, maximum: 140000, interval: 20000 };
  public axes: Object[] = [{ name: 'ordersAxis', opposedPosition: true, minimum: 0, maximum: 2400, interval: 400, title: 'Orders' }];
  public tooltip: Object = { enable: true, shared: true };
  public crosshair: Object = { enable: true, lineType: 'Vertical' };
  public zoomSettings: Object = { enableMouseWheelZooming: true, enablePinchZooming: true, enableSelectionZooming: true, mode: 'X' };
  public legendSettings: Object = { visible: true, position: 'Bottom' };

  public beforeWebMcp(args: any): void {
    args.showConfirmationDialog = false;
  }
}