const nodes = [
  { id: 'Agricultural Waste' },
  { id: 'Biomass Residues' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel' },
  { id: 'Electricity' },
  { id: 'Heat' }
];

const links = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 84.152 },
  { sourceId: 'Biomass Residues', targetId: 'Bio-conversion', value: 24.152 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 10.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 36.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 60.845 }
];

const sankey = new ej.charts.Sankey(
  {
     width:  '90%',
    height: '450px',
    tooltip: {
      enable: true,
      textStyle: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        color: '#000'
      },
      fill: '#F3F3F3'
    },
    nodes: nodes,
    links: links,
    legendSettings: { visible: true }
  },
  '#sankey-container'
);