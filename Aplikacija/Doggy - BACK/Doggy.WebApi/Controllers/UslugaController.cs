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
    public class UslugaController : ControllerBase
    {
        private readonly UslugaService uslugaService;

        public UslugaController(UslugaService uslugaService)
        {
            this.uslugaService = uslugaService;
        }

        [HttpGet]
        [Route("vratiSveUsluge")]
        public IActionResult VratiSveUsluge()
        {
            return new JsonResult(uslugaService.VratiSveUsluge());
        }

        [HttpGet]
        [Route("vratiUslugeVlasniku")]
        public IActionResult VratiUslugeZaVlasnika(int idVlasnika)
        {
            return new JsonResult(uslugaService.VratiUslugeVlasniku(idVlasnika));
        }


        [HttpGet]
        [Route("vratiUslugeSiteru")]
        public IActionResult VratiZahteveSiteru(int idSitera)
        {
            return new JsonResult(uslugaService.VratiUslugeSiteru(idSitera));
        }

        [HttpGet]
        [Route("vratiUslugeVlasnikuZaPsa")]
        public IActionResult vratiUslugeVlasnikuZaPsa(int idVlasnika, int idPsa)
        {
            return new JsonResult(uslugaService.vratiUslugeVlasnikuZaPsa(idVlasnika, idPsa));
        }

        [HttpGet]
        [Route("vratiUslugeSiteruZaPsa")]
        public IActionResult vratiUslugeSiteruZaPsa(int idSitera, int idPsa)
        {
            return new JsonResult(uslugaService.vratiUslugeSiteruZaPsa(idSitera, idPsa));
        }

        [HttpGet]
        [Route("vratiUslugeVlasnikuPoStatusu")]
        public IActionResult VratiUslugeZaVlasnikaPoStatusu(int idVlasnika, StatusUsluge status)
        {
            return new JsonResult(uslugaService.VratiUslugeVlasnikuPoStatusu(idVlasnika, status));
        }


        [HttpGet]
        [Route("vratiUslugeSiteruPoStatusu")]
        public IActionResult VratiZahteveSiteruPoStatusu(int idSitera, StatusUsluge status)
        {
            return new JsonResult(uslugaService.VratiUslugeSiteruPoStatusu(idSitera,status));
        }

        [HttpPost]
        [Route("dodajUslugu")]
        public IActionResult DodajUslugu([FromBody] Usluga u)
        {
            Usluga usluga = uslugaService.DodajUslugu(u);
            if (usluga == null)
                return BadRequest("Siter je tada zauzet!");

            return new JsonResult(usluga);
        }

        [HttpDelete]
        [Route("obrisiUslugu")]
        public IActionResult ObrisiUslugu(int idUsluge)
        {
            Usluga u = this.uslugaService.ObrisiUslugu(idUsluge);
            return new JsonResult(u);
        }

        //[HttpPut]
        //[Route("azurirajUslugu")]
        //public IActionResult AzurirajUslugu([FromBody] Usluga u)
        //{
        //    return new JsonResult(this.uslugaService.AzurirajUslugu(u));
        //}

        [HttpPut]     
        [Route("azurirajStatusUsluge")]
        public IActionResult AzurirajStatusUsluge(int idUsluge, StatusUsluge status)
        {
            return new JsonResult(this.uslugaService.AzurirajStatusUsluge(idUsluge, status));
        }
    }
}
