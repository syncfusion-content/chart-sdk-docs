<template>
  <div id="app">
    <ejs-heatmap id="heatmap" :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis'
      :dataSource='dataSource' :dataSourceSettings='dataSourceSettings' :cellSettings='cellSettings'
      :showTooltip='true' :tooltipRender='tooltipRender'></ejs-heatmap>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { HeatMapComponent as EjsHeatmap, Tooltip, Legend, Adaptor } from '@syncfusion/ej2-vue-heatmap';

const dataSource = [
  { employee: 'Nancy', month: 'Jan', revenue: 73, target: 70, region: 'North America' },
  { employee: 'Nancy', month: 'Feb', revenue: 39, target: 50, region: 'North America' },
  { employee: 'Nancy', month: 'Mar', revenue: 26, target: 45, region: 'North America' },
  { employee: 'Andrew', month: 'Jan', revenue: 93, target: 80, region: 'Europe' },
  { employee: 'Andrew', month: 'Feb', revenue: 58, target: 55, region: 'Europe' },
  { employee: 'Andrew', month: 'Mar', revenue: 53, target: 60, region: 'Europe' },
  { employee: 'Janet', month: 'Jan', revenue: 99, target: 90, region: 'Asia Pacific' },
  { employee: 'Janet', month: 'Feb', revenue: 28, target: 40, region: 'Asia Pacific' },
  { employee: 'Janet', month: 'Mar', revenue: 22, target: 35, region: 'Asia Pacific' }
];
const dataSourceSettings = {
  isJsonData: true,
  adaptorType: 'Cell',
  xDataMapping: 'employee',
  yDataMapping: 'month',
  valueMapping: 'revenue'
};
const titleSettings = {
  text: 'Sales Revenue per Employee (in 1000 US$)',
  textStyle: {
    size: '15px',
    fontWeight: '500',
    fontStyle: 'Normal',
    fontFamily: 'Segoe UI'
  }
};
const xAxis = {
  labels: ['Nancy', 'Andrew', 'Janet']
};
const yAxis = {
  labels: ['Jan', 'Feb', 'Mar']
};
const cellSettings = {
  showLabel: true,
  format: '${value}K'
};

const tooltipRender = (args) => {
  const record = args.data;
  if (record) {
    args.content = [
      'Employee: ' + record.employee +
      '<br/>Month: ' + record.month +
      '<br/>Revenue: $' + record.revenue + 'K' +
      '<br/>Target: $' + record.target + 'K' +
      '<br/>Region: ' + record.region
    ];
  }
};

provide('heatmap', [Adaptor, Tooltip, Legend]);
</script>
