using Doggy.DataLayer.Repository.Interfaces;
using Doggy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer.Repository
{
    public class VlasnikRepository : Repository<Vlasnik>, IVlasnikRepository
    {
        public VlasnikRepository(DoggyContext context) : base(context)
        {

        }
    }
}
