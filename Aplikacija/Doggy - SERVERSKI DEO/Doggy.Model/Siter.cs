﻿using System;
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
            Usluge = new List<Usluga>();
        }

        public string Bio { get; set; }

        public string Slika { get; set; }

        public bool Dostupan { get; set; }

        public int ObavljeneUsluge { get; set; }

        public double ProsecnaOcena { get; set; }

        public double CenaPoSatu { get; set; }

        public List<Usluga> Usluge { get; set; }

        public List<Recenzija> Recenzije { get; set; }
    }
}