using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourProject.Controllers
{
    public class AccLegendRenderController : Controller
    {
        public IActionResult Index()
        {
            List<BrowserData> pieData = new List<BrowserData>
            {
                new BrowserData { x = "Chrome", y = 37.0, text = "37%" },
                new BrowserData { x = "Edge", y = 12.5, text = "12.5%" },
                new BrowserData { x = "Firefox", y = 8.1, text = "8.1%" },
                new BrowserData { x = "Safari", y = 19.0, text = "19%" },
                new BrowserData { x = "Opera", y = 5.4, text = "5.4%" },
                new BrowserData { x = "Others", y = 18.0, text = "18%" }
            };

            ViewBag.dataSource = pieData;
            return View();
        }
    }

    public class BrowserData
    {
        public string x { get; set; }
        public double y { get; set; }
        public string text { get; set; }
    }
}