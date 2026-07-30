var iconMap = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};
var stockChart = new ej.charts.StockChart({
  primaryXAxis: {
    valueType: "DateTime",
  },
  indicatorType: [],
  trendlineType: [],

  series: [
    {
      dataSource: chartData,
      xName: "date",
      yName: "low",
      type: "Line",
      name: "Google",
      animation: { enable: false },
    },
    {
      dataSource: chartData,
      xName: "date",
      yName: "high",
      type: "Line",
      name: "MicrosoftEdge",
      animation: { enable: false },
    },
  ],
  title: "Unemployment Rates 1975-2010",
  tooltip: { enable: true },
  legendSettings: {
    visible: true,
    template: (data) => {
      const icon = iconMap[data.series.name] || "";
      return (
        '<div style="display:flex;align-items:center;gap:4px;">' +
        '<img src="' +
        icon +
        '" width="30" height="30"/>' +
        "<span>" +
        data.series.name +
        "</span>" +
        "</div>"
      );
    },
  },
});
stockChart.appendTo('#element');

