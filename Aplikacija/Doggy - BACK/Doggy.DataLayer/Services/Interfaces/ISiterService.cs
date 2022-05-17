using Doggy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.DataLayer.Services.Interfaces
{
    public interface ISiterService
    {
        public List<Siter> VratiSveSitere();

        public List<Siter> FilterSiteri(string? ime, string? prezime, string? grad, bool? dostupan, int? brUsluga, double? cena, double? ocena);

        public Siter DodajSitera(Siter s, out StatusDodavanja status);

        public bool ValidacijaDodavanja(Siter s, out StatusDodavanja status);
    }
}
