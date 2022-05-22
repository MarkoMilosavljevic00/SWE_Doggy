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


        [HttpPost]
        [Route("dodajRecenzijuSiteru")]
        public IActionResult DodajRecenzijuSiteru(int idSiter, [FromBody] Recenzija r)
        {
            Siter siterSaNovomRecenzijom = recenzijaService.DodajRecenzijuSiteru(idSiter, r);
            if (siterSaNovomRecenzijom == null)
                return BadRequest("Vec ste pisali recenziju za ovog sitera, molimo izbrisite staru ako zelite ponovo da ocenite ovog sitera!");

            return new JsonResult(siterSaNovomRecenzijom);
        }

        [HttpPost]
        [Route("dodajRecenzijuPsu")]
        public IActionResult DodajRecenzijuPsu(int idPas, [FromBody] Recenzija r)
        {
            Pas pasSaNovomRecenzijom = recenzijaService.DodajRecenzijuPsu(idPas, r);
            if (pasSaNovomRecenzijom == null)
                return BadRequest("Vec ste pisali recenziju za ovog psa, molimo izbrisite staru ako zelite ponovo da ocenite ovog psa!");

            return new JsonResult(pasSaNovomRecenzijom);
        }

        [HttpDelete]
        [Route("obrisiRecenziju")]
        public IActionResult ObrisiRecenziju(int idRecenzije)
        {
            Recenzija r = this.recenzijaService.ObrisiRecenziju(idRecenzije);
            return new JsonResult(r);
        }

    }
}
