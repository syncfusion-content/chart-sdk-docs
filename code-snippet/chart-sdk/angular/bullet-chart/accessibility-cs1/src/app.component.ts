import { Component } from '@angular/core';
import { BulletChartModule, BulletTooltipService, BulletChartLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    providers: [BulletTooltipService, BulletChartLegendService],
    standalone: true,
    selector: 'app-container',
    template: `
    <div class="control-section">
        <ejs-bulletchart id="container1" width="80%" [tooltip]="tooltip" [dataSource]="data1" valueField="value" targetField="target"
            [animation]="animation" [margin]="margin1" [minimum]="0" [maximum]="300" [interval]="50"
            title="Revenue" labelFormat="\${value}K" [dataLabel]="dataLabel1" subtitle="U.S. $" titlePosition="Left">
            <e-bullet-range-collection>
                <e-bullet-range [end]="150"></e-bullet-range>
                <e-bullet-range [end]="250"></e-bullet-range>
                <e-bullet-range [end]="300"></e-bullet-range>
            </e-bullet-range-collection>
        </ejs-bulletchart>

        <ejs-bulletchart id="container2" width="80%" [tooltip]="tooltip" [dataSource]="data2" valueField="value" targetField="target"
            [animation]="animation" [margin]="margin2" [minimum]="0" [maximum]="30" [interval]="5"
            labelFormat="{value}%" title="Profit" subtitle="%" titlePosition="Left">
            <e-bullet-range-collection>
                <e-bullet-range [end]="20"></e-bullet-range>
                <e-bullet-range [end]="25"></e-bullet-range>
                <e-bullet-range [end]="30"></e-bullet-range>
            </e-bullet-range-collection>
        </ejs-bulletchart>

        <ejs-bulletchart id="container3" width="80%" [tooltip]="tooltip" [dataSource]="data3" valueField="value" targetField="target"
            [animation]="animation" [margin]="margin3" [minimum]="0" [maximum]="600" [interval]="100"
            title="Avg Order Size" subtitle="U.S. $" labelFormat="\${value}" titlePosition="Left">
            <e-bullet-range-collection>
                <e-bullet-range [end]="350"></e-bullet-range>
                <e-bullet-range [end]="500"></e-bullet-range>
                <e-bullet-range [end]="600"></e-bullet-range>
            </e-bullet-range-collection>
        </ejs-bulletchart>

        <ejs-bulletchart id="container4" width="80%" [tooltip]="tooltip" [dataSource]="data4" valueField="value" targetField="target"
            [animation]="animation" [margin]="margin4" [enableGroupSeparator]="true" [minimum]="0" [maximum]="2500" [interval]="500"
            title="New Customers" subtitle="Count" titlePosition="Left">
            <e-bullet-range-collection>
                <e-bullet-range [end]="1700"></e-bullet-range>
                <e-bullet-range [end]="2000"></e-bullet-range>
                <e-bullet-range [end]="2500"></e-bullet-range>
            </e-bullet-range-collection>
        </ejs-bulletchart>

        <ejs-bulletchart id="container5" width="80%" [tooltip]="noTooltip" [dataSource]="data5" valueField="value" targetField="target"
            [animation]="animation" [margin]="margin5" [minimum]="0" [maximum]="5" [interval]="1"
            title="Cust Satisfication" [legendSettings]="legendSettings" subtitle="Top Rating of 5" titlePosition="Left">
            <e-bullet-range-collection>
                <e-bullet-range [end]="3.7"></e-bullet-range>
                <e-bullet-range [end]="4.2"></e-bullet-range>
                <e-bullet-range [end]="5"></e-bullet-range>
            </e-bullet-range-collection>
        </ejs-bulletchart>
    </div>`
})
export class AppComponent {
    public tooltip: Object = { enable: true };
    public noTooltip: Object = { enable: false };
    public animation: Object = { enable: false };

    public data1: Object[] = [{ value: 270, target: 250 }];
    public margin1: Object = { left: 62 };
    public dataLabel1: Object = { enable: true, labelStyle: { color: 'yellow', size: '20' } };

    public data2: Object[] = [{ value: 23, target: 27 }];
    public margin2: Object = { left: 80 };

    public data3: Object[] = [{ value: 350, target: 550 }];
    public margin3: Object = { left: 21.5 };

    public data4: Object[] = [{ value: 1600, target: 2100 }];
    public margin4: Object = { left: 18 };

    public data5: Object[] = [{ value: 4.9, target: 4 }];
    public margin5: Object = { left: 7 };
    public legendSettings: Object = { visible: true };
}
