using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Doggy.Model;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using System.IO;
using Doggy.DataLayer.Services.Interfaces;
using Doggy.DataLayer.Services;

namespace Doggy.WebAPI.Controllers
{
    [ApiController]
    [Route("files")]
    public class FileController : ControllerBase
    {

        private ImageService _imageService;
        private IConfiguration config;

        public FileController(ImageService imgSevice)
        {
            this._imageService = imgSevice;
            this.config = config;
        }

        [HttpPost]
        [Route("postaviSliku")]                        
        public async Task<ActionResult> postaviSliku(IFormFile file)
        {
            try
            {
                var username = User.FindFirstValue(ClaimTypes.NameIdentifier);
                String msg = await _imageService.SaveFile(file, username);
                return Ok(new { url = msg });
            }
            catch (Exception e)
            {
                return BadRequest("Greska! " + e.Message);
            }
        }

        [HttpGet]
        [Route("vratisliku/{url}")]
        public ActionResult vratisliku(String url)
        {
            try
            {
                var image = System.IO.File.OpenRead(Path.Combine(Directory.GetCurrentDirectory(), "StaticFiles", url));
                return File(image, "image/jpeg");
            }
            catch (Exception e)
            {
                return BadRequest("Greska! " + e.Message);
            }
        }
    }
}