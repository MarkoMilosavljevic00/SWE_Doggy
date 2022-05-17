using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public class Korisnik
    {
        public int Id { get; set; }

        public string Ime { get; set; }

        public string Prezime { get; set; }

        public string Email { get; set; }

        public string KorisnickoIme { get; set; }

        public string Sifra { get; set; }

        public string BrojTelefona { get; set; }

        public string Grad { get; set; }

        public string Adresa { get; set; }
    }
}
