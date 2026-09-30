public ActionResult Index()
{
    List<ChartData> chartData = new List<ChartData>
    {
        new ChartData { x = "USA", y = 35, region = "North America", growth = 12.5 },
        new ChartData { x = "UK", y = 22, region = "Europe", growth = 9.8 },
        new ChartData { x = "India", y = 28, region = "Asia", growth = 15.2 },
        new ChartData { x = "Germany", y = 15, region = "Europe", growth = 7.6 }
    };
    ViewBag.dataSource = chartData;
    return View();
}

public class ChartData
{
    public string x { get; set; }
    public double y { get; set; }
    public string region { get; set; }
    public double growth { get; set; }
}