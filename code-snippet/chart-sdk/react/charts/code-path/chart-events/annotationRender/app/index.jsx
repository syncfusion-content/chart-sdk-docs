{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ChartAnnotation, LineSeries, IAnnotationRenderEventArgs, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const annotationRenderHandler = (args) => {
        console.log('Annotation render event was triggered');
    }

    return (
        <ChartComponent id='charts' annotationRender={annotationRenderHandler} primaryXAxis={{valueType: 'Category'}}
        primaryYAxis={{labelFormat: '${value}K'}} title='Sales Analysis'>
            <Inject services={[LineSeries, Category, ChartAnnotation]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='month' yName='sales' type='Line' name='Sales'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        <AnnotationsDirective>
            <AnnotationDirective content='Peak sales in August' coordinateUnits='Point' x='Aug' y='55'></AnnotationDirective>
        </AnnotationsDirective>
        </ChartComponent>
    );

}
;
export default App;
ReactDOM.render(<App/>, document.getElementById('charts'));
{% endraw %}