public IActionResult Index()
{
    List<ChartData> chartData = new List<ChartData>
    {
        new ChartData { month = "Jan", sales = 35, country = "USA", growth = 12.5 },
        new ChartData { month = "Feb", sales = 42, country = "UK", growth = 15.2 },
        new ChartData { month = "Mar", sales = 38, country = "India", growth = 10.8 },
        new ChartData { month = "Apr", sales = 48, country = "Germany", growth = 18.4 }
    };

    ViewBag.dataSource = chartData;
    return View();
}

public class ChartData
{
    public string month { get; set; }
    public double sales { get; set; }
    public string country { get; set; }
    public double growth { get; set; }
}