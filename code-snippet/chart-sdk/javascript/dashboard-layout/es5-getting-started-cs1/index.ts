

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
    <div id="element">
        <!-- Add the HTML <div> element  -->
        <div style="margin: 50px;">
            <!--element which is going to render the dashboardlayout-->
            <div id="dashboard_inline">
                <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="content">0</div>
                    </div>
                </div>
                <div id="two" class="e-panel" data-row="0" data-col="1" data-sizeX="3" data-sizeY="2">
                    <div class="e-panel-container">
                        <div class="content">1</div>
                    </div>
                </div>
                <div id="three" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                    <div class="e-panel-container">
                        <div class="content">2</div>
                    </div>
                </div>
                <div id="four" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="content">3</div>
                    </div>
                </div>
                <div id="five" class="e-panel" data-row="2" data-col="0" data-sizeX="2" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="content">4</div>
                    </div>
                </div>
                <div id="six" class="e-panel" data-row="2" data-col="2" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="content">5</div>
                    </div>
                </div>
                <div id="seven" class="e-panel" data-row="2" data-col="3" data-sizeX="1" data-sizeY="1">
                    <div class="e-panel-container">
                        <div class="content">6</div>
                    </div>
                </div>
            </div>
            <script>
                //Initialize DashboardLayout component
                var dashboard = new ej.layouts.DashboardLayout({
                    cellSpacing: [10, 10],
                    columns: 5
                });
                //Render initialized DashboardLayout component
                dashboard.appendTo('#element');
            </script>
            <style>
                .content {
                    vertical-align: middle;
                    font-weight: 600;
                    font-size: 20px;
                    text-align: center;
                    line-height: 60px;
                }

                #dashboard_inline .e-panel {
                    transition:none !important;
                }
            </style>
</body>

</html>



