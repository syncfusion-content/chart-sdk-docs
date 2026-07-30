var names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
    'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
var city = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
    'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];
var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
var status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];
var time = 0;
var data = function (count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push({
            TaskID: i + 1,
            Engineer: names[Math.round(Math.random() * names.length)] || names[0],
            City: names[Math.round(Math.random() * city.length)] || city[0],
            Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
            Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
            Rating: hours[Math.round(Math.random() * rating.length)] || rating[0],
            Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    time = new Date().getTime();
    return result;
};

var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: data(10000),
        expandAll: false,
        rows: [{ name: 'TaskID' }, { name: 'Status' }],
        columns: [{ name: 'Designation' }],
        values: [{ name: 'Estimation' }, { name: 'Rating' }]
    },
    width: 1200,
    height: 400,
    enableVirtualization: true,
    allowExcelExport: true,
    exportComplete: function () {
        pivotTableObj.hideWaitingPopup();
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#excel');

document.getElementById('excel').onclick = function () {
    pivotTableObj.showWaitingPopup();
    setTimeout(function () {
        pivotTableObj.excelExport();
    });
};