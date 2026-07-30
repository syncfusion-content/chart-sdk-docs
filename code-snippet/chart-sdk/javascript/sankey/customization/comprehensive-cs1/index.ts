import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const nodes: SankeyNodeModel[] = [
  { id: 'Agricultural Waste', color: '#FF6B6B'},
  { id: 'Biomass Residues' },
  { id: 'Bio-conversion', color: '#4ECDC4' },
  { id: 'Liquid Biofuel', color: '#45B7D1' },
  { id: 'Electricity', color: '#FFA07A' },
  { id: 'Heat', color: '#98D8C8' }
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
    title: 'Comprehensive Sankey Customization',
    margin: { left: 40, right: 40, top: 40, bottom: 40 },
    nodeStyle: { opacity: 0.85 },
    linkStyle: { opacity: 0.6, curvature: 0.5 },
    labelSettings: { fontWeight: 'bold' },
    tooltip: { enable: true, nodeFormat: '<b>${sourceNodeName} → ${targetNodeName}</b><br/>Value: ${value}' },
    legendSettings: { visible: true, position: 'Bottom' },
    nodes: nodes,
    links: links
  },
  '#sankey-container'
);
