using Doggy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer.Services.Interfaces
{
    public interface IAdminService
    {
        public List<Admin> VratiSveAdmine();
        public Admin DodajAdmina(Admin a);
    }
}
