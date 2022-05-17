using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public class Vlasnik : Korisnik
    {
        public Vlasnik()
        {
            Psi = new List<Pas>();
        }

        public List<Pas> Psi { get; set; }
    }
}
