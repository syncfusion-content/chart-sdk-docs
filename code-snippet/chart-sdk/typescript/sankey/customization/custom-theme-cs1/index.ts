import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const customTheme = { nodeFill: '#5A5A5A', linkFill: '#B3B3B3' };

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

const sankey: Sankey = new Sankey(
  {
    width: '90%',
    height: '450px',
    nodeStyle: { fill: customTheme.nodeFill },
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);