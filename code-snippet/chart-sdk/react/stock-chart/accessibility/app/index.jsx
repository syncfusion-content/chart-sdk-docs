import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    StockChartComponent,
    StockChartSeriesCollectionDirective,
    StockChartSeriesDirective,
    Inject,
    DateTime,
    Tooltip,
    RangeTooltip,
    Crosshair,
    CandleSeries,
    LineSeries,
    SplineSeries,
    HiloSeries,
    HiloOpenCloseSeries,
    RangeAreaSeries,
    Trendlines,
    EmaIndicator,
    RsiIndicator,
    BollingerBands,
    TmaIndicator,
    MomentumIndicator,
    SmaIndicator,
    AtrIndicator,
    AccumulationDistributionIndicator,
    MacdIndicator,
    StochasticIndicator,
    Export
} from "@syncfusion/ej2-react-charts";

const stockData = [
    {
        date: new Date(2016, 8, 1),
        open: 112.00,
        high: 115.00,
        low: 111.00,
        close: 114.00,
        volume: 3800000
    },
    {
        date: new Date(2016, 8, 8),
        open: 114.00,
        high: 118.00,
        low: 113.00,
        close: 117.00,
        volume: 4100000
    },
    {
        date: new Date(2016, 8, 15),
        open: 117.00,
        high: 119.00,
        low: 113.00,
        close: 115.00,
        volume: 3900000
    },
    {
        date: new Date(2016, 8, 22),
        open: 115.00,
        high: 116.00,
        low: 108.00,
        close: 110.00,
        volume: 4600000
    },
    {
        date: new Date(2016, 9, 1),
        open: 110.00,
        high: 113.00,
        low: 107.00,
        close: 112.00,
        volume: 4300000
    },
    {
        date: new Date(2016, 9, 8),
        open: 112.00,
        high: 116.00,
        low: 110.00,
        close: 115.00,
        volume: 4000000
    },
    {
        date: new Date(2016, 9, 15),
        open: 115.00,
        high: 118.00,
        low: 113.00,
        close: 117.00,
        volume: 3700000
    },
    {
        date: new Date(2016, 10, 1),
        open: 117.00,
        high: 121.00,
        low: 116.00,
        close: 120.00,
        volume: 4200000
    },
    {
        date: new Date(2016, 11, 1),
        open: 120.00,
        high: 124.00,
        low: 119.00,
        close: 123.00,
        volume: 4500000
    },
    {
        date: new Date(2017, 0, 1),
        open: 123.00,
        high: 130.00,
        low: 122.00,
        close: 128.00,
        volume: 5100000
    },
    {
        date: new Date(2017, 1, 1),
        open: 128.00,
        high: 136.00,
        low: 127.00,
        close: 134.00,
        volume: 5400000
    },
    {
        date: new Date(2017, 2, 1),
        open: 134.00,
        high: 143.00,
        low: 133.00,
        close: 141.00,
        volume: 5600000
    },
    {
        date: new Date(2017, 3, 1),
        open: 141.00,
        high: 150.00,
        low: 140.00,
        close: 148.00,
        volume: 5900000
    },
    {
        date: new Date(2017, 4, 1),
        open: 148.00,
        high: 158.00,
        low: 147.00,
        close: 155.00,
        volume: 6100000
    },
    {
        date: new Date(2017, 5, 1),
        open: 155.00,
        high: 157.00,
        low: 145.00,
        close: 147.00,
        volume: 6500000
    },
    {
        date: new Date(2017, 6, 1),
        open: 147.00,
        high: 154.00,
        low: 145.00,
        close: 152.00,
        volume: 5700000
    },
    {
        date: new Date(2017, 7, 1),
        open: 152.00,
        high: 164.00,
        low: 150.00,
        close: 161.00,
        volume: 6300000
    },
    {
        date: new Date(2017, 7, 15),
        open: 161.00,
        high: 168.00,
        low: 159.00,
        close: 165.00,
        volume: 6800000
    }
];

const SAMPLE_CSS = `
.stock-chart-accessibility {
    border: 1px solid #d5d5d5;
    padding: 12px;
}
.stock-chart-heading {
    margin: 0 0 16px;
    font-size: 28px;
}
.stock-chart-instructions {
    margin: 0 0 12px;
    color: #333333;
}
.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0, 0, 0, 0);
}
`;

function App() {
    const primaryXAxis = {
        valueType: "DateTime",
        majorGridLines: {
            width: 0
        },
        crosshairTooltip: {
            enable: true
        }
    };

    const primaryYAxis = {
        opposedPosition: true,
        labelFormat: "${value}",
        rangePadding: "None",
        lineStyle: {
            width: 0
        },
        majorTickLines: {
            width: 0
        },
        crosshairTooltip: {
            enable: true
        }
    };

    const periods = [
        {
            text: "1M",
            interval: 1,
            intervalType: "Months"
        },
        {
            text: "3M",
            interval: 3,
            intervalType: "Months"
        },
        {
            text: "6M",
            interval: 6,
            intervalType: "Months"
        },
        {
            text: "1Y",
            interval: 1,
            intervalType: "Years",
            selected: true
        },
        {
            text: "YTD"
        },
        {
            text: "All"
        }
    ];

    return (
        <main>
            <style>{SAMPLE_CSS}</style>
            <section
                className="stock-chart-accessibility"
                aria-labelledby="stock-chart-page-title"
            >
                <h1
                    id="stock-chart-page-title"
                    className="stock-chart-heading"
                >
                    Stock Chart Control
                </h1>
                <p
                    id="stock-chart-instructions"
                    className="stock-chart-instructions"
                >
                    Use Alt plus J to focus the stock chart. Use Tab to
                    navigate the toolbar and arrow keys to navigate data
                    points. Press Escape to close a tooltip.
                </p>
                <div
                    role="region"
                    aria-label="AAPL historical stock price chart"
                    aria-describedby="stock-chart-instructions stock-chart-summary"
                >
                    <StockChartComponent
                        id="stockchart"
                        primaryXAxis={primaryXAxis}
                        primaryYAxis={primaryYAxis}
                        periods={periods}
                        tooltip={{
                            enable: true,
                            shared: true
                        }}
                        crosshair={{
                            enable: true,
                            lineType: "Both"
                        }}
                        legendSettings={{
                            visible: true
                        }}
                        title="AAPL Stock Price 2016-2017"
                        enableSelector={true}
                        enablePeriodSelector={true}
                        seriesType={[
                            "Candle",
                            "HiloOpenClose",
                            "Hilo",
                            "Line",
                            "Spline"
                        ]}
                        indicatorType={[]}
                        trendlineType={[]}
                        exportType={[
                            "PNG",
                            "JPEG",
                            "SVG",
                            "PDF",
                            "Print"
                        ]}
                        height="550"
                    >
                        <Inject
                            services={[
                                DateTime,
                                Tooltip,
                                RangeTooltip,
                                Crosshair,
                                CandleSeries,
                                LineSeries,
                                SplineSeries,
                                HiloSeries,
                                HiloOpenCloseSeries,
                                RangeAreaSeries,
                                Trendlines,
                                EmaIndicator,
                                RsiIndicator,
                                BollingerBands,
                                TmaIndicator,
                                MomentumIndicator,
                                SmaIndicator,
                                AtrIndicator,
                                AccumulationDistributionIndicator,
                                MacdIndicator,
                                StochasticIndicator,
                                Export
                            ]}
                        />
                        <StockChartSeriesCollectionDirective>
                            <StockChartSeriesDirective
                                dataSource={stockData}
                                xName="date"
                                open="open"
                                high="high"
                                low="low"
                                close="close"
                                volume="volume"
                                name="AAPL"
                                type="Candle"
                            />
                        </StockChartSeriesCollectionDirective>
                    </StockChartComponent>
                </div>
                <p
                    id="stock-chart-summary"
                    className="visually-hidden"
                >
                    Candlestick chart showing AAPL stock prices from
                    September 2016 through August 2017. The displayed
                    closing price rises from 114 dollars to 165 dollars.
                </p>
            </section>
        </main>
    );
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("charts")
);