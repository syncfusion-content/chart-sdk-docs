var treemap = new ej.treemap.TreeMap({
    dataSource: [
        { Continent: "China", Company: "Volkswagen", Sales: 3005994 },
        { Continent: "China", Company: "General Motors", Sales: 1230044 },
        { Continent: "China", Company: "Honda", Sales: 1197023 },
        { Continent: "United States", Company: "General Motors", Sales: 3042775 },
        { Continent: "United States", Company: "Ford", Sales: 2599193 },
        { Continent: "United States", Company: "Toyota", Sales: 2449587 },
        { Continent: "Japan", Company: "Toyota", Sales: 1527977 },
        { Continent: "Japan", Company: "Honda", Sales: 706982 },
        { Continent: "Japan", Company: "Suzuki", Sales: 623041 },
        { Continent: "Germany", Company: "Volkswagen", Sales: 655977 },
        { Continent: "Germany", Company: "Mercedes", Sales: 310845 },
        { Continent: "Germany", Company: "BMW", Sales: 261931 },
        { Continent: "United Kingdom", Company: "Ford ", Sales: 319442 },
        { Continent: "United Kingdom", Company: "Vauxhall", Sales: 251146 },
        { Continent: "United Kingdom", Company: "Volkswagen", Sales: 206994 }
    ],
  enableDrillDown: true,
  weightValuePath: 'Sales',
  drillStart: function(args) {
    var labelElementGroup = document.getElementById('container_Label_Template_Group');
    labelElementGroup.remove();
  },
  palette: ["white"],
  leafItemSettings: {
    showLabels: false,
    labelTemplate: '<div style="background-color: red">{{:Company}}</div>',
    templatePosition: 'Center'
  },
  levels: [
    {
      groupPath: 'Continent',
      border: { width: 0.5, color: 'black' }
    },
    {
      groupPath: 'Company',
      border: { width: 0.5, color: 'black' }
    },
  ]
}, '#container');

