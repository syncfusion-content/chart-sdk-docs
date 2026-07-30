import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyLabelRenderEventArgs } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend);

const nodes: SankeyNodeModel[] = [
  {
    id: 'Agricultural Waste',
    color: '#f41212'
  },
  {
    id: 'Biomass Residues',
    color: '#aed62c'
  },
  {
    id: 'Bio-conversion',
    color: '#259bc3'
  },
  {
    id: 'Liquid Biofuel',
    color: '#0e11af'
  },
  {
    id: 'Electricity',
    color: '#7a0e92'
  },
  {
    id: 'Heat',
    color: '#c5b9bb'
  }
];

const links: SankeyLinkModel[] = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 84.152 },
  { sourceId: 'Biomass Residues', targetId: 'Bio-conversion', value: 24.152 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 10.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 36.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 60.845 }
];

const onLabelRendering = (args: SankeyLabelRenderEventArgs) => {
  if (args.text === 'Agricultural Waste 84.152') {
    args.labelStyle = { fontWeight: 'bold', color: '#FF6B6B', fontSize: '14px', fontFamily: 'Arial', fontStyle: 'normal' };
  }
};

const sankey: Sankey = new Sankey(
  {
     width:  '90%',
    height: '450px',
    labelSettings: { visible: true },
    labelRendering: onLabelRendering,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);