using Doggy.DataLayer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer
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
    }
}
