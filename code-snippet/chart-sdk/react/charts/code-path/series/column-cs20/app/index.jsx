{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    LineSeries,
    Category,
    Tooltip,
    Inject
} from "@syncfusion/ej2-react-charts";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export const data1 = [
    { x: "January", y: 19173 },
    { x: "February", y: 17726 },
    { x: "March", y: 19874 },
    { x: "April", y: 19391 },
    { x: "May", y: 20072 },
    { x: "June", y: 19233 }
];

const SAMPLE_CSS = `
#noDataTemplateContainer {
    height: inherit;
    width: inherit;
}
.dark-bg {
    background-color: #000000;
    color: #ffffff;
}
.light-bg {
    background-color: #fafafa;
    color: #000000;
}
.template-align {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
.no-data-icon {
    font-size: 50px;
    margin-top: 55px;
    color: #808080;
}
.load-data-btn {
    border-radius: 4px;
}
.control-fluid {
    padding: 0 !important;
}
#syncfusionButtonContainer {
    margin-top: 5px;
}
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasData: false };
        this.chartInstance = null;
        this.loadData = this.loadData.bind(this);
        this.loaded = this.loaded.bind(this);
        this.setChartReference = this.setChartReference.bind(this);
    }

    setChartReference(chart) {
        this.chartInstance = chart;
    }

    loadData() {
        const buttonContainer = document.getElementById(
            "syncfusionButtonContainer"
        );

        if (buttonContainer) {
            ReactDOM.unmountComponentAtNode(buttonContainer);
        }

        this.setState({ hasData: true }, () => {
            if (this.chartInstance) {
                const values = [];

                for (let index = 0; index < data1.length; index++) {
                    values.push(data1[index].y);
                }

                const minimumValue = Math.min.apply(null, values);
                const maximumValue = Math.max.apply(null, values);
                const range = maximumValue - minimumValue;

                this.chartInstance.series[0].dataSource = data1;
                this.chartInstance.primaryYAxis.minimum = Math.floor(
                    minimumValue - range * 0.1
                );
                this.chartInstance.primaryYAxis.maximum = Math.ceil(
                    maximumValue + range * 0.1
                );
                this.chartInstance.primaryYAxis.interval = Math.ceil(
                    range / 5
                );
                this.chartInstance.series[0].animation.enable = true;
                this.chartInstance.refresh();
            }
        });
    }

    loaded() {
        if (this.state.hasData) {
            return;
        }

        const buttonContainer = document.getElementById(
            "syncfusionButtonContainer"
        );

        if (buttonContainer && !buttonContainer.hasChildNodes()) {
            const buttonElement = React.createElement(ButtonComponent, {
                id: "loadDataButton",
                content: "Load Data",
                iconCss: "e-icons e-refresh",
                cssClass: "load-data-btn e-outline",
                isPrimary: false,
                onClick: this.loadData
            });

            ReactDOM.render(buttonElement, buttonContainer);
        }
    }

    render() {
        const noDataTemplate =
            '<div id="noDataTemplateContainer" class="light-bg">' +
            '<div class="template-align">' +
            '<div class="no-data-icon">&#128202;</div>' +
            "</div>" +
            '<div class="template-align">' +
            '<p style="font-size:15px;margin:10px 0;">' +
            "<strong>No data available to display.</strong>" +
            "</p>" +
            "</div>" +
            '<div class="template-align">' +
            '<div id="syncfusionButtonContainer"></div>' +
            "</div>" +
            "</div>";

        const primaryXAxis = {
            valueType: "Category",
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        };

        const primaryYAxis = {
            title: "Production (in million pounds)",
            titleStyle: { fontWeight: "600" },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        };

        return (
            <div className="control-pane">
                <style>{SAMPLE_CSS}</style>
                <div className="control-section row">
                    <ChartComponent
                        id="milk-production-chart"
                        ref={this.setChartReference}
                        primaryXAxis={primaryXAxis}
                        primaryYAxis={primaryYAxis}
                        chartArea={{ border: { width: 0 } }}
                        loaded={this.loaded}
                        tooltip={{
                            enable: true,
                            format: "${point.x} : <b>${point.y}M</b>",
                            header: "Milk Production"
                        }}
                        noDataTemplate={noDataTemplate}
                        title="Milk Production in US - 2025"
                        subTitle="Source: nass.usda.gov"
                        width="100%"
                    >
                        <Inject
                            services={[
                                LineSeries,
                                Category,
                                Tooltip
                            ]}
                        />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={
                                    this.state.hasData ? data1 : []
                                }
                                xName="x"
                                yName="y"
                                type="Line"
                                width={2}
                                marker={{
                                    visible: true,
                                    width: 7,
                                    height: 7
                                }}
                                animation={{ enable: true }}
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("charts")
);


{% endraw %}