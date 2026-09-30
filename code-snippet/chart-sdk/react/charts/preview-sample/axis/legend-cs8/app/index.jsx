import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Year', valueType: 'Double' };
    const primaryyAxis = { title: 'Sales (in USD)' };
    const title = 'Sales Performance by Year';
    const legendSettings = {
        visible: true,
        position: 'Bottom',
        mode: 'Point'
    };
    const handleLegendRender = (args) => {
        if (args.point) {
            args.text = args.series.name + ' (' + args.point.x + ', ' + args.point.y + ')';
        }
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title={title} legendSettings={legendSettings} legendRender={handleLegendRender}>
    <Inject services={[ColumnSeries, Legend, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={chartData} xName='x' yName='y' name='Annual Sales' type='Column' animation={{ enable: false }} marker={{ visible: true }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>;

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
