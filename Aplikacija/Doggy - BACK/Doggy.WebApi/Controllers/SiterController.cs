﻿using Doggy.DataLayer.Services;
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
    public class SiterController : ControllerBase
    {
        private readonly SiterService siterService;

        public SiterController(SiterService siterService)
        {
            this.siterService = siterService;
        }

        [HttpGet]
        [Route("vratiSveSitere")]
        public IActionResult VratiSveSitere()
        {
            return new JsonResult(siterService.VratiSveSitere());
        }

        [HttpGet]
        [Route("filterSiteri")]
        public IActionResult FilterSiteri([FromQuery] string? ime, string? prezime, string? grad, bool? dostupan, int? brUsluga, double? cena, double? ocena)
        {
            return new JsonResult(siterService.FilterSiteri(ime, prezime, grad,dostupan, brUsluga,cena, ocena));
        }

        [HttpPost]
        [Route("dodajSitera")]
        public IActionResult DodajSitera([FromBody] Siter s)
        {
            return new JsonResult(siterService.DodajSitera(s));
        }
    }
}
