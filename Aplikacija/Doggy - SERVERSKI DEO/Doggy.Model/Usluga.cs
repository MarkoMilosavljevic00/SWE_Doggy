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

    public enum StatusUsluge
    {
        ZahtevaSe,
        Prihvacena,
        Gotova
    };

    public class Usluga
    {
        public int Id { get; set; }

        public Vlasnik Vlasnik { get; set; }

        public int VlasnikId { get; set; }

        public Siter Siter { get; set; }

        public int SiterId { get; set; }

        public int PasId { get; set; }

        public VrstaUsluge Vrsta { get; set; }

        public DateTime Pocetak { get; set; }

        public DateTime Kraj { get; set; }

        public string AdresaPreuzimanjaPsa { get; set; }

        public StatusUsluge Status { get; set; }
    }
}
