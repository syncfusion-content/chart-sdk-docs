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
            var data = new List<object>();
            for (int i = 1; i <= 10; i++)
            {
                data.Add(new { x = i, y = i * 2 });
            }
            ViewBag.dataSource = data;
            return View();
        }
    }
}