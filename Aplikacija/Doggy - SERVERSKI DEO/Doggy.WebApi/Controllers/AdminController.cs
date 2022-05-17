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
        public IActionResult DodajAdmina([FromBody]Admin a)
        {
            return new JsonResult(adminService.DodajAdmina(a));
        }
    }
}
