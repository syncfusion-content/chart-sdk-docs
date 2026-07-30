// initialize Dashboard Layout control
var dashboard = new ej.layouts.DashboardLayout({
    cellSpacing: [10, 10],
    showGridLines: true,
    columns: 5,
    panels: [
        { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
        { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">3</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">4</div>' }
    ]
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_layout');