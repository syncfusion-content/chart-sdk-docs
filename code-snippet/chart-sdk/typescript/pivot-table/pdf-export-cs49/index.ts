import { PivotView, IDataSet, PDFExport } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { employeeData } from './datasource.ts';

PivotView.Inject(PDFExport);
let pivotTableObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: employeeData as IDataSet[],
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
    hyperlinkSettings: {
        showRowHeaderHyperlink: true,
        cssClass: 'e-custom-class'
    },
    cellTemplate: '${getCellContent(data)}',
    gridSettings: {
        layout: 'Tabular',
        pdfQueryCellInfo: (args: any) => {
            if (args.data && args.data.axis === 'row') {
                if (args.data.valueSort && args.data.valueSort.axis === 'FirstName') {
                    const firstName: any = args.data.actualText;
                    const employee: any = employeeData.find((emp: any) => emp.FirstName === firstName);
                    if (employee && employee.EmailID) {
                        args.hyperLink = {
                            target: 'mailto:' + employee.EmailID,
                            displayText: args.value
                        };
                    }
                }
                if (args.data.valueSort && args.data.valueSort.axis === 'EmployeeID') {
                    const employeeId: any = Number(args.data.actualText);
                    const employee: any = employeeData.find((emp: any) => emp.EmployeeID === employeeId);
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

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#pdf');

document.getElementById('pdf').onclick = function () {
    pivotTableObj.pdfExport();
};

(<{ getCellContent?: Function }>window).getCellContent = (args: any): any => {
    if (args.cellInfo && args.cellInfo.axis === 'row' && args.cellInfo.valueSort.axis === 'EmployeeID') {
        let employeeId: number = Number(args.cellInfo.actualText);
        // eslint-disable-next-line @typescript-eslint/tslint/config
        let employee: { [key: string]: Object; } | any = employeeData.find(function (emp: any) { return emp.EmployeeID === employeeId; });
        if (employee && employee.EmployeeImage) {
            let imgSrc: string = 'data:image/png;base64,' + employee.EmployeeImage;
            return '<div class="image"><img class="university-logo" src="' + imgSrc + '" width="87" height="87" alt="' + (employee.EmployeeID || '') + '" onload="handleImageLoad(this)"/></div>';
        }
    }
    return '';
};

(<{ handleImageLoad?: Function }>window).handleImageLoad = (imgElement: any): void => {
    try {
        const cell: HTMLElement = imgElement.closest('th, td');
        if (cell) {
            const cellValue: HTMLElement | any = cell.querySelector('.e-cellvalue');
            if (cellValue) {
                cellValue.style.display = 'none';
            }
        }
    } catch (error) {
        console.warn('Error handling image load:', error);
    }
};