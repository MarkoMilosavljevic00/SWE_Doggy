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
    public class AdminService : IAdminService
    {
        private IUnitOfWork unitOfWork;

        public AdminService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public List<Admin> VratiSveAdmine()
        {
            var result = unitOfWork.AdminRepository.All().ToList();
            return result;
        }

        public Admin DodajAdmina(Admin a)
        {
            var admin = unitOfWork.AdminRepository.Add(a);
            unitOfWork.SaveChanges();
            return admin;
        }
    }
}
