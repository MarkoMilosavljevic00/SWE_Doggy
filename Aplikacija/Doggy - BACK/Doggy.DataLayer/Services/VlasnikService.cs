using Doggy.DataLayer.Services.Interfaces;
using Doggy.DataLayer.UnitOfWork;
using Doggy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer.Services
{
    public class VlasnikService : IVlasnikService
    {
        private IUnitOfWork unitOfWork;

        public VlasnikService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public List<Vlasnik> VratiSveVlasnike()
        {
            var result = unitOfWork.VlasnikRepository.All().ToList();
            return result;
        }

        public Vlasnik DodajVlasnika(Vlasnik v)
        {
            var vlasnik = unitOfWork.VlasnikRepository.Add(v);
            unitOfWork.SaveChanges();
            return vlasnik;
        }
    }
}
