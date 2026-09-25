{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, PieSeries } from '@syncfusion/ej2-react-charts';
import { pieData } from './datasource';

function App() {
    const title = 'Browser Market Share';
    const center = { x: '50%', y: '55%' };
    const legendSettings = { visible: true, position: 'Right' };
    const handleLegendRender = (args) => {
        if (args.point) {
            args.text = args.point.x + ' (' + args.point.y + '%)';
        }
    };
    return <AccumulationChartComponent id='charts' title={title} legendSettings={legendSettings} legendRender={handleLegendRender} center={center}>
    <Inject services={[AccumulationLegend, AccumulationDataLabel, PieSeries]}/>
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={pieData} xName='x' yName='y' name='Browser Share' type='Pie' explode={true} explodeOffset='10%' dataLabel={{ visible: true, name: 'text', position: 'Outside' }}>
      </AccumulationSeriesDirective>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>;

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}
