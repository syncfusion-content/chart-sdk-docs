using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourProject.Controllers
{
    public class LegendRenderController : Controller
    {
        public IActionResult Index()
        {
            List<SalesPoint> chartData = new List<SalesPoint>
            {
                new SalesPoint { x = 2020, y = 133 },
                new SalesPoint { x = 2021, y = 100 },
                new SalesPoint { x = 2022, y = 125 },
                new SalesPoint { x = 2023, y = 90 },
                new SalesPoint { x = 2024, y = 116 },
                new SalesPoint { x = 2025, y = 120 },
                new SalesPoint { x = 2026, y = 101 }
            };

            ViewBag.dataSource = chartData;
            return View();
        }
    }

    public class SalesPoint
    {
        public double x { get; set; }
        public double y { get; set; }
    }
}