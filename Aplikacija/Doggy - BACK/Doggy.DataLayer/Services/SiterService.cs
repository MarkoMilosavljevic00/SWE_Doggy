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
                                                    && k.BrObavljenihUsluga >= (brUsluga ?? k.BrObavljenihUsluga)
                                                    && k.CenaPoSatu <= (cena ?? k.CenaPoSatu)
                                                    && k.ProsecnaOcena >= (ocena ?? k.ProsecnaOcena)
                                                    ).ToList();
        }

        public Siter DodajSitera(Siter s, out StatusDodavanja status)
        {
            if(ValidacijaDodavanja(s, out status))
            {
                var siter = unitOfWork.SiterRepository.Add(s);
                unitOfWork.SaveChanges();
                return siter;
            }
            return null;

        }

        public bool ValidacijaDodavanja(Siter s, out StatusDodavanja status)
        {
            
            var postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanja.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanja.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecVlasnik != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecVlasnik != null)
            {
                status = StatusDodavanja.PostojiKorisnickoIme;
                return false;
            }

            status = StatusDodavanja.Uspesno;
            return true;
        }
    }
}
