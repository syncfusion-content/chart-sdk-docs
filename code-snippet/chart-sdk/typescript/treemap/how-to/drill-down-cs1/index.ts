


import { TreeMap, ILoadedEventArgs, IDrillEndEventArgs } from '@syncfusion/ej2-treemap';
import { DrillDown } from './datasource.ts';
// Initialize the tree map control
let treemap: TreeMap = new TreeMap({
    palette: ['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66'],
    enableDrillDown: true,
    format: 'n',
    useGroupingSeparator: true,
    dataSource: DrillDown,
    weightValuePath: 'Population',
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Population}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        showLabels: false,
        labelStyle: { size: '0px' },
        border: { color: 'black', width: 0.5 }
    },
    levels: [
        { groupPath: 'Continent', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'States', fill: '#336699', border: { color: 'black', width: 0.5 } },
        { groupPath: 'Region', showHeader: false, fill: '#336699', border: { color: 'black', width: 0.5 } },
    ],
    loaded: function (args: ILoadedEventArgs) {
        let header: Element = document.getElementById('header');
        let population: number = 0;
        for (let i: number = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
            population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
        }
        header.innerHTML = 'Continent - Population : ' + population
    },
    drillEnd: function (args: IDrillEndEventArgs) {
        let header: Element = document.getElementById('header');
        let layout: Element = document.getElementById("container_TreeMap_Squarified_Layout");
        let population: number = 0;
        if (args.treemap.layout.renderItems[0]['isDrilled']) {
            for (let i: number = 0; i < args.treemap.layout.renderItems.length; i++) {
                population += +(args.treemap.layout.renderItems[i]['data'].Population);
            }
            header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - ' + population;
        }
        else if (args.treemap.layout.renderItems[0]['parent'].Continent) {
            for (let i: number = 0; i < args.treemap.layout.renderItems[0]['parent'].Continent.length; i++) {
                population += +(args.treemap.layout.renderItems[0]['parent'].Continent[i]['data'].Population);
            }
            header.innerHTML = 'Continent - Population : ' + population;
        } else {
            population = args.treemap.layout.renderItems[0]['data'].Population;
            header.innerHTML = layout.children[0].children[1].innerHTML.split(']')[1] + ' - Population : ' + population;
        }
    }
}, '#container');


