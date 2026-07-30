import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { Button } from '@syncfusion/ej2-buttons';

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [10, 10],
    allowFloating: false,
    cellAspectRatio: 100 / 75,
    columns: 6,
    panels: [{ 'sizeX': 2, 'sizeY': 2, 'row': 1, 'col': 0, content: '<div class="content">0</div>' },
    { 'sizeX': 2, 'sizeY': 2, 'row': 2, 'col': 2, content: '<div class="content">1</div>' },
    { 'sizeX': 2, 'sizeY': 2, 'row': 3, 'col': 4, content: '<div class="content">2</div>' }]
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_default');

let resetPanels = dashboard.serialize();
resetPanels[0].content = '<div class="content">0</div>';
resetPanels[1].content = '<div class="content">1</div>';
resetPanels[2].content = '<div class="content">2</div>';

let toggleBtn: Button = new Button({
    cssClass: "e-flat e-primary e-outline",
    content: "Enable Floating",
    isToggle: true
});
toggleBtn.appendTo("#toggle");
let toggleElement = document.getElementById('toggle');
if (toggleElement) {
    toggleElement.addEventListener('click', () => {
        if (toggleBtn.content == "Disable Floating and Reset") {
            toggleBtn.content = 'Enable Floating';
            dashboard.allowFloating = false;
            dashboard.panels = resetPanels;
        } else {
            toggleBtn.content = 'Disable Floating and Reset';
            dashboard.allowFloating = true;
        }
    });
}