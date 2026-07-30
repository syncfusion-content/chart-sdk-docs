import { Sankey, SankeyNodeModel, SankeyLinkModel, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-charts';

Sankey.Inject(SankeyTooltip, SankeyLegend, SankeyExport);

const nodes: SankeyNodeModel[] = [
  { id: 'A' },
  { id: 'B' },
  { id: 'C' }
];

const links: SankeyLinkModel[] = [
  { sourceId: 'A', targetId: 'B', value: 100 },
  { sourceId: 'B', targetId: 'C', value: 80 }
];

const sankey: Sankey = new Sankey(
  {
     width:  '90%',
    height: '420px',
    title: 'Sankey Chart',
    nodes: nodes,
    links: links,
    tooltip: { enable: true },
    legendSettings: { visible: true }
  },
  '#sankey-container'
);
