import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport, SankeyLabelRenderEventArgs } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const onLabelRendering = (args: SankeyLabelRenderEventArgs) => {
  args.labelStyle = { fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'bold', fontSize: '12px', color: '#000' };
};

const nodes: SankeyNodeModel[] = [
  { id: 'Agricultural Waste' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel' },
  { id: 'Electricity' },
  { id: 'Heat' }
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
    labelRendering: onLabelRendering,
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);