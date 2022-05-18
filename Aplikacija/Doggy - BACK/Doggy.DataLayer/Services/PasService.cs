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
    public class PasService : IPasService
    {
        private IUnitOfWork unitOfWork;

        public PasService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public List<Pas> VratiSvePse()
        {
            return unitOfWork.PasRepository.All().ToList();
        }

        public object VratiPseZaVlasnika(int idVlasnika)
        {
            return unitOfWork.PasRepository.Find(k => k.VlasnikId == idVlasnika).ToList();
        }

        public Pas DodajPsa(Pas p)
        {
            var provera = unitOfWork.PasRepository.Find(k => k.Ime == p.Ime && k.VlasnikId == p.VlasnikId).FirstOrDefault();
            if(provera!=null)
                return null;

            var pas = unitOfWork.PasRepository.Add(p);
            unitOfWork.SaveChanges();
            return pas;
        }

    }
}
