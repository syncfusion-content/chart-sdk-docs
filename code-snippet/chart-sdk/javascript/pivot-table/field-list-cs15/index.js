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
                Price: Math.round(Math.random() * 5000) + 5000,
                Sold: Math.round(Math.random() * 80) + 10,
            });
            if (dt / 4 == 1) {
                dt = 0;
            }
        }
        return result;
    };    
    var pivotObj = new ej.pivotview.PivotView({
        height: 300,
        enableVirtualization: true,
        enginePopulated: function () {
            if (fieldListObj) {
                fieldListObj.update(pivotObj);
            }
        },
    });
    pivotObj.appendTo('#PivotTable');

    var fieldListObj = new ej.pivotview.PivotFieldList({
        dataSourceSettings: {
            dataSource: data(1000),
            rows: [{ name: 'ProductID' }],
            columns: [{ name: 'Year' }],
            values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }]
        },
        renderMode: 'Fixed',
        enginePopulated: function () {
            fieldListObj.updateView(pivotObj);
        },
        load: function () {
            this.pivotGridModule = pivotObj;
            //Assigning report to pivot table component.
            pivotObj.dataSourceSettings = fieldListObj.dataSourceSettings;
            //Generating page settings based on pivot table component’s size.
            pivotObj.updatePageSettings(true);
            //Assigning page settings to field list component.
            fieldListObj.pageSettings = pivotObj.pageSettings;
        },
    });
    fieldListObj.appendTo('#Static_FieldList');

