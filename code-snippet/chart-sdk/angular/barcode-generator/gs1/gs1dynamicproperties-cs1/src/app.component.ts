import { Component, ViewChild } from "@angular/core";
import { BarcodeGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator'
import { BarcodeGeneratorComponent } from '@syncfusion/ej2-angular-barcode-generator'

@Component({
    imports: [BarcodeGeneratorAllModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
        <div style="margin-bottom: 20px;">
            <label>Barcode Type:</label>
            <select (change)="onBarcodeTypeChange($event)">
                <option value="GS1Code128">GS1Code128</option>
                <option value="GS1DataBarOmnidirectional">GS1DataBarOmnidirectional</option>
                <option value="GS1DataBarStacked">GS1DataBarStacked</option>
            </select>
        </div>
        <div style="margin-bottom: 20px;">
            <label>GS1 Value:</label>
            <input (change)="onGS1ValueChange($event)" value="(01)09506000134352" />
        </div>
        <div style="margin-bottom: 20px;">
            <label>Foreground Color:</label>
            <input type="color" (change)="onForeColorChange($event)" value="#000000" />
        </div>
        <div style="margin-bottom: 20px;">
            <label>Background Color:</label>
            <input type="color" (change)="onBackColorChange($event)" value="#FFFFFF" />
        </div>
        <div style="margin-bottom: 20px;">
            <label>Width (px):</label>
            <input type="number" (input)="onWidthChange($event)" value="300" />
        </div>
        <div style="margin-bottom: 20px;">
            <label>Height (px):</label>
            <input type="number" (input)="onHeightChange($event)" value="150" />
        </div>
        <div style="margin-bottom: 20px;">
            <label>Display Text:</label>
            <input (change)="onDisplayTextChange($event)" value="GS1 Barcode" />
        </div>
        <div style="margin-top: 30px;">
            <ejs-barcodegenerator 
                #barcode 
                id="barcode" 
                width="300px" 
                height="150px" 
                mode="SVG" 
                type="GS1Code128" 
                value="(01)09506000134352"
                [foreColor]="'black'"
                [backgroundColor]="'white'"
                [displayText]="{ text: 'GS1 Barcode' }">
            </ejs-barcodegenerator>
        </div>
    `
})
export class AppComponent {
    @ViewChild('barcode') barcode!: BarcodeGeneratorComponent;

    onBarcodeTypeChange(event: any): void {
        this.barcode.type = event.target.value;
    }

    onGS1ValueChange(event: any): void {
        this.barcode.value = event.target.value;
    }

    onForeColorChange(event: any): void {
        this.barcode.foreColor = event.target.value;
    }

    onBackColorChange(event: any): void {
        this.barcode.backgroundColor = event.target.value;
    }

    onWidthChange(event: any): void {
        this.barcode.width = event.target.value + 'px';
    }

    onHeightChange(event: any): void {
        this.barcode.height = event.target.value + 'px';
    }

    onDisplayTextChange(event: any): void {
        this.barcode.displayText = { text: event.target.value };
    }
}
