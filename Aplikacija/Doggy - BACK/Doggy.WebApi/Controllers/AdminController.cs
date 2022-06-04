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
    public class AdminController : ControllerBase
    {
        private readonly AdminService adminService;

        public AdminController(AdminService adminService)
        {
            this.adminService = adminService;
        }

        [HttpGet]
        [Route("vratiSveAdmine")]
        public IActionResult VratiSveAdmine()
        {
            return new JsonResult(adminService.VratiSveAdmine());
        }

        [HttpPost]
        [Route("dodajAdmina")]
        public IActionResult DodajAdmina([FromBody] Admin a)
        {
            StatusDodavanjaKorisnika status;
            var result = adminService.DodajAdmina(a, out status);
            if (status == StatusDodavanjaKorisnika.PostojiEmail)
                return StatusCode(501, "U bazi vec postoji neko sa tim email-om!");
            if (status == StatusDodavanjaKorisnika.PostojiKorisnickoIme)
                return StatusCode(502, "U bazi vec postoji neko sa tim korisnickim imenom!");

            return new JsonResult(result);
        }



        [HttpDelete]
        [Route("obrisiAdmina")]
        public IActionResult ObrisiAdmina(int id)
        {
            Admin a = this.adminService.ObrisiAdmina(id);
            return new JsonResult(a);
        }


        [HttpPut]
        [Route("azurirajAdmina")]
        public IActionResult AzurirajAdmina([FromBody] Admin a)
        {
            return new JsonResult(this.adminService.AzurirajAdmina(a));
        }
    }
}
