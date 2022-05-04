using Doggy.DataLayer;
using Doggy.DataLayer.Repository;
using Doggy.DataLayer.Repository.Interfaces;
using Doggy.DataLayer.Services;
using Doggy.DataLayer.UnitOfWork;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Doggy.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<DoggyContext>(conf => {
                conf.UseSqlServer(Configuration.GetConnectionString("Konekcija"));
            });

            services.AddCors(options =>
            {
                options.AddPolicy("CORS", builder =>
                {
                    builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Doggy.WebApi", Version = "v1" });
            });

            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<AdminService>();
            services.AddScoped<PasService>();
            services.AddScoped<RecenzijaService>();
            services.AddScoped<SiterService>();
            services.AddScoped<UslugaService>();
            services.AddScoped<VlasnikService>();
            services.AddScoped<IAdminRepository, AdminRepository>();
            services.AddScoped<IPasRepository, PasRepository>();
            services.AddScoped<IRecenzijaRepository, RecenzijaRepository>();
            services.AddScoped<ISiterRepository, SiterRepository>();
            services.AddScoped<IUslugaRepository, UslugaRepository>();
            services.AddScoped<IVlasnikRepository, VlasnikRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Doggy.WebApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CORS");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
