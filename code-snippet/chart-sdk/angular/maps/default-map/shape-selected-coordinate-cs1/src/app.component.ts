import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule, SelectionService } from '@syncfusion/ej2-angular-maps'
import { Component, ViewEncapsulation } from '@angular/core';
import { IShapeSelectedEventArgs } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],
providers: [SelectionService],
standalone: true,
  selector: 'app-container',
  template: `<div class="control-section">
  <div align='center'>
  <ejs-maps id='container' style="display:block;" (shapeSelected)="shapeSelected($event)">
  <e-layers>
  <e-layer [shapeData]='shapeData' [selectionSettings]='selectionSettings'></e-layer>
  </e-layers>
  </ejs-maps>
  <div id="shapeSelectedPopup">
      <strong>Selected coordinates</strong>
      <div id="selectedCoordinates"></div>
  </div>
  </div>
  </div>
  <style>
      #shapeSelectedPopup {
          position: fixed;
          display: none;
          z-index: 1000;
          padding: 10px 14px;
          background-color: #ffffff;
          color: #1e293b;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
          font-family: "Segoe UI", Arial, sans-serif;
          font-size: 13px;
          pointer-events: none;
      }
  </style>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public shapeData: object = world_map;
  public selectionSettings: object = {
    enable: true,
    fill: 'green',
    border: {
      color: 'white',
      width: 2
    }
  };
  public shapeSelected(args: IShapeSelectedEventArgs): void {
    let popup: HTMLElement | null = document.getElementById(
      'shapeSelectedPopup'
    );
    let coordinates: HTMLElement | null = document.getElementById(
      'selectedCoordinates'
    );
    if (
      popup &&
      coordinates &&
      args.x !== undefined &&
      args.y !== undefined
    ) {
      coordinates.textContent =
        'X: ' + args.x + ', Y: ' + args.y;
      popup.style.left = args.x + 'px';
      popup.style.top = args.y + 'px';
      popup.style.display = 'block';
    }
  }
}