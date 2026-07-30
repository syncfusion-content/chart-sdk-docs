import { PivotView, IDataSet, CellTemplateArgs } from '@syncfusion/ej2-pivotview';
import { renewableEnergy } from './datasource';
// import {  IDataBoundEventArgs}

import * as ej from '@syncfusion/ej2-base';

import { enableRipple } from '@syncfusion/ej2-base';

// Enable ripple effect
enableRipple(false);

// Assuming renewableEnergy data is imported or defined elsewhere in your TypeScript file
declare const window: any;

let pivotObj: PivotView = new PivotView({
    dataSourceSettings: {
        dataSource: renewableEnergy as IDataSet[],
        expandAll: true,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
        formatSettings: [{ name: 'ProCost', format: 'C0' }, { name: 'PowUnits', format: 'N0' }],
        rows: [
            { name: 'Year', caption: 'Production Year' },
            { name: 'HalfYear', caption: 'Half Year' }
        ],
        columns: [
            { name: 'EnerType', caption: 'Energy Type' },
            { name: 'EneSource', caption: 'Energy Source' }
        ],
        values: [
            { name: 'ProCost', caption: 'Revenue Growth' }
        ],
        filters: []
    },
    dataBound: (args: IDataBoundEventArgs) => {
        trend();
    },
    height: 300,
    width: '100%',
    cellTemplate: '${getCellContent(data)}',
    gridSettings: { columnWidth: 140 }
});
pivotObj.appendTo('#PivotView');

(window as any).getCellContent = (e: CellTemplateArgs) => {
    let template = '';
    if (e && e.targetCell.className.indexOf('e-valuescontent') > -1) {
        template = '<span class="tempwrap sb-icon-neutral pv-icons"></span>';
    }
    return template;
};

function trend() {
    const cTable = document.getElementsByClassName("e-table");
    // Check if pivotValues[3] exists before accessing its length
    const colLen = pivotObj.pivotValues[3] ? pivotObj.pivotValues[3].length : 0;
    const cLen = cTable[1].children[0].children.length - 1;
    const rLen = cTable[1].children[1].children.length;

    let rowIndx = 0;
    for (let k = 0; k < rLen; k++) {
        if (pivotObj.pivotValues[k] && pivotObj.pivotValues[k][0] !== undefined) {
            rowIndx = (pivotObj.pivotValues[k][0] as any).rowIndex;
            break;
        }
    }

    const rowHeaders = Array.from(cTable[1].children[1].querySelectorAll('.e-rowsheader'));
    const rows = pivotObj.dataSourceSettings.rows;

    if (rowHeaders.length > 1) {
        for (let i = 0; i < rows.length; i++) {
            const fields: { [key: string]: number } = {};
            const fieldHeaders: string[] = [];

            for (let j = 0; j < rowHeaders.length; j++) {
                const header = rowHeaders[j] as HTMLElement;
                if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                    const headerName = `${rowHeaders[j].getAttribute('fieldname')}_${rowHeaders[j].textContent}`;
                    fields[rowHeaders[j].textContent || ''] = j;
                    fieldHeaders.push(rowHeaders[j].textContent || '');
                }
            }

            if (i === 0) {
                for (let rnt = 1; rnt < fieldHeaders.length; rnt++) {
                    const row = fields[fieldHeaders[rnt]];
                    const prevRow = fields[fieldHeaders[rnt - 1]];

                    for (let j = 1, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                        const node = cTable[1].children[1].children[row]?.childNodes[j] as HTMLElement;
                        const prevNode = cTable[1].children[1].children[prevRow]?.childNodes[j] as HTMLElement;
                        const ri = node?.getAttribute("index");
                        const prevRi = prevNode?.getAttribute("index");

                        if (ri && parseInt(ri) < pivotObj.pivotValues.length) {
                            if (parseFloat((pivotObj.pivotValues[prevRi][ci] as any).value) > parseFloat((pivotObj.pivotValues[ri][ci] as any).value) && node.querySelector('.tempwrap')) {
                                node.querySelector('.tempwrap')!.className = 'tempwrap sb-icon-loss pv-icons';
                            } else if (parseFloat((pivotObj.pivotValues[prevRi][ci] as any).value) < parseFloat((pivotObj.pivotValues[ri][ci] as any).value) && node.querySelector('.tempwrap')) {
                                node.querySelector('.tempwrap')!.className = 'tempwrap sb-icon-profit pv-icons';
                            }
                        }
                    }
                }
            }
        }
    }
}
