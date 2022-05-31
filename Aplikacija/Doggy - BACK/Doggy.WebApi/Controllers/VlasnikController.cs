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

        [HttpGet]
        [Route("vratiVlasnikaPoId")]
        public IActionResult VratiVlasnikaPoId(int id)
        {
            return new JsonResult(vlasnikService.VratiVlasnikaPoId(id));
        }

        [HttpPost]
        [Route("dodajVlasnika")]
        public IActionResult DodajVlasnika([FromBody] Vlasnik v)
        {
            StatusDodavanjaKorisnika status;
            var result = vlasnikService.DodajVlasnika(v, out status);
            if (status == StatusDodavanjaKorisnika.PostojiEmail)
                return StatusCode(501, "U bazi vec postoji neko sa tim email-om!");
            if (status == StatusDodavanjaKorisnika.PostojiKorisnickoIme)
                return StatusCode(502, "U bazi vec postoji neko sa tim korisnickim imenom!");

            return new JsonResult(result);
        }

        [HttpDelete]
        [Route("obrisiVlasnika")]
        public IActionResult ObrisiVlasnika(int id)
        {
            Vlasnik v = this.vlasnikService.ObrisiVlasnika(id);
            return new JsonResult(v);
        }

        [HttpPut]
        [Route("azurirajVlasnika")]
        public IActionResult AzurirajVlasnika([FromBody] Vlasnik v)
        {
            return new JsonResult(this.vlasnikService.AzurirajVlasnika(v));
        }

    }
}
