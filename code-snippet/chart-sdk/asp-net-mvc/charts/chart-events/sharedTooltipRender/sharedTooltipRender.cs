public IActionResult Index()
{
    List<ChartData> chartData = new List<ChartData>
    {
                new ChartData { x = new DateTime(1975, 1, 1), y = 16, y1 = 10 },
                new ChartData { x = new DateTime(1980, 1, 1), y = 12.5, y1 = 7.5 },
                new ChartData { x = new DateTime(1985, 1, 1), y = 19, y1 = 11 },
                new ChartData { x = new DateTime(1990, 1, 1), y = 14.4, y1 = 7 },
                new ChartData { x = new DateTime(1995, 1, 1), y = 11.5, y1 = 8 },
                new ChartData { x = new DateTime(2000, 1, 1), y = 14, y1 = 6 },
                new ChartData { x = new DateTime(2005, 1, 1), y = 10, y1 = 3.5 },
                new ChartData { x = new DateTime(2010, 1, 1), y = 16, y1 = 7 }
    };

    ViewBag.dataSource = chartData;
    return View();
}

public class ChartData
{
    public DateTime x { get; set; }
    public double y { get; set; }
    public double y1 { get; set; }
}