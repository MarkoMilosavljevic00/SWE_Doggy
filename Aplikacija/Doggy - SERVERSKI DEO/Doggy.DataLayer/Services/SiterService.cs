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

        public List<Siter> FilterSiteri(string? ime, string? prezime, string? grad, bool? dostupan, int? brUsluga, double? cena, double? ocena)
        {
            return unitOfWork.SiterRepository.Find(k => k.Ime.StartsWith(ime ?? k.Ime)
                                                    && k.Prezime.StartsWith(prezime ?? k.Prezime)
                                                    && k.Grad.StartsWith(grad ?? k.Grad)
                                                    && k.Dostupan == (dostupan ?? k.Dostupan)
                                                    && k.ObavljeneUsluge >= (brUsluga ?? k.ObavljeneUsluge)
                                                    && k.CenaPoSatu <= (cena ?? k.CenaPoSatu)
                                                    && k.ProsecnaOcena >= (ocena ?? k.ProsecnaOcena)
                                                    ).ToList();
        }

        public Siter DodajSitera(Siter s)
        {
            var siter = unitOfWork.SiterRepository.Add(s);
            unitOfWork.SaveChanges();
            return siter;
        }
    }
}
