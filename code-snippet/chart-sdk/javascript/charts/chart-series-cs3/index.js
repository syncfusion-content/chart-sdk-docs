var chartData = [
    { year: '2005', consumption: { private: 1.2, government: 0.5 }, investment: { value: 0.7 }, trade: { net: -0.8 }, gdp: { growth: 1.5 } },
    { year: '2006', consumption: { private: 1, government: 0.5 }, investment: { value: 1.4 }, trade: { net: 0 }, gdp: { growth: 2.3 } },
    { year: '2007', consumption: { private: 1, government: 0.5 }, investment: { value: 1.5 }, trade: { net: -1 }, gdp: { growth: 2 } },
    { year: '2008', consumption: { private: 0.25, government: 0.35 }, investment: { value: 0.35 }, trade: { net: -0.35 }, gdp: { growth: 0.1 } },
    { year: '2009', consumption: { private: 0.1, government: 0.9 }, investment: { value: -2.7 }, trade: { net: -0.3 }, gdp: { growth: -2.7 } },
    { year: '2010', consumption: { private: 1, government: 0.5 }, investment: { value: 0.5 }, trade: { net: -0.5 }, gdp: { growth: 1.8 } },
    { year: '2011', consumption: { private: 0.1, government: 0.25 }, investment: { value: 0.25 }, trade: { net: 0 }, gdp: { growth: 2 } },
    { year: '2012', consumption: { private: -0.25, government: -0.5 }, investment: { value: -0.1 }, trade: { net: -0.4 }, gdp: { growth: 0.4 } },
    { year: '2013', consumption: { private: 0.25, government: 0.5 }, investment: { value: -0.3 }, trade: { net: 0 }, gdp: { growth: 0.9 } },
    { year: '2014', consumption: { private: 0.6, government: 0.6 }, investment: { value: -0.6 }, trade: { net: -0.6 }, gdp: { growth: 0.4 } },
    { year: '2015', consumption: { private: 0.9, government: 0.5 }, investment: { value: 0 }, trade: { net: -0.3 }, gdp: { growth: 1.3 } }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Years',
        interval: 1,
        labelIntersectAction: 'Rotate45',
        valueType: 'Category'
    },
    primaryYAxis: {
        title: 'Growth',
        minimum: -3,
        maximum: 3,
        interval: 1
    },
    series: [
        {
            type: 'StackingColumn',
            dataSource: chartData,
            enableComplexProperty: true,
            xName: 'year',
            yName: 'consumption.private',
            name: 'Private Consumption'
        },
        {
            type: 'StackingColumn',
            dataSource: chartData,
            enableComplexProperty: true,
            xName: 'year',
            yName: 'consumption.government',
            name: 'Government Consumption'
        },
        {
            type: 'StackingColumn',
            dataSource: chartData,
            enableComplexProperty: true,
            xName: 'year',
            yName: 'investment.value',
            name: 'Investment'
        },
        {
            type: 'StackingColumn',
            dataSource: chartData,
            enableComplexProperty: true,
            xName: 'year',
            yName: 'trade.net',
            name: 'Net Foreign Trade'
        },
        {
            type: 'Line',
            dataSource: chartData,
            enableComplexProperty: true,
            xName: 'year',
            yName: 'gdp.growth',
            name: 'GDP',
            width: 2,
            opacity: 0.6,
            marker: {
                visible: true,
                width: 10,
                height: 10,
                opacity: 0.6
            }
        }
    ],
    title: 'Annual GDP Growth in France'
}, '#element');