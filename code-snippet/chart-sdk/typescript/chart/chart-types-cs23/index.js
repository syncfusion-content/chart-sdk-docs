var data = [
    { 'x': 'China', y: 1409517397, text: 'China' },
    { 'x': 'India', y: 1339180127, text: 'India' },
    { 'x': 'United States', y: 324459463, text: 'United States' },
    { 'x': 'Indonesia', y: 263991379, text: 'Indonesia' },
    { 'x': 'Brazil', y: 209288278, text: 'Brazil' },
    { 'x': 'Pakistan', y: 197015955, text: 'Pakistan' },
    { 'x': 'Nigeria', y: 190886311, text: 'Nigeria' },
    { 'x': 'Bangladesh', y: 164669751, text: 'Bangladesh' },
    { 'x': 'Russia', y: 143989754, text: 'Russia' },
    { 'x': 'Mexico', y: 129163276, text: 'Mexico' },
    { 'x': 'Japan', y: 127484450, text: ' Japan' },
    { 'x': 'Ethiopia', y: 104957438, text: 'Ethiopia' },
    { 'x': 'Philippines', y: 104918090, text: 'Philippines' },
    { 'x': 'Egypt', y: 97553151, text: 'Egypt' },
    { 'x': 'Vietnam', y: 95540800, text: 'Vietnam' },
    { 'x': 'Germany', y: 82114224, text: 'Germany' }];

var chart = new ej.charts.AccumulationChart({
    series: [{
        type: 'Funnel', dataSource: data, xName: 'x', yName: 'y',
        neckWidth: '15%',
        neckHeight: '18%',
        name: '2017 Population',
        dataLabel: {
            visible: true, position: 'Outside',
            connectorStyle: { length: '6%' }, name: 'text',
        },
        explode: false,
    }],
    legendSettings: { visible: false },
    //Initializing tooltip
    tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },
    load: function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark');
        if (args.accumulation.availableSize) {
            if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '70%';
            }
        }
    },
    resized: function (args) {
        var bounds = document.getElementById('container').getBoundingClientRect();
        if (bounds.width < bounds.height) {
            args.accumulation.series[0].width = '80%';
            args.accumulation.series[0].height = '70%';
        } else {
            args.accumulation.series[0].width = '60%';
            args.accumulation.series[0].height = '80%';
        }
    },
    //Initializing Chart title
    title: 'Top population countries in the world 2017',
}, '#element');

