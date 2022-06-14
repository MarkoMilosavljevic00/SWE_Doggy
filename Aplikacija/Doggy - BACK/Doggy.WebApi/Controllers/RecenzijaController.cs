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
    public class RecenzijaController : ControllerBase
    {
        private readonly RecenzijaService recenzijaService;

        public RecenzijaController(RecenzijaService recenzijaService)
        {
            this.recenzijaService = recenzijaService;
        }

        [HttpGet]
        [Route("vratiSveRecenzije")]
        public IActionResult VratiSveUsluge()
        {
            return new JsonResult(recenzijaService.VratiSveRecenzije());
        }

        [HttpGet]
        [Route("vratiRecenzijuPoId")]
        public IActionResult VratiRecenzijuPoId(int id)
        {
            return new JsonResult(recenzijaService.VratiRecenzijuPoId(id));
        }

        [HttpGet]
        [Route("vratiRecenzijeZaSitera")]
        public IActionResult VratiRecenzijeZaSitera(int id)
        {
            return new JsonResult(recenzijaService.VratiRecenzijeZaSitera(id));
        }

        [HttpGet]
        [Route("vratiRecenzijeZaPsa")]
        public IActionResult VratiRecenzijeZaPsa(int id)
        {
            return new JsonResult(recenzijaService.VratiRecenzijeZaPsa(id));
        }

        [HttpPost]
        [Route("dodajRecenzijuSiteru")]
        public IActionResult DodajRecenzijuSiteru([FromBody] Recenzija r)
        {
            Recenzija recenzija = recenzijaService.DodajRecenzijuSiteru(r);
            //if (recenzija == null)
            //    return BadRequest("Vec ste pisali recenziju za ovog sitera za setanje ovog psa!");

            return new JsonResult(recenzija);
        }

        [HttpPost]
        [Route("dodajRecenzijuPsu")]
        public IActionResult DodajRecenzijuPsu([FromBody] Recenzija r)
        {
            Recenzija recenzija = recenzijaService.DodajRecenzijuPsu(r);
            //if (recenzija == null)
            //    return BadRequest("Vec ste pisali recenziju za ovog psa!");

            return new JsonResult(recenzija);
        }

        [HttpDelete]
        [Route("obrisiRecenziju")]
        public IActionResult ObrisiRecenziju(int idRecenzija)
        {
            Recenzija r = this.recenzijaService.ObrisiRecenziju(idRecenzija);
            return new JsonResult(r);
        }

        [HttpPut]
        [Route("azurirajRecenziju")]
        public IActionResult AzurirajRecenziju(Recenzija r)
        {
            return new JsonResult(this.recenzijaService.AzurirajRecenziju(r));
        }

    }
}
