var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: employeeData,
        rows: [{ name: 'FirstName' }, { name: 'EmployeeID', caption: 'Employee Image' }],
        columns: [{ name: 'Title' }],
        values: [{ name: 'Salary' }, { name: 'OrdersCount' }],
        filterSettings: [
            { name: 'Title', type: 'Include', items: ['Sales Representative'] }
        ],
        expandAll: true,
        showSubTotals: false,
        showRowGrandTotals: false
    },
    width: '100%',
    height: 450,
    allowPdfExport: true,
    showFieldList: true,
    cellTemplate: '${getCellContent(data)}',
    hyperlinkSettings: {
        showRowHeaderHyperlink: true,
        cssClass: 'e-custom-class'
    },
    gridSettings: {
        layout: 'Tabular',
        pdfQueryCellInfo: function (args) {
            if (args.data && args.data.axis === 'row') {
                if (args.data.valueSort && args.data.valueSort.axis === 'FirstName') {
                    var firstName_1 = args.data.actualText;
                    var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.FirstName === firstName_1; });
                    if (employee && employee.EmailID) {
                        args.hyperLink = {
                            target: 'mailto:' + employee.EmailID,
                            displayText: args.value
                        };
                    }
                }
                if (args.data.valueSort && args.data.valueSort.axis === 'EmployeeID') {
                    var employeeId_1 = Number(args.data.actualText);
                    var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.EmployeeID === employeeId_1; });
                    if (employee && employee.EmployeeImage) {
                        args.image = {
                            base64: employee.EmployeeImage,
                            height: 57.5,
                            width: 57.5
                        };
                    }
                }
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

var exportBtn = new ej.buttons.Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport();
};

window.getCellContent = function (args) {
    if (args.cellInfo && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'EmployeeID') {
        var employeeId_2 = Number(args.cellInfo.actualText);
        var employee = pivotTableObj.dataSourceSettings.dataSource.find(function (emp) { return emp.EmployeeID === employeeId_2; });
        if (employee && employee.EmployeeImage) {
            var imgSrc = 'data:image/png;base64,' + employee.EmployeeImage;
            return '<div class="image"><img class="university-logo" src="' + imgSrc + '" width="87" height="87" alt="' + (employee.EmployeeID || '') + '" onload="handleImageLoad(this)"/></div>';
        }
    }
    return '';
};
window.handleImageLoad = function (imgElement) {
    try {
        var cell = imgElement.closest('th, td');
        if (cell) {
            var cellValue = cell.querySelector('.e-cellvalue');
            if (cellValue) {
                cellValue.style.display = 'none';
            }
        }
    }
    catch (error) {
        console.warn('Error handling image load:', error);
    }
};