import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [10, 10],
    allowResizing: true,
    columns: 5,
    //Dashboard Layout's resizeStart event
    resizeStart: onResizeStart,
    //Dashboard Layout's resize event
    resize: onResize,
    //Dashboard Layout's resizeStop event
    resizeStop: onResizeStop,
    resizableHandles: ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south'],
    panels: [{ 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
    { 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
    { 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
    { 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
    { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }]
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_default');
//Dashboard Layout's resizeStart event function
function onResizeStart(args: any) {
    console.log("Resize start");
}

//Dashboard Layout's resize event function
function onResize(args: any) {
    console.log("Resizing");
}

//Dashboard Layout's resizeStop event function
function onResizeStop(args: any) {
    console.log("Resize stop");
}