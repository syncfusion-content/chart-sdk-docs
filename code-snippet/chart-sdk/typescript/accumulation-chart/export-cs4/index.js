var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }

    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            dataSource: [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
            { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }],
            xName: 'x', width: 2,
            yName: 'y'
        }
    ],
    //Initializing Chart title
    title: 'Sales Comparision',
}, '#element');

document.getElementById('export').onclick = () => {
    const header = {
        content: 'Chart Header',
        fontSize: 15
    };

    const footer = {
        content: 'Chart Footer',
        fontSize: 15,
    };
    chart.exportModule.export('PDF', 'Chart', 1, [chart], null, null, true, header, footer);
};
