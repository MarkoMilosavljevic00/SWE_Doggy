using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public class Siter : Korisnik
    {
        public Siter()
        {
            Recenzije = new List<Recenzija>();
        }

        public string Bio { get; set; }

        public string Slika { get; set; }

        public List<Recenzija> Recenzije { get; set; }
    }
}
