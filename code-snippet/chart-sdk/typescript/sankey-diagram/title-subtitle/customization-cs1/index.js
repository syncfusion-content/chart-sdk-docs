const titleStyle = {
  fontFamily: 'Arial',
  fontStyle: 'italic',
  fontWeight: 'bold',
  size: '18px',
  color: '#1F77B4'
};

const subtitleStyle = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 'normal',
  size: '14px',
  color: '#FF7F0E'
};

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
    title: 'Energy Flow Diagram',
    subTitle: 'Agricultural Energy Conversion',
    titleStyle: titleStyle,
    subTitleStyle: subtitleStyle,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);