
var legendIcons = {
    'China':     'https://img.icons8.com/color/100/china.png',
    'India':     'https://img.icons8.com/color/100/india.png',
    'Indonesia': 'https://img.icons8.com/color/100/indonesia.png'
};

var chinaData = [
    { x: 2022, y: 4152.7 }, { x: 2023, y: 4362.1 }, { x: 2024, y: 4780.0 }
];
var indiaData = [
    { x: 2022, y: 863.2 }, { x: 2023, y: 968.8 }, { x: 2024, y: 1085.1 }
];
var indonesiaData = [
    { x: 2022, y: 693.4 }, { x: 2023, y: 781.3 }, { x: 2024, y: 836.1 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        interval: 1,
        edgeLabelPlacement: 'Shift',
        majorGridLines: {
            width: 0
        }
    },
    primaryYAxis: {
        title: 'Coal Production (Million Tonnes)',
            labelFormat: '{value}t'
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    series: [
        {
            dataSource: chinaData, xName: 'x', yName: 'y',
            name: 'China',
            type: 'Column', animation: { enable: false }, marker: {dataLabel: {visible: true} }
        },
        {
            dataSource: indiaData, xName: 'x', yName: 'y',
            name: 'India',
            type: 'Column', animation: { enable: false }, marker: {dataLabel: {visible: true} }
        },
        {
            dataSource: indonesiaData, xName: 'x', yName: 'y',
            name: 'Indonesia',
            type: 'Column', animation: { enable: false }, marker: {dataLabel: {visible: true} }
        }
    ],
    legendSettings: {
        visible: true,
        template: '<div class="coal-legend-item" style="display:flex;align-items:center;gap:8px;padding:4px 8px;opacity:1;transition:opacity .3s;cursor:pointer;">' +
                  '<img class="e-icon" src="" width="24" height="24" style="border-radius:4px;object-fit:cover;" />' +
                  '<span class="e-label" style="font-size:13px;font-weight:bold;color:;"></span>' +
                  '</div>'
    },
    legendRender: function (args) {
        var matchedSeries = chart.series.filter(function (s) { return s.name === args.text; })[0];
        var opacity = (matchedSeries && matchedSeries.visible === false) ? '0.5' : '1';
        args.template = args.template
            .replace('opacity:1;', 'opacity:' + opacity + ';')
            .replace('src=""', 'src="' + (legendIcons[args.text] || '') + '"')
            .replace('color:;', 'color:' + args.fill + ';')
            .replace('></span>', '>' + args.text + '</span>');
    },
    tooltip: {
        enable: true
    },
    title: 'Top 3 Countries by Coal Production (2022–2024)'
});
chart.appendTo('#element');
