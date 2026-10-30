{% raw %}
export interface ChartData {
    month: string;
    revenue: number;
    target: number;
    orders: number;
}

export const data: ChartData[] = [
    { month: 'Jan', revenue: 42000, target: 40000, orders: 720 },
    { month: 'Feb', revenue: 47000, target: 43000, orders: 790 },
    { month: 'Mar', revenue: 53000, target: 47000, orders: 860 },
    { month: 'Apr', revenue: 58000, target: 52000, orders: 940 },
    { month: 'May', revenue: 67000, target: 58000, orders: 1080 },
    { month: 'Jun', revenue: 72000, target: 65000, orders: 1160 },
    { month: 'Jul', revenue: 81000, target: 71000, orders: 1290 },
    { month: 'Aug', revenue: 86000, target: 78000, orders: 1370 },
    { month: 'Sep', revenue: 92000, target: 84000, orders: 1490 },
    { month: 'Oct', revenue: 101000, target: 91000, orders: 1620 },
    { month: 'Nov', revenue: 112000, target: 98000, orders: 1780 },
    { month: 'Dec', revenue: 126000, target: 108000, orders: 1960 }
];
{% endraw %}