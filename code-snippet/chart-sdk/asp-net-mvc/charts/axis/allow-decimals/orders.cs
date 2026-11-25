using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Charts;

namespace EJ2CoreSampleBrowser.Controllers.Chart
{
    public partial class ChartController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.dataSource = new List<object> {
                new { x = "Mon", y = 1 }, new { x = "Tue", y = 2 }, new { x = "Wed", y = 3 },
                new { x = "Thu", y = 4 }, new { x = "Fri", y = 5 }
            };
            return View();
        }
    }
}