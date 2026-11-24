import { BulletChartComponent, BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<div>
        <BulletChartComponent id='container1' width='80%'
            tooltip={{ enable: true }}
            animation={{ enable: false }}
            valueField='value' targetField='target'
            dataSource={[{ value: 270, target: 250 }]}
            ranges={[{ end: 150 }, { end: 250 }, { end: 300 }]}
            minimum={0} maximum={300} interval={50}
            title='Revenue' subtitle='U.S. $' labelFormat='${value}K'
            titlePosition='Left'
            dataLabel={{ enable: true, labelStyle: { color: 'yellow', size: '20' } }}>
        </BulletChartComponent>
        <BulletChartComponent id='container2' width='80%'
            tooltip={{ enable: true }}
            animation={{ enable: false }}
            valueField='value' targetField='target'
            dataSource={[{ value: 23, target: 27 }]}
            ranges={[{ end: 20 }, { end: 25 }, { end: 30 }]}
            minimum={0} maximum={30} interval={5}
            labelFormat='{value}%'
            title='Profit' subtitle='%' titlePosition='Left'>
        </BulletChartComponent>
        <BulletChartComponent id='container3' width='80%'
            tooltip={{ enable: true }}
            animation={{ enable: false }}
            valueField='value' targetField='target'
            dataSource={[{ value: 350, target: 550 }]}
            ranges={[{ end: 350 }, { end: 500 }, { end: 600 }]}
            minimum={0} maximum={600} interval={100}
            title='Avg Order Size' subtitle='U.S. $' labelFormat='${value}'
            titlePosition='Left'>
        </BulletChartComponent>
        <BulletChartComponent id='container4' width='80%'
            tooltip={{ enable: true }}
            animation={{ enable: false }}
            valueField='value' targetField='target'
            dataSource={[{ value: 1600, target: 2100 }]}
            ranges={[{ end: 1700 }, { end: 2000 }, { end: 2500 }]}
            enableGroupSeparator={true}
            minimum={0} maximum={2500} interval={500}
            title='New Customers' subtitle='Count' titlePosition='Left'>
        </BulletChartComponent>
        <BulletChartComponent id='container5' width='80%'
            tooltip={{ enable: false }}
            animation={{ enable: false }}
            valueField='value' targetField='target'
            dataSource={[{ value: 4.9, target: 4 }]}
            ranges={[{ end: 3.7 }, { end: 4.2 }, { end: 5 }]}
            minimum={0} maximum={5} interval={1}
            title='Cust Satisfication' subtitle='Top Rating of 5'
            legendSettings={{ visible: true }}
            titlePosition='Left'>
        </BulletChartComponent>
        <BulletChartComponent id='container6' width='80%' height='400'
            animation={{ enable: false }}
            valueField='value' targetField='comparativeMeasureValue'
            dataSource={[
                { value: 5, comparativeMeasureValue: 7.5, category: '2001' },
                { value: 7, comparativeMeasureValue: 5, category: '2002' },
                { value: 10, comparativeMeasureValue: 6, category: '2003' },
                { value: 5, comparativeMeasureValue: 8, category: '2004' },
                { value: 12, comparativeMeasureValue: 5, category: '2005' },
                { value: 8, comparativeMeasureValue: 6, category: '2006' }
            ]}
            ranges={[{ end: 5 }, { end: 15 }, { end: 20 }]}
            minimum={0} maximum={20} interval={5}
            title='Profit in percentage'
            labelFormat='{value}%'
            dataLabel={{ enable: true }}>
            <BulletRangeCollectionDirective>
                <BulletRangeDirective end={5} />
                <BulletRangeDirective end={15} />
                <BulletRangeDirective end={20} />
            </BulletRangeCollectionDirective>
        </BulletChartComponent>
    </div>);
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
