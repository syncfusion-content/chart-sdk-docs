var vietnam = [
    { x: 2016, y: 7.8 },
    { x: 2017, y: 10.3 },
    { x: 2018, y: 15.5 },
    { x: 2019, y: 17.5 },
    { x: 2020, y: 19.5 },
    { x: 2021, y: 23.0 },
    { x: 2022, y: 20.0 },
    { x: 2023, y: 19.0 },
    { x: 2024, y: 22.1 }
];

var indonesia = [
    { x: 2016, y: 4.8 },
    { x: 2017, y: 5.2 },
    { x: 2018, y: 6.2 },
    { x: 2019, y: 7.8 },
    { x: 2020, y: 9.3 },
    { x: 2021, y: 14.3 },
    { x: 2022, y: 15.6 },
    { x: 2023, y: 16.0 },
    { x: 2024, y: 17.0 }
];

var france = [
    { x: 2016, y: 14.6 },
    { x: 2017, y: 15.5 },
    { x: 2018, y: 15.4 },
    { x: 2019, y: 14.4 },
    { x: 2020, y: 11.6 },
    { x: 2021, y: 13.9 },
    { x: 2022, y: 12.1 },
    { x: 2023, y: 10.0 },
    { x: 2024, y: 10.8 }
];

var poland = [
    { x: 2016, y: 8.9 },
    { x: 2017, y: 10.3 },
    { x: 2018, y: 10.8 },
    { x: 2019, y: 9.0 },
    { x: 2020, y: 7.9 },
    { x: 2021, y: 8.5 },
    { x: 2022, y: 7.4 },
    { x: 2023, y: 6.4 },
    { x: 2024, y: 7.1 }
];

var mexico = [
    { x: 2016, y: 19.0 },
    { x: 2017, y: 20.0 },
    { x: 2018, y: 20.2 },
    { x: 2019, y: 18.4 },
    { x: 2020, y: 16.8 },
    { x: 2021, y: 18.5 },
    { x: 2022, y: 18.4 },
    { x: 2023, y: 16.3 },
    { x: 2024, y: 13.7 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Double',
        majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
    },
    enableSmartLabels: true,
    primaryYAxis: {
        title: 'Volume in million metric tons',
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'Line',
            animation: { enable: false },
            dataSource: vietnam,
            xName: 'x',
            yName: 'y',
            width: 2,
            marker: {
                visible: true,
                width: 7,
                height: 7,
                shape: 'Circle',
                isFilled: true,
                dataLabel: { visible: true }
            },
            name: 'Vietnam'
        },
        {
            type: 'Line',
            animation: { enable: false },
            dataSource: indonesia,
            xName: 'x',
            yName: 'y',
            width: 2,
            marker: {
                visible: true,
                width: 6,
                height: 6,
                shape: 'Triangle',
                isFilled: true,
                dataLabel: { visible: true }
            },
            name: 'Indonesia'
        },
        {
            type: 'Line',
            animation: { enable: false },
            dataSource: france,
            xName: 'x',
            yName: 'y',
            width: 2,
            marker: {
                visible: true,
                width: 7,
                height: 7,
                shape: 'Diamond',
                isFilled: true,
                dataLabel: { visible: true }
            },
            name: 'France'
        },
        {
            type: 'Line',
            animation: { enable: false },
            dataSource: poland,
            xName: 'x',
            yName: 'y',
            width: 2,
            marker: {
                visible: true,
                width: 5,
                height: 5,
                shape: 'Rectangle',
                isFilled: true,
                dataLabel: { visible: true }
            },
            name: 'Poland'
        },
        {
            type: 'Line',
            animation: { enable: false },
            dataSource: mexico,
            xName: 'x',
            yName: 'y',
            width: 2,
            marker: {
                visible: true,
                width: 7,
                height: 7,
                shape: 'Pentagon',
                isFilled: true,
                dataLabel: { visible: true }
            },
            name: 'Mexico'
        }
    ],
    title: 'Annual Crude Steel Production by Country (2016–2024)',
    subTitle: 'Source: wikipedia.org'
});

chart.appendTo('#container');