import { PivotView, ExcelExport, IDataSet, VirtualScroll } from '@syncfusion/ej2-pivotview';
import { Button } from '@syncfusion/ej2-buttons';

let names: string[] = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
    'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let city: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
    'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham']
let hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rating: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation: string[] = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status: string[] = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];
let time: number = 0;
let data: Function = (count: number) => {
    let result: Object[] = [];
    for (let i: number = 0; i < count; i++) {
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

PivotView.Inject(VirtualScroll, ExcelExport);
let pivotGridObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: data(10000) as IDataSet[],
        expandAll: false,
        rows: [{ name: 'TaskID' }, { name: 'Status' }],
        columns: [{ name: 'Designation' }],
        values: [{ name: 'Estimation' }, { name: 'Rating' }]
    },
    width: 1200,
    height: 400,
    enableVirtualization: true,
    allowExcelExport: true,
    exportComplete: function (): void {
        pivotGridObj.hideWaitingPopup();
    }
});
pivotGridObj.appendTo('#PivotTable');

let exportBtn: Button = new Button({ isPrimary: true });
exportBtn.appendTo('#excel');
document.getElementById('excel').onclick = function (): void {
    pivotGridObj.showWaitingPopup();
    setTimeout(() => {
        pivotGridObj.excelExport();
    });
};