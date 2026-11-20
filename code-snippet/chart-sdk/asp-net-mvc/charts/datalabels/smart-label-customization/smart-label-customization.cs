using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

public class HomeController : Controller
{
    public ActionResult Index()
    {
        List<Data> vietnam = new List<Data>
        {
            new Data { x = 2016, y = 7.8 },
            new Data { x = 2017, y = 10.3 },
            new Data { x = 2018, y = 15.5 },
            new Data { x = 2019, y = 17.5 },
            new Data { x = 2020, y = 19.5 },
            new Data { x = 2021, y = 23.0 },
            new Data { x = 2022, y = 20.0 },
            new Data { x = 2023, y = 19.0 },
            new Data { x = 2024, y = 22.1 }
        };

        List<Data> indonesia = new List<Data>
        {
            new Data { x = 2016, y = 4.8 },
            new Data { x = 2017, y = 5.2 },
            new Data { x = 2018, y = 6.2 },
            new Data { x = 2019, y = 7.8 },
            new Data { x = 2020, y = 9.3 },
            new Data { x = 2021, y = 14.3 },
            new Data { x = 2022, y = 15.6 },
            new Data { x = 2023, y = 16.0 },
            new Data { x = 2024, y = 17.0 }
        };

        List<Data> france = new List<Data>
        {
            new Data { x = 2016, y = 14.6 },
            new Data { x = 2017, y = 15.5 },
            new Data { x = 2018, y = 15.4 },
            new Data { x = 2019, y = 14.4 },
            new Data { x = 2020, y = 11.6 },
            new Data { x = 2021, y = 13.9 },
            new Data { x = 2022, y = 12.1 },
            new Data { x = 2023, y = 10.0 },
            new Data { x = 2024, y = 10.8 }
        };

        List<Data> poland = new List<Data>
        {
            new Data { x = 2016, y = 8.9 },
            new Data { x = 2017, y = 10.3 },
            new Data { x = 2018, y = 10.8 },
            new Data { x = 2019, y = 9.0 },
            new Data { x = 2020, y = 7.9 },
            new Data { x = 2021, y = 8.5 },
            new Data { x = 2022, y = 7.4 },
            new Data { x = 2023, y = 6.4 },
            new Data { x = 2024, y = 7.1 }
        };

        List<Data> mexico = new List<Data>
        {
            new Data { x = 2016, y = 19.0 },
            new Data { x = 2017, y = 20.0 },
            new Data { x = 2018, y = 20.2 },
            new Data { x = 2019, y = 18.4 },
            new Data { x = 2020, y = 16.8 },
            new Data { x = 2021, y = 18.5 },
            new Data { x = 2022, y = 18.4 },
            new Data { x = 2023, y = 16.3 },
            new Data { x = 2024, y = 13.7 }
        };

        ViewBag.vietnam = vietnam;
        ViewBag.indonesia = indonesia;
        ViewBag.france = france;
        ViewBag.poland = poland;
        ViewBag.mexico = mexico;

        return View();
    }

    public class Data
    {
        public double x;
        public double y;
    }
}
