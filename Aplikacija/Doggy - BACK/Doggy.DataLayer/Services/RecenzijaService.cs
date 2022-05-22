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
    public class RecenzijaService : IRecenzijaService
    {
        private IUnitOfWork unitOfWork;

        public RecenzijaService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public List<Recenzija> VratiSveRecenzije()
        {
            return unitOfWork.RecenzijaRepository.All().ToList();
        }



        public Siter DodajRecenzijuSiteru(int idSiter, Recenzija r)
        {
            var siter = unitOfWork.SiterRepository.FindWithIncludes(k => k.Id == idSiter, k => k.Recenzije).FirstOrDefault();
            // proveris da li ima recenzija od tog vlasnika

            //var provera = siter.Recenzije.Find(k => k.VlasnikId == r.VlasnikId);
            //if (provera != null)
            //    return null;

            siter.Recenzije.Add(r);
            unitOfWork.SiterRepository.Update(siter);
            unitOfWork.SaveChanges();
            return siter;
        }

        public Pas DodajRecenzijuPsu(int idPas, Recenzija r)
        {
            var pas = unitOfWork.PasRepository.FindWithIncludes(k => k.Id == idPas, k => k.Recenzije).FirstOrDefault();

            var provera = pas.Recenzije.Find(k => k.SiterId == r.SiterId);
            if (provera != null)
                return null;

            r.Vreme = DateTime.Now;
            pas.Recenzije.Add(r);

            double suma = 0;
            pas.Recenzije.ForEach(k => suma += k.Ocena);
            pas.Visina = suma / pas.Recenzije.Count;


            unitOfWork.PasRepository.Update(pas);
            unitOfWork.SaveChanges();
            return pas;
        }

        public Recenzija ObrisiRecenziju(int idRecenzija)
        {
            Recenzija r = unitOfWork.RecenzijaRepository.Get(idRecenzija);
            if (r != null)
            {
                unitOfWork.RecenzijaRepository.Delete(r);
                unitOfWork.SaveChanges();
                return r;
            }
            return null;
        }

    }
}
