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
    public class SiterController : ControllerBase
    {
        private readonly SiterService siterService;

        public SiterController(SiterService siterService)
        {
            this.siterService = siterService;
        }
    }
}
