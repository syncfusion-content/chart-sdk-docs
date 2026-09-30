public ActionResult Index()
{
    List<PieChartData> chartData = new List<PieChartData>
    {
        new PieChartData { xValue = "USA", yValue = 35, region = "North America", growth = 12.5 },
        new PieChartData { xValue = "UK", yValue = 22, region = "Europe", growth = 9.8 },
        new PieChartData { xValue = "India", yValue = 28, region = "Asia", growth = 15.2 },
        new PieChartData { xValue = "Germany", yValue = 15, region = "Europe", growth = 7.6 }
    };
    ViewBag.dataSource = chartData;
    return View();
}

public class PieChartData
{
    public string xValue { get; set; }
    public double yValue { get; set; }
    public string region { get; set; }
    public double growth { get; set; }
}