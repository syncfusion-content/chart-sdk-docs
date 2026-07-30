const nodes = [
  { id: 'Energy Input', label: { text: 'Energy Input' } },
  { id: 'Generation', label: { text: 'Generation' } },
  { id: 'Distribution', label: { text: 'Distribution' } },
  { id: 'Consumption', label: { text: 'Consumption' } }
];

const links = [
  { sourceId: 'Energy Input', targetId: 'Generation', value: 500 },
  { sourceId: 'Generation', targetId: 'Distribution', value: 450 },
  { sourceId: 'Distribution', targetId: 'Consumption', value: 400 }
];

const sankey = new ej.charts.Sankey(
  {
     width:  '90%',
    height: '420px',
    title: 'Energy Flow Diagram',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);