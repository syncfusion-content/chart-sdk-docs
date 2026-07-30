import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { Button } from '@syncfusion/ej2-buttons';

let dashboardObject: DashboardLayout = new DashboardLayout({
    cellAspectRatio: 100 / 70,
    columns: 4,
    panels: [{
        id: 'panel0', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, header: '<div>Panel 0</div>',
        content: '<div class="content" id="panelContent">Place your content here</div>'
    },
    {
        id: 'panel1', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 1,
        header: '<div>Panel 1</div>',
        content: '<div class="content" id="panelContent">Place your content here</div>'
    },
    {
        id: 'panel2', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 2,
        header: '<div>Panel 2</div>',
        content: '<div class="content" id="panelContent">Place your content here</div>'
    }]
});
dashboardObject.appendTo('#defaultLayout');

let btnInstance: Button = new Button({ cssClass: "e-outline e-success" });
btnInstance.appendTo('#editbtn');

btnInstance.element.onclick = () => {
    let panelContent: HTMLElement = document.getElementById("panelContent") as HTMLElement;
    let panelHeight: number = panelContent.offsetHeight;
    let panelWidth: number = panelContent.offsetWidth;
    let diff: number = Math.round(panelHeight / panelWidth);
    dashboardObject.resizePanel('panel0', 1, diff);
    dashboardObject.resizePanel('panel1', 1, diff);
    dashboardObject.resizePanel('panel2', 1, diff);
};