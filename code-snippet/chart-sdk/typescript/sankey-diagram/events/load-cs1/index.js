const onLoad = (args) => {
  console.log('Sankey chart is loading...', args);
};

const nodes = [
  { id: 'Agricultural Waste' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel' },
  { id: 'Electricity' },
  { id: 'Heat' }
];

const links = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 124.729 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 0.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 26.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 280.845 }
];

const sankey = new ej.charts.Sankey(
  {
    width: '90%',
    height: '450px',
    load: onLoad,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);