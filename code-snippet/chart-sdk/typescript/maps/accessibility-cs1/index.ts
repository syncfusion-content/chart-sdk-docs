import {
    Maps,
    Legend,
    Marker,
    MapsTooltip,
    Zoom,
    NavigationLine,
    Annotations
} from '@syncfusion/ej2-maps';
import { world_map } from './world-map.ts';

Maps.Inject(Legend, Marker, MapsTooltip, Zoom, NavigationLine, Annotations);

let map: Maps = new Maps({
    width: '100%',
    height: '600px',
    tabIndex: 0,
    description: 'World map showing accessible location markers for India, Europe, North America, and South America.',
    titleSettings: {
        text: 'Accessible World Map',
        description: 'Accessible World Map displaying geographical regions and location markers.',
        textStyle: {
            size: '20px',
            fontWeight: '600'
        }
    },
    zoomSettings: {
        enable: true,
        enablePanning: true,
        toolbarSettings: {
            buttonSettings: {
                toolbarItems: [
                    'Zoom',
                    'ZoomIn',
                    'ZoomOut',
                    'Pan',
                    'Reset'
                ]
            }
        }
    },
    legendSettings: {
        visible: true,
        position: 'Bottom',
        mode: 'Default',
        title: {
            text: 'Locations'
        }
    },
    annotations: [
        {
            content: '<div role="note" aria-label="Maps annotation"><strong>Maps - Annotation</strong><br><span>Accessible world location map</span></div>',
            x: '50%',
            y: '10%',
            zIndex: '1'
        }
    ],
    layers: [
        {
            shapeData: world_map,
            shapePropertyPath: 'name',
            shapeSettings: {
                fill: '#E5E1DA',
                border: {
                    color: '#FFFFFF',
                    width: 0.5
                }
            },
            selectionSettings: {
                enable: true,
                fill: '#A5D6A7',
                border: {
                    color: '#2E7D32',
                    width: 2
                }
            },
            highlightSettings: {
                enable: true,
                fill: '#FFF59D',
                border: {
                    color: '#F57F17',
                    width: 1
                }
            },
            markerSettings: [
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: 20.5937,
                            longitude: 78.9629,
                            name: 'India'
                        }
                    ],
                    shape: 'Balloon',
                    fill: '#E53935',
                    width: 20,
                    height: 20,
                    legendText: 'India',
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name'
                    },
                    selectionSettings: {
                        enable: true
                    }
                },
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: 54.526,
                            longitude: 15.2551,
                            name: 'Europe'
                        }
                    ],
                    shape: 'Triangle',
                    fill: '#FF0000',
                    width: 20,
                    height: 20,
                    legendText: 'Europe',
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name'
                    },
                    selectionSettings: {
                        enable: true
                    }
                },
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: 54.526,
                            longitude: -105.2551,
                            name: 'North America'
                        }
                    ],
                    shape: 'Pentagon',
                    fill: '#0000FF',
                    width: 20,
                    height: 20,
                    legendText: 'North America',
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name'
                    },
                    selectionSettings: {
                        enable: true
                    }
                },
                {
                    visible: true,
                    dataSource: [
                        {
                            latitude: -8.7832,
                            longitude: -55.4915,
                            name: 'South America'
                        }
                    ],
                    shape: 'InvertedTriangle',
                    fill: '#008000',
                    width: 20,
                    height: 20,
                    legendText: 'South America',
                    tooltipSettings: {
                        visible: true,
                        valuePath: 'name'
                    },
                    selectionSettings: {
                        enable: true
                    }
                }
            ],
            navigationLineSettings: [
                {
                    visible: true,
                    latitude: [40.7128, 34.0522],
                    longitude: [-74.006, -118.2437],
                    color: '#000000',
                    width: 2,
                    dashArray: '4,4',
                    angle: 0.2
                }
            ]
        }
    ],
    loaded: (): void => {
        let mapElement: HTMLElement | null =
            document.getElementById('container');

        if (mapElement) {
            mapElement.setAttribute('role', 'region');
            mapElement.setAttribute(
                'aria-label',
                'Accessible world map. Use the Tab and arrow keys to navigate through map elements.'
            );
        }
    }
});

map.appendTo('#container');