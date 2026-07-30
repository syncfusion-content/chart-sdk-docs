


import { TreeMap, IDrillStartEventArgs } from '@syncfusion/ej2-treemap';
import { CarSales } from './datasource.ts';

let treemap: TreeMap = new TreeMap({
  dataSource: CarSales,
  enableDrillDown: true,
  weightValuePath: 'Sales',
  drillStart: function(args: IDrillStartEventArgs) {
    let labelElementGroup: HTMLElement = document.getElementById('container_Label_Template_Group');
    labelElementGroup.remove();
  },
  palette: ["white"],
  leafItemSettings: {
    showLabels: false,
    // Add label template here
    labelTemplate: '<div style="background-color: red">{{:Company}}</div>',
    // positioning the label template
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


