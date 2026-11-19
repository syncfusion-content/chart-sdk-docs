import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    LineSeries,
    ColumnSeries,
    Legend,
    Tooltip,
    DataLabel,
    StripLine,
    Selection,
    Highlight,
    Crosshair,
    Zoom,
    ScrollBar
} from "@syncfusion/ej2-react-charts";

const SAMPLE_CSS = `
.control-fluid {
    padding: 0 !important;
}
.charts {
    text-align: center;
}
`;

function App() {
    const chartData = [
        { x: 2005, y: 28 },
        { x: 2006, y: 25 },
        { x: 2007, y: 26 },
        { x: 2008, y: 27 },
        { x: 2009, y: 32 },
        { x: 2010, y: 35 },
        { x: 2011, y: 30 }
    ];

    const primaryXAxis = {
        title: "Year",
        minimum: 2004,
        maximum: 2012,
        interval: 1,
        stripLines: [
            {
                start: 2005,
                end: 2008,
                color: "green",
                opacity: 0.1,
                text: "Low",
                visible: true
            }
        ]
    };

    const primaryYAxis = {
        minimum: 20,
        maximum: 40,
        interval: 5,
        title: "Efficiency",
        labelFormat: "{value}%",
        crosshairTooltip: {
            enable: true
        }
    };

    const marker = {
        visible: true,
        dataLabel: {
            visible: true
        }
    };

    const legendSettings = {
        visible: true,
        title: "Country",
        shapeHeight: 10,
        shapeWidth: 10
    };

    const crosshair = {
        enable: true
    };

    const zoomSettings = {
        enableDeferredZooming: true,
        enableMouseWheelZooming: true,
        enableScrollbar: true,
        enablePinchZooming: true,
        mode: "XY"
    };

    return (
        <div className="control-pane">
            <style>{SAMPLE_CSS}</style>
            <div className="control-section">
                <ChartComponent
                    id="container"
                    primaryXAxis={primaryXAxis}
                    primaryYAxis={primaryYAxis}
                    tooltip={{ enable: true }}
                    legendSettings={legendSettings}
                    selectionMode="Point"
                    selectionPattern="DiagonalBackward"
                    highlightMode="Cluster"
                    highlightPattern="DiagonalBackward"
                    crosshair={crosshair}
                    zoomSettings={zoomSettings}
                    border={{ width: 1, color: "red" }}
                    title="Efficiency of oil-fired power production"
                    subTitle="Graph"
                >
                    <Inject
                        services={[
                            LineSeries,
                            ColumnSeries,
                            Legend,
                            Tooltip,
                            DataLabel,
                            StripLine,
                            Selection,
                            Highlight,
                            Crosshair,
                            Zoom,
                            ScrollBar
                        ]}
                    />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={chartData}
                            xName="x"
                            yName="y"
                            name="India"
                            type="Line"
                            width={2}
                            marker={marker}
                            animation={{ enable: false }}
                        />
                        <SeriesDirective
                            dataSource={chartData}
                            xName="x"
                            yName="y"
                            name="UK"
                            type="Column"
                            width={2}
                            marker={marker}
                            animation={{ enable: false }}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("charts")
);