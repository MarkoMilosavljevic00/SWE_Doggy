using Doggy.DataLayer.Services;
using Doggy.Model;
using Microsoft.AspNetCore.Authorization;
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

        [AllowAnonymous]
        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] Login data)
        {
            IActionResult response = Unauthorized();
            var user = this.authService.AuthenticateUser(data);
            if (user != null)
            {
                if(user.GetType().Name == "Siter" && this.authService.ProveriValidnostSitera(user.Id) == false)
                {
                    return StatusCode(501, "Ovaj siter nije prihvacen od strane admina!");
                }
                var tokenString = this.authService.GenerateJWT(config, user);
                response = Ok(new { token = tokenString, korisnik = user });
            }
            return response;
        }
    }
}
