var treemap = new ej.treemap.TreeMap(
    {
        palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
        enableDrillDown: true,
        format: 'n',
        useGroupingSeparator: true,
        dataSource: drillDown,
        weightValuePath: 'Population',
        tooltipSettings: {
            visible: true,
            format: '${Name} : ${Population}',
        },
        leafItemSettings: {
            labelPath: 'Name',
            showLabels: false,
            labelStyle: { size: '0px' },
            border: { color: 'black', width: 0.5 },
        },
        levels: [
            {
                groupPath: 'Continent',
                fill: '#336699',
                border: { color: 'black', width: 0.5 },
            },
            {
                groupPath: 'States',
                fill: '#336699',
                border: { color: 'black', width: 0.5 },
            },
            {
                groupPath: 'Region',
                showHeader: false,
                fill: '#336699',
                border: { color: 'black', width: 0.5 },
            },
        ],
        loaded: function (args) {
            var header = document.getElementById('header');
            var population = 0;
            for (var i = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
                population +=
                    args.treemap.layout.renderItems[0]['parent'].Continent[i]['data']
                        .Population;
            }
            header.innerHTML = 'Continent - Population : ' + population;
        },
        drillEnd: function (args) {
            var header = document.getElementById('header');
            var layout = document.getElementById(
                'container_TreeMap_Squarified_Layout'
            );
            var population = 0;
            if (args.treemap.layout.renderItems[0]['isDrilled']) {
                for (var i = 0; i < args.treemap.layout.renderItems.length; i++) {
                    population += args.treemap.layout.renderItems[i]['data'].Population;
                }
                header.innerHTML =
                    layout.children[0].children[1].innerHTML.split(']')[1] +
                    ' - ' +
                    population;
            } else if (args.treemap.layout.renderItems[0]['parent'].Continent) {
                for (
                    var i = 0;
                    i < args.treemap.layout.renderItems[0]['parent'].Continent.length;
                    i++
                ) {
                    population +=
                        args.treemap.layout.renderItems[0]['parent'].Continent[i]['data']
                            .Population;
                }
                header.innerHTML = 'Continent - Population : ' + population;
            } else {
                population = args.treemap.layout.renderItems[0]['data'].Population;
                header.innerHTML =
                    layout.children[0].children[1].innerHTML.split(']')[1] +
                    ' - Population : ' +
                    population;
            }
        },
    },
    '#container'
);

