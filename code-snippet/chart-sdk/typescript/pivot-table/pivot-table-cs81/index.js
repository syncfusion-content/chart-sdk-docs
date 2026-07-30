        var data = function (count) {
        var result = [];
        var dt = 0;
        for (var i = 1; i < (count + 1); i++) {
            dt++;
            var round = void 0;
            var toString_1 = i.toString();
            if (toString_1.length === 1) {
                round = '0000' + (i);
            }
            else if (toString_1.length === 2) {
                round = '000' + i;
            }
            else if (toString_1.length === 3) {
                round = '00' + i;
            }
            else if (toString_1.length === 4) {
                round = '0' + i;
            }
            else {
                round = toString_1;
            }
            result.push({
                ProductID: 'PRO-' + round,               
                Year: "FY " + (dt + 2013),
                Sold: Math.round(Math.random() * 80) + 10,
            });
            if (dt / 4 == 1) {
                dt = 0;
            }
        }
        return result;
    };    
    var pivotTableObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            dataSource: data(1000),
            enableSorting: false,
            expandAll: true,
            rows: [{ name: 'ProductID' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Sold', caption: 'Unit Sold' }]
        },
        height: 320,
        enableVirtualization: true,
        showGroupingBar: true,
        maxNodeLimitInMemberEditor: 100
    });
    pivotTableObj.appendTo('#PivotTable');

