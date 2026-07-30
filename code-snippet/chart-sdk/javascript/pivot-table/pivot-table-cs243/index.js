var pivotTableObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: renewableEnergy,
        expandAll: true,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
        formatSettings: [{ name: 'ProCost', format: 'C0' }],
        rows: [
            { name: 'Year', caption: 'Production Year' }
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
    gridSettings: {
        columnWidth: 140
    },
    height: 350,
    cellTemplate: '<span class="tempwrap sb-icon-neutral pv-icons"></span>',
    dataBound: function (args) {
        var cTable = document.getElementsByClassName("e-table");
        var colLen = pivotTableObj.pivotValues[3].length;
        var cLen = cTable[3].children[0].children.length;
        var rLen = cTable[3].children[1].children.length;
     
        for (let k = 0; k < rLen; k++) {
            if (pivotTableObj.pivotValues[k] && pivotTableObj.pivotValues[k][0] !== undefined) {
                rowIndx = (pivotTableObj.pivotValues[k][0]).rowIndex;
                break;
            }
        }
        var rowHeaders = [].slice.call(cTable[2].children[1].querySelectorAll('td'));
        var rows = pivotTableObj.dataSourceSettings.rows;
        if (rowHeaders.length > 1) {
            for (var i = 0, Cnt = rows; i < Cnt.length; i++) {
                var fields = {};
                var fieldHeaders = [];
                    for (var j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
                        var header = rowHeaders[j];
                        if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                            var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
                            fields[rowHeaders[j].textContent] = j;
                            fieldHeaders.push(rowHeaders[j].textContent);
                        }
                    }
                    if (i === 0) {
                        for (var rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                            if (rnt !== 0) {
                                var row = fields[fieldHeaders[rnt]];
                                var prevRow = fields[fieldHeaders[rnt - 1]];
                                for (var j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                                    var node = cTable[3].children[1].children[row].childNodes[j];
                                    var prevNode = cTable[3].children[1].children[prevRow].childNodes[j];
                                    var ri = node.getAttribute('index');
                                    var prevRi = prevNode.getAttribute('index');
                                    if (ri < pivotTableObj.pivotValues.length) {
                                        if ((pivotTableObj.pivotValues[prevRi][ci]).value > (pivotTableObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                            var trendElement = node.querySelector('.tempwrap');
                                            trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                        } else if ((pivotTableObj.pivotValues[prevRi][ci]).value < (pivotTableObj.pivotValues[ri][ci]).value && node.querySelector('.tempwrap')) {
                                            var trendElement = node.querySelector('.tempwrap');
                                            trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                        }
                                    }
                                }
                            }
                        }
                }
            }
        }
    }
});
pivotTableObj.appendTo('#PivotTable');

