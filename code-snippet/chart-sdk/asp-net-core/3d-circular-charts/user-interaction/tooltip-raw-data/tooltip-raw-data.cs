public IActionResult Index()
{
    List<CircularChartData> circularData = new List<CircularChartData>
    {
        new CircularChartData { X = "USA", Y = 35, Region = "North America", Growth = 12.5 },
        new CircularChartData { X = "UK", Y = 22, Region = "Europe", Growth = 9.8 },
        new CircularChartData { X = "India", Y = 28, Region = "Asia", Growth = 15.2 },
        new CircularChartData { X = "Germany", Y = 15, Region = "Europe", Growth = 7.6 }
    };
    ViewBag.dataSource = circularData;
    return View();
}

public class CircularChartData
{
    public string X { get; set; }
    public double Y { get; set; }
    public string Region { get; set; }
    public double Growth { get; set; }
}