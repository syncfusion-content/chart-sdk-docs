


let jobData:Object[] = [
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'USA', JobDescription: 'Management', JobGroup: 'Lead', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 100 },
    { Category: 'Employees', Country: 'India', JobDescription: 'HR Executives',  JobGroup: 'Recruiters', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'India', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 40 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Executive', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Sales', JobGroup: 'Analyst', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 80 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Management', JobGroup: 'Lead', EmployeesCount: 10 },
    { Category: 'Employees', Country: 'Germany', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 20 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 30 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'HR Executives', JobGroup: 'Recruiters', EmployeesCount: 50 },
    { Category: 'Employees', Country: 'UK', JobDescription: 'Accounts', JobGroup: 'Finance', EmployeesCount: 60 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Technical', JobGroup: 'Testers', EmployeesCount: 70 },
    { Category: 'Employees', Country: 'France', JobDescription: 'Marketing', JobGroup: 'Advertising', EmployeesCount: 100 }];

import { TreeMap } from '@syncfusion/ej2-treemap';
let treemap: TreeMap = new TreeMap({
    palette: ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"],
    dataSource:jobData,
    weightValuePath: 'EmployeesCount',
    levels: [
        { groupPath: 'Country', headerFormat:'${Country}-${EmployeesCount}',
        headerAlignment:'Center', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobDescription',headerFormat:'${JobDescription}-${EmployeesCount}', headerAlignment:'Far', border: { color: 'black', width: 0.5 } },
        { groupPath: 'JobGroup', headerAlignment:'Near',
        headerFormat:'${JobGroup}-${EmployeesCount}', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');



