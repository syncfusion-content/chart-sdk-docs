import {
    TreeMap,
    TreeMapLegend,
    TreeMapTooltip
} from '@syncfusion/ej2-treemap';

TreeMap.Inject(TreeMapLegend, TreeMapTooltip);

const DrillDown: Object[] = [
    {
        Continent: 'Asia',
        States: 'China',
        Region: 'East Asia',
        Name: 'China',
        Population: 1409517397
    },
    {
        Continent: 'Asia',
        States: 'India',
        Region: 'South Asia',
        Name: 'India',
        Population: 1339180127
    },
    {
        Continent: 'Asia',
        States: 'Indonesia',
        Region: 'Southeast Asia',
        Name: 'Indonesia',
        Population: 263991379
    },
    {
        Continent: 'Asia',
        States: 'Pakistan',
        Region: 'South Asia',
        Name: 'Pakistan',
        Population: 197015955
    },
    {
        Continent: 'Asia',
        States: 'Bangladesh',
        Region: 'South Asia',
        Name: 'Bangladesh',
        Population: 164669751
    },
    {
        Continent: 'Asia',
        States: 'Japan',
        Region: 'East Asia',
        Name: 'Japan',
        Population: 127484450
    },
    {
        Continent: 'Europe',
        States: 'Russia',
        Region: 'Eastern Europe',
        Name: 'Russia',
        Population: 143989754
    },
    {
        Continent: 'Europe',
        States: 'Germany',
        Region: 'Western Europe',
        Name: 'Germany',
        Population: 82114224
    },
    {
        Continent: 'Europe',
        States: 'United Kingdom',
        Region: 'Northern Europe',
        Name: 'United Kingdom',
        Population: 66181585
    },
    {
        Continent: 'Europe',
        States: 'France',
        Region: 'Western Europe',
        Name: 'France',
        Population: 64979548
    },
    {
        Continent: 'Europe',
        States: 'Italy',
        Region: 'Southern Europe',
        Name: 'Italy',
        Population: 59359900
    },
    {
        Continent: 'Africa',
        States: 'Nigeria',
        Region: 'Western Africa',
        Name: 'Nigeria',
        Population: 190886311
    },
    {
        Continent: 'Africa',
        States: 'Ethiopia',
        Region: 'Eastern Africa',
        Name: 'Ethiopia',
        Population: 104957438
    },
    {
        Continent: 'Africa',
        States: 'Egypt',
        Region: 'Northern Africa',
        Name: 'Egypt',
        Population: 97553151
    },
    {
        Continent: 'Africa',
        States: 'South Africa',
        Region: 'Southern Africa',
        Name: 'South Africa',
        Population: 56717156
    },
    {
        Continent: 'North America',
        States: 'United States',
        Region: 'Northern America',
        Name: 'United States',
        Population: 324459463
    },
    {
        Continent: 'North America',
        States: 'Mexico',
        Region: 'Central America',
        Name: 'Mexico',
        Population: 129163276
    },
    {
        Continent: 'North America',
        States: 'Canada',
        Region: 'Northern America',
        Name: 'Canada',
        Population: 36624199
    },
    {
        Continent: 'South America',
        States: 'Brazil',
        Region: 'South America',
        Name: 'Brazil',
        Population: 209288278
    },
    {
        Continent: 'South America',
        States: 'Colombia',
        Region: 'South America',
        Name: 'Colombia',
        Population: 49065615
    },
    {
        Continent: 'South America',
        States: 'Argentina',
        Region: 'South America',
        Name: 'Argentina',
        Population: 44271041
    },
    {
        Continent: 'Oceania',
        States: 'Australia',
        Region: 'Australia and New Zealand',
        Name: 'Australia',
        Population: 24450561
    },
    {
        Continent: 'Oceania',
        States: 'Papua New Guinea',
        Region: 'Melanesia',
        Name: 'Papua New Guinea',
        Population: 8251162
    },
    {
        Continent: 'Oceania',
        States: 'New Zealand',
        Region: 'Australia and New Zealand',
        Name: 'New Zealand',
        Population: 4705818
    }
];

const islandData: Object[] = [
    {
        Name: 'Greenland',
        Area: 2130800,
        Population: 56483,
        Location: 'North America'
    },
    {
        Name: 'New Guinea',
        Area: 785753,
        Population: 1306940,
        Location: 'Oceania'
    },
    {
        Name: 'Borneo',
        Area: 743330,
        Population: 19804064,
        Location: 'Asia'
    },
    {
        Name: 'Madagascar',
        Area: 587713,
        Population: 22005222,
        Location: 'Africa'
    },
    {
        Name: 'Baffin Island',
        Area: 507451,
        Population: 10745,
        Location: 'North America'
    },
    {
        Name: 'Sumatra',
        Area: 443066,
        Population: 50000000,
        Location: 'Asia'
    },
    {
        Name: 'Honshu',
        Area: 225800,
        Population: 103000000,
        Location: 'Asia'
    },
    {
        Name: 'Victoria Island',
        Area: 217291,
        Population: 1875,
        Location: 'North America'
    },
    {
        Name: 'Great Britain',
        Area: 209331,
        Population: 60800000,
        Location: 'Europe'
    },
    {
        Name: 'Ellesmere Island',
        Area: 183965,
        Population: 146,
        Location: 'North America'
    }
];

const drillDownTreeMap: TreeMap = new TreeMap({
    palette: [
        '#9999ff',
        '#CCFF99',
        '#FFFF99',
        '#FF9999',
        '#FF99FF',
        '#FFCC66'
    ],
    titleSettings: {
        text: 'List of countries by population',
        textStyle: {
            size: '15px'
        },
        subtitleSettings: {
            text: 'Treemap SubTitle',
            textStyle: {
                color: 'red',
                size: '18px'
            }
        }
    },
    enableDrillDown: true,
    format: 'n',
    useGroupingSeparator: true,
    dataSource: DrillDown,
    weightValuePath: 'Population',
    legendSettings: {
        visible: true,
        position: 'Top',
        shape: 'Rectangle',
        textStyle: {
            fontFamily: 'Segoe UI'
        }
    },
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Population}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        showLabels: false,
        labelStyle: {
            size: '0px'
        },
        border: {
            color: 'black',
            width: 0.5
        }
    },
    levels: [
        {
            groupPath: 'Continent',
            border: {
                color: 'black',
                width: 0.5
            }
        },
        {
            groupPath: 'States',
            border: {
                color: 'black',
                width: 0.5
            }
        },
        {
            groupPath: 'Region',
            showHeader: false,
            border: {
                color: 'black',
                width: 0.5
            }
        }
    ]
});

drillDownTreeMap.appendTo('#treemap');

const tooltipTreeMap: TreeMap = new TreeMap({
    titleSettings: {
        text: 'Top 10 largest islands in the World',
        textStyle: {
            size: '15px'
        }
    },
    format: 'n',
    useGroupingSeparator: true,
    rangeColorValuePath: 'Area',
    dataSource: islandData,
    weightValuePath: 'Area',
    legendSettings: {
        visible: true,
        position: 'Bottom',
        mode: 'Interactive',
        height: '10px',
        title: {
            text: 'Area'
        }
    },
    tooltipSettings: {
        visible: true,
        format: '${Name} : ${Area}'
    },
    leafItemSettings: {
        labelPath: 'Name',
        border: {
            color: 'white',
            width: 0.5
        },
        colorMapping: [
            {
                from: 100000,
                to: 250000,
                label: '0.1M - 0.25M',
                color: '#547C84'
            },
            {
                from: 250000,
                to: 550000,
                label: '0.25M - 0.55M',
                color: '#37AFAB'
            },
            {
                from: 550000,
                to: 750000,
                label: '0.55M - 0.75M',
                color: '#A4D6AD'
            },
            {
                from: 750000,
                to: 2250000,
                label: '0.75M - 2.25M',
                color: '#DEEBAE'
            }
        ]
    }
});

tooltipTreeMap.appendTo('#treemap-tooltip');