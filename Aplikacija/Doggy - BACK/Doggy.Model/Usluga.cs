using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public enum VrstaUsluge
    {
        Setnja,
        Cuvanje
    };

    public class Usluga
    {
        public int Id { get; set; }

        public Vlasnik Vlasnik { get; set; }

        public int VlasnikId { get; set; }

        public Siter Siter { get; set; }

        public int SiterId { get; set; }

        public VrstaUsluge Vrsta { get; set; }

        public DateTime Pocetak { get; set; }

        public DateTime Kraj { get; set; }
    }
}
