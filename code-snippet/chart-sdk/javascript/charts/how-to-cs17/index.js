var fruitData = [{
    person: 'James',
    apple: 5,
    orange: 4,
    grapes: 1
}, {
    person: 'Michael',
    apple: 4,
    orange: 3,
    grapes: 2
}, {
    person: 'John',
    apple: 5,
    orange: 4,
    grapes: 2
}];

function getTotal(point) {
    return point.apple + point.orange + point.grapes;
}

function createAnnotations(data) {
    return data.map(function (point) {
        var total = getTotal(point);

        return {
            content: '<span class="stack-total">' + total + '</span>',
            x: point.person,
            y: total + 0.5,
            coordinateUnits: 'Point',
            region: 'Series',
            horizontalAlignment: 'Center',
            verticalAlignment: 'Bottom',
            description: 'Total for ' + point.person + ': ' + total
        };
    });
}

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        title: 'Person',
        majorGridLines: {
            width: 0
        }
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 13,
        interval: 2,
        title: 'Fruit count'
    },
    series: [{
        type: 'StackingColumn',
        dataSource: fruitData,
        xName: 'person',
        yName: 'apple',
        name: 'Apple',
        animation: {
            enable: false
        },
        marker: {
            dataLabel: {
                visible: true,
                position: 'Middle',
                font: {
                    color: '#ffffff',
                    fontWeight: '600'
                }
            }
        }
    }, {
        type: 'StackingColumn',
        dataSource: fruitData,
        xName: 'person',
        yName: 'orange',
        name: 'Orange',
        animation: {
            enable: false
        },
        marker: {
            dataLabel: {
                visible: true,
                position: 'Middle',
                font: {
                    color: '#ffffff',
                    fontWeight: '600'
                }
            }
        }
    }, {
        type: 'StackingColumn',
        dataSource: fruitData,
        xName: 'person',
        yName: 'grapes',
        name: 'Grapes',
        animation: {
            enable: false
        },
        marker: {
            dataLabel: {
                visible: true,
                position: 'Middle',
                font: {
                    color: '#ffffff',
                    fontWeight: '600'
                }
            }
        }
    }],
    annotations: createAnnotations(fruitData),
    tooltip: {
        enable: true,
        shared: true
    },
    title: 'Fruit Consumption',
    width: '100%',
    height: '400px'
}, '#element');