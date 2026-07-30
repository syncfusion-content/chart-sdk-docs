let sankeyRef = null;

const handleExportPNG = () => {
  if (sankeyRef) {
    sankeyRef.export('PNG', 'Sankey');
  }
};

const handleExportPDF = () => {
  if (sankeyRef) {
    sankeyRef.export('PDF', 'Sankey');
  }
};

const handleExportSVG = () => {
  if (sankeyRef) {
    sankeyRef.export('SVG', 'Sankey');
  }
};

const nodes = [
  { id: 'Agricultural Waste' },
  { id: 'Biomass Residues' },
  { id: 'Bio-conversion' },
  { id: 'Liquid Biofuel' },
  { id: 'Electricity' },
  { id: 'Heat' }
];

const links = [
  { sourceId: 'Agricultural Waste', targetId: 'Bio-conversion', value: 84.152 },
  { sourceId: 'Biomass Residues', targetId: 'Bio-conversion', value: 24.152 },
  { sourceId: 'Bio-conversion', targetId: 'Liquid Biofuel', value: 10.597 },
  { sourceId: 'Bio-conversion', targetId: 'Electricity', value: 36.862 },
  { sourceId: 'Bio-conversion', targetId: 'Heat', value: 60.845 }
];

document.getElementById('export-png').addEventListener('click', handleExportPNG);
document.getElementById('export-pdf').addEventListener('click', handleExportPDF);
document.getElementById('export-svg').addEventListener('click', handleExportSVG);

const sankey = new ej.charts.Sankey(
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

sankeyRef = sankey;