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
    public class SiterService : ISiterService
    {
        private IUnitOfWork unitOfWork;

        public SiterService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public List<Siter> VratiSveSitere()
        {
            var result = unitOfWork.SiterRepository.All().ToList();
            return result;
        }

        public Siter DodajSitera(Siter s)
        {
            var siter = unitOfWork.SiterRepository.Add(s);
            unitOfWork.SaveChanges();
            return siter;
        }
    }
}
