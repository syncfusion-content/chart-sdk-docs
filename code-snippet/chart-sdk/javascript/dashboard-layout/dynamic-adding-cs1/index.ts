import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
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

let count: number = 7;
let data: string[] = ["Panel0", "Panel1", "Panel2", "Panel3", "Panel4", "Panel5", "Panel6"];
let sizeX: NumericTextBox = new NumericTextBox({
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 1,
    min: 1,
    max: 5
});

sizeX.appendTo('#sizex');

let idValue: DropDownList = new DropDownList({
    dataSource: data
});
idValue.appendTo("#value");

let sizeY: NumericTextBox = new NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 1,
    min: 1,
    max: 5
});

sizeY.appendTo('#sizey');

let row: NumericTextBox = new NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 0,
    min: 0,
    max: 5
});

row.appendTo('#row');

let column: NumericTextBox = new NumericTextBox({
    //set the data to dataSource property
    placeholder: 'Ex: 1',
    floatLabelType: 'Never',
    value: 0,
    min: 0,
    max: 4
});

column.appendTo('#column');

let addElement = document.getElementById('add');
if(addElement) {
    addElement.addEventListener('click', () => {
        let panel: any = {
            id: "Panel" + count.toString(),
            sizeX: sizeX.value,
            sizeY: sizeY.value,
            row: row.value,
            col: column.value,
            content: "<div class='content'>" + count + "</div>"
        }
        dashboard.addPanel(panel);
        count = count + 1;
        (<string[]>idValue.dataSource).push(panel.id);
        idValue.refresh();
    });
}

let removeElement = document.getElementById('remove');
if(removeElement) {
    removeElement.addEventListener('click', () => {
        dashboard.removePanel(idValue.value.toString());
        (<string[]>idValue.dataSource).splice((<string[]>idValue.dataSource).indexOf(idValue.value.toString()), 1);
        idValue.refresh();
        idValue.value = null;
    });
}