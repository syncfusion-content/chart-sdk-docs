public ActionResult Index()
{
    List<LineChartData> chartData = new List<LineChartData>
    {
        // Replace these values with the values from your Angular lineData.
        new LineChartData { x = 1, y = 30 },
        new LineChartData { x = 2, y = 35 },
        new LineChartData { x = 3, y = 32 },
        new LineChartData { x = 4, y = 40 },
        new LineChartData { x = 5, y = 38 },
        new LineChartData { x = 6, y = 45 }
    };

    ViewBag.dataSource = chartData;
    return View();
}

public class LineChartData
{
    public double x { get; set; }
    public double y { get; set; }
}