import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport, SankeyTooltipRenderEventArgs } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

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

const onTooltipRendering = (args: SankeyTooltipRenderEventArgs) => {
  if (args.text === 'link') {
    args.text = `Flow: ${args.link.sourceId} → ${args.link.targetId} (${args.link.value})`;
  } else if (args.text) {
    args.text = `Node: ${args.text}`;
  }
};

const sankey: Sankey = new Sankey(
  {
    width: '90%',
    height: '450px',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    tooltipRendering: onTooltipRendering,
    legendSettings: { visible: true }
  },
  '#sankey-container'
);