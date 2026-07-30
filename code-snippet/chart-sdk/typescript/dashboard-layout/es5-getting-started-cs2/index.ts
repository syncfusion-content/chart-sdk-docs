

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
    <title>Essential JS 2</title>
    <!-- Essential JS 2 material theme -->
    <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.syncfusion.com/ej2/ej2-layouts/styles/bootstrap5.3.css" rel="stylesheet" type="text/css" />
    <!-- Essential JS 2 Dashboardlayout's global script -->
    <script src="https://cdn.syncfusion.com/ej2/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/ej2-layouts/dist/global/ej2-layouts.min.js"
        type="text/javascript"></script>
</head>

<body>
    <div>
        <!--element which is going to render the DashboardLayout-->
        <div id="element">
        </div>
        <script>
            //Initialize Dashboardlayout component
            var dashboard = new ej.layouts.DashboardLayout({
                cellSpacing: [10, 10],
                columns: 5,
                panels: [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0, content: '<div class="content" style="line-height:60px">0</div>' },
                { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content" style="line-height:60px">1</div>' },
                { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content" style="line-height:60px">2</div>' },
                { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content" style="line-height:60px">3</div>' },
                { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content" style="line-height:60px">4</div>' },
                { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content" style="line-height:60px">5</div>' },
                { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content" style="line-height:60px">6</div>' }
                ]
            });
            //Render initialized Dashboardlayout component
            dashboard.appendTo('#element');
        </script>
        <style>
            .content {
                vertical-align: middle;
                font-weight: 600;
                font-size: 20px;
                text-align: center;
                line-height: 30px;
            }

            #element .e-panel {
                transition:none !important;
            }
        </style>
</body>

</html>



