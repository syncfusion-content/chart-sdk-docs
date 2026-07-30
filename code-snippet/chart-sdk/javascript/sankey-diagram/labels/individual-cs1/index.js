const nodes = [
  {
    id: 'Agricultural Waste',
    label: { text: 'Agri Waste', padding: 0 }
  },
  {
    id: 'Biomass Residues',
    label: { text: 'Biomass', padding: 10 }
  },
  {
    id: 'Bio-conversion',
    label: { text: 'Bio', padding: 0 }
  },
  {
    id: 'Liquid Biofuel',
    label: { text: 'Liquid', padding: 10 }
  },
  {
    id: 'Electricity',
    label: { text: 'Electricity', padding: 0 }
  },
  {
    id: 'Heat',
    label: { text: 'Heat', padding: 10 }
  }
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
    width: '90%',
    height: '450px',
    labelSettings: { visible: true },
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);