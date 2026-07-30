import { DashboardLayout } from '@syncfusion/ej2-layouts';

// initialize Dashboard Layout control
let dashboard: DashboardLayout = new DashboardLayout({
    cellSpacing: [10, 10],
    columns: 5
});
// render initialized Dashboard Layout
dashboard.appendTo('#dashboard_inline');