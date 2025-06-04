using Microsoft.AspNetCore.Mvc;
using BidApplication.Domain.Models;
using BidApplication.Domain.Interfaces;

namespace BidApplication.UI.Controllers
{


    public class CalulatorController : Controller
    {
        private readonly IService _s;
        public CalulatorController(IService s)
        {
            _s = s;
        }
        public IActionResult Index()
        {
            return View();
        }

        public ExtraJSON GetExtras()
        {
            return _s.GetExtras();
        }
    }
}

