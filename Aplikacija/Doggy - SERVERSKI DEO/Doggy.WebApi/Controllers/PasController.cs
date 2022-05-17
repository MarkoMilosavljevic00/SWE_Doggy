using Doggy.DataLayer.Services;
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
    }
}
