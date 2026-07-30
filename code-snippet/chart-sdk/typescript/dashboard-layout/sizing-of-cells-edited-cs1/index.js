var dashboard = new ej.layouts.DashboardLayout({
    cellSpacing: [10, 10],
    columns: 5,
    cellAspectRatio: 100 / 50,
    //Dashboard Layout's dragStart event
    dragStart: onDragStart,
    //Dashboard Layout's drag event
    drag: onDrag,
    //Dashboard Layout's dragStop event
    dragStop: onDragStop,
    panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content">0</div>' },
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
    { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
    ]
});
dashboard.appendTo('#dashboard_layout');

//Dashboard Layout's dragStart event function
function onDragStart(args) {
    console.log("Drag start");
}

//Dashboard Layout's drag event function
function onDrag(args) {
    console.log("Dragging");
}

//Dashboard Layout's dragStop event function
function onDragStop(args) {
    console.log("Drag stop");
}