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
        [Route("vratiSveGradoveSvihSitera")]
        public IActionResult VratiSveGradoveSvihSitera()
        {
            return new JsonResult(siterService.VratiSveGradoveSvihSitera());
        }

        [HttpGet]
        [Route("filterSiteri")]
        public IActionResult VratiSitereFilter([FromQuery] string? ime, string? prezime, string? grad, bool? dostupan, int? minBrUsluga,double? minCena, double? maxCena, double? minOcena)
        {
            return new JsonResult(siterService.FilterSiteri(ime, prezime, grad,dostupan, minBrUsluga,minCena, maxCena, minOcena));
        }

        [HttpPost]
        [Route("dodajSitera")]
        public IActionResult DodajSitera([FromBody] Siter s)
        {
            StatusDodavanja status;
            var result = siterService.DodajSitera(s, out status);
            if (status == StatusDodavanja.PostojiEmail)
                return StatusCode(501, "U bazi vec postoji neko sa tim email-om!");
            if (status == StatusDodavanja.PostojiKorisnickoIme)
                return StatusCode(502, "U bazi vec postoji neko sa tim korisnickim imenom!");

            return new JsonResult(result);
        }


        [HttpPut]
        [Route("azurirajSitera")]
        public IActionResult AzurirajSitera([FromBody] Siter s)
        {
            return new JsonResult(this.siterService.AzurirajSitera(s));
        }

        [HttpPut]
        [Route("prihvatiSitera")]
        public IActionResult AzurirajSiteraValidan(int idSiter)
        {
            return new JsonResult(this.siterService.AzurirajSiteraValidan(idSiter));
        }

        [HttpPut]
        [Route("dostupan")]
        public IActionResult AzurirajSiteraDostupan(int idSiter)
        {
            return new JsonResult(this.siterService.AzurirajSiteraDostupan(idSiter));
        }
    }
}
