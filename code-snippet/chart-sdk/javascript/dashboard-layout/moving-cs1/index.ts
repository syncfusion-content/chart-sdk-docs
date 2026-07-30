import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [10, 10],
    columns: 5,
    //Dashboard Layout's created event
    created: onCreated,
    //Dashboard Layout's change event
    change: onChange,
    panels: [{ 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
    { 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
    { 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
    { 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }]
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_layout');

//Dashboard Layout's created event function
function onCreated(args: any) {
    // movePanel("id", row, col)
    this.movePanel("layout_0", 1, 0);
}

//Dashboard Layout's change event function
function onChange(args: any) {
    console.log("Change event triggered");
}