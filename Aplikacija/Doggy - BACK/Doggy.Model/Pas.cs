﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Doggy.Model
{
    public class Pas
    {
        public int Id { get; set; }

        public string Ime { get; set; }

        public string Rasa { get; set; }

        public string Pol { get; set; }

        public string Opis { get; set; }

        public double Visina { get; set; }

        public double Tezina { get; set; }

        public string Slika { get; set; }

        public Vlasnik Vlasnik { get; set; }

        public int VlasnikId { get; set; }
    }
}