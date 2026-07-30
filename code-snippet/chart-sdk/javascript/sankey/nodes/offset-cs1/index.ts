import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend);

const nodes: SankeyNodeModel[] = [
  { id: 'Agricultural Waste', offset: -50 },
  { id: 'Biomass Residues' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel', offset: 50 },
  { id: 'Electricity', offset: -30 },
  { id: 'Heat', offset: 30 }
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
     width:  '90%',
    height: '450px',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);