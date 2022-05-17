using Doggy.DataLayer.Services;
using Doggy.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VlasnikController : ControllerBase
    {
        private readonly VlasnikService vlasnikService;

        public VlasnikController(VlasnikService vlasnikService)
        {
            this.vlasnikService = vlasnikService;
        }

        [HttpGet]
        [Route("vratiSveVlasnike")]
        public IActionResult VratiSveVlasnike()
        {
            return new JsonResult(vlasnikService.VratiSveVlasnike());
        }

        [HttpPost]
        [Route("dodajVlasnika")]
        public IActionResult DodajVlasnika([FromBody] Vlasnik v)
        {
            return new JsonResult(vlasnikService.DodajVlasnika(v));
        }
    }
}
