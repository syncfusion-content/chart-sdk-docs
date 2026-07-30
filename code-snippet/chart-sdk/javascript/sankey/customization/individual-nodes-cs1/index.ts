import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const nodes: SankeyNodeModel[] = [
  { id: 'Agricultural Waste', color: '#FF6B6B' },
  { id: 'Bio-conversion', color: '#4ECDC4' },
  { id: 'Liquid Biofuel', color: '#45B7D1' },
  { id: 'Electricity', color: '#FFA07A' },
  { id: 'Heat', color: '#98D8C8' }
];

const links: SankeyLinkModel[] = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 124.729 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 0.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 26.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 280.845 }
];

const sankey: Sankey = new Sankey(
  {
    width: '90%',
    height: '450px',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);