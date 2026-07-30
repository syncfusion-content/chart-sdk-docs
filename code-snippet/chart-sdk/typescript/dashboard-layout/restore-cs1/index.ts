import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { Button } from '@syncfusion/ej2-buttons';

let restoreModel: any;

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [20, 20],
    columns: 5,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
    ],
    created: restorePanelModel
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_default');

let saveBtn: Button = new Button({
    cssClass: "e-primary",
    content: "Save",
});
saveBtn.appendTo("#save");

let restoreBtn: Button = new Button({
    cssClass: "e-flat e-outline",
    content: "Restore",
});
restoreBtn.appendTo("#restore");

let saveElement = document.getElementById('save'); 
if (saveElement) {
    saveElement.addEventListener('click', () => {
        restorePanelModel();
    });
}

let restoreElement = document.getElementById('restore');
if (restoreElement) {
    restoreElement.addEventListener('click', () => {
        dashboard.panels = restoreModel;
    });
}

function restorePanelModel() {
    restoreModel = dashboard.serialize();
    restoreModel[0].content = '<div class="content">0</div>';
    restoreModel[1].content = '<div class="content">1</div>';
    restoreModel[2].content = '<div class="content">2</div>';
    restoreModel[3].content = '<div class="content">3</div>';
    restoreModel[4].content = '<div class="content">4</div>';
    restoreModel[5].content = '<div class="content">5</div>';
    restoreModel[6].content = '<div class="content">6</div>';
}