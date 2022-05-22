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
            return unitOfWork.SiterRepository.FindWithIncludes(k=> k.Validan == true
                                                    && k.Ime.StartsWith(ime ?? k.Ime)
                                                    && k.Prezime.StartsWith(prezime ?? k.Prezime)
                                                    && k.Grad.StartsWith(grad ?? k.Grad)
                                                    && k.Dostupan == (dostupan ?? k.Dostupan)
                                                    && k.BrObavljenihUsluga >= (minBrUsluga ?? k.BrObavljenihUsluga)
                                                    && k.CenaPoSatu >= (minCena ?? k.CenaPoSatu)
                                                    && k.CenaPoSatu <= (maxCena ?? k.CenaPoSatu)
                                                    && k.ProsecnaOcena >= (minOcena ?? k.ProsecnaOcena)
                                                    , k => k.Recenzije
                                                    ).ToList();
        }


        public Siter DodajSitera(Siter s, out StatusDodavanjaKorisnika status)
        {
            if(ValidacijaDodavanja(s, out status))
            {
                var siter = unitOfWork.SiterRepository.Add(s);
                unitOfWork.SaveChanges();
                return siter;
            }
            return null;

        }

        public Siter ObrisiSitera(int id)
        {
            Siter s = unitOfWork.SiterRepository.Get(id);
            if (s != null)
            {
                unitOfWork.SiterRepository.Delete(s);
                unitOfWork.SaveChanges();
                return s;
            }
            return null;
        }

        public Siter AzurirajSitera(Siter s)
        {
            Siter siter = unitOfWork.SiterRepository.Get(s.Id);
            if (siter != null)
            {
                siter.Ime = s.Ime ?? siter.Ime;
                siter.Prezime = s.Prezime ?? siter.Prezime;
                siter.KorisnickoIme = s.KorisnickoIme ?? siter.KorisnickoIme;
                siter.Email = s.Email ?? siter.Email;
                siter.Sifra = s.Sifra ?? siter.Sifra;
                siter.BrojTelefona = s.BrojTelefona ?? siter.BrojTelefona;
                siter.Grad = s.Grad ?? siter.Grad;
                siter.Adresa = s.Adresa ?? siter.Adresa;

                siter.Bio = s.Bio ?? siter.Bio;
                siter.Slika = s.Slika ?? siter.Slika;
                if (s.CenaPoSatu != 0)
                    siter.CenaPoSatu = s.CenaPoSatu;

                unitOfWork.SiterRepository.Update(siter);
                unitOfWork.SaveChanges();
                return siter;
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

            unitOfWork.SiterRepository.Update(s);
            unitOfWork.SaveChanges();
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

            unitOfWork.SiterRepository.Update(s);
            unitOfWork.SaveChanges();
            return s;
        }

        public bool ValidacijaDodavanja(Siter s, out StatusDodavanjaKorisnika status)
        {
            
            var postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanjaKorisnika.PostojiEmail;
                return false;
            }
            postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanjaKorisnika.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanjaKorisnika.PostojiEmail;
                return false;
            }
            postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanjaKorisnika.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.Email == s.Email).FirstOrDefault();
            if (postojiVecVlasnik != null)
            {
                status = StatusDodavanjaKorisnika.PostojiEmail;
                return false;
            }
            postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.KorisnickoIme == s.KorisnickoIme).FirstOrDefault();
            if (postojiVecVlasnik != null)
            {
                status = StatusDodavanjaKorisnika.PostojiKorisnickoIme;
                return false;
            }

            status = StatusDodavanjaKorisnika.Uspesno;
            return true;
        }
    }
}
