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
    public class PasController : ControllerBase
    {
        private readonly PasService pasService;

        public PasController(PasService pasService)
        {
            this.pasService = pasService;
        }

        [HttpGet]
        [Route("vratiSvePse")]
        public IActionResult VratiSvePse()
        {
            return new JsonResult(pasService.VratiSvePse());
        }

        [HttpGet]
        [Route("vratiPseZaVlasnika")]
        public IActionResult VratiPseZaVlasnika(int idVlasnika)
        {
            return new JsonResult(pasService.VratiPseZaVlasnika(idVlasnika));
        }

        [HttpPost]
        [Route("dodajPsa")]
        public IActionResult DodajVlasnika([FromBody] Pas p)
        {
            Pas pas = pasService.DodajPsa(p);
            if (pas == null)
                return BadRequest("Vlasnik vec ima psa sa tim imenom!"); 

            return new JsonResult(pas);
        }

        [HttpDelete]
        [Route("obrisiPsa")]
        public IActionResult ObrisiPsa(int id)
        {
            Pas p = this.pasService.ObrisiPsa(id);
            return new JsonResult(p);
        }

        [HttpPut]
        [Route("azurirajPsa")]
        public IActionResult AzurirajPsa([FromBody] Pas p)
        {
            return new JsonResult(this.pasService.AzurirajPsa(p));
        }
    }
}
