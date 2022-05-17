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

        //public Vlasnik DodajVlasnika(Vlasnik v)
        //{
        //    var postojiVec = unitOfWork.AdminRepository.Find(k => k.Email == v.Email || k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
        //    if (postojiVec != null)
        //        return null;
        //    var postojiVec1 = unitOfWork.VlasnikRepository.Find(k => k.Email == v.Email || k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
        //    if (postojiVec1!=null)
        //        return null;
        //    var postojiVec2 = unitOfWork.SiterRepository.Find(k => k.Email == v.Email || k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
        //    if (postojiVec2 != null)
        //        return null;

        //    var vlasnik = unitOfWork.VlasnikRepository.Add(v);
        //    unitOfWork.SaveChanges();
        //    return vlasnik;
        //}

        public Vlasnik DodajVlasnika(Vlasnik v, out StatusDodavanja status)
        {
            if (ValidacijaDodavanja(v, out status))
            {
                var vlasnik = unitOfWork.VlasnikRepository.Add(v);
                unitOfWork.SaveChanges();
                return vlasnik;
            }
            return null;

        }

        public bool ValidacijaDodavanja(Vlasnik v, out StatusDodavanja status)
        {

            var postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.Email == v.Email).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecAdmin = unitOfWork.AdminRepository.Find(k => k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
            if (postojiVecAdmin != null)
            {
                status = StatusDodavanja.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.Email == v.Email).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecSiter = unitOfWork.SiterRepository.Find(k => k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
            if (postojiVecSiter != null)
            {
                status = StatusDodavanja.PostojiKorisnickoIme;
                return false;
            }

            var postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.Email == v.Email).FirstOrDefault();
            if (postojiVecVlasnik != null)
            {
                status = StatusDodavanja.PostojiEmail;
                return false;
            }
            postojiVecVlasnik = unitOfWork.VlasnikRepository.Find(k => k.KorisnickoIme == v.KorisnickoIme).FirstOrDefault();
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
