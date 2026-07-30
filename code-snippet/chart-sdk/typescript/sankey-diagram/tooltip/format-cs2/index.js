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
    width: '90%',
    height: '450px',
    tooltip: {
      enable: true,
      nodeFormat: '${name} : ${value:n2} TBtu',
      linkFormat: '${start.name} : ${start.out:n2} TBtu → ${target.name} : ${target.in:n2} TBtu<br>Flow: ${value:n2} TBtu'
    },
    nodes: nodes,
    links: links,
    legendSettings: { visible: true }
  },
  '#sankey-container'
);