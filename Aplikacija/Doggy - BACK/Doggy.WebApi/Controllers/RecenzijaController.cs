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
    public class RecenzijaController : ControllerBase
    {
        private readonly RecenzijaService recenzijaService;

        public RecenzijaController(RecenzijaService recenzijaService)
        {
            this.recenzijaService = recenzijaService;
        }
    }
}
