{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AccumulationDistributionIndicator, AreaSeries, AtrIndicator, BollingerBands, CandleSeries, Category,
    ChartAnnotation, ChartComponent, ColumnSeries, Crosshair, DataLabel, DateTime, EmaIndicator, Export,
    HiloOpenCloseSeries, HiloSeries, Inject, Legend, LineSeries, MacdIndicator, MomentumIndicator, RangeAreaSeries,
    RsiIndicator, Selection, SeriesCollectionDirective, SeriesDirective, SmaIndicator, SplineAreaSeries,
    SplineSeries, StochasticIndicator, StripLine, TmaIndicator, Tooltip, Trendlines, WebMcpChart, Zoom
} from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const injectedServices = [
        WebMcpChart, Category, DateTime, LineSeries, AreaSeries, SplineSeries, SplineAreaSeries, ColumnSeries,
        RangeAreaSeries, CandleSeries, HiloSeries, HiloOpenCloseSeries, Tooltip, Legend, Crosshair, Selection, Zoom,
        DataLabel, ChartAnnotation, Export, StripLine, Trendlines, EmaIndicator, RsiIndicator, BollingerBands,
        TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator,
        StochasticIndicator
    ];
    return (
        <ChartComponent
            id="charts"
            width="100%"
            height="500px"
            title="Revenue and Orders Performance"
            enableWebMcp={true}
            beforeWebMcp={(args) => {
                args.showConfirmationDialog = false;
            }}
            webMcpSettings={{
                name: 'selectedToolsChart',
                tools: [
                    'inspectChart',
                    'getSeriesData',
                    'getChartAxes',
                    'updateChartTitle',
                    'toggleChartSeriesVisibility',
                    'exportChart'
                ]
            }}
            enableExport={true}
            dataSource={data}
            primaryXAxis={{
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 }
            }}
            primaryYAxis={{
                title: 'Revenue (USD)',
                labelFormat: '${value}',
                minimum: 0,
                maximum: 140000,
                interval: 20000
            }}
            axes={[
                {
                    name: 'ordersAxis',
                    opposedPosition: true,
                    minimum: 0,
                    maximum: 2400,
                    interval: 400,
                    title: 'Orders',
                    majorGridLines: { width: 0 }
                }
            ]}
            tooltip={{ enable: true, shared: true }}
            crosshair={{ enable: true, lineType: 'Vertical' }}
            zoomSettings={{
                enableMouseWheelZooming: true,
                enablePinchZooming: true,
                enableSelectionZooming: true,
                mode: 'X'
            }}
            legendSettings={{
                visible: true,
                position: 'Bottom',
                padding: 12
            }}
            selectionMode="Point"
            chartArea={{ border: { width: 0 } }}
        >
            <Inject services={injectedServices} />
            <SeriesCollectionDirective>
                <SeriesDirective
                    type="SplineArea"
                    name="Revenue"
                    xName="month"
                    yName="revenue"
                    fill="#4439b868"
                    opacity={0.3}
                    border={{ width: 3, color: '#6457E8' }}
                    marker={{ visible: true, width: 9, height: 9, shape: 'Circle' }}
                />
                <SeriesDirective
                    type="Column"
                    name="Orders"
                    xName="month"
                    yName="orders"
                    yAxisName="ordersAxis"
                    fill="#11B5A4"
                    opacity={0.8}
                    columnWidth={0.58}
                    columnSpacing={0.16}
                    cornerRadius={{ topLeft: 5, topRight: 5 }}
                />
                <SeriesDirective
                    type="Spline"
                    name="Target"
                    xName="month"
                    yName="target"
                    width={3}
                    fill="#159FE0"
                    dashArray="7 5"
                    marker={{ visible: true, width: 8, height: 8, shape: 'Diamond' }}
                />
            </SeriesCollectionDirective>
        </ChartComponent>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}