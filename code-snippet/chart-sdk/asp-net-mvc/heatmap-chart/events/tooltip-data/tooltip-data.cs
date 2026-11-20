public class SalesRecord
{
    public string Employee { get; set; }
    public string Month { get; set; }
    public int Revenue { get; set; }
    public int Target { get; set; }
    public string Region { get; set; }
}

public ActionResult TooltipData()
{
    ViewBag.textStyle = new
    {
        size = "15px",
        fontWeight = "500",
        fontStyle = "Normal",
        fontFamily = "Segoe UI"
    };
    ViewBag.xLabels = new string[] { "Nancy", "Andrew", "Janet" };
    ViewBag.yLabels = new string[] { "Jan", "Feb", "Mar" };
    ViewBag.dataSource = GetDataSource();
    return View();
}

private List<SalesRecord> GetDataSource()
{
    return new List<SalesRecord>
    {
        new SalesRecord { Employee = "Nancy", Month = "Jan", Revenue = 73, Target = 70, Region = "North America" },
        new SalesRecord { Employee = "Nancy", Month = "Feb", Revenue = 39, Target = 50, Region = "North America" },
        new SalesRecord { Employee = "Nancy", Month = "Mar", Revenue = 26, Target = 45, Region = "North America" },
        new SalesRecord { Employee = "Andrew", Month = "Jan", Revenue = 93, Target = 80, Region = "Europe" },
        new SalesRecord { Employee = "Andrew", Month = "Feb", Revenue = 58, Target = 55, Region = "Europe" },
        new SalesRecord { Employee = "Andrew", Month = "Mar", Revenue = 53, Target = 60, Region = "Europe" },
        new SalesRecord { Employee = "Janet", Month = "Jan", Revenue = 99, Target = 90, Region = "Asia Pacific" },
        new SalesRecord { Employee = "Janet", Month = "Feb", Revenue = 28, Target = 40, Region = "Asia Pacific" },
        new SalesRecord { Employee = "Janet", Month = "Mar", Revenue = 22, Target = 35, Region = "Asia Pacific" }
    };
}
