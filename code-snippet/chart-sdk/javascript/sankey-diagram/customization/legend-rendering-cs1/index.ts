import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport, SankeyLegendRenderEventArgs } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const onLegendItemRendering = (args: SankeyLegendRenderEventArgs) => {
  args.text = args.text.toUpperCase();
  args.fill = '#333'
}
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
    legendSettings: { visible: true, position: 'Bottom' },
    legendItemRendering: onLegendItemRendering,
    nodes: nodes,
    links: links,
    tooltip: { enable: true }
  },
  '#sankey-container'
);