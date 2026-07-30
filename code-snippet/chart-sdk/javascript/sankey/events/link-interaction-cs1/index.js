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

const onLinkMouseClick = (args) => {
  console.log('Link clicked:', args.link);
};

const onLinkMouseEnter = (args) => {
  console.log('Link hovered:', args.link);
};

const sankey = new ej.charts.Sankey(
  {
    width: '90%',
    height: '450px',
    linkClick: onLinkMouseClick,
    linkEnter: onLinkMouseEnter,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);