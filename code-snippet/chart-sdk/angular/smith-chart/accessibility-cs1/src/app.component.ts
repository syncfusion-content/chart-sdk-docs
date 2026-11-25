import { SmithchartModule, TooltipRenderService, SmithchartLegendService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SmithchartModule],
    providers: [TooltipRenderService, SmithchartLegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-smithchart style='display: block;' id='container' [title]='title' renderType='Admittance' [legendSettings]='legendSettings'>
        <e-seriesCollection>
            <e-series [points]='seriespoints' [marker]='marker' name='Transmission2' [enableAnimation]='true' animationDuration='500'></e-series>
        </e-seriesCollection>
    </ejs-smithchart>`
})
export class AppComponent {
    public title: Object = {
        text: 'Transmission details',
        visible: true,
        subtitle: {
            text: 'Values'
        }
    };
    public legendSettings: Object = {
        visible: true
    };
    public marker: Object = {
        visible: true,
        dataLabel: {
            visible: true
        }
    };
    public seriespoints: Object[] = [
        { resistance: 20, reactance: -50 },
        { resistance: 10, reactance: -10 },
        { resistance: 9, reactance: -4.5 },
        { resistance: 8, reactance: -3.5 },
        { resistance: 7, reactance: -2.5 },
        { resistance: 6, reactance: -1.5 },
        { resistance: 5, reactance: -1 },
        { resistance: 4.5, reactance: -0.5 },
        { resistance: 3.5, reactance: 0 },
        { resistance: 2.5, reactance: 0.4 },
        { resistance: 2, reactance: 0.5 },
        { resistance: 1.5, reactance: 0.5 },
        { resistance: 1, reactance: 0.4 },
        { resistance: 0.5, reactance: 0.2 },
        { resistance: 0.3, reactance: 0.1 },
        { resistance: 0, reactance: 0.05 }
    ];
}
