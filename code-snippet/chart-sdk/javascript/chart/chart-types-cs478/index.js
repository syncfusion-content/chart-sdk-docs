var pyramidchart = new ej.charts.AccumulationChart({
    series: [
        {
            type: 'Pyramid',
            dataSource: [
                { x: 'Australia', y: 20 },
                { x: 'France',    y: 22 },
                { x: 'China',     y: 23 },
                { x: 'India',     y: 24 },
                { x: 'Japan',     y: 25 },
                { x: 'Germany',   y: 27 }
            ],
            xName: 'x', yName: 'y',
            accessibility: {
                accessibilityDescription: 'This pyramid chart represents the sales distribution of cars by region, with each section representing a different region and its respective sales percentage.',
                accessibilityRole: 'presentation'
            }
        }
    ],
    title: 'Sales Distribution of Car by Region',
    legendSettings: { visible: false }
}, '#element');