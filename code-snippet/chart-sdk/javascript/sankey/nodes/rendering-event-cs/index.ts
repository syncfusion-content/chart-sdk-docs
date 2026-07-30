import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyNodeRenderEventArgs } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend);

const nodes: SankeyNodeModel[] = [
  { id: 'Agricultural Waste' },
  { id: 'Biomass Residues' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel' },
  { id: 'Electricity' },
  { id: 'Heat' }
];

const links: SankeyLinkModel[] = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 84.152 },
  { sourceId: 'Biomass Residues', targetId: 'Bio-conversion', value: 24.152 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 10.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 36.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 60.845 }
];

const nodeRendering = (args: SankeyNodeRenderEventArgs) => {
  if (args.node.id === 'Bio-conversion') {
    args.node.color = '#FF6B6B';
  } else if (args.node.id === 'Liquid Biofuel') {
    args.node.color = '#4ECDC4';
  } else if (args.node.id === 'Electricity') {
    args.node.color = '#45B7D1';
  } else if (args.node.id === 'Heat') {
    args.node.color = '#FFA07A';
  } else {
    args.node.color = '#98D8C8';
  }
};

const sankey: Sankey = new Sankey(
  {
     width:  '90%',
    height: '450px',
    nodeRendering: nodeRendering,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);