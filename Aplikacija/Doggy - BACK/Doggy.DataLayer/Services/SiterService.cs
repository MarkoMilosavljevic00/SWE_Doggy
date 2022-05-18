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

        public Siter VratiSiteraPoId(int idSiter)
        {
            return unitOfWork.SiterRepository.Get(idSiter);
        }
      
        public List<String> VratiSveGradoveSvihSitera()
        {
            return unitOfWork.SiterRepository.All().Select(k => k.Grad).Distinct().ToList();
        }

        public List<Siter> FilterSiteri(string? ime, string? prezime, string? grad, bool? dostupan, int? minBrUsluga, double? minCena,double? maxCena, double? minOcena)
        {
            return unitOfWork.SiterRepository.Find(k=> k.Validan == true
                                                    && k.Ime.StartsWith(ime ?? k.Ime)
                                                    && k.Prezime.StartsWith(prezime ?? k.Prezime)
                                                    && k.Grad.StartsWith(grad ?? k.Grad)
                                                    && k.Dostupan == (dostupan ?? k.Dostupan)
                                                    && k.BrObavljenihUsluga >= (minBrUsluga ?? k.BrObavljenihUsluga)
                                                    && k.CenaPoSatu >= (minCena ?? k.CenaPoSatu)
                                                    && k.CenaPoSatu <= (maxCena ?? k.CenaPoSatu)
                                                    && k.ProsecnaOcena >= (minOcena ?? k.ProsecnaOcena)
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

        public Siter AzurirajSitera(Siter s)
        {
            Siter siter = unitOfWork.SiterRepository.Get(s.Id);
            if (siter != null)
            {
                unitOfWork.SiterRepository.Update(s);
                unitOfWork.SaveChanges();
                return s;
            }
            return null;
        }

        public Siter AzurirajSiteraValidan(int idSiter)
        {
            Siter s = VratiSiteraPoId(idSiter);

            if (s == null)
                return null;

            if (s.Validan == false)
                s.Validan = true;
            else
                s.Validan = false;
            return s;
        }

        public Siter AzurirajSiteraDostupan(int idSiter)
        {
            Siter s = VratiSiteraPoId(idSiter);

            if (s == null)
                return null;

            if (s.Dostupan == false)
                s.Dostupan = true;
            else
                s.Dostupan = false;

            return s;
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
