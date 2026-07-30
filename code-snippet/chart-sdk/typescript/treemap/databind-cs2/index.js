var treemap = new ej.treemap.TreeMap({
    dataSource: [{
 		"Continent": [{
 			"Name": "Africa",
 			"Population": 1216130000,
 			"States": [{
 					"Name": "Eastern Africa",
 					"Population": 410637987,
 					"Region": [{
 						"Name": "Ethiopia",
 						"Population": 107534882
 					}]
 				},
 				{
 					"Name": "Middle Africa",
 					"Population": 158562976,
 					"Region": [{
 						"Name": "Democratic, Republic of the Congo",
 						"Population": 84004989
 					}]
 				}
 			]
 		}]
 	},

 	{
 		"Continent": [{
 			"Name": "Asia",
 			"Population": 4436224000,
 			"States": [{
 					"Name": "Central Asia",
 					"Population": 69787760,
 					"Region": [{
 						"Name": "Uzbekistan",
 						"Population": 32364996
 					}]
 				},
 				{
 					"Name": "Eastern Asia",
 					"Population": 1641908531,
 					"Region": [{
 						"Name": "China",
 						"Population": 1415045928
 					}]
 				}
 			]
 		}]
 	},

 	{
 		"Continent": [{
 			"Name": "North America",
 			"Population": 579024000,
 			"States": [{
 					"Name": "Central America",
 					"Population": 174988756,
 					"Region": [{
 						"Name": "Mexico",
 						"Population": 130759074
 					}]
 				},
 				{
 					"Name": "Northern America",
 					"Population": 358593810,
 					"Region": [{
 						"Name": "U.S.",
 						"Population": 3267667480
 					}]
 				}
 			]
 		}]
 	},
 	{
 		"Continent": [{
 			"Name": "South America",
 			"Population": 422535000,
 			"States": [{
 				"Name": "Brazil",
 				"Population": 204519000
 			}]
 		}]
 	},
 	{
 		"Continent": [{
 			"Name": "Europe",
 			"Population": 738849000,
 			"States": [{
 					"Name": "Eastern Europe",
 					"Population": 291953328,
 					"Region": [{
 						"Name": "Russia",
 						"Population": 143964709
 					}]
 				},
 				{
 					"Name": "Northern Europe",
 					"Population": 103642971,
 					"Region": [{
 						"Name": "United Kingdom",
 						"Population": 66573504
 					}]
 				}
 			]
 		}]
 	}
 ],
    weightValuePath: 'Population',
    leafItemSettings: {
        labelPath: 'Name',
        fill:'#0077b3',
        border: { color: 'black', width: 0.5 }
    },
    levels: [
        { groupPath: 'Continent',fill:'#004466', border: { color: 'black', width: 0.5 } },
        { groupPath: 'States', fill:'#0099e6', border: { color: 'black', width: 0.5 } },
    ]
}, '#container');


