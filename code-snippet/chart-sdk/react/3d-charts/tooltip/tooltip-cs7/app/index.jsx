import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, Category3D, Inject, Tooltip3D, ColumnSeries3D } from '@syncfusion/ej2-react-charts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const chartData = [
        { x: 'USA', y: 35, region: 'North America', growth: 12.5 },
        { x: 'UK', y: 22, region: 'Europe', growth: 9.8 },
        { x: 'India', y: 28, region: 'Asia', growth: 15.2 },
        { x: 'Germany', y: 15, region: 'Europe', growth: 7.6 }
    ];

    const primaryXAxis = { valueType: 'Category', title: 'Country' };
    const primaryYAxis = { title: 'Sales' };
    const tooltip = { enable: true };

    const tooltipRender = (args) => {
        const rawData = args.data.rawData;

        if (rawData) {
            args.text = 'Sales: <b>' + rawData.y + '</b><br/>' +
                'Region: <b>' + rawData.region + '</b><br/>' +
                'Growth: <b>' + rawData.growth + '%</b>';
        }
    };

    return (
        <Chart3DComponent id="chart3d" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} tooltipRender={tooltipRender} wallColor="transparent" enableRotation={true} rotation={7} tilt={10} depth={100} title="Sales by Country">
            <Inject services={[ColumnSeries3D, Category3D, Tooltip3D]} />
            <Chart3DSeriesCollectionDirective>
                <Chart3DSeriesDirective dataSource={chartData} xName="x" yName="y" name="Sales" type="Column"></Chart3DSeriesDirective>
            </Chart3DSeriesCollectionDirective>
        </Chart3DComponent>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('charts'));