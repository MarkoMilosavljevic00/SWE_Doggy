using Doggy.DataLayer.Services;
using Doggy.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private IConfiguration config;
        private readonly AuthService authService;

        public AuthController(IConfiguration config, AuthService authService)
        {
            this.config = config;
            this.authService = authService;
        }

        [HttpPost]
        [Route("authenticate")]
        public IActionResult Login([FromBody] Login data)
        {
            IActionResult response = Unauthorized();
            var user = this.authService.AuthenticateUser(data);
            if (user != null)
            {
                var tokenString = this.authService.GenerateJWT(config, user);
                response = Ok(new { token = tokenString, korisnik = user });
            }
            return response;
        }
    }
}
