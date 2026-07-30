   var columnData = [{ country: "USA", gold: 50 }, { country: "China", gold: 40 }, { country: "Japan", gold: 70 },
{ country: "Australia", gold: 60 }, { country: "France", gold: 50 }, { country: "Germany", gold: 40 },
{ country: "Italy", gold: 40 }, { country: "Sweden", gold: 30 }];
   
   var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
        },
        primaryYAxis: {
            title: 'Medals'
        },
        annotations: [{
                content: '<div id ="test" style="border-top:3px dashed grey;border-top-width: 2px; width: 10000px"></div>',
                x: 'France',
                y: 50,
                coordinateUnits: 'Point',
                Region: 'Chart'
            }],
        series: [{
                dataSource: columnData,
                xName: 'country', yName: 'gold',
                type: 'Line'
            }],
    }, '#element');

