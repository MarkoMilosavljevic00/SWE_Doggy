using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public class Recenzija
    {
        public int Id { get; set; }

        public DateTime Vreme { get; set; }

        public string Komentar { get; set; }

        public double Ocena { get; set; }
    }
}
