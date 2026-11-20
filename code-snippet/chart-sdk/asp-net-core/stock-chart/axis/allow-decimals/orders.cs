using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EJ2CoreSampleBrowser.Controllers.StockChart
{
    public partial class StockChartController : Controller
    {
        public IActionResult Default()
        {
            ViewBag.dataSource = new List<object>
            {
                new { x = new DateTime(2024, 1, 1), open = 1.2, high = 1.8, low = 1.1, close = 1.6, volume = 1000 },
                new { x = new DateTime(2024, 1, 2), open = 1.6, high = 2.4, low = 1.5, close = 2.1, volume = 1200 },
                new { x = new DateTime(2024, 1, 3), open = 2.1, high = 2.8, low = 1.9, close = 2.5, volume = 1100 },
                new { x = new DateTime(2024, 1, 4), open = 2.5, high = 3.0, low = 2.2, close = 2.7, volume = 1400 },
                new { x = new DateTime(2024, 1, 5), open = 2.7, high = 3.2, low = 2.4, close = 2.9, volume = 1500 }
            };
            return View();
        }
    }
}