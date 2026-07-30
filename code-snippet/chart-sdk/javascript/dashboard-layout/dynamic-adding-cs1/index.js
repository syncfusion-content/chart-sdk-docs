// initialize Dashboard Layout control
var dashboard = new ej.layouts.DashboardLayout({
    cellSpacing: [10, 10],
    columns: 5,
    panels: [{ 'id': 'Panel0', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
    { 'id': 'Panel1', 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
    { 'id': 'Panel2', 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
    { 'id': 'Panel3', 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
    { 'id': 'Panel4', 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
    { 'id': 'Panel5', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
    { 'id': 'Panel6', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }
    ]
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_layout');

var count = 7;
var data = ["Panel0", "Panel1", "Panel2", "Panel3", "Panel4", "Panel5", "Panel6"];
var sizeX = new ej.inputs.NumericTextBox({
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 1,
    min: 1,
    max: 5
});

sizeX.appendTo('#sizex');

var idValue = new ej.dropdowns.DropDownList({
    dataSource: data
});
idValue.appendTo("#value");

var sizeY = new ej.inputs.NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 1,
    min: 1,
    max: 5
});

sizeY.appendTo('#sizey');

var row = new ej.inputs.NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 0,
    min: 0,
    max: 5
});

row.appendTo('#row');

var column = new ej.inputs.NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 0,
    min: 0,
    max: 4
});

column.appendTo('#column');

document.getElementById('add').onclick = function () {
    var panel = {
        id: "Panel" + count.toString(),
        sizeX: sizeX.value,
        sizeY: sizeY.value,
        row: row.value,
        col: column.value,
        content: "<div class='content'>" + count + "</div>"
    }
    dashboard.addPanel(panel);
    count = count + 1;
    (idValue.dataSource).push(panel.id);
    idValue.refresh();
};

document.getElementById('remove').onclick = function () {
    dashboard.removePanel(idValue.value.toString());
    (idValue.dataSource).splice((idValue.dataSource).indexOf(idValue.value.toString()), 1);
    idValue.refresh();
    idValue.value = null;
}