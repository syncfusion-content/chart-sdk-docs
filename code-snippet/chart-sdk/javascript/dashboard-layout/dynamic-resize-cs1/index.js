// initialize Dashboard Layout control
var dashboardObject = new ej.layouts.DashboardLayout({
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
// render initialized Dashboard Layout
dashboardObject.appendTo('#defaultLayout');


var btnInstance = new ej.buttons.Button({ cssClass: "e-outline e-success" });
btnInstance.appendTo('#editbtn');

document.getElementById('editbtn').onclick = function () {
    var panelContent = document.getElementById("panelContent");
    var panelHeight = panelContent.offsetHeight;
    var panelWidth = panelContent.offsetWidth;
    var diff = Math.round(panelHeight / panelWidth);
    dashboardObject.resizePanel('panel0', 1, diff);
    dashboardObject.resizePanel('panel1', 1, diff);
    dashboardObject.resizePanel('panel2', 1, diff);
};