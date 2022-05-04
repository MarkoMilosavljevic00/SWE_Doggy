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
    public class VlasnikController : ControllerBase
    {
        private readonly VlasnikService vlasnikService;

        public VlasnikController(VlasnikService vlasnikService)
        {
            this.vlasnikService = vlasnikService;
        }
    }
}
