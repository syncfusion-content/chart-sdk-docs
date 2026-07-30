const nodes = [
  { id: 'A' },
  { id: 'B' },
  { id: 'C' }
];

const links = [
  { sourceId: 'A', targetId: 'B', value: 100 },
  { sourceId: 'B', targetId: 'C', value: 80 }
];

const sankey = new ej.charts.Sankey(
  {
     width:  '90%',
    height: '420px',
    title: 'Sankey Chart',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);
